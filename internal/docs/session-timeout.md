---
kind: doc
status: published
title: Session timeout
feature: Session timeout
jira_issue: DOC-24
source: '[[prd/session-timeout]]'
applied_lessons:
  - L-001
  - L-002
  - L-004
approved_by: Truong Le Vinh Phuc
published_at: '2026-08-24T14:02:18.952Z'
related:
  - '[[prd/session-timeout]]'
---
# Session timeout

## Overview
Session timeout allows workspace administrators to secure their organization's data by controlling how long an inactive user session remains signed in. By configuring this setting, you ensure that idle sessions are automatically closed, protecting sensitive information from unauthorized access on unattended devices. Once the inactivity limit is reached, the user is signed out across all of their active devices.

## Prerequisites
* You must have workspace administrator privileges.

## Steps
1. Navigate to **Settings**.
2. Click on **Security**.
3. Configure the session timeout limit by entering a duration between 5 minutes and 24 hours. 

## FAQ

**What is the default session timeout limit?**
The default inactivity period before a session expires is 30 minutes.

**Are users notified before their session expires?**
Yes. Users will receive a warning 2 minutes before their session expires, at which point they can choose to extend their session.

**What happens when a session expires?**
Once a session expires due to inactivity, the user is automatically signed out on every device.
