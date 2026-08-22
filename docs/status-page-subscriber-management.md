---
kind: doc
status: published
title: Status page subscriber management
feature: Status page subscriber management
jira_issue: DOC-4
published_at: '2026-08-22T18:56:30.539Z'
---
# Status page subscriber management

## Overview
Status page subscriber management allows workspace admins to view, audit, and control who receives status notifications and how often they arrive. From the admin console, you can invite new subscribers, remove existing ones, export subscriber lists, and configure daily digest delivery settings. This ensures your audience receives updates at their preferred frequency while maintaining an auditable subscriber list.

## Prerequisites
* You must be a workspace admin.

## Steps
1. Navigate to **Subscribers → Manage** in the admin console to view the subscriber list.
2. Click the export option to download the subscriber list as a CSV file.
3. Click the invite option to open the subscriber invitation interface.
4. Enter up to 50 email addresses into the invitation field.
5. Click the send option to dispatch confirmation emails to the entered addresses.
6. Click the remove option next to a subscriber's entry to unsubscribe them. **Warning:** This action is irreversible and the subscriber does not receive a notification.
7. Select the hour of the day for the daily digest delivery, which uses the selected timezone.
8. Select the timezone for the daily digest delivery using the timezone selector.

## FAQ

**Can subscribers manage their own notification preferences?**
Yes. Subscribers can change their delivery mode or unsubscribe at any time using the footer link in any status email. These changes reflect in the admin console within one minute.

**What are the available delivery modes for subscribers?**
Subscribers can choose between **Immediate** (an email sent for every status change, which is the default) and **Daily digest** (a single email covering the previous 24 hours).

**Is a daily digest email sent if there are no status changes?**
No. The daily digest is skipped entirely on days when no status changes occur.

**Can I configure different delivery modes for different components?**
No. Per-component delivery modes are not supported. A subscriber's chosen delivery mode applies to all components they follow.
