# Architecture

```mermaid
flowchart LR
    Browser[Browser UI] --> Logic[src/equipment.js]
    Browser --> Data[data/equipment.json]
    Tests[Node built-in tests] --> Logic
```

## Constraints

- Synthetic data only
- Browser-native HTML, CSS, and JavaScript
- Node built-in test runner
- No third-party dependencies
- Safe DOM rendering with `textContent`
- Human-controlled Git publication and review
