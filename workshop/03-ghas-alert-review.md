# GitHub security alert review

Use an approved repository or sanitized example. Do not introduce an intentional vulnerability.

## Walkthrough

1. Open the repository **Security and quality** tab.
2. Select an alert and read the affected file, evidence, severity, and remediation guidance.
3. Decide whether the alert requires a fix, further investigation, or an evidence-backed dismissal.
4. If Dependabot or an automated remediation pull request exists:
   - inspect the dependency or code change;
   - review release notes and compatibility risk;
   - run relevant tests and checks;
   - inspect the full diff;
   - obtain required human review.
5. Merge only when repository rules and required checks are satisfied.
6. Record the decision and remaining risk.

An automated or Copilot-assisted pull request is a proposal, not proof that the alert is safely resolved.
