---
kind: doc
status: published
title: Scheduled maintenance announcements
feature: Scheduled maintenance announcements
jira_issue: DOC-27
source: '[[prd/scheduled-maintenance-announcements]]'
applied_lessons:
  - L-001
  - L-002
  - L-004
approved_by: Truong Le Vinh Phuc
published_at: '2026-08-24T15:23:11.139Z'
related:
  - '[[prd/scheduled-maintenance-announcements]]'
---
# Scheduled maintenance announcements

## Overview
Scheduled maintenance announcements allow workspace admins to notify status-page subscribers about planned maintenance before it begins. By scheduling these windows in advance, you can prevent unexpected support tickets and maintain subscriber trust. During the active maintenance window, your public status page displays a maintenance banner, and affected components show a wrench icon instead of a standard status dot.

## Prerequisites
* You must be a workspace admin to access the admin console.

## Steps
1. Navigate to **Announcements** › **New maintenance** in the admin console.
2. Enter a **Title** (maximum of 120 characters) to describe the planned maintenance.
3. Enter the **Start** date and time and the **End** date and time, ensuring the end time is after the start time (for example, starting at 2026-08-20 01:00 Asia/Ho_Chi_Minh and ending at 2026-08-20 03:00 Asia/Ho_Chi_Minh).
4. Select the appropriate timezone from the **Timezone** dropdown, which defaults to your workspace timezone.
5. Select the **Severity** level (Minor, Major, or Critical) from the dropdown.
6. Under **Affected components**, select the checkboxes for the components impacted by this maintenance.
7. (Optional) Enter additional details in the **Description (optional)** text box.
8. Toggle **Notify subscribers** on (default) or off to control email notifications, which are sent upon publishing and as a reminder 24 hours before the start time (for example, 2026-08-19 01:00 Asia/Ho_Chi_Minh).
9. Click **Publish** to schedule the maintenance, or click **Save as draft** to save the announcement without publishing it.

## FAQ

**What do subscribers see on the status page during the maintenance window?**
Between the scheduled start and end times, the public status page displays an amber maintenance banner showing the title and the time window rendered in the visitor's local timezone (for example, 2026-08-20 01:00 Asia/Ho_Chi_Minh). Additionally, any affected components will display a wrench icon instead of their standard status dot.

**Can I edit or cancel a maintenance announcement after it has been published?**
Yes. You can edit or cancel a maintenance announcement at any time until its scheduled end time.

**Will subscribers be notified if I cancel a scheduled maintenance?**
Subscribers will receive a cancellation email notification only if the initial start notification has already been sent.

**What notification channels are supported for maintenance announcements?**
Only email notifications are supported. SMS, webhooks, and recurring maintenance windows are currently out of scope.
