# Contributing to StudyVest

StudyVest is an open-source investment research and education workstation.
The project is designed for learning, portfolio reasoning, risk sizing, and
SEC filing literacy. It does not provide financial advice, buy/sell calls, or
automated trading recommendations.

## Good first contributions

- Improve financial education explanations and checklist wording.
- Add tests or fixtures for valuation, risk, and portfolio calculations.
- Add read-only integrations for public data sources such as SEC EDGAR.
- Improve accessibility, responsive behavior, and keyboard navigation.
- Document safe broker API patterns for paper trading and read-only mode.

## Development

This MVP is currently a static frontend:

```bash
python3 -m http.server 8787
```

Then open:

```text
http://127.0.0.1:8787/index.html
```

## Contribution rules

- Do not commit API keys, account IDs, tokens, or personal financial data.
- Keep real-money trading features disabled unless a future maintainer process
  explicitly approves them.
- Label sample, delayed, and API-required data clearly in the UI.
- Keep AI behavior educational: summaries, checklists, counterarguments, and
  risk questions are welcome; direct investment recommendations are not.

## Pull requests

Please include:

- What changed
- Why it matters
- How you tested it
- Any remaining risks or limitations
