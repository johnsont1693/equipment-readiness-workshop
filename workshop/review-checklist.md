# Human review checklist

## Requirement fit

- Does the change implement the stated acceptance criteria?
- Is every changed file necessary?
- Did unrelated behavior remain unchanged?

## Evidence

- Did `npm test` pass?
- Were inclusive date boundaries tested?
- Does the interface match the requirement?
- Are actual results recorded?

## Security and quality

- Is all data synthetic?
- Are secrets and sensitive content absent?
- Are untrusted values rendered with safe DOM APIs?
- Were required GitHub security checks reviewed?
- Was an automated remediation suggestion independently validated?

## Decision

- Approve for further validation
- Request changes
- Reject

Record the reason. A human owns the final decision.
