---
kind: doc
status: published
title: Bulk export
feature: Bulk export
jira_issue: DOC-14
source: '[[prd/bulk-export]]'
applied_lessons:
  - L-001
  - L-002
approved_by: Truong Le Vinh Phuc
published_at: '2026-08-24T13:14:15.804Z'
related:
  - '[[prd/bulk-export]]'
---
# Bulk export

## Overview
Bulk export allows workspace admins to retrieve a complete backup of all workspace data. This feature supports compliance retention requirements by packaging your workspace data into a downloadable ZIP file.

## Prerequisites
* You must be a workspace admin.

## Steps
1. Initiate the bulk export for your workspace data.
2. Wait for the asynchronous export process to complete.
3. Open the email notification sent to your inbox once the export is ready.
4. Click the download link in the email to download the ZIP file containing your workspace data. This download link is valid for 7 days before it expires.

## FAQ
**What format is the exported data in?**
All workspace data is packaged and downloaded as a ZIP file.

**How will I receive the export?**
Because the export runs asynchronously, a download link will be emailed to you as soon as the ZIP file is ready. This link remains valid for 7 days before it expires.

**Who can run a bulk export?**
Only workspace admins have the permissions required to export workspace data.
