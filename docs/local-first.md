# Local-First Personal Mode

StudyVest is public on GitHub only so it can be submitted as an open-source project.
The intended day-to-day use is personal and local-first.

## What stays public

- UI code
- sample data
- API adapter structure
- documentation
- security defaults

## What stays private

- `.env`
- brokerage tokens
- API keys
- local journal notes
- portfolio snapshots
- account balances
- real trading settings

## Start locally

```bash
cp .env.example .env
npm start
```

Open:

```text
http://127.0.0.1:8787
```

Without `.env`, StudyVest still runs and labels unavailable data as `API required`.

## Private data location

By default, server-side journal and portfolio snapshots are written to:

```text
~/.studyvest-data
```

This directory is outside the repository. You can override it with:

```text
STUDYVEST_DATA_DIR=/path/outside/git
```

## Data policy

No fake live data. If a source is not configured, unavailable, delayed, or locked,
the UI must say that clearly.
