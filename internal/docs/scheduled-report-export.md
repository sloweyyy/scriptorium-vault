---
kind: doc
status: published
title: Scheduled report export
feature: Scheduled report export
jira_issue: DOC-22
applied_lessons:
  - L-001
  - L-002
  - L-004
approved_by: Truong Le Vinh Phuc
published_at: '2026-08-24T14:17:09.288Z'
---
# Scheduled report export

## Overview
Scheduled report export allows workspace admins to receive periodic exports of usage data automatically without manual requests. Once configured, the system generates the usage report on your chosen schedule and delivers a download link directly to your email. This ensures consistent access to your workspace's historical usage data.

## Prerequisites
* Workspace administrator privileges.

## Steps
1. Navigate to **Settings** > **Reports**.
2. Select either a weekly or monthly schedule for your export. Scheduled exports are processed in Coordinated Universal Time (UTC).
3. Open the automated email sent to your inbox once the export is generated, and click the provided download link to retrieve your file.
   *Warning: Reports older than 90 days are automatically and permanently deleted. You must download and archive your files before this period ends, as they cannot be recovered.*

## FAQ

**How is the scheduled report delivered?**
The export is automatically sent to your email as a download link as soon as the file is generated.

**How long is the download link valid?**
The download link expires after 90 days. Reports older than 90 days are not kept in the system.

**What export frequencies can I choose?**
You can schedule your usage data exports to occur on either a weekly or monthly basis.
