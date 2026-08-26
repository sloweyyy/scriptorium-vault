---
kind: doc
status: published
title: Scheduled digest emails
feature: Scheduled digest emails
jira_issue: DOC-32
source: '[[prd/scheduled-digest-emails]]'
applied_lessons:
  - L-001
  - L-002
  - L-004
approved_by: Alex Kim
published_at: '2026-08-26T10:27:06.045Z'
related:
  - '[[prd/scheduled-digest-emails]]'
---
# Scheduled digest emails

## Overview
Scheduled digest emails provide a periodic email summary of activity within Beacon, allowing you to stay informed without needing to check the dashboard every day. This summary ensures workspace admins do not miss quiet incidents that opened and resolved between visits. You can customize the frequency, delivery time, and included content sections to match your team's needs.

## Prerequisites
* You must have workspace admin access to the Beacon Admin console.

## Steps
1. Navigate to **Notifications › Digest emails** in the Beacon Admin console.
2. Select your preferred delivery cadence from the **Frequency** dropdown menu (choose **Daily** or **Weekly**).
3. If you selected **Weekly**, select the day of the week you want the email to send from the **Send day** dropdown menu.
4. Enter a delivery time in the **Send time** field (for example, `09:00` in your selected timezone, such as Asia/Ho_Chi_Minh timezone).
5. Select your preferred timezone from the **Timezone** dropdown menu (defaults to your workspace timezone, such as Asia/Ho_Chi_Minh timezone). The scheduled send time will be determined using this selected timezone.
6. Under **Include sections**, select the checkboxes for the content you want to include in the email: **Incidents**, **Maintenance**, and/or **Usage summary**.
7. Click **Save** to apply your settings.

## FAQ

**Who receives these digest emails?**
In v1, digest emails are sent to all workspace admins. This recipient list is fixed and cannot be configured.

**Can I choose what information is included in the digest?**
Yes. You can customize the digest to include Incidents, Maintenance, and/or Usage summary sections by checking the corresponding boxes under **Include sections**.

**What timezone is used for the scheduled send time?**
The send time is interpreted in the timezone selected in the **Timezone** dropdown menu (which defaults to your workspace's configured timezone, such as Asia/Ho_Chi_Minh timezone). All scheduled digest emails are sent according to this specified timezone.
