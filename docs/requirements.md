# Equipment readiness requirements

## ER-1: Readiness overview

The application must load the synthetic equipment records, validate required fields, show every record, and summarize the number of records in each supported status.

### Supported statuses

- `Ready`
- `Maintenance`
- `Offline`

### Baseline acceptance criteria

1. Invalid records fail with a descriptive error.
2. The summary includes total, Ready, Maintenance, and Offline counts.
3. The table displays equipment name, location, status, and next maintenance date.
4. User- and data-supplied values are rendered with safe DOM APIs.

## Workshop change request: maintenance due view

Add a **Maintenance due in the next 30 days** summary and filter.

Use the fixed workshop reference date `2026-10-27` so the result remains deterministic.

### Acceptance criteria

1. A pure function returns equipment whose `nextMaintenance` date is from `2026-10-27` through `2026-11-26`, inclusive.
2. The summary shows the due-soon count.
3. The interface includes an accessible control that toggles between all equipment and due-soon equipment.
4. Existing status counts remain unchanged.
5. Tests cover inclusive boundaries and exclude past or later dates.
6. Requirements, implementation, tests, and README are updated together.
7. No third-party dependency is added.
