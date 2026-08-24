---
kind: prd
feature: Scheduled digest emails
jira_issue: DOC-32
source_ticket: 'https://slowey.atlassian.net/browse/DOC-32'
filed: '2026-08-24T18:39:20.887Z'
related:
  - '[[docs/scheduled-digest-emails]]'
---
```
Feature: Scheduled digest emails
Audience: workspace admins
User goal: get a periodic email summary of what happened in Beacon without checking the
dashboard every day

Admins currently only hear from Beacon when something is wrong. There is no periodic
"here's what happened" summary, so admins who don't check the dashboard daily miss quiet
incidents that opened and resolved between visits.

Requirements:
- Frequency is Daily or Weekly. Weekly requires a send day (Monday-Sunday).
- A send time is required, interpreted in the workspace's timezone.
- Admins choose which sections the digest includes: Incidents, Maintenance, Usage summary.
  At least one section must be selected.
- In v1, the digest always goes to all workspace admins — no per-recipient configuration.

Wireframe attached.
```

!digest-settings-v1.png|width=600,alt="digest-settings-v1.png"!
