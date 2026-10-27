# Equipment Readiness Board

This is a synthetic teaching repository for GitHub and AI-assisted development workshops. This workshop was created and is maintained by Thomas Johnson.

## Workshop use

Anyone can view and clone this public repository. Do not request write access to it, and do not open pull requests against it.

- **Copilot and local exercises:** clone this repository and work locally. No push is required.
- **Branch and pull-request exercises:** fork this repository with your organization-approved GitHub account, where policy permits, and open pull requests inside your fork.

When you open a pull request in a fork, GitHub defaults the base repository to this upstream repository. Change the base repository to your fork before you create the pull request.

GitHub Actions are disabled on new forks. To see the `test` check on your pull requests, open your fork's **Actions** tab and enable workflows.

Do not use personal accounts or forks to bypass organizational controls.

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
| `.github/` | Copilot instructions, pull-request template, and the `test` workflow |

Changes to `main` require a pull request with a passing `test` check.

## Safety

- Use synthetic data only.
- Do not add credentials, secrets, patient data, confidential data, or proprietary content.
- Copilot output is a proposal until a human reviews the diff, tests, security findings, and documentation.
- Humans own branches, commits, pushes, pull requests, approvals, and merges.
