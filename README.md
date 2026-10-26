# Equipment Readiness Board

This is a synthetic teaching repository for GitHub and AI-assisted development workshops.

## Scenario

An internal team uses a small browser application to view synthetic equipment readiness data. The baseline application shows:

- equipment name and location;
- readiness status;
- next maintenance date;
- summary counts by status.

The workshop change request is to add a deterministic **maintenance due in the next 30 days** view.

## Why this example

- It is understandable to both technical and non-technical participants.
- All data is synthetic.
- The change is small enough to plan, implement, test, review, and document during a workshop.
- It supports GitHub flow, Copilot, and security-review discussion without intentionally adding a vulnerable dependency.

## Run locally

Use approved tools only.

```powershell
python -m http.server 8000
```

Open `http://localhost:8000/app/`.

Run the baseline tests:

```powershell
npm test
```

No third-party packages are required.

## Repository map

| Path | Purpose |
|---|---|
| `app/` | Browser user interface |
| `data/` | Synthetic equipment data |
| `src/` | Testable business logic |
| `tests/` | Node built-in tests |
| `docs/` | Requirements and architecture |
| `workshop/` | Participant exercises and review checklist |
| `.github/` | Copilot instructions and pull-request template |

## Safety

- Use synthetic data only.
- Do not add credentials, secrets, patient data, confidential data, or proprietary content.
- Copilot output is a proposal until a human reviews the diff, tests, security findings, and documentation.
- Humans own branches, commits, pushes, pull requests, approvals, and merges.
