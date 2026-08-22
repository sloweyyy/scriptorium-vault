---
kind: doc
status: published
title: Incident timeline embed
feature: Incident timeline embed
jira_issue: DOC-5
published_at: '2026-08-22T19:18:13.521Z'
---
# Incident timeline embed

## Overview
The Incident Timeline Embed allows you to display a read-only, real-time incident timeline on any external page, such as a help center. The embed automatically refreshes every 60 seconds without a page reload, displaying the incident title, severity, affected components, and updates with timestamps in the viewer's local timezone. This ensures your external pages stay synchronized with your public status page during active incidents without manual copying.

## Prerequisites
None.

## Steps
1. Navigate to **Settings** → **Status page** → **Embed timeline**.
2. Select the components you want to scope the embed to. 
3. Generate the HTML snippet.
   
   **WARNING:** Regenerating a snippet immediately and irreversibly revokes the previously generated snippet. Any external pages hosting the revoked snippet will immediately display a "timeline unavailable" placeholder instead of the timeline.

4. Copy the generated HTML snippet and paste it into the code of your external page.

## FAQ

**Does the embed require viewers to authenticate?**
No. The embed works with no authentication and only displays information that is already publicly visible on your status page.

**What timezone are the timestamps displayed in?**
All timestamps in the embed render automatically in the viewer's local timezone.

**Can I customize the theme of the embed?**
The embed supports automatic light and dark mode detection. Further custom theming is not supported.

**Can we display historical incidents?**
No. Historical incidents older than 90 days are not supported and will not be displayed in the embed.

## Related articles
* [Status page overview](status-page-overview)
