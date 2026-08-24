---
kind: prd
feature: Webhook retry policy
jira_issue: DOC-12
source_ticket: 'https://slowey.atlassian.net/browse/DOC-12'
filed: '2026-08-24T13:48:50.096Z'
related:
  - '[[docs/webhook-retry-policy]]'
---
# PRD — Webhook retry policy

_Feature:_ Webhook retry policy
_Audience:_ integrators
_User goal:_ understand when and how often a failed webhook delivery is retried

## Requirements

# A failed delivery (non-2xx or timeout) retries with exponential backoff: 1m, 5m, 30m, 2h, 12h.

# After 5 failed attempts the webhook is marked _disabled_ and no further deliveries are attempted.

# A disabled webhook can be re-enabled from Settings → Webhooks, which resets the retry count.

# Every attempt, success or failure, appears in the webhook's delivery log with status code and latency.

## Out of scope

- Configurable retry schedules.
