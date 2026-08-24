---
kind: doc
status: published
title: Scheduled Maintenance Announcements
feature: Scheduled Maintenance Announcements
jira_issue: DOC-26
source: '[[prd/scheduled-maintenance-announcements]]'
applied_lessons:
  - L-001
  - L-002
  - L-004
approved_by: Truong Le Vinh Phuc
published_at: '2026-08-24T14:17:07.885Z'
related:
  - '[[prd/scheduled-maintenance-announcements]]'
---
# Scheduled Maintenance Announcements

## Overview
Scheduled maintenance announcements allow workspace admins to notify status-page subscribers about planned maintenance windows before they begin. By scheduling these windows in advance, you can proactively communicate service interruptions and maintain subscriber trust. During the active maintenance window, the public status page displays an amber banner and replaces status dots with wrench icons for all affected components.

## Prerequisites
* None.

## Steps
1. Navigate to **Announcements** and select **New maintenance** in the Beacon Admin console.
2. Enter a name in the **Title** field (maximum of 120 characters).
3. Enter the scheduled start date and time in the **Start** field, and select the applicable timezone from the **Timezone** dropdown (which defaults to your workspace timezone, such as Asia/Ho_Chi_Minh).
4. Enter the scheduled end date and time in the **End** field, ensuring the end time is set after the start time in the selected timezone.
5. Under **Affected components**, select the checkboxes for the components impacted by this maintenance (you must select at least one component).
6. (Optional) Provide additional details in the **Description (optional)** text box.
7. Choose whether to keep the **Notify subscribers** toggle enabled (on by default, which sends an email to subscribers upon publication and a reminder email 1 hour before the scheduled start time in the selected timezone).
8. Click **Publish** to schedule the maintenance.

## FAQ

**What changes on the public status page during the maintenance window?**
Between the scheduled start and end times, the public status page displays an amber maintenance banner showing the title and the time window rendered in the visitor's local timezone. Additionally, the status dots for all selected affected components are replaced with a wrench icon.

**When are subscribers notified about scheduled maintenance?**
If the "Notify subscribers" toggle is enabled, subscribers receive an email notification immediately when the announcement is published, followed by a reminder email 1 hour before the scheduled start time (in the selected timezone).

**Can I edit or cancel a scheduled maintenance announcement?**
Yes. You can edit or cancel an announcement at any time until its scheduled end time in the selected timezone. If you cancel the maintenance, subscribers will be notified only if the initial start notification has already been sent.

**Can I schedule recurring maintenance windows or send notifications via SMS?**
No. Recurring maintenance windows, SMS notifications, and webhook notifications are not supported. Notifications are sent via email only.
