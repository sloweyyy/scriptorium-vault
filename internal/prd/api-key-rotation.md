---
kind: prd
feature: API key rotation
jira_issue: DOC-17
source_ticket: 'https://slowey.atlassian.net/browse/DOC-17'
filed: '2026-08-24T13:01:12.036Z'
---
PRD — API key rotation

Feature: API key rotation
Audience: integrators
User goal: rotate an API key without downtime for services using the old one

Requirements

1. Settings > API keys > Rotate generates a new key while the old key stays valid.
2. The old key expires automatically 24 hours after rotation.
3. Both keys work simultaneously during the 24-hour overlap window.
4. Rotating a key is logged with the account and timestamp.

Out of scope
- Automatic scheduled rotation.
- Per-key custom overlap windows.
