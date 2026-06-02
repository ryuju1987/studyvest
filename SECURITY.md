# Security Policy

StudyVest handles investment research workflows and may eventually connect to
brokerage or market-data APIs. Security defaults should stay conservative.

## Current status

The current MVP is a static frontend with sample data. It should not contain
API keys, brokerage credentials, personal account data, or real trading logic.

## Reporting a vulnerability

Please open a private security advisory on GitHub when available. If that is
not available, open an issue with a minimal description and avoid posting
secrets, tokens, account numbers, or exploitable details publicly.

## Security principles

- Prefer read-only API scopes for account and portfolio integrations.
- Keep paper trading as the default workflow.
- Require explicit user confirmation before any future order placement.
- Store secrets outside the repository, ideally in environment variables or a
  managed secret store.
- Show data provenance and freshness in the UI.
- Never use AI output as an automatic trading trigger.
