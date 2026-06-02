const instruments = [
  {
    ticker: "NVDA",
    name: "NVIDIA",
    sector: "반도체/AI",
    price: 1118.25,
    change: 1.82,
    allocation: 18,
    riskGrade: "B",
    nextCheck: "실적",
    signals: { trend: 86, value: 52, catalyst: 88, risk: 61 },
    brief: {
      base: "AI 인프라 수요가 매출 가시성을 지지하지만 기대치가 이미 높다.",
      bull: "데이터센터 주문과 마진이 동시에 유지되면 프리미엄 멀티플이 방어된다.",
      bear: "공급 정상화, 고객 CAPEX 둔화, 규제 이슈가 동시에 나오면 하방 변동성이 커진다.",
      check: "다음 실적에서 데이터센터 성장률, 재고, 고객 집중도를 확인한다."
    },
    events: [
      ["실적 발표", "매출 가이던스와 총마진 코멘트"],
      ["제품 사이클", "차세대 GPU 공급 일정"],
      ["고객 CAPEX", "빅테크 투자 축소 신호"]
    ]
  },
  {
    ticker: "MSFT",
    name: "Microsoft",
    sector: "클라우드/소프트웨어",
    price: 428.91,
    change: 0.64,
    allocation: 14,
    riskGrade: "A",
    nextCheck: "Azure",
    signals: { trend: 74, value: 63, catalyst: 76, risk: 78 },
    brief: {
      base: "클라우드와 생산성 앱이 방어력을 만들고 AI 번들링이 성장 옵션을 더한다.",
      bull: "Azure 성장률 재가속과 Copilot 유료 전환이 동시에 확인된다.",
      bear: "AI 투자 비용이 매출 기여보다 빠르게 늘면 마진 압박이 생긴다.",
      check: "Azure 성장률, 잉여현금흐름, AI 관련 CAPEX 회수 속도를 본다."
    },
    events: [
      ["클라우드 지표", "Azure 성장률과 잔여계약"],
      ["AI 수익화", "Copilot ARPU와 확산 속도"],
      ["규제", "대형 플랫폼 반독점 리스크"]
    ]
  },
  {
    ticker: "AAPL",
    name: "Apple",
    sector: "하드웨어/서비스",
    price: 193.74,
    change: -0.38,
    allocation: 12,
    riskGrade: "B",
    nextCheck: "아이폰",
    signals: { trend: 57, value: 58, catalyst: 49, risk: 74 },
    brief: {
      base: "서비스 매출은 안정적이지만 하드웨어 교체 수요의 강도가 핵심이다.",
      bull: "신제품 사이클과 서비스 ARPU가 함께 올라가면 밸류에이션 방어가 가능하다.",
      bear: "중국 수요 둔화와 규제 비용이 겹치면 성장 프리미엄이 줄어든다.",
      check: "지역별 아이폰 판매, 서비스 마진, 자사주 매입 규모를 확인한다."
    },
    events: [
      ["제품 공개", "기기 교체 수요를 자극할 기능"],
      ["서비스 매출", "구독 성장과 앱스토어 규제"],
      ["중국 수요", "점유율 변화와 할인 강도"]
    ]
  },
  {
    ticker: "TSM",
    name: "TSMC",
    sector: "파운드리",
    price: 162.34,
    change: 1.15,
    allocation: 10,
    riskGrade: "B",
    nextCheck: "CAPEX",
    signals: { trend: 79, value: 69, catalyst: 73, risk: 59 },
    brief: {
      base: "첨단 공정 리더십이 장기 경쟁력을 만들지만 지정학 리스크가 상존한다.",
      bull: "AI 칩 수요와 선단 공정 가격력이 동시에 강해진다.",
      bear: "CAPEX 부담, 환율, 지정학 이벤트가 멀티플을 압박한다.",
      check: "월매출, N3/N2 램프업, 고객별 주문 흐름을 추적한다."
    },
    events: [
      ["월매출", "선단 공정 수요 강도"],
      ["CAPEX", "공급 확대 속도와 감가상각"],
      ["지정학", "대만 리스크 프리미엄 변화"]
    ]
  },
  {
    ticker: "JPM",
    name: "JPMorgan Chase",
    sector: "은행",
    price: 201.18,
    change: -0.72,
    allocation: 8,
    riskGrade: "A",
    nextCheck: "NIM",
    signals: { trend: 63, value: 72, catalyst: 55, risk: 81 },
    brief: {
      base: "규모와 예금 기반은 강점이고 금리 경로가 수익성의 핵심 변수다.",
      bull: "신용비용이 안정되고 순이자마진이 예상보다 오래 유지된다.",
      bear: "상업용 부동산과 소비자 연체가 동시에 악화되면 방어력이 약해진다.",
      check: "대손충당금, 예금 베타, 자본환원 여력을 확인한다."
    },
    events: [
      ["금리 경로", "순이자마진 민감도"],
      ["신용 지표", "연체율과 충당금"],
      ["자본환원", "배당과 자사주 매입"]
    ]
  },
  {
    ticker: "QQQ",
    name: "Nasdaq 100 ETF",
    sector: "ETF",
    price: 456.22,
    change: 0.31,
    allocation: 22,
    riskGrade: "B",
    nextCheck: "폭",
    signals: { trend: 71, value: 54, catalyst: 65, risk: 66 },
    brief: {
      base: "대형 기술주 중심의 성장 노출을 제공하지만 상위 종목 집중도가 높다.",
      bull: "이익 성장과 유동성이 동시에 우호적이면 추세가 이어진다.",
      bear: "금리 상승이나 대형주 실적 쇼크가 나오면 지수 전체가 흔들린다.",
      check: "상위 10개 비중, 시장 폭, 금리 민감도를 같이 확인한다."
    },
    events: [
      ["시장 폭", "상승 종목 수와 신고가 비율"],
      ["금리", "장기금리와 성장주 멀티플"],
      ["실적 시즌", "대형 기술주 가이던스"]
    ]
  }
];

const learningQueues = {
  fundamental: [
    ["매출 품질", "성장률보다 반복 매출, 마진, 현금흐름을 먼저 분해"],
    ["밸류에이션", "PER 하나로 끝내지 말고 성장률과 ROIC를 같이 비교"],
    ["가설 반증", "좋은 뉴스보다 틀렸다는 증거를 먼저 정의"]
  ],
  technical: [
    ["추세 확인", "20일선과 60일선의 기울기, 거래량 동반 여부"],
    ["매물대", "전고점 돌파 후 지지 실패가 나오는 구간 표시"],
    ["변동성", "평균 변동폭이 커질 때 포지션 크기를 자동 축소"]
  ],
  behavior: [
    ["손실 회피", "물타기 전에 최초 가설이 유지되는지 체크"],
    ["확증 편향", "반대 리포트를 한 개 이상 읽고 일지에 기록"],
    ["과매매", "진입 전 24시간 대기 규칙이 필요한 종목 태그"]
  ]
};

const apiProviders = [
  {
    name: "Alpaca",
    type: "브로커/주문",
    priority: "1차",
    fit: "페이퍼 트레이딩과 시장 데이터 개발에 가장 적합. 무료 실시간 주식 데이터는 IEX 범위라 지연/제한 상태를 표시한다.",
    auth: "Trading API key/secret"
  },
  {
    name: "Tradier",
    type: "옵션/계좌",
    priority: "1차",
    fit: "옵션 체인, 계좌, 시세, sandbox 토큰이 명확해 옵션 흐름과 모의 주문 패널에 붙이기 좋다.",
    auth: "Live/sandbox token"
  },
  {
    name: "Public",
    type: "브로커/AI",
    priority: "검토",
    fit: "계좌/시장 데이터/주문 API와 MCP 기반 AI 연결을 공개. 개인용 자동화는 반드시 읽기 우선으로 시작한다.",
    auth: "Personal access token"
  },
  {
    name: "E*TRADE",
    type: "계좌/OAuth",
    priority: "2차",
    fit: "계좌, 포지션, 주문, quotes를 REST로 제공하지만 OAuth consumer key와 계정 연결 과정이 필요하다.",
    auth: "OAuth 1.0a consumer key"
  },
  {
    name: "IBKR",
    type: "고급 브로커",
    priority: "후순위",
    fit: "글로벌 자산과 전문 기능은 강하지만 개인 Web API는 IBKR Pro/인증 구조가 무거워 v2 이후 후보로 둔다.",
    auth: "IBKR Web API/OAuth"
  },
  {
    name: "tastytrade",
    type: "옵션/선물",
    priority: "옵션형",
    fit: "옵션, futures, crypto까지 read/write API와 sandbox가 있어 옵션 특화 터미널 확장에 적합하다.",
    auth: "tastytrade Open API"
  },
  {
    name: "SEC EDGAR",
    type: "공시/재무",
    priority: "바로",
    fit: "키 없이 10-K, 10-Q, XBRL companyfacts를 가져와 가치분석 교육 데이터의 1차 출처로 쓴다.",
    auth: "키 없음, User-Agent 필요"
  }
];

const spTopTen = [
  { ticker: "NVDA", name: "NVIDIA", indexWeight: 7.58 },
  { ticker: "AAPL", name: "Apple", indexWeight: 6.66 },
  { ticker: "MSFT", name: "Microsoft", indexWeight: 4.91 },
  { ticker: "AMZN", name: "Amazon", indexWeight: 3.64 },
  { ticker: "GOOGL", name: "Alphabet A", indexWeight: 2.99 },
  { ticker: "AVGO", name: "Broadcom", indexWeight: 2.62 },
  { ticker: "GOOG", name: "Alphabet C", indexWeight: 2.40 },
  { ticker: "META", name: "Meta Platforms", indexWeight: 2.24 },
  { ticker: "TSLA", name: "Tesla", indexWeight: 1.87 },
  { ticker: "BRK.B", name: "Berkshire Hathaway", indexWeight: 1.57 }
];

const qualityCandidates = [
  {
    ticker: "JPM",
    name: "JPMorgan Chase",
    sector: "금융",
    valuation: 76,
    quality: 85,
    balance: 82,
    lesson: "은행은 예대마진보다 신용비용과 자본비율을 같이 봐야 한다."
  },
  {
    ticker: "UNH",
    name: "UnitedHealth",
    sector: "헬스케어",
    valuation: 82,
    quality: 78,
    balance: 70,
    lesson: "규제 리스크가 밸류에이션 할인으로 반영되는지 분리해서 본다."
  },
  {
    ticker: "JNJ",
    name: "Johnson & Johnson",
    sector: "헬스케어",
    valuation: 70,
    quality: 80,
    balance: 86,
    lesson: "방어주는 성장 둔화를 배당/현금흐름 안정성과 비교한다."
  },
  {
    ticker: "LOW",
    name: "Lowe's",
    sector: "소비재",
    valuation: 72,
    quality: 76,
    balance: 68,
    lesson: "주택 사이클 민감주는 매크로와 재고 회전율을 같이 본다."
  },
  {
    ticker: "RTX",
    name: "RTX",
    sector: "산업재",
    valuation: 74,
    quality: 73,
    balance: 72,
    lesson: "방산/항공은 수주잔고와 일회성 비용을 분리해서 평가한다."
  },
  {
    ticker: "AMGN",
    name: "Amgen",
    sector: "바이오",
    valuation: 68,
    quality: 77,
    balance: 66,
    lesson: "특허 만료와 파이프라인을 현금흐름 지속성의 반증 조건으로 둔다."
  },
  {
    ticker: "PEP",
    name: "PepsiCo",
    sector: "필수소비재",
    valuation: 61,
    quality: 79,
    balance: 75,
    lesson: "브랜드 기업은 가격 전가력과 볼륨 감소를 함께 읽는다."
  },
  {
    ticker: "XOM",
    name: "Exxon Mobil",
    sector: "에너지",
    valuation: 73,
    quality: 71,
    balance: 80,
    lesson: "상품주는 원자재 가격보다 사이클 저점의 현금흐름 방어력을 본다."
  }
];

const analysisSteps = [
  ["사업 이해", "매출이 어디서 나오고 어떤 변수에 민감한지 한 문장으로 적는다."],
  ["품질 확인", "ROIC, 영업마진, 잉여현금흐름, 부채비율 중 최소 3개를 확인한다."],
  ["가치 비교", "PER/PFCF/EV-EBITDA를 과거 자기 범위와 동종업계 양쪽으로 비교한다."],
  ["리스크 반증", "가설이 틀렸다고 인정할 숫자나 사건을 매수 전 정한다."],
  ["포지션 크기", "좋은 회사와 좋은 가격을 구분하고 손실 한도에서 수량을 역산한다."],
  ["사후 리뷰", "실적 발표 후 가격보다 가설 변화가 있었는지를 먼저 기록한다."]
];

const valuationProfiles = {
  NVDA: {
    metrics: [
      ["가격", "성장 프리미엄"],
      ["수익성", "매우 높음"],
      ["재무", "현금창출 우수"],
      ["반증", "AI CAPEX 둔화"]
    ],
    takeaway: "싸서 사는 종목이 아니라 성장 지속성이 프리미엄을 정당화하는지 검증하는 종목이다."
  },
  MSFT: {
    metrics: [
      ["가격", "품질 프리미엄"],
      ["수익성", "높고 안정적"],
      ["재무", "우수"],
      ["반증", "AI 비용 회수 지연"]
    ],
    takeaway: "클라우드 성장과 AI 수익화가 마진을 훼손하지 않는지 보는 훈련에 좋다."
  },
  AAPL: {
    metrics: [
      ["가격", "서비스 프리미엄"],
      ["수익성", "높음"],
      ["재무", "자사주 매입 강함"],
      ["반증", "하드웨어 성장 둔화"]
    ],
    takeaway: "하드웨어 기업으로 볼지, 서비스 현금흐름 기업으로 볼지에 따라 적정가치가 달라진다."
  },
  TSM: {
    metrics: [
      ["가격", "사이클 할인"],
      ["수익성", "선단공정 강함"],
      ["재무", "CAPEX 부담"],
      ["반증", "지정학 리스크 확대"]
    ],
    takeaway: "기술 우위와 지정학 할인을 동시에 반영해야 하는 복합 사례다."
  },
  JPM: {
    metrics: [
      ["가격", "대형은행 밸류"],
      ["수익성", "금리 민감"],
      ["재무", "자본비율 중요"],
      ["반증", "신용비용 급증"]
    ],
    takeaway: "은행주는 이익보다 자본, 충당금, 예금 안정성을 먼저 읽는 습관을 만든다."
  },
  QQQ: {
    metrics: [
      ["가격", "성장주 묶음"],
      ["수익성", "상위 종목 의존"],
      ["재무", "ETF 구조"],
      ["반증", "시장 폭 약화"]
    ],
    takeaway: "개별 기업 분석보다 상위 집중도와 금리 민감도, 시장 폭을 같이 보는 도구다."
  }
};

const snapTakeaways = [
  ["댓글 프롬프트", "작성자 댓글 8개에 적힌 요구사항을 확인했고, 그대로 복제하지 않고 투자 보조용 구조로 재해석했다."],
  ["데이터 정직성", "실제, 지연, API 필요, 데이터 없음 상태를 UI에 드러내 가짜 숫자가 의사결정처럼 보이지 않게 한다."],
  ["고밀도 배치", "관찰 목록, 차트, 펀더멘털, 시나리오를 한 화면에 둬서 컨텍스트 전환을 줄인다."],
  ["브로커 분리", "시장 데이터, 포트폴리오 조회, 주문 실행을 별도 계층으로 나눠 Paper Trading을 기본값으로 둔다."],
  ["AI 보조", "추천이 아니라 설명, 반증 질문, 체크리스트 생성에 AI를 제한해서 사고를 돕는다."]
];

const promptBlueprint = [
  ["시장 데이터", "미국 주식, ETF, 지수, 금리, 원자재, FX, 한국 주식은 소스별 상태를 분리한다."],
  ["뉴스/번역", "원문, 한국어 요약, 관련 티커, 중요도를 함께 표시하고 AI 키가 없으면 규칙 기반 요약으로 대체한다."],
  ["AI 분석", "Gemini 같은 외부 API는 선택형으로 두고, 기본은 로컬 체크리스트와 반증 질문을 생성한다."],
  ["차트", "1M~10Y 기간과 1D/1W/1M 인터벌을 실제로 바꿔 가격 흐름을 다시 그린다."],
  ["포트폴리오", "로그인 전에는 일반 시장 정보, 로그인 후에는 API 키/관심종목/포트폴리오를 사용자별로 저장한다."],
  ["UI/UX", "전역 메뉴, 명령창, AI 버튼, 지수 스트립, 드래그 가능한 패널 구조를 목표 아키텍처로 둔다."],
  ["주문/거래", "실거래는 설정에서 명시적으로 켠 뒤에도 주문 전 확인을 거치고, 기본은 Paper Trading이다."],
  ["배포/문서", "환경변수, Docker, HTTPS, 세션, API 키 보안, 데이터 제한 사항을 README와 설정 화면에 남긴다."]
];

const flowSignals = [
  ["Equity", 86, "대형주 추세 우호"],
  ["Rates", 64, "금리 민감도 중립"],
  ["FX", 48, "달러 강세 확인"],
  ["Credit", 72, "스프레드 안정"],
  ["Vol", 58, "변동성 대기"]
];

const sourceChecklist = [
  ["가격", "Alpaca/Tradier/Public 중 하나를 read-only로 연결하고 IEX/지연/실시간 범위를 표시", "pending"],
  ["공시", "SEC EDGAR companyfacts와 submissions를 우선 연결", "ready"],
  ["뉴스", "Alpaca News 또는 별도 뉴스 API 연결 전까지는 데이터 필요 상태 표시", "pending"],
  ["펀더멘털", "SEC 원자료를 우선 계산하고 FMP/Polygon 같은 유료 API는 보조로 둠", "pending"],
  ["매매일지", "브라우저 localStorage 저장, JSON 내보내기 예정", "ready"],
  ["API 키", "프론트 저장 금지. 서버 환경변수 또는 사용자별 암호화 저장으로 설계", "pending"]
];

const guardrails = [
  ["Paper 기본", "주문 UI는 모의 주문을 기본값으로 두고 실거래 버튼은 별도 설정 전까지 잠근다."],
  ["읽기 우선", "브로커 계좌 연결은 포지션/잔고 조회부터 시작하고 주문 권한은 마지막 단계에서 분리한다."],
  ["AI 제한", "AI는 매수/매도 지시가 아니라 요약, 반증 질문, 체크리스트, 리스크 설명만 생성한다."],
  ["키 보안", "API 키는 브라우저 localStorage에 저장하지 않고 서버 측 환경변수 또는 암호화 저장소로 보낸다."],
  ["데이터 라벨", "실시간, 지연, API 제한, 데이터 없음 상태를 모든 수치 근처에 표시한다."]
];

const portfolioHoldings = [
  { ticker: "NVDA", sleeve: "Core top 10", current: 12.8, target: 12.5 },
  { ticker: "AAPL", sleeve: "Core top 10", current: 10.4, target: 11.0 },
  { ticker: "MSFT", sleeve: "Core top 10", current: 8.8, target: 8.1 },
  { ticker: "AMZN", sleeve: "Core top 10", current: 5.8, target: 6.0 },
  { ticker: "GOOGL", sleeve: "Core top 10", current: 4.4, target: 4.9 },
  { ticker: "JPM", sleeve: "Quality value", current: 8.2, target: 8.0 },
  { ticker: "UNH", sleeve: "Quality value", current: 7.4, target: 8.0 },
  { ticker: "JNJ", sleeve: "Quality value", current: 8.1, target: 8.0 },
  { ticker: "RTX", sleeve: "Quality value", current: 7.9, target: 8.0 },
  { ticker: "XOM", sleeve: "Quality value", current: 8.0, target: 8.0 }
];

const brokerSteps = [
  ["1. 데이터 읽기", "SEC EDGAR와 지연 가격 데이터부터 연결해 분석 화면을 완성한다."],
  ["2. Paper 계정", "Alpaca paper 또는 Tradier sandbox로 주문 티켓과 체결 로그를 검증한다."],
  ["3. Read-only 계좌", "포지션, 잔고, 배당 예상만 읽고 주문 권한은 열지 않는다."],
  ["4. 실거래 잠금", "실거래는 설정 화면의 다중 확인과 주문 전 요약을 통과해야만 켠다."]
];

const secReadingChecklist = [
  ["10-K 사업", "매출이 어디서 나오고 어떤 고객/제품에 집중되어 있는지 확인"],
  ["10-Q 변화", "전분기 대비 마진, 재고, 현금흐름 변화 확인"],
  ["Risk factors", "가설을 깨뜨릴 규제, 소송, 고객 집중, 공급망 리스크 표시"],
  ["XBRL facts", "매출, 영업이익, FCF, 부채, 주식수 데이터를 같은 기간으로 정렬"],
  ["Earnings call", "경영진 발언과 숫자가 같은 방향인지 체크"]
];

const newsFeed = [
  ["원문", "Data center demand remains the key swing factor for AI infrastructure names.", "관련 티커: NVDA, MSFT · 중요도 높음"],
  ["번역", "AI 인프라 기업의 핵심 변수는 여전히 데이터센터 수요입니다.", "감성: 중립/긍정 · 확인: CAPEX"],
  ["요약", "뉴스가 가격을 움직였는지보다 기존 투자 가설을 강화하거나 약화했는지 먼저 기록합니다.", "AI API 없음: 규칙 기반 요약"]
];

const apiRoadmap = [
  ["Phase 1", "SEC EDGAR companyfacts + 수동 포트폴리오 + 로컬 저널"],
  ["Phase 2", "Alpaca/Tradier read-only 가격, 뉴스, 계좌 조회"],
  ["Phase 3", "Paper Trading 주문 티켓, 체결 로그, 리스크 한도 검증"],
  ["Phase 4", "사용자가 명시적으로 켠 실거래 어댑터와 주문 전 확인 화면"]
];

const securityChecklist = [
  ["프론트 저장 금지", "API 키와 secret은 브라우저 localStorage에 저장하지 않는다."],
  ["환경변수", "서버 배포 시 `.env`와 비밀 관리자를 통해 키를 주입한다."],
  ["권한 분리", "시장 데이터, 계좌 조회, 주문 권한을 다른 토큰/스코프로 분리한다."],
  ["감사 로그", "AI 요약, 주문 티켓, 설정 변경은 사용자별 로그로 남긴다."]
];

const deploymentChecklist = [
  ["로컬", "정적 파일은 바로 열 수 있고, API 프록시가 붙으면 dev server로 실행"],
  ["서버", "HTTPS, 세션, CORS, rate limit, User-Agent 정책을 문서화"],
  ["Docker", "프론트, API 프록시, 작업 큐를 분리할 수 있게 compose 파일 준비"],
  ["데이터 정책", "실시간/지연/API 제한/데이터 없음 상태를 UI와 문서에 같이 표시"]
];

const modelPolicy = [
  ["금지", "AI는 매수, 매도, 보유 지시를 최종 결론처럼 출력하지 않는다."],
  ["허용", "요약, 반증 질문, 리스크 체크, 공시 읽기 순서, 학습 과제 생성"],
  ["출처", "가격, 공시, 뉴스, 포트폴리오 데이터의 상태 라벨을 답변에 포함"],
  ["사용자화", "사용자의 위험 한도와 학습 목표를 우선하고, 확신 표현을 낮춘다."]
];

const aiDrills = [
  ["반대편 논리", "내 가설과 반대되는 근거 3개를 먼저 쓰고 점수를 낮춰본다."],
  ["수치 연결", "PER보다 매출 성장, 마진, FCF, 부채가 한 방향인지 확인한다."],
  ["사건 후 리뷰", "실적 발표 후 가격보다 가설 변화가 있었는지 기록한다."],
  ["포지션 크기", "좋은 회사라도 손실 한도 안에서만 수량을 계산한다."]
];

const pulseSignals = [
  ["Equity", 72, "+1.1%"],
  ["Rates", 58, "+6bp"],
  ["FX", 64, "USD firm"],
  ["Credit", 69, "stable"],
  ["Vol", 46, "-3.2%"]
];

const sectorSignals = [
  ["반도체", 1.35],
  ["소프트웨어", 0.62],
  ["은행", -0.48],
  ["헬스케어", 0.28],
  ["에너지", -0.71],
  ["산업재", 0.44]
];

const matrixLabels = ["SPY", "QQQ", "USD", "10Y", "VIX"];
const assetMatrix = [
  [1.0, 0.86, -0.28, -0.36, -0.62],
  [0.86, 1.0, -0.34, -0.42, -0.69],
  [-0.28, -0.34, 1.0, 0.26, 0.18],
  [-0.36, -0.42, 0.26, 1.0, 0.44],
  [-0.62, -0.69, 0.18, 0.44, 1.0]
];

const inspectorMessages = {
  sec: "SEC EDGAR는 키 없이 공시/재무 원자료를 읽는 1순위 소스입니다. Research 화면에서 체크리스트를 봅니다.",
  iex: "IEX/지연 가격은 실시간처럼 쓰면 안 됩니다. Tools 화면에서 가격 API 연결 후보와 제한을 확인합니다.",
  broker: "브로커 주문은 잠겨 있습니다. Portfolio 화면에서 read-only와 Paper 순서를 먼저 확인합니다."
};

const state = {
  selected: "NVDA",
  screen: "markets",
  mode: "study",
  topic: "fundamental",
  chartWindow: 21,
  chartInterval: "1D",
  sortByScore: false,
  weights: {
    trend: 25,
    value: 20,
    catalyst: 25,
    risk: 30
  }
};

const els = {
  selectedTitle: document.getElementById("selectedTitle"),
  totalScore: document.getElementById("totalScore"),
  riskGrade: document.getElementById("riskGrade"),
  portfolioWeight: document.getElementById("portfolioWeight"),
  nextCheck: document.getElementById("nextCheck"),
  watchlistBody: document.getElementById("watchlistBody"),
  chartTitle: document.getElementById("chartTitle"),
  priceChart: document.getElementById("priceChart"),
  signalBars: document.getElementById("signalBars"),
  modePill: document.getElementById("modePill"),
  valuationMetrics: document.getElementById("valuationMetrics"),
  valuationTakeaway: document.getElementById("valuationTakeaway"),
  briefContent: document.getElementById("briefContent"),
  eventList: document.getElementById("eventList"),
  learningList: document.getElementById("learningList"),
  journalNote: document.getElementById("journalNote"),
  journalState: document.getElementById("journalState"),
  accountSize: document.getElementById("accountSize"),
  riskPercent: document.getElementById("riskPercent"),
  entryPrice: document.getElementById("entryPrice"),
  stopPrice: document.getElementById("stopPrice"),
  maxLoss: document.getElementById("maxLoss"),
  shareCount: document.getElementById("shareCount"),
  cashNeeded: document.getElementById("cashNeeded"),
  tickerInput: document.getElementById("tickerInput"),
  commandInput: document.getElementById("commandInput"),
  aiAssist: document.getElementById("aiAssist"),
  apiProviderList: document.getElementById("apiProviderList"),
  snapTakeaways: document.getElementById("snapTakeaways"),
  promptBlueprint: document.getElementById("promptBlueprint"),
  portfolioBudget: document.getElementById("portfolioBudget"),
  valueTilt: document.getElementById("valueTilt"),
  excludeOverlap: document.getElementById("excludeOverlap"),
  megaCapBudget: document.getElementById("megaCapBudget"),
  qualityBudget: document.getElementById("qualityBudget"),
  educationScore: document.getElementById("educationScore"),
  coreAllocation: document.getElementById("coreAllocation"),
  qualityAllocation: document.getElementById("qualityAllocation"),
  analysisCoach: document.getElementById("analysisCoach"),
  flowRadar: document.getElementById("flowRadar"),
  sourceChecklist: document.getElementById("sourceChecklist"),
  guardrailsList: document.getElementById("guardrailsList"),
  portfolioHealth: document.getElementById("portfolioHealth"),
  holdingRows: document.getElementById("holdingRows"),
  rebalanceActions: document.getElementById("rebalanceActions"),
  brokerSteps: document.getElementById("brokerSteps"),
  paperOrderPreview: document.getElementById("paperOrderPreview"),
  researchHeadline: document.getElementById("researchHeadline"),
  researchScorecard: document.getElementById("researchScorecard"),
  secChecklist: document.getElementById("secChecklist"),
  newsItems: document.getElementById("newsItems"),
  thesisChecklist: document.getElementById("thesisChecklist"),
  apiRoadmap: document.getElementById("apiRoadmap"),
  providerCards: document.getElementById("providerCards"),
  securityChecklist: document.getElementById("securityChecklist"),
  deploymentChecklist: document.getElementById("deploymentChecklist"),
  aiTaskSelect: document.getElementById("aiTaskSelect"),
  generateCoach: document.getElementById("generateCoach"),
  aiCoachOutput: document.getElementById("aiCoachOutput"),
  modelPolicy: document.getElementById("modelPolicy"),
  aiDrills: document.getElementById("aiDrills"),
  terminalToggle: document.getElementById("terminalToggle"),
  interactionConsole: document.getElementById("interactionConsole"),
  pulseScore: document.getElementById("pulseScore"),
  pulseState: document.getElementById("pulseState"),
  marketPulseBars: document.getElementById("marketPulseBars"),
  sectorMap: document.getElementById("sectorMap"),
  terminalSymbol: document.getElementById("terminalSymbol"),
  terminalDataState: document.getElementById("terminalDataState"),
  terminalQuoteMetrics: document.getElementById("terminalQuoteMetrics"),
  orderExecution: document.getElementById("orderExecution"),
  paperTicketButton: document.getElementById("paperTicketButton"),
  assetMatrix: document.getElementById("assetMatrix"),
  scenarioStress: document.getElementById("scenarioStress"),
  scenarioHorizon: document.getElementById("scenarioHorizon"),
  scenarioLab: document.getElementById("scenarioLab"),
  runScenario: document.getElementById("runScenario"),
  secDrill: document.getElementById("secDrill"),
  secDrillButton: document.getElementById("secDrillButton")
};

const weightInputs = {
  trend: document.getElementById("trendWeight"),
  value: document.getElementById("valueWeight"),
  catalyst: document.getElementById("catalystWeight"),
  risk: document.getElementById("riskWeight")
};

const weightLabels = {
  trend: document.getElementById("trendWeightLabel"),
  value: document.getElementById("valueWeightLabel"),
  catalyst: document.getElementById("catalystWeightLabel"),
  risk: document.getElementById("riskWeightLabel")
};

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const price = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

function currentInstrument() {
  return instruments.find((item) => item.ticker === state.selected) || instruments[0];
}

function weightedScore(item) {
  const totalWeight = Object.values(state.weights).reduce((sum, value) => sum + value, 0) || 1;
  const score = Object.entries(state.weights).reduce((sum, [key, weight]) => {
    return sum + item.signals[key] * weight;
  }, 0);
  return Math.round(score / totalWeight);
}

function setConsole(message) {
  const now = new Date().toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  els.interactionConsole.textContent = `${now} | ${message}`;
}

function renderAll() {
  const item = currentInstrument();
  const score = weightedScore(item);

  els.selectedTitle.textContent = `${item.ticker} 연구 노트`;
  els.totalScore.textContent = String(score);
  els.riskGrade.textContent = item.riskGrade;
  els.portfolioWeight.textContent = `${item.allocation}%`;
  els.nextCheck.textContent = item.nextCheck;
  els.chartTitle.textContent = `${item.ticker} 가격 흐름`;
  els.entryPrice.value = item.price.toFixed(2);
  els.stopPrice.value = Math.max(item.price * 0.94, 1).toFixed(2);

  renderApiProviders();
  renderSnapTakeaways();
  renderPromptBlueprint();
  renderPortfolioBuilder();
  renderAnalysisCoach();
  renderFlowRadar();
  renderSourceChecklist();
  renderGuardrails();
  renderWatchlist();
  renderSignals(item);
  renderValuationLens(item);
  renderBrief(item);
  renderEvents(item);
  renderLearning();
  loadJournal(item.ticker);
  calculateRisk();
  renderTerminalDeck(item, score);
  renderCompletionScreens(item, score);
  drawChart();
}

function renderTerminalDeck(item, score) {
  const pulse = Math.round((item.signals.trend + item.signals.risk + score) / 3);
  els.pulseScore.textContent = String(pulse);
  els.pulseState.textContent = pulse >= 72 ? "risk-on" : pulse <= 52 ? "risk-off" : "mixed live";
  els.terminalSymbol.textContent = `${item.ticker} · ${item.name}`;
  els.terminalDataState.textContent = "sample delayed";

  els.marketPulseBars.innerHTML = pulseSignals.map(([label, value, note]) => `
    <div class="pulse-row">
      <strong>${label}</strong>
      <div class="pulse-mini-track"><i style="width: ${value}%"></i></div>
      <span>${note}</span>
    </div>
  `).join("");

  els.sectorMap.innerHTML = sectorSignals.map(([label, change]) => `
    <div class="sector-tile ${change >= 0 ? "positive" : "negative"}">
      <span>${label}</span>
      <strong>${change >= 0 ? "+" : ""}${change.toFixed(2)}%</strong>
    </div>
  `).join("");

  const open = item.price * (1 - item.change / 100);
  const high = Math.max(item.price, open) * 1.018;
  const low = Math.min(item.price, open) * 0.982;
  const volume = Math.round((item.signals.catalyst + item.signals.trend) * 0.48);
  els.terminalQuoteMetrics.innerHTML = [
    ["Last", price.format(item.price)],
    ["Change", `${item.change >= 0 ? "+" : ""}${item.change.toFixed(2)}%`],
    ["Open", price.format(open)],
    ["High", price.format(high)],
    ["Low", price.format(low)],
    ["Volume", `${volume}.8M`],
    ["Score", String(score)],
    ["Risk", item.riskGrade],
    ["Next", item.nextCheck],
    ["Data", "API needed"]
  ].map(([label, value]) => `
    <div class="quote-cell">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");

  renderOrderExecution(item);
  renderAssetMatrix();
  renderScenario(item);
  renderSecDrill(item);
}

function renderOrderExecution(item) {
  els.orderExecution.innerHTML = [
    ["Mode", "Paper only"],
    ["Ticker", item.ticker],
    ["Entry", price.format(Number(els.entryPrice.value) || item.price)],
    ["Stop", price.format(Number(els.stopPrice.value) || item.price * 0.94)],
    ["Size", `${els.shareCount.textContent || "0"}주`],
    ["Max loss", els.maxLoss.textContent || "$0"]
  ].map(([label, value]) => `
    <div class="order-line"><span>${label}</span><strong>${value}</strong></div>
  `).join("");
}

function renderAssetMatrix() {
  const header = ["", ...matrixLabels].map((label) => `
    <div class="matrix-cell header"><span>${label}</span></div>
  `).join("");
  const rows = assetMatrix.map((row, index) => {
    const cells = row.map((value) => {
      const tone = value >= 0.5 ? "hot" : value <= -0.45 ? "cold" : "";
      return `<div class="matrix-cell ${tone}"><strong>${value.toFixed(2)}</strong></div>`;
    }).join("");
    return `<div class="matrix-cell header"><span>${matrixLabels[index]}</span></div>${cells}`;
  }).join("");
  els.assetMatrix.innerHTML = `${header}${rows}`;
}

function renderScenario(item) {
  const stress = Number(els.scenarioStress.value) || 0;
  const horizon = Number(els.scenarioHorizon.value) || 1;
  const scenarioPrice = item.price * (1 + stress / 100);
  const drawdown = Math.max(0, ((item.price - scenarioPrice) / item.price) * 100);
  const thesisAction = stress < -12 ? "관찰 전환" : stress < 0 ? "손실 한도 확인" : "상방 가설 검증";

  els.scenarioLab.innerHTML = [
    ["Stress", `${stress >= 0 ? "+" : ""}${stress}%`],
    ["Horizon", `${horizon}개월`],
    ["Scenario px", price.format(scenarioPrice)],
    ["Drawdown", `${drawdown.toFixed(1)}%`],
    ["Action", thesisAction]
  ].map(([label, value]) => `
    <div class="scenario-line"><span>${label}</span><strong>${value}</strong></div>
  `).join("");
}

function renderSecDrill(item) {
  els.secDrill.innerHTML = [
    ["10-K", `${item.name} 사업/고객 집중도 확인`],
    ["10-Q", "마진, 재고, 현금흐름 변화"],
    ["XBRL", "매출, FCF, 부채, 주식수 정렬"],
    ["Call", `${item.nextCheck} 관련 경영진 발언 추적`]
  ].map(([label, value]) => `
    <div class="sec-line"><span>${label}</span><strong>${value}</strong></div>
  `).join("");
}

function renderApiProviders() {
  els.apiProviderList.innerHTML = apiProviders.map((provider) => `
    <div class="provider-row">
      <div>
        <strong>${provider.name}</strong>
        <span class="provider-badge">${provider.type}</span>
      </div>
      <p>${provider.fit}</p>
      <span><b>${provider.priority}</b><br>${provider.auth}</span>
    </div>
  `).join("");
}

function renderSnapTakeaways() {
  els.snapTakeaways.innerHTML = snapTakeaways.map(([title, body]) => `
    <div class="takeaway-row">
      <strong>${title}</strong>
      <span>${body}</span>
    </div>
  `).join("");
}

function renderPromptBlueprint() {
  els.promptBlueprint.innerHTML = promptBlueprint.map(([title, body]) => `
    <div class="blueprint-row">
      <strong>${title}</strong>
      <span>${body}</span>
    </div>
  `).join("");
}

function renderFlowRadar() {
  els.flowRadar.innerHTML = flowSignals.map(([label, score, note]) => `
    <div class="flow-row">
      <strong>${label}</strong>
      <div>
        <div class="flow-meter"><span style="width: ${score}%"></span></div>
        <span>${note}</span>
      </div>
      <em>${score}</em>
    </div>
  `).join("");
}

function renderSourceChecklist() {
  els.sourceChecklist.innerHTML = sourceChecklist.map(([label, body, stateName]) => `
    <div class="source-row">
      <span class="source-dot ${stateName === "ready" ? "" : "pending"}"></span>
      <div>
        <strong>${label}</strong>
        <span>${body}</span>
      </div>
    </div>
  `).join("");
}

function renderGuardrails() {
  els.guardrailsList.innerHTML = guardrails.map(([title, body]) => `
    <div class="guard-row">
      <strong>${title}</strong>
      <span>${body}</span>
    </div>
  `).join("");
}

function renderCompletionScreens(item, score) {
  renderPortfolioWorkbench();
  renderResearchWorkbench(item, score);
  renderToolsWorkbench();
  renderAiWorkbench(item);
  switchScreen(state.screen);
}

function driftStatus(current, target) {
  const drift = current - target;
  if (Math.abs(drift) <= 0.4) return ["정상", "ready"];
  if (drift > 0) return [`${drift.toFixed(1)}%p 축소 검토`, "warn"];
  return [`${Math.abs(drift).toFixed(1)}%p 보강 검토`, "warn"];
}

function renderPortfolioWorkbench() {
  const totalDrift = portfolioHoldings.reduce((sum, item) => sum + Math.abs(item.current - item.target), 0);
  const coreWeight = portfolioHoldings
    .filter((item) => item.sleeve === "Core top 10")
    .reduce((sum, item) => sum + item.current, 0);
  const qualityWeight = portfolioHoldings
    .filter((item) => item.sleeve === "Quality value")
    .reduce((sum, item) => sum + item.current, 0);
  const cashWeight = Math.max(0, 100 - coreWeight - qualityWeight);

  els.portfolioHealth.innerHTML = [
    ["Core", `${coreWeight.toFixed(1)}%`, "S&P 상위 10 중심"],
    ["Value", `${qualityWeight.toFixed(1)}%`, "저평가 우량주"],
    ["Cash", `${cashWeight.toFixed(1)}%`, "대기 현금"],
    ["Drift", `${totalDrift.toFixed(1)}%p`, "리밸런싱 관찰"]
  ].map(([label, value, note]) => `
    <div class="summary-tile">
      <span>${label}</span>
      <strong>${value}</strong>
      <em>${note}</em>
    </div>
  `).join("");

  els.holdingRows.innerHTML = portfolioHoldings.map((holding) => {
    const [status, tone] = driftStatus(holding.current, holding.target);
    return `
      <tr>
        <td><strong>${holding.ticker}</strong></td>
        <td>${holding.sleeve}</td>
        <td>${holding.current.toFixed(1)}%</td>
        <td>${holding.target.toFixed(1)}%</td>
        <td><span class="state-badge ${tone}">${status}</span></td>
      </tr>
    `;
  }).join("");

  const actions = portfolioHoldings
    .filter((holding) => Math.abs(holding.current - holding.target) > 0.4)
    .slice(0, 5);
  els.rebalanceActions.innerHTML = actions.map((holding) => {
    const [status] = driftStatus(holding.current, holding.target);
    return `
      <div class="action-row">
        <strong>${holding.ticker}</strong>
        <span>${status}. 실거래 전에는 Paper 주문으로만 검증.</span>
      </div>
    `;
  }).join("");

  els.brokerSteps.innerHTML = brokerSteps.map(([title, body]) => `
    <li><strong>${title}</strong><span>${body}</span></li>
  `).join("");

  const item = currentInstrument();
  els.paperOrderPreview.innerHTML = `
    <div class="ticket-line"><span>모드</span><strong>Paper only</strong></div>
    <div class="ticket-line"><span>티커</span><strong>${item.ticker}</strong></div>
    <div class="ticket-line"><span>진입/손절</span><strong>${price.format(Number(els.entryPrice.value) || item.price)} / ${price.format(Number(els.stopPrice.value) || item.price * 0.94)}</strong></div>
    <div class="ticket-line"><span>수량</span><strong>${els.shareCount.textContent}주</strong></div>
    <p>실거래 연결은 잠겨 있습니다. 이 티켓은 리스크 계산과 기록용입니다.</p>
  `;
}

function renderResearchWorkbench(item, score) {
  els.researchHeadline.textContent = `${item.ticker} 가치분석 cockpit`;
  const profile = valuationProfiles[item.ticker] || {
    metrics: [["가격", "데이터 필요"], ["수익성", "공시 확인"], ["재무", "부채 확인"], ["반증", "가설 작성"]],
    takeaway: "데이터 연결 후 SEC 공시와 가격 흐름을 결합해 검토한다."
  };

  els.researchScorecard.innerHTML = [
    ["종합", String(score), "가중치 기반"],
    ["리스크", item.riskGrade, "손실 한도 우선"],
    ["다음 확인", item.nextCheck, "이벤트 큐"],
    ["핵심 렌즈", profile.metrics[0][1], "밸류에이션"]
  ].map(([label, value, note]) => `
    <div class="summary-tile">
      <span>${label}</span>
      <strong>${value}</strong>
      <em>${note}</em>
    </div>
  `).join("");

  els.secChecklist.innerHTML = secReadingChecklist.map(([title, body]) => `
    <div class="check-row">
      <span class="source-dot"></span>
      <div><strong>${title}</strong><span>${body}</span></div>
    </div>
  `).join("");

  els.newsItems.innerHTML = newsFeed.map(([label, body, meta]) => `
    <div class="news-row">
      <strong>${label}</strong>
      <p>${body}</p>
      <span>${meta}</span>
    </div>
  `).join("");

  const thesis = [
    ["기본 가설", item.brief.base],
    ["상방 조건", item.brief.bull],
    ["반증 조건", item.brief.bear],
    ["확인할 것", item.brief.check],
    ["가치 렌즈", profile.takeaway],
    ["행동 규칙", "확신이 아니라 손실 한도와 재검토 날짜를 먼저 정한다."]
  ];
  els.thesisChecklist.innerHTML = thesis.map(([title, body]) => `
    <div class="thesis-card">
      <strong>${title}</strong>
      <span>${body}</span>
    </div>
  `).join("");
}

function renderToolsWorkbench() {
  els.apiRoadmap.innerHTML = apiRoadmap.map(([title, body]) => `
    <div class="roadmap-row">
      <strong>${title}</strong>
      <span>${body}</span>
    </div>
  `).join("");

  els.providerCards.innerHTML = apiProviders.map((provider) => `
    <div class="provider-row">
      <div>
        <strong>${provider.name}</strong>
        <span class="provider-badge">${provider.priority}</span>
      </div>
      <p>${provider.fit}</p>
      <span>${provider.auth}</span>
    </div>
  `).join("");

  els.securityChecklist.innerHTML = securityChecklist.map(([title, body]) => `
    <div class="check-row"><span class="source-dot pending"></span><div><strong>${title}</strong><span>${body}</span></div></div>
  `).join("");

  els.deploymentChecklist.innerHTML = deploymentChecklist.map(([title, body]) => `
    <div class="check-row"><span class="source-dot pending"></span><div><strong>${title}</strong><span>${body}</span></div></div>
  `).join("");
}

function buildAiCoachText(mode = "brief") {
  const item = currentInstrument();
  const profile = valuationProfiles[item.ticker] || { takeaway: "연결된 데이터로 가설을 직접 작성한다." };
  const templates = {
    brief: [
      `${item.ticker} 분석 브리프`,
      `기본 가설: ${item.brief.base}`,
      `상방 조건: ${item.brief.bull}`,
      `하방 조건: ${item.brief.bear}`,
      `가치 렌즈: ${profile.takeaway}`,
      "출력 제한: 매수/매도 지시가 아니라 검토 질문으로만 사용"
    ],
    bear: [
      `${item.ticker} 반증 질문`,
      `1. 어떤 숫자가 나오면 "${item.brief.base}"가 틀렸다고 볼 것인가?`,
      "2. 좋은 뉴스가 이미 가격에 반영됐는가?",
      "3. 경쟁사 또는 매크로 변수가 같은 방향으로 악화되는가?",
      "4. 손절가와 재검토 날짜가 기록돼 있는가?"
    ],
    risk: [
      `${item.ticker} 리스크 점검`,
      `진입가: ${price.format(Number(els.entryPrice.value) || item.price)}`,
      `손절가: ${price.format(Number(els.stopPrice.value) || item.price * 0.94)}`,
      `허용 손실: ${els.maxLoss.textContent}`,
      `계산 수량: ${els.shareCount.textContent}주`,
      "실거래 전 Paper 주문으로만 검증"
    ],
    lesson: [
      `${item.ticker} 학습 과제`,
      "1. 최근 10-K/10-Q에서 매출, 마진, FCF를 같은 기간으로 정리",
      "2. 현재 멀티플이 성장률과 ROIC를 정당화하는지 비교",
      `3. 다음 확인 이벤트: ${item.nextCheck}`,
      "4. 반대 리포트 또는 반대 논리를 한 개 이상 기록"
    ]
  };
  return templates[mode].join("\n");
}

function renderAiWorkbench() {
  els.modelPolicy.innerHTML = modelPolicy.map(([title, body]) => `
    <div class="guard-row"><strong>${title}</strong><span>${body}</span></div>
  `).join("");

  els.aiDrills.innerHTML = aiDrills.map(([title, body]) => `
    <div class="drill-card"><strong>${title}</strong><span>${body}</span></div>
  `).join("");

  els.aiCoachOutput.value = buildAiCoachText(els.aiTaskSelect.value);
}

function candidateScore(candidate) {
  const valueTilt = Number(els.valueTilt.value) / 100;
  const qualityTilt = 1 - valueTilt;
  return Math.round(
    candidate.valuation * (0.45 + valueTilt * 0.25) +
    candidate.quality * (0.35 + qualityTilt * 0.2) +
    candidate.balance * 0.15
  );
}

function renderPortfolioBuilder() {
  const budget = Math.max(Number(els.portfolioBudget.value) || 0, 0);
  const coreBudget = budget * 0.6;
  const valueBudget = budget * 0.4;
  const topTenWeight = spTopTen.reduce((sum, item) => sum + item.indexWeight, 0);
  const overlapTickers = new Set(spTopTen.map((item) => item.ticker));
  const qualityPool = qualityCandidates
    .filter((item) => !els.excludeOverlap.checked || !overlapTickers.has(item.ticker))
    .map((item) => ({ ...item, score: candidateScore(item) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
  const scoreAverage = Math.round(
    qualityPool.reduce((sum, item) => sum + item.score, 0) / Math.max(qualityPool.length, 1)
  );

  els.megaCapBudget.textContent = money.format(coreBudget);
  els.qualityBudget.textContent = money.format(valueBudget);
  els.educationScore.textContent = String(scoreAverage);

  els.coreAllocation.innerHTML = spTopTen.map((item) => {
    const sleeveWeight = item.indexWeight / topTenWeight;
    const amount = coreBudget * sleeveWeight;
    return `
      <div class="allocation-row">
        <strong>${item.ticker}</strong>
        <span>${item.name} · ${(sleeveWeight * 60).toFixed(1)}%</span>
        <span class="amount">${money.format(amount)}</span>
      </div>
    `;
  }).join("");

  els.qualityAllocation.innerHTML = qualityPool.map((item) => {
    const amount = valueBudget / Math.max(qualityPool.length, 1);
    return `
      <div class="allocation-row">
        <strong>${item.ticker}</strong>
        <span>${item.sector} · ${item.lesson}</span>
        <span class="amount">${money.format(amount)} <span class="score-chip">${item.score}</span></span>
      </div>
    `;
  }).join("");
}

function renderAnalysisCoach() {
  els.analysisCoach.innerHTML = analysisSteps.map(([title, body]) => `
    <li>
      <div>
        <strong>${title}</strong>
        <span>${body}</span>
      </div>
    </li>
  `).join("");
}

function renderWatchlist() {
  const rows = [...instruments];
  if (state.sortByScore) {
    rows.sort((a, b) => weightedScore(b) - weightedScore(a));
  }

  els.watchlistBody.innerHTML = rows.map((item) => {
    const changeClass = item.change >= 0 ? "positive" : "negative";
    const activeClass = item.ticker === state.selected ? " active" : "";
    return `
      <tr class="watch-row${activeClass}" data-ticker="${item.ticker}">
        <td>
          <span class="ticker-cell">
            <strong>${item.ticker}</strong>
            <span>${item.sector}</span>
          </span>
        </td>
        <td>${price.format(item.price)}</td>
        <td class="${changeClass}">${item.change >= 0 ? "+" : ""}${item.change.toFixed(2)}%</td>
        <td><span class="score-badge">${weightedScore(item)}</span></td>
      </tr>
    `;
  }).join("");

  document.querySelectorAll(".watch-row").forEach((row) => {
    row.addEventListener("click", () => {
      state.selected = row.dataset.ticker;
      renderAll();
      setConsole(`${state.selected} 선택됨. 차트, 리스크, 가설, Paper 티켓을 갱신했습니다.`);
    });
  });
}

function renderSignals(item) {
  const labels = {
    trend: "추세",
    value: "가치",
    catalyst: "촉매",
    risk: "리스크 관리"
  };
  const colors = {
    trend: "var(--blue)",
    value: "var(--green)",
    catalyst: "var(--amber)",
    risk: "var(--red)"
  };
  const modeLabel = { study: "학습", observe: "관찰", entry: "진입검토" };
  els.modePill.textContent = modeLabel[state.mode];

  els.signalBars.innerHTML = Object.entries(item.signals).map(([key, value]) => `
    <div class="signal-row">
      <div class="signal-meta">
        <span>${labels[key]}</span>
        <strong>${value}</strong>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width: ${value}%; background: ${colors[key]}"></div>
      </div>
    </div>
  `).join("");
}

function renderValuationLens(item) {
  const fallback = {
    metrics: [
      ["가격", "데이터 필요"],
      ["수익성", "공시 확인"],
      ["재무", "부채/현금 확인"],
      ["반증", "가설 작성"]
    ],
    takeaway: "API 연결 후 SEC 공시와 가격 데이터를 합쳐 직접 가치분석 렌즈를 완성할 종목이다."
  };
  const profile = valuationProfiles[item.ticker] || fallback;

  els.valuationMetrics.innerHTML = profile.metrics.map(([label, value]) => `
    <div class="valuation-metric">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");
  els.valuationTakeaway.textContent = profile.takeaway;
}

function renderBrief(item) {
  const briefItems = [
    ["기본 가설", item.brief.base],
    ["상방 조건", item.brief.bull],
    ["하방 조건", item.brief.bear],
    ["확인할 것", item.brief.check]
  ];

  els.briefContent.innerHTML = briefItems.map(([title, body]) => `
    <div class="brief-item">
      <strong>${title}</strong>
      <p>${body}</p>
    </div>
  `).join("");
}

function renderEvents(item) {
  els.eventList.innerHTML = item.events.map(([title, body]) => `
    <li>
      <strong>${title}</strong>
      <span>${body}</span>
    </li>
  `).join("");
}

function renderLearning() {
  els.learningList.innerHTML = learningQueues[state.topic].map(([title, body]) => `
    <li>
      <strong>${title}</strong>
      <span>${body}</span>
    </li>
  `).join("");
}

function loadJournal(ticker) {
  const saved = localStorage.getItem(`studyvest-journal-${ticker}`) || "";
  els.journalNote.value = saved;
  els.journalState.textContent = saved ? `${ticker} 기록 불러옴` : `${ticker} 새 기록`;
}

function saveJournal() {
  const ticker = currentInstrument().ticker;
  localStorage.setItem(`studyvest-journal-${ticker}`, els.journalNote.value.trim());
  els.journalState.textContent = `${ticker} 기록 저장됨`;
  setConsole(`${ticker} 판단 기록을 localStorage에 저장했습니다.`);
}

function calculateRisk() {
  const account = Number(els.accountSize.value) || 0;
  const riskPct = Number(els.riskPercent.value) || 0;
  const entry = Number(els.entryPrice.value) || 0;
  const stop = Number(els.stopPrice.value) || 0;
  const maxLoss = account * (riskPct / 100);
  const perShareRisk = Math.abs(entry - stop);
  const shares = perShareRisk > 0 ? Math.floor(maxLoss / perShareRisk) : 0;
  const cashNeeded = shares * entry;

  els.maxLoss.textContent = money.format(maxLoss);
  els.shareCount.textContent = String(Math.max(shares, 0));
  els.cashNeeded.textContent = money.format(cashNeeded);
}

function seededRandom(seedText) {
  let seed = seedText.split("").reduce((sum, char) => sum + char.charCodeAt(0), 17);
  return function next() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

function buildSeries(item, length) {
  const random = seededRandom(`${item.ticker}-${length}`);
  const drift = (item.signals.trend - 50) / 18000;
  const volatility = (105 - item.signals.risk) / 3500;
  let value = item.price * (0.72 + random() * 0.18);
  const series = [];

  for (let index = 0; index < length; index += 1) {
    const wave = Math.sin(index / 8) * volatility * 0.4;
    const noise = (random() - 0.48) * volatility;
    value = Math.max(1, value * (1 + drift + wave + noise));
    series.push(value);
  }

  const scale = item.price / series[series.length - 1];
  return series.map((point) => point * scale);
}

function movingAverage(series, windowSize) {
  return series.map((_, index) => {
    const start = Math.max(0, index - windowSize + 1);
    const slice = series.slice(start, index + 1);
    return slice.reduce((sum, value) => sum + value, 0) / slice.length;
  });
}

function chartPointCount() {
  const intervalFactor = { "1D": 1, "1W": 5, "1M": 21 };
  return Math.max(12, Math.ceil(state.chartWindow / intervalFactor[state.chartInterval]));
}

function canvasPalette() {
  const terminal = document.body.classList.contains("terminal-mode");
  return terminal
    ? {
        background: "#07100f",
        grid: "#1e3a36",
        text: "#82a9a2",
        price: "#36a3ff",
        ma20: "#36d399",
        ma60: "#ffbf5f"
      }
    : {
        background: "#fbfdff",
        grid: "#e3e9f2",
        text: "#4f5e72",
        price: "#2563eb",
        ma20: "#087f5b",
        ma60: "#b45309"
      };
}

function drawChart() {
  const canvas = els.priceChart;
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.floor(rect.width * dpr);
  canvas.height = Math.floor(rect.height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const width = rect.width;
  const height = rect.height;
  const pad = { top: 24, right: 58, bottom: 34, left: 44 };
  const item = currentInstrument();
  const palette = canvasPalette();
  const series = buildSeries(item, chartPointCount());
  const ma20 = movingAverage(series, 20);
  const ma60 = movingAverage(series, 60);
  const values = [...series, ...ma20, ...ma60];
  const min = Math.min(...values) * 0.985;
  const max = Math.max(...values) * 1.015;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = palette.background;
  ctx.fillRect(0, 0, width, height);

  drawGrid(ctx, width, height, pad, min, max, palette);
  drawLine(ctx, series, pad, width, height, min, max, palette.price, 2.4);
  drawLine(ctx, ma20, pad, width, height, min, max, palette.ma20, 1.6);
  drawLine(ctx, ma60, pad, width, height, min, max, palette.ma60, 1.6);
  drawLegend(ctx, width, pad, palette);
}

function drawGrid(ctx, width, height, pad, min, max, palette) {
  ctx.strokeStyle = palette.grid;
  ctx.lineWidth = 1;
  ctx.fillStyle = palette.text;
  ctx.font = "12px Inter, system-ui, sans-serif";

  for (let i = 0; i <= 4; i += 1) {
    const y = pad.top + ((height - pad.top - pad.bottom) / 4) * i;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(width - pad.right, y);
    ctx.stroke();

    const value = max - ((max - min) / 4) * i;
    ctx.fillText(`$${value.toFixed(0)}`, width - pad.right + 10, y + 4);
  }
}

function drawLine(ctx, series, pad, width, height, min, max, color, lineWidth) {
  const chartWidth = width - pad.left - pad.right;
  const chartHeight = height - pad.top - pad.bottom;

  ctx.beginPath();
  series.forEach((value, index) => {
    const x = pad.left + (chartWidth * index) / (series.length - 1);
    const y = pad.top + chartHeight - ((value - min) / (max - min)) * chartHeight;
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.stroke();
}

function drawLegend(ctx, width, pad, palette) {
  const items = [
    ["가격", palette.price],
    ["20MA", palette.ma20],
    ["60MA", palette.ma60]
  ];
  let x = pad.left;
  ctx.font = "12px Inter, system-ui, sans-serif";

  items.forEach(([label, color]) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, 13, 18, 4);
    ctx.fillStyle = palette.text;
    ctx.fillText(label, x + 24, 18);
    x += 76;
  });

  ctx.fillStyle = palette.text;
  ctx.fillText(`샘플 · ${state.chartInterval}`, width - pad.right - 86, 18);
}

function addCustomTicker(ticker) {
  const normalized = ticker.trim().toUpperCase();
  if (!normalized) return;

  const existing = instruments.find((item) => item.ticker === normalized);
  if (existing) {
    state.selected = normalized;
    renderAll();
    setConsole(`${normalized} 기존 관찰 종목을 열었습니다.`);
    return;
  }

  const random = seededRandom(normalized);
  const generated = {
    ticker: normalized,
    name: `${normalized} Research`,
    sector: "사용자 추가",
    price: 40 + random() * 260,
    change: (random() - 0.5) * 4,
    allocation: 0,
    riskGrade: "C",
    nextCheck: "데이터",
    signals: {
      trend: Math.round(45 + random() * 35),
      value: Math.round(45 + random() * 35),
      catalyst: Math.round(40 + random() * 40),
      risk: Math.round(40 + random() * 35)
    },
    brief: {
      base: "아직 연결된 실시간 데이터가 없어서 직접 리서치 가설을 입력할 종목이다.",
      bull: "가격, 재무, 뉴스 데이터를 연결한 뒤 상방 조건을 구체화한다.",
      bear: "손실 한도와 반증 조건이 없으면 관찰 목록에만 둔다.",
      check: "가격 데이터 API와 기업 이벤트 소스를 먼저 연결한다."
    },
    events: [
      ["데이터 연결", "가격, 재무, 뉴스 소스 확인"],
      ["가설 작성", "상방과 하방 조건을 각각 한 줄로 기록"],
      ["리스크 설정", "진입가보다 손절가를 먼저 정하기"]
    ]
  };

  instruments.unshift(generated);
  state.selected = normalized;
  renderAll();
  setConsole(`${normalized} 샘플 종목을 추가했습니다. 실제 API 연결 전까지는 데이터 필요 상태입니다.`);
}

function screenLabel(screen) {
  return {
    markets: `${currentInstrument().ticker} 시장 대시보드`,
    portfolio: "포트폴리오 빌더",
    research: `${currentInstrument().ticker} 기업 리서치`,
    tools: "API와 배포 도구",
    ai: "AI 분석 코치"
  }[screen] || "StudyVest";
}

function switchScreen(screen) {
  state.screen = screen;
  document.querySelectorAll("[data-screen-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.screenPanel === screen);
  });
  document.querySelectorAll("[data-screen]").forEach((button) => {
    button.classList.toggle("active", button.dataset.screen === screen);
  });
  els.selectedTitle.textContent = screenLabel(screen);
  document.querySelector(".workspace").scrollIntoView({ block: "start" });
  if (screen === "markets") {
    drawChart();
  }
}

function activateDataInspector(type) {
  if (type === "sec") {
    switchScreen("research");
  } else if (type === "iex") {
    switchScreen("tools");
  } else if (type === "broker") {
    switchScreen("portfolio");
  }
  setConsole(inspectorMessages[type] || "데이터 상태를 확인했습니다.");
}

function syncRiskDependents() {
  calculateRisk();
  renderOrderExecution(currentInstrument());
  renderScenario(currentInstrument());
  renderPortfolioWorkbench();
}

function runCommand(rawCommand) {
  const command = rawCommand.trim();
  const token = command.split(/\s+/)[0] || "";
  const route = command.toLowerCase();
  let routed = false;
  if (route.includes("port")) {
    switchScreen("portfolio");
    routed = true;
  }
  if (route.includes("api") || route.includes("tool")) {
    switchScreen("tools");
    routed = true;
  }
  if (route.includes("ai")) {
    switchScreen("ai");
    routed = true;
  }
  if (route.includes("fa") || route.includes("research")) {
    switchScreen("research");
    routed = true;
  }
  const ticker = token.replace(/[^A-Z0-9.-]/gi, "").toUpperCase();
  if (routed) {
    setConsole(`명령 실행: ${command}`);
  }
  if (["PORT", "PORTFOLIO", "API", "TOOLS", "AI", "RESEARCH", "FA"].includes(ticker)) return;
  if (!ticker) {
    setConsole("명령어나 티커를 입력하세요. 예: NVDA FA, PORT, API, AI");
    return;
  }
  addCustomTicker(ticker);
}

function generateLocalAiBrief() {
  const item = currentInstrument();
  const checklist = [
    `${item.ticker} 규칙 기반 분석 노트`,
    `가설: ${item.brief.base}`,
    `반증: ${item.brief.bear}`,
    `확인: ${item.brief.check}`,
    "AI 제한: 매수/매도 지시가 아니라 확인 질문과 리스크 설명만 사용",
    "데이터 상태: 실제 API 연결 전까지 가격/차트는 샘플로 표시"
  ].join("\n");

  els.journalNote.value = checklist;
  saveJournal();
  els.journalState.textContent = `${item.ticker} 규칙 기반 브리프 생성됨`;
  els.aiCoachOutput.value = buildAiCoachText("brief");
  switchScreen("ai");
  setConsole(`${item.ticker} AI 분석 코치 브리프를 생성하고 AI 화면을 열었습니다.`);
}

function setupEvents() {
  document.querySelectorAll("[data-screen]").forEach((button) => {
    button.addEventListener("click", () => {
      switchScreen(button.dataset.screen);
      setConsole(`${screenLabel(button.dataset.screen)} 화면으로 이동했습니다.`);
    });
  });

  document.querySelectorAll("[data-inspector]").forEach((button) => {
    button.addEventListener("click", () => {
      activateDataInspector(button.dataset.inspector);
    });
  });

  document.querySelectorAll(".segment").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".segment").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.mode = button.dataset.mode;
      renderSignals(currentInstrument());
      const modeLabel = { study: "학습", observe: "관찰", entry: "진입검토" }[state.mode];
      setConsole(`${modeLabel} 모드로 전환했습니다. 근거 점수 해석 기준을 바꿨습니다.`);
    });
  });

  document.querySelectorAll(".tool").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tool").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.chartWindow = Number(button.dataset.window);
      drawChart();
      setConsole(`차트 기간을 ${button.textContent}로 바꿨습니다.`);
    });
  });

  document.querySelectorAll(".interval-tool").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".interval-tool").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.chartInterval = button.dataset.interval;
      drawChart();
      setConsole(`차트 인터벌을 ${state.chartInterval}로 바꿨습니다.`);
    });
  });

  document.querySelectorAll(".mini-tab").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".mini-tab").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.topic = button.dataset.topic;
      renderLearning();
      setConsole(`${button.textContent} 학습 큐를 열었습니다.`);
    });
  });

  Object.entries(weightInputs).forEach(([key, input]) => {
    input.addEventListener("input", () => {
      state.weights[key] = Number(input.value);
      weightLabels[key].textContent = input.value;
      renderWatchlist();
      renderSignals(currentInstrument());
      els.totalScore.textContent = String(weightedScore(currentInstrument()));
      renderTerminalDeck(currentInstrument(), weightedScore(currentInstrument()));
    });
  });

  document.getElementById("resetWeights").addEventListener("click", () => {
    state.weights = { trend: 25, value: 20, catalyst: 25, risk: 30 };
    Object.entries(state.weights).forEach(([key, value]) => {
      weightInputs[key].value = value;
      weightLabels[key].textContent = String(value);
    });
    renderAll();
    setConsole("개인 규칙 가중치를 기본값으로 초기화했습니다.");
  });

  document.getElementById("sortWatchlist").addEventListener("click", () => {
    state.sortByScore = !state.sortByScore;
    document.getElementById("sortWatchlist").classList.toggle("active", state.sortByScore);
    document.getElementById("sortWatchlist").textContent = state.sortByScore ? "↓" : "S";
    renderWatchlist();
    setConsole(state.sortByScore ? "관찰 종목을 점수순으로 정렬했습니다." : "관찰 종목을 기본 순서로 되돌렸습니다.");
  });

  document.getElementById("tickerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    addCustomTicker(els.tickerInput.value);
    els.tickerInput.value = "";
  });

  document.getElementById("commandForm").addEventListener("submit", (event) => {
    event.preventDefault();
    runCommand(els.commandInput.value);
    els.commandInput.value = "";
  });

  els.aiAssist.addEventListener("click", generateLocalAiBrief);

  els.generateCoach.addEventListener("click", () => {
    els.aiCoachOutput.value = buildAiCoachText(els.aiTaskSelect.value);
    setConsole(`${els.aiTaskSelect.selectedOptions[0].textContent} 코치 출력을 다시 생성했습니다.`);
  });

  els.aiTaskSelect.addEventListener("change", () => {
    els.aiCoachOutput.value = buildAiCoachText(els.aiTaskSelect.value);
    setConsole(`AI 코치 모드를 ${els.aiTaskSelect.selectedOptions[0].textContent}(으)로 바꿨습니다.`);
  });

  document.getElementById("saveJournal").addEventListener("click", saveJournal);
  document.getElementById("clearJournal").addEventListener("click", () => {
    els.journalNote.value = "";
    saveJournal();
    setConsole(`${currentInstrument().ticker} 판단 기록을 비웠습니다.`);
  });

  document.getElementById("copyBrief").addEventListener("click", async () => {
    const item = currentInstrument();
    const text = [
      `${item.ticker} 리서치 브리프`,
      `기본: ${item.brief.base}`,
      `상방: ${item.brief.bull}`,
      `하방: ${item.brief.bear}`,
      `확인: ${item.brief.check}`
    ].join("\n");

    try {
      await navigator.clipboard.writeText(text);
      document.getElementById("copyBrief").textContent = "OK";
      setConsole(`${item.ticker} 브리프를 클립보드에 복사했습니다.`);
      setTimeout(() => {
        document.getElementById("copyBrief").textContent = "C";
      }, 1000);
    } catch {
      els.journalNote.value = text;
      saveJournal();
      els.journalState.textContent = "클립보드 대신 일지에 브리프를 넣었습니다";
      setConsole("브라우저 클립보드 권한이 없어 브리프를 판단 기록에 넣었습니다.");
    }
  });

  [els.accountSize, els.riskPercent, els.entryPrice, els.stopPrice].forEach((input) => {
    input.addEventListener("input", () => {
      syncRiskDependents();
      setConsole("리스크 사이징과 Paper 티켓을 갱신했습니다.");
    });
  });

  [els.portfolioBudget, els.valueTilt, els.excludeOverlap].forEach((input) => {
    input.addEventListener("input", () => {
      renderPortfolioBuilder();
      setConsole("60/40 포트폴리오 빌더를 갱신했습니다.");
    });
    input.addEventListener("change", () => {
      renderPortfolioBuilder();
      setConsole("60/40 포트폴리오 빌더를 갱신했습니다.");
    });
  });

  els.terminalToggle.addEventListener("click", () => {
    document.body.classList.toggle("terminal-mode");
    els.terminalToggle.textContent = document.body.classList.contains("terminal-mode")
      ? "리서치 모드"
      : "터미널 모드";
    drawChart();
    setConsole(document.body.classList.contains("terminal-mode")
      ? "SnapTerminal식 고밀도 터미널 모드로 전환했습니다."
      : "밝은 리서치 워크벤치 모드로 전환했습니다.");
  });

  els.paperTicketButton.addEventListener("click", () => {
    switchScreen("portfolio");
    setConsole("Paper 주문 티켓 화면을 열었습니다. 실거래는 잠겨 있습니다.");
  });

  els.runScenario.addEventListener("click", () => {
    renderScenario(currentInstrument());
    setConsole(`${currentInstrument().ticker} 시나리오를 다시 계산했습니다.`);
  });

  [els.scenarioStress, els.scenarioHorizon].forEach((input) => {
    input.addEventListener("input", () => {
      renderScenario(currentInstrument());
    });
  });

  els.secDrillButton.addEventListener("click", () => {
    switchScreen("research");
    setConsole(`${currentInstrument().ticker} 공시 체크리스트를 Research 화면에서 열었습니다.`);
  });

  window.addEventListener("resize", drawChart);
}

setupEvents();
renderAll();
