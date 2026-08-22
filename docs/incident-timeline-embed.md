---
kind: doc
status: published
title: Incident Timeline Embed
feature: Incident Timeline Embed
jira_issue: DOC-5
published_at: '2026-08-22T19:34:36.010Z'
---
# Incident Timeline Embed

## Overview
The Incident Timeline Embed allows workspace admins to display a read-only, real-time incident timeline on any external website or help center. The embedded timeline automatically refreshes every 60 seconds without a page reload, ensuring your external pages stay in sync with your public status page. All timestamps within the embed automatically render in the viewer's local timezone.

## Prerequisites
* Workspace administrator access.

## Steps
1. Navigate to **Settings** > **Status page** > **Embed timeline**.
2. Select the specific components you want to scope to this embed. 
3. Generate the HTML snippet.
   
   > **WARNING:** Regenerating an embed snippet permanently and irreversibly revokes the previously generated snippet. Any external pages hosting the revoked snippet will immediately display a "timeline unavailable" placeholder instead of the incident timeline.

4. Copy the generated HTML snippet.
5. Paste the snippet into the HTML code of your external hosting page.

## FAQ

**Does the embed require viewers to authenticate?**
No. The embed works with no authentication and will only display information that is already publicly visible on your status page.

**Can viewers make changes to the incident timeline from the embed?**
No. The embed is strictly read-only and does not support write access of any kind. Additionally, the component scope is baked into the snippet at generation time and cannot be edited by the hosting page.

**What information is displayed in the embed?**
The embed displays the current incident timeline, including the incident title, severity, affected components, and each update with its timestamp.

**Are historical incidents displayed in the embed?**
No. Historical incidents older than 90 days are not supported and will not be displayed.

## Related articles
* [Status page overview](status-page-overview)
