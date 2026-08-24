---
kind: doc
status: published
title: Webhook retry policy
feature: Webhook retry policy
jira_issue: DOC-12
source: '[[prd/webhook-retry-policy]]'
applied_lessons:
  - L-001
  - L-002
  - L-004
approved_by: Truong Le Vinh Phuc
published_at: '2026-08-24T14:17:08.668Z'
related:
  - '[[prd/webhook-retry-policy]]'
---
# Webhook retry policy

## Overview
The webhook retry policy automatically retries failed webhook deliveries to ensure your system receives event notifications. When a delivery fails due to a non-2xx status code or a timeout, the system retries the delivery using an exponential backoff schedule. This helps maintain integration reliability during temporary destination server outages.

## Prerequisites
None.

## Steps
1. Navigate to **Settings** → **Webhooks**.
2. Select the webhook that has been marked disabled.
3. Re-enable the webhook to reset the retry count and resume deliveries.
4. Open the webhook's delivery log to view the status code and latency for every success and failure attempt (logs are retained for 30 days).

## FAQ

**What causes a webhook delivery to fail?**
A delivery is considered failed if your destination server returns a non-2xx status code or if the delivery attempt times out.

**What is the retry schedule for failed webhooks?**
Failed deliveries are retried with an exponential backoff at the following intervals:
* 1 minute
* 5 minutes
* 30 minutes
* 2 hours
* 12 hours

**What happens if all retry attempts fail?**
After 5 failed attempts, the webhook is automatically marked as disabled, and the system stops attempting further deliveries. You must manually re-enable it to reset the retry count and resume attempts.

**Can I configure a custom retry schedule?**
No. Configurable retry schedules are not supported.
