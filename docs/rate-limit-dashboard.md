---
kind: doc
status: published
title: Rate limit dashboard
feature: Rate limit dashboard
jira_issue: DOC-15
published_at: '2026-08-25T02:47:24.062Z'
---
# Rate limit dashboard

## Overview
The Rate Limit Dashboard provides real-time visibility into your API rate-limit usage and remaining quota, helping you monitor traffic and avoid unexpected rate-limiting. It displays your current usage as a percentage of your plan's limit per API key and automatically refreshes every 30 seconds. The dashboard also tracks rate-limited requests over a rolling 24-hour window to help you identify and troubleshoot traffic spikes.

## Prerequisites
None.

## Steps
1. Navigate to the Rate Limit Dashboard page.
2. View the current usage percentage displayed for each of your API keys to monitor how close you are to your plan's rate limit.
3. Monitor the page for a warning banner, which automatically appears if your API usage crosses 80% of your plan's rate limit.
4. Review the rate-limited requests table to inspect the last 10 requests that returned a 429 error, including their timestamp and endpoint.

## FAQ

**How often does the usage data refresh?**
The usage data updates automatically every 30 seconds without requiring a page reload.

**What time window does the dashboard data cover?**
The dashboard displays data covering a rolling 24-hour window.

**Can I see historical rate limit data beyond 24 hours?**
No, historical data beyond the rolling 24-hour window is not supported.

**Can I set up email or webhook alerts for when my usage crosses the 80% threshold?**
No, email and webhook alerts on threshold crossings are not supported.
