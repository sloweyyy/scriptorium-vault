---
kind: doc
status: published
title: Scheduled digest emails
feature: Scheduled digest emails
jira_issue: DOC-32
published_at: '2026-08-24T18:42:50.189Z'
---
# Scheduled digest emails

## Overview
Scheduled digest emails provide a periodic email summary of activity within Beacon, allowing you to stay informed without needing to check the dashboard every day. This summary ensures workspace admins do not miss quiet incidents that opened and resolved between visits. You can customize the frequency, delivery time, and included content sections to match your team's needs.

## Prerequisites
* You must have workspace admin access to the Beacon Admin console.

## Steps
1. Navigate to **Notifications › Digest emails** in the Beacon Admin console.
2. Select your preferred delivery cadence from the **Frequency** dropdown menu (choose **Daily**, **Weekly**, or **Monthly**).
3. If you selected **Weekly** or **Monthly**, select the day of the week you want the email to send from the **Send day** dropdown menu.
4. Enter a delivery time in the **Send time** field (for example, `09:00`) which will execute according to your selected timezone.
5. Select your preferred timezone from the **Timezone** dropdown menu (defaults to your workspace timezone). The scheduled send time will be determined using this selected timezone.
6. Under **Include sections**, select the checkboxes for the content you want to include in the email: **Incidents**, **Maintenance**, and/or **Usage summary**.
7. Select the target recipient group from the **Recipients** dropdown menu (for example, **Workspace admins**).
8. Click **Save** to apply your settings.
9. (Optional) Click **Send test digest now** to immediately dispatch a test digest email.

## FAQ

**Who receives these digest emails?**
You can configure the recipient group using the **Recipients** dropdown menu (for example, selecting **Workspace admins**). 

**Can I choose what information is included in the digest?**
Yes. You can customize the digest to include Incidents, Maintenance, and/or Usage summary sections. You must select at least one of these sections to save your settings.

**What timezone is used for the scheduled send time?**
The send time is interpreted in the timezone selected in the **Timezone** dropdown menu, which defaults to your workspace's configured timezone. All scheduled digest emails are sent according to this specified timezone.

**Can I send a test email to verify the setup?**
Yes. You can click the **Send test digest now** button to send a test digest email immediately to the configured recipients.
