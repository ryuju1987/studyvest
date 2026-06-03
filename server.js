const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");
const { URL } = require("url");

const ROOT = __dirname;
const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8"
};

const CIK_BY_SYMBOL = {
  AAPL: "0000320193",
  MSFT: "0000789019",
  NVDA: "0001045810",
  AMZN: "0001018724",
  GOOGL: "0001652044",
  GOOG: "0001652044",
  META: "0001326801",
  TSLA: "0001318605",
  AVGO: "0001730168",
  JPM: "0000019617",
  V: "0001403161",
  UNH: "0000731766",
  JNJ: "0000200406",
  LOW: "0000060667",
  RTX: "0000101829",
  XOM: "0000034088",
  TSM: "0001046179",
  SPY: "0000884394",
  QQQ: "0001067839",
  BRK: "0001067983",
  "BRK.B": "0001067983"
};

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const text = fs.readFileSync(filePath, "utf8");
  text.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const index = trimmed.indexOf("=");
    if (index === -1) return;
    const key = trimmed.slice(0, index).trim();
    let value = trimmed.slice(index + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  });
}

loadEnvFile(path.join(ROOT, ".env"));

function env(key, fallback = "") {
  return process.env[key] || fallback;
}

const PORT = Number(env("STUDYVEST_PORT", "8787"));
const DATA_DIR = path.resolve(env("STUDYVEST_DATA_DIR", path.join(os.homedir(), ".studyvest-data")));
const SEC_USER_AGENT = env(
  "SEC_USER_AGENT",
  "StudyVest/0.1 41480168+ryuju1987@users.noreply.github.com"
);

function normalizeSymbol(value) {
  return String(value || "")
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9.-]/g, "")
    .slice(0, 12);
}

function safeDataPath(...parts) {
  const fullPath = path.join(DATA_DIR, ...parts);
  const resolved = path.resolve(fullPath);
  if (!resolved.startsWith(DATA_DIR)) {
    throw new Error("Invalid data path");
  }
  return resolved;
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true, mode: 0o700 });
}

function sendJson(res, status, body) {
  const json = JSON.stringify(body, null, 2);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff"
  });
  res.end(json);
}

function sendText(res, status, text) {
  res.writeHead(status, {
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff"
  });
  res.end(text);
}

async function readJsonBody(req) {
  let body = "";
  for await (const chunk of req) {
    body += chunk;
    if (body.length > 1024 * 1024) throw new Error("Request body too large");
  }
  if (!body.trim()) return {};
  return JSON.parse(body);
}

function publicDataDir() {
  if (DATA_DIR.startsWith(os.homedir())) {
    return DATA_DIR.replace(os.homedir(), "~");
  }
  return DATA_DIR;
}

function source(id, label, status, detail, extra = {}) {
  return {
    id,
    label,
    status,
    detail,
    updatedAt: new Date().toISOString(),
    ...extra
  };
}

function hasAlpacaKeys() {
  return Boolean(env("ALPACA_API_KEY_ID") && env("ALPACA_API_SECRET_KEY"));
}

function hasTradierToken() {
  return Boolean(env("TRADIER_TOKEN"));
}

function registry(symbol) {
  const normalized = normalizeSymbol(symbol || "NVDA");
  const sources = [
    source("sec", "SEC EDGAR", "configured", "미국 공시 어댑터는 준비됨. 실제 호출은 SEC User-Agent/IP 정책에 따라 upstream_error가 날 수 있음.", {
      symbol: normalized,
      cik: CIK_BY_SYMBOL[normalized] || null,
      freshness: "public API"
    }),
    source("fred", "FRED rates", env("FRED_API_KEY") ? "configured" : "api_required", "금리/경제지표는 FRED_API_KEY가 있으면 실제 관측값 조회.", {
      series: ["DGS10", "DFF", "SOFR", "DEXKOUS"]
    }),
    source("alpaca", "Alpaca market data", hasAlpacaKeys() ? "configured" : "api_required", "미국 주식/ETF 가격. 무료/기본 플랜은 IEX 또는 delayed SIP 범위 확인 필요.", {
      feed: env("ALPACA_DATA_FEED", "iex")
    }),
    source("tradier", "Tradier options/equity", hasTradierToken() ? "configured" : "api_required", "미국 주식/옵션 quote와 sandbox/paper 흐름 후보.", {
      environment: env("TRADIER_ENV", "sandbox")
    }),
    source("opendart", "OpenDART", env("OPENDART_API_KEY") ? "configured" : "api_required", "한국 기업 공시는 OpenDART API key 필요."),
    source("alpha", "Alpha Vantage", env("ALPHA_VANTAGE_API_KEY") ? "configured" : "api_required", "FX/원자재/보조 quote 후보. 무료 키는 rate limit 고려."),
    source("local", "Local private store", "ready", "개인 일지/포트폴리오는 git 밖 로컬 폴더에 저장.", {
      dataDir: publicDataDir()
    })
  ];

  return {
    app: "StudyVest local-first terminal",
    mode: "personal-local",
    symbol: normalized,
    generatedAt: new Date().toISOString(),
    noFakeDataPolicy: "데이터가 없으면 데이터 없음/API 필요/지연 데이터로 표시한다.",
    sources
  };
}

async function fetchJson(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    const text = await response.text();
    let data = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      data = { raw: text.slice(0, 1000) };
    }
    if (!response.ok) {
      return { ok: false, status: response.status, data };
    }
    return { ok: true, status: response.status, data };
  } finally {
    clearTimeout(timeout);
  }
}

async function handleSec(reqUrl, res, kind) {
  const symbol = normalizeSymbol(reqUrl.searchParams.get("symbol") || "NVDA");
  const cik = reqUrl.searchParams.get("cik") || CIK_BY_SYMBOL[symbol];
  if (!cik) {
    sendJson(res, 404, { status: "data_unavailable", symbol, message: "CIK mapping not configured for this symbol." });
    return;
  }
  const padded = String(cik).padStart(10, "0");
  const url = kind === "companyfacts"
    ? `https://data.sec.gov/api/xbrl/companyfacts/CIK${padded}.json`
    : `https://data.sec.gov/submissions/CIK${padded}.json`;
  const result = await fetchJson(url, {
    headers: {
      "User-Agent": SEC_USER_AGENT,
      "From": "41480168+ryuju1987@users.noreply.github.com",
      "Accept": "application/json"
    }
  });
  sendJson(res, result.ok ? 200 : 502, {
    status: result.ok ? "ready" : "upstream_error",
    source: "SEC EDGAR",
    symbol,
    cik: padded,
    url,
    data: result.data
  });
}

async function handleFred(reqUrl, res) {
  const key = env("FRED_API_KEY");
  const series = String(reqUrl.searchParams.get("series_id") || "DGS10").replace(/[^A-Z0-9_]/gi, "").toUpperCase();
  if (!key) {
    sendJson(res, 200, { status: "api_required", source: "FRED", series_id: series, requiredEnv: "FRED_API_KEY" });
    return;
  }
  const url = new URL("https://api.stlouisfed.org/fred/series/observations");
  url.searchParams.set("series_id", series);
  url.searchParams.set("api_key", key);
  url.searchParams.set("file_type", "json");
  url.searchParams.set("sort_order", "desc");
  url.searchParams.set("limit", "5");
  const result = await fetchJson(url.toString());
  sendJson(res, result.ok ? 200 : 502, {
    status: result.ok ? "ready" : "upstream_error",
    source: "FRED",
    series_id: series,
    data: result.data
  });
}

async function handleAlpaca(reqUrl, res) {
  const symbol = normalizeSymbol(reqUrl.searchParams.get("symbol") || "NVDA");
  if (!hasAlpacaKeys()) {
    sendJson(res, 200, {
      status: "api_required",
      source: "Alpaca",
      symbol,
      requiredEnv: ["ALPACA_API_KEY_ID", "ALPACA_API_SECRET_KEY"],
      note: "Use read-only market data first. Do not put keys in browser code."
    });
    return;
  }
  const feed = env("ALPACA_DATA_FEED", "iex");
  const url = `https://data.alpaca.markets/v2/stocks/${encodeURIComponent(symbol)}/quotes/latest?feed=${encodeURIComponent(feed)}`;
  const result = await fetchJson(url, {
    headers: {
      "APCA-API-KEY-ID": env("ALPACA_API_KEY_ID"),
      "APCA-API-SECRET-KEY": env("ALPACA_API_SECRET_KEY"),
      "Accept": "application/json"
    }
  });
  sendJson(res, result.ok ? 200 : 502, {
    status: result.ok ? "ready" : "upstream_error",
    source: "Alpaca",
    symbol,
    feed,
    data: result.data
  });
}

async function handleTradier(reqUrl, res) {
  const symbol = normalizeSymbol(reqUrl.searchParams.get("symbol") || "NVDA");
  if (!hasTradierToken()) {
    sendJson(res, 200, {
      status: "api_required",
      source: "Tradier",
      symbol,
      requiredEnv: "TRADIER_TOKEN",
      note: "Sandbox data may be delayed. Live data requires account/data permissions."
    });
    return;
  }
  const envName = env("TRADIER_ENV", "sandbox").toLowerCase();
  const base = envName === "live" ? "https://api.tradier.com" : "https://sandbox.tradier.com";
  const url = `${base}/v1/markets/quotes?symbols=${encodeURIComponent(symbol)}`;
  const result = await fetchJson(url, {
    headers: {
      "Authorization": `Bearer ${env("TRADIER_TOKEN")}`,
      "Accept": "application/json"
    }
  });
  sendJson(res, result.ok ? 200 : 502, {
    status: result.ok ? "ready" : "upstream_error",
    source: "Tradier",
    symbol,
    environment: envName,
    data: result.data
  });
}

async function handleOpenDart(reqUrl, res) {
  const key = env("OPENDART_API_KEY");
  const corpCode = String(reqUrl.searchParams.get("corp_code") || "").replace(/[^0-9]/g, "");
  if (!key) {
    sendJson(res, 200, { status: "api_required", source: "OpenDART", requiredEnv: "OPENDART_API_KEY" });
    return;
  }
  if (!corpCode) {
    sendJson(res, 400, { status: "missing_parameter", source: "OpenDART", required: "corp_code" });
    return;
  }
  const url = new URL("https://opendart.fss.or.kr/api/list.json");
  url.searchParams.set("crtfc_key", key);
  url.searchParams.set("corp_code", corpCode);
  url.searchParams.set("bgn_de", reqUrl.searchParams.get("bgn_de") || "20240101");
  url.searchParams.set("page_count", "10");
  const result = await fetchJson(url.toString());
  sendJson(res, result.ok ? 200 : 502, {
    status: result.ok ? "ready" : "upstream_error",
    source: "OpenDART",
    corp_code: corpCode,
    data: result.data
  });
}

async function handleAlpha(reqUrl, res) {
  const key = env("ALPHA_VANTAGE_API_KEY");
  const symbol = normalizeSymbol(reqUrl.searchParams.get("symbol") || "NVDA");
  if (!key) {
    sendJson(res, 200, { status: "api_required", source: "Alpha Vantage", symbol, requiredEnv: "ALPHA_VANTAGE_API_KEY" });
    return;
  }
  const url = new URL("https://www.alphavantage.co/query");
  url.searchParams.set("function", reqUrl.searchParams.get("function") || "GLOBAL_QUOTE");
  url.searchParams.set("symbol", symbol);
  url.searchParams.set("apikey", key);
  const result = await fetchJson(url.toString());
  sendJson(res, result.ok ? 200 : 502, {
    status: result.ok ? "ready" : "upstream_error",
    source: "Alpha Vantage",
    symbol,
    data: result.data
  });
}

function readJsonFile(filePath, fallback) {
  try {
    if (!fs.existsSync(filePath)) return fallback;
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

function writeJsonFile(filePath, data) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), { mode: 0o600 });
}

async function handleJournal(req, reqUrl, res, symbol) {
  const normalized = normalizeSymbol(symbol);
  if (!normalized) {
    sendJson(res, 400, { status: "invalid_symbol" });
    return;
  }
  const filePath = safeDataPath("journals", `${normalized}.json`);
  if (req.method === "GET") {
    sendJson(res, 200, readJsonFile(filePath, { status: "empty", symbol: normalized, note: "" }));
    return;
  }
  if (req.method === "PUT") {
    const body = await readJsonBody(req);
    const note = String(body.note || "").slice(0, 20000);
    const payload = { status: "saved", symbol: normalized, note, updatedAt: new Date().toISOString() };
    writeJsonFile(filePath, payload);
    sendJson(res, 200, payload);
    return;
  }
  sendJson(res, 405, { status: "method_not_allowed" });
}

async function handlePortfolio(req, res) {
  const filePath = safeDataPath("portfolio.json");
  if (req.method === "GET") {
    sendJson(res, 200, readJsonFile(filePath, { status: "empty", holdings: [] }));
    return;
  }
  if (req.method === "PUT") {
    const body = await readJsonBody(req);
    const payload = {
      status: "saved",
      updatedAt: new Date().toISOString(),
      portfolio: body.portfolio || body
    };
    writeJsonFile(filePath, payload);
    sendJson(res, 200, payload);
    return;
  }
  sendJson(res, 405, { status: "method_not_allowed" });
}

function serveStatic(reqUrl, res) {
  const pathname = reqUrl.pathname === "/" ? "/index.html" : reqUrl.pathname;
  const clean = path.normalize(decodeURIComponent(pathname)).replace(/^([/\\])+/, "");
  const filePath = path.join(ROOT, clean);
  const resolved = path.resolve(filePath);
  if (!resolved.startsWith(ROOT)) {
    sendText(res, 403, "Forbidden");
    return;
  }
  if (!fs.existsSync(resolved) || fs.statSync(resolved).isDirectory()) {
    sendText(res, 404, "Not found");
    return;
  }
  const ext = path.extname(resolved);
  res.writeHead(200, {
    "Content-Type": MIME_TYPES[ext] || "application/octet-stream",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    "Content-Security-Policy": "default-src 'self'; connect-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; base-uri 'self'; form-action 'self'"
  });
  fs.createReadStream(resolved).pipe(res);
}

async function route(req, res) {
  const reqUrl = new URL(req.url, `http://${req.headers.host || "127.0.0.1"}`);
  try {
    if (reqUrl.pathname === "/api/health") {
      sendJson(res, 200, { status: "ready", mode: "personal-local", dataDir: publicDataDir(), time: new Date().toISOString() });
      return;
    }
    if (reqUrl.pathname === "/api/registry") {
      sendJson(res, 200, registry(reqUrl.searchParams.get("symbol")));
      return;
    }
    if (reqUrl.pathname === "/api/sec/submissions") return handleSec(reqUrl, res, "submissions");
    if (reqUrl.pathname === "/api/sec/companyfacts") return handleSec(reqUrl, res, "companyfacts");
    if (reqUrl.pathname === "/api/fred/series") return handleFred(reqUrl, res);
    if (reqUrl.pathname === "/api/alpaca/quote") return handleAlpaca(reqUrl, res);
    if (reqUrl.pathname === "/api/tradier/quote") return handleTradier(reqUrl, res);
    if (reqUrl.pathname === "/api/opendart/list") return handleOpenDart(reqUrl, res);
    if (reqUrl.pathname === "/api/alpha/quote") return handleAlpha(reqUrl, res);
    if (reqUrl.pathname.startsWith("/api/local/journal/")) {
      return handleJournal(req, reqUrl, res, reqUrl.pathname.split("/").pop());
    }
    if (reqUrl.pathname === "/api/local/portfolio") return handlePortfolio(req, res);
    if (reqUrl.pathname.startsWith("/api/")) {
      sendJson(res, 404, { status: "not_found", path: reqUrl.pathname });
      return;
    }
    serveStatic(reqUrl, res);
  } catch (error) {
    sendJson(res, 500, { status: "error", message: error.message });
  }
}

ensureDir(DATA_DIR);

const server = http.createServer((req, res) => {
  route(req, res);
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`StudyVest local server: http://127.0.0.1:${PORT}`);
  console.log(`Private data dir: ${publicDataDir()}`);
});
