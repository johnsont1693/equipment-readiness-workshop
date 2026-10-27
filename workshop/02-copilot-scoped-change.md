# Copilot scoped-change lab

## Goal

Use an approved GitHub Copilot experience to plan and implement the maintenance-due change without bypassing human review.

Clone this repository, or your fork of it, and work locally. This exercise does not require a push. If you want to publish your change for review, push a branch to your fork and open the pull request inside your fork.

## Prompt pattern

Attach or reference:

- `.github/copilot-instructions.md`
- `docs/requirements.md`
- `src/equipment.js`
- `app/index.html`
- `tests/equipment.test.js`
- `README.md`

Ask:

> Read the attached instructions and maintenance-due change request. Do not edit yet. Identify the affected files, date-boundary rules, output contract, tests, security concerns, and unresolved questions. Propose the smallest plan. Do not install dependencies, create branches, commit, push, open a pull request, or change permissions. Wait for approval.

## Human checkpoints

1. Inspect and narrow the plan.
2. Approve only the bounded implementation.
3. Review every proposed file and tool action.
4. Run `npm test`.
5. Inspect `git diff` and `git status --short`.
6. Check for secrets, unrelated changes, and unsafe DOM APIs.
7. Humans perform Git publication and review.
