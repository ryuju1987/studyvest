# StudyVest

Open-source investment research and education workstation for retail investors.

개인 투자 공부와 의사결정 기록을 위한 정적 MVP입니다. Threads에서 확인한 "직접 만들며 주식 공부" 콘셉트를 바탕으로, 투자 판단을 대신하는 앱이 아니라 리서치, 리스크, 학습, 매매일지를 한 화면에서 굴리는 보조 워크벤치로 설계했습니다.

StudyVest focuses on SEC filing literacy, valuation discipline, risk sizing,
paper-trading workflows, and AI-assisted analysis coaching. It intentionally
avoids buy/sell recommendations and real-money automation.

## Local-First 개인 모드

이 repo는 OpenAI OSS 신청을 위해 public으로 유지하지만, 실제 사용은 개인 로컬 터미널을 기준으로 합니다. API 키, 브로커 토큰, 판단 기록, 포트폴리오 스냅샷은 `.env`와 `~/.studyvest-data` 같은 git 밖 로컬 저장소에 둡니다.

```bash
cp .env.example .env
npm start
```

서버 실행 후 `http://127.0.0.1:8787`에서 열면 `/api/registry`, SEC EDGAR, FRED, Alpaca, Tradier, OpenDART, Alpha Vantage용 로컬 API 프록시가 활성화됩니다. 키가 없는 데이터는 실제 숫자로 꾸미지 않고 `API 필요` 또는 `데이터 없음`으로 표시합니다.

## 현재 버전

- `index.html`: 앱 화면
- `styles.css`: 반응형 대시보드 스타일
- `app.js`: 샘플 종목, 점수 계산, 차트, 리스크 사이징, 로컬 매매일지 저장, 화면 전환, Paper/read-only 워크플로, 터미널 로그/상태칩 인터랙션, 서버 데이터 상태 반영
- `CONTRIBUTING.md`: 오픈소스 기여 가이드
- `SECURITY.md`: API/브로커 연동 전 보안 원칙
- `LICENSE`: MIT 라이선스
- `server.js`: 개인용 로컬 API 프록시
- `.env.example`: API 키 이름만 담은 로컬 설정 템플릿
- `docs/local-first.md`: 개인용 로컬-first 운영 원칙

브라우저에서 `index.html`을 열면 바로 실행됩니다. Chrome에서 `file://` 탭이 늦게 갱신되면 `python3 -m http.server 8787`로 띄운 뒤 `http://127.0.0.1:8787/index.html`로 여는 방식이 더 안정적입니다. 현재 가격과 차트는 샘플 데이터이며, 모든 수치에는 실제 연결 전 상태를 명확히 드러내는 방향으로 설계했습니다.

## OSS 포지셔닝

이 프로젝트는 특정 개인의 매매 판단을 자동화하는 도구가 아니라, 개인 투자자가 공시, 재무제표, 포트폴리오 비중, 리스크 한도, 반증 질문을 한 화면에서 학습할 수 있도록 돕는 공개 교육용 워크벤치입니다.

- Public-first: SEC EDGAR 같은 공개 데이터와 읽기 전용 API를 우선합니다.
- Safety-first: Paper Trading과 read-only 계정 연결을 기본값으로 둡니다.
- Education-first: AI는 추천자가 아니라 분석 코치로 제한합니다.
- Transparency-first: 샘플, 지연, API 필요, 데이터 없음 상태를 명확히 표시합니다.

## 완성본 화면

- `Markets`: 시장 대시보드, 차트, 관찰 종목, 리스크 계산, 플로우 레이더
- `Portfolio`: 60/40 포트폴리오, 목표/현재 비중, 리밸런싱, Paper 주문 티켓
- `Research`: 기업 가치분석, SEC 공시 체크리스트, 뉴스 번역/요약, 가설/반증 랩
- `Tools`: API 연결 로드맵, 제공자 후보, 보안 체크리스트, 배포 체크리스트
- `AI`: 매수/매도 추천이 아닌 분석 코치, 반증 질문, 리스크 점검, 학습 과제 생성

## 인터랙션 범위

- 전역 탭과 사이드바: Markets, Portfolio, Research, Tools, AI 화면 전환
- 데이터 상태칩: SEC ready, IEX delayed, Broker locked 클릭 시 관련 화면으로 이동하고 상단 로그 갱신
- 터미널 데크: 시나리오 슬라이더/기간 입력, 시나리오 실행, Paper 티켓, 공시 체크 열기
- 차트: 1M~10Y 기간, 1D/1W/1M 인터벌 전환
- 관찰 종목: 행 클릭으로 종목 전환, 점수순 정렬
- 리스크: 계좌 크기, 위험 %, 진입가, 손절가 변경 시 수량과 Paper 티켓 갱신
- AI: 상단 AI 버튼과 AI 화면의 생성 버튼으로 규칙 기반 분석 코치 출력 갱신

## Threads 적용 메모

Youngchang Jo의 SnapTerminal Thread는 메인 포스트 아래에 작성자가 직접 이어 쓴 댓글 8개가 프롬프트 본문 역할을 합니다. 원문을 그대로 복제하지 않고, 투자 보조 앱에 맞게 다음 요구사항으로 재해석했습니다.

- 고밀도 리서치 워크스테이션: 관찰 목록, 차트, 펀더멘털, 리스크를 한 화면에서 확인
- 데이터 상태 표시: 실제 데이터, 지연 데이터, API 필요, 데이터 없음 상태를 UI에 노출
- 차트 제어: 1M/3M/6M/1Y/2Y/5Y/10Y 기간과 1D/1W/1M 인터벌 제공
- 플로우 레이더: 주식, 금리, 달러, 신용, 변동성 맥락을 함께 체크
- 시나리오/리스크 중심: 주문보다 손실 한도, 반증 조건, 포지션 사이징을 우선
- 주문/거래 안전장치: Paper Trading을 기본값으로 두고 실제 주문은 별도 설정과 확인이 필요
- AI 보조는 추천이 아니라 설명, 질문, 체크리스트 생성에 제한

## 붙이면 좋은 오픈소스

- [OpenBB](https://github.com/OpenBB-finance/OpenBB): 주식, ETF, 경제지표, 뉴스 등 데이터 계층 후보
- [yfinance](https://github.com/ranaroussi/yfinance): 빠른 개인 리서치용 Yahoo Finance 데이터 수집 후보
- [vectorbt](https://github.com/polakowo/vectorbt): 대량 전략 시뮬레이션과 지표 실험 후보
- [backtesting.py](https://github.com/kernc/backtesting.py): 단일 전략 백테스트를 단순하게 검증하는 후보
- [FinGPT](https://github.com/AI4Finance-Foundation/FinGPT): 금융 문서 요약과 리서치 보조 AI 실험 후보

## 미국 API 접목 후보

브로커 API와 분석 데이터 API는 분리해서 붙이는 것이 안전합니다.

- [Alpaca Trading/Market Data API](https://docs.alpaca.markets/): 페이퍼 트레이딩, 주문, 가격 데이터 개발에 적합합니다. 무료 기본 데이터는 범위 제한이 있으므로 UI에 지연/제한 상태를 표시합니다.
- [Tradier API](https://docs.tradier.com/docs/getting-started): live/sandbox 토큰, 옵션/계좌/시세/페이퍼 트레이딩에 적합합니다.
- [Public API](https://public.com/api/docs): 계좌, 시장 데이터, 주문, MCP/AI 연결을 제공합니다. 초기에는 읽기 전용으로 연결하는 것이 안전합니다.
- [E*TRADE Developer Platform](https://developer.etrade.com/getting-started): E*TRADE 계정과 OAuth consumer key 기반으로 계좌/주문/시세를 연결합니다.
- [tastytrade Open API](https://tastytrade.com/api/): 옵션, futures, crypto, sandbox가 필요한 확장 후보입니다.
- [Interactive Brokers Web API](https://www.interactivebrokers.com/campus/ibkr-api-page/webapi-doc/): 강력하지만 개인 계정 인증과 운용 난도가 높아 후순위 후보입니다.
- [SEC EDGAR APIs](https://www.sec.gov/search-filings/edgar-application-programming-interfaces): API 키 없이 공시와 XBRL 재무 데이터를 가져올 수 있어 가치분석 교육용 1순위입니다.

권장 순서는 `SEC EDGAR + Alpaca/Tradier read-only`로 가치분석 학습을 먼저 만들고, 이후 `Alpaca paper` 또는 `Tradier sandbox`를 붙인 뒤, 실제 주문 기능은 별도 확인 화면과 수동 승인 절차를 넣는 방식입니다.

## 60 / 40 모델

앱에는 학습용 포트폴리오 빌더가 들어 있습니다.

- 60%: S&P 500 상위 10개 종목을 상위 10 내부 비중에 맞춰 재배분
- 40%: 가치, 품질, 재무안정성 기준으로 저평가 우량주 후보를 스크리닝
- 예산 입력, 가치 민감도, 상위 10 중복 제외 옵션 제공
- 결과는 투자 추천이 아니라 분석 교육과 포트폴리오 사고 훈련용입니다.

## 다음 개발 순서

1. 가격 데이터 API 연결
2. 관심 종목과 매매일지 JSON 내보내기
3. SEC 공시, 실적 캘린더, 뉴스 이벤트 연결
4. 백테스트 탭 추가
5. 개인 규칙 기반 알림과 리뷰 리포트 생성

## 주의

이 앱은 교육 및 리서치 보조용입니다. 매수, 매도, 보유 추천 또는 자동매매 판단을 제공하지 않습니다.
