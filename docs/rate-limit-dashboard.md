---
kind: doc
status: published
title: Rate limit dashboard
feature: Rate limit dashboard
jira_issue: DOC-10
published_at: '2026-08-24T13:14:16.957Z'
---
# Rate limit dashboard

## Overview
The Rate limit dashboard provides integrators with real-time visibility into their API rate-limit usage and remaining quota. By tracking usage before reaching limits, you can prevent integration disruptions and avoid receiving 429 rate-limit errors.

## Prerequisites
None.

## Steps
1. Navigate to the rate limit dashboard page.
2. View your current usage displayed as a percentage of your plan's rate limit, separated per API key. These metrics correspond to the `X-RateLimit-Limit` (total allowed requests) and `X-RateLimit-Remaining` (remaining allowed requests) HTTP response headers.
3. Monitor the dashboard for real-time updates, which refresh automatically every 30 seconds without a page reload.
4. Check the page for a warning banner, which automatically appears when your usage crosses 80%.
5. Review the rate-limited requests table to inspect the timestamp and endpoint of the last 10 requests that returned a 429 status code.

## FAQ

**How often does the dashboard update?**
The usage data updates automatically every 30 seconds without requiring you to reload the page.

**What time range does the dashboard data cover?**
The dashboard displays rate-limiting data within a rolling 24-hour window. Historical data beyond 24 hours is not available.

**Can I configure email or webhook notifications for rate limit warnings?**
No. Email and webhook alerts for threshold crossings are out of scope. Warnings are only displayed via the banner on the dashboard page.

**Which rate-limited requests are shown in the table?**
The table lists the last 10 requests that failed with a 429 rate-limit error, displaying the specific timestamp and endpoint for each.
