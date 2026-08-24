---
kind: prd
feature: Session timeout
jira_issue: DOC-24
source_ticket: 'https://slowey.atlassian.net/browse/DOC-24'
filed: '2026-08-24T13:58:49.124Z'
related:
  - '[[docs/session-timeout]]'
---
# PRD — Session timeout

_Feature:_ Session timeout
_Audience:_ workspace admins
_User goal:_ control how long an inactive session stays signed in

## Requirements

# Sessions expire after a configurable period of inactivity, default 30 minutes.

# Admins set the timeout from Settings > Security, between 5 minutes and 24 hours.

# A user is warned 2 minutes before expiry and can extend the session.

# Expiring a session signs the user out on every device.
