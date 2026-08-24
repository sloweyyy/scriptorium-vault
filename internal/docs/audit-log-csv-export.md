---
kind: doc
status: published
title: Audit log CSV export
feature: Audit log CSV export
jira_issue: DOC-6
applied_lessons:
  - L-001
  - L-002
approved_by: Truong Le Vinh Phuc
published_at: '2026-08-24T07:15:02.411Z'
---
# Audit log CSV export

## Overview
Workspace administrators can export the workspace audit log as a CSV file to perform compliance reviews. This feature allows you to filter the log by date range and actor before generating the export. Each export includes a SHA-256 checksum file alongside the CSV to ensure data integrity.

## Prerequisites
* You must have workspace administrator privileges.

## Steps
1. Access the audit log interface.
2. Apply a date range filter to scope the log data.
3. Apply an actor filter to scope the log to specific users or systems.
4. Trigger the export to download the CSV file and its corresponding SHA-256 checksum file.

## FAQ

**What is the maximum size of an exported file?**
Each exported CSV file is capped at 100,000 rows.

**How can I verify the integrity of the exported CSV file?**
Every export includes a SHA-256 checksum file alongside the CSV to verify that the data has not been altered.

**Are export activities tracked?**
Yes. Every export is recorded as an audit event within the log, which includes the identity of the administrator who performed the export and the filters applied.

**Can I schedule recurring exports or download the log in other formats?**
No. Scheduled or recurring exports and formats other than CSV are not supported.
