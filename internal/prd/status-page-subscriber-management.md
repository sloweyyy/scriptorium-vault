---
kind: prd
feature: Status page subscriber management
jira_issue: DOC-4
source_ticket: 'https://slowey.atlassian.net/browse/DOC-4'
filed: '2026-08-22T17:54:54.061Z'
related:
  - '[[docs/status-page-subscriber-management]]'
---
# PRD — Status page subscriber management

**Feature:** Status page subscriber management
**Audience:** workspace admins
**User goal:** Control who receives status notifications and how often they arrive

## Problem

Anyone can subscribe to a Beacon status page, but admins cannot see who is subscribed, cannot remove a subscriber who left the customer's team, and cannot offer anything between "every update, immediately" and "nothing at all". Enterprise customers ask for both — a subscriber list they can audit, and a digest for people who only need the daily summary.

## Requirements

1. **Subscribers → Manage** in the admin console lists every subscriber with their email, the components they follow, their delivery mode, and the date they subscribed.
1. Admins can **remove** a subscriber. Removal is immediate and sends no notification.
1. Admins can **invite** subscribers by entering up to 50 email addresses at once. Each invited address receives a confirmation email and only becomes a subscriber after confirming.
1. Each subscriber chooses a **delivery mode**: Immediate (an email per status change) or Daily digest (one email covering the previous 24 hours). Immediate is the default.
1. Admins set the workspace's **digest send time** — an hour of the day plus a timezone selector, defaulting to the workspace timezone. The digest is skipped entirely on days with no status changes.
1. A subscriber can change their own delivery mode or unsubscribe from the footer link in any status email; those changes appear in the admin list within a minute.
1. The subscriber list can be **exported as CSV** (email, components, delivery mode, subscribed date). Export is available to workspace admins only.

## Out of scope

- Per-component delivery modes (a subscriber's mode applies to everything they follow).
- SMS or webhook delivery.
