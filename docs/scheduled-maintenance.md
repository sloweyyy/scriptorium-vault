---
title: Scheduled maintenance
description: What to expect during a Beacon maintenance window, and how to check whether one is in progress.
---

Beacon applies platform updates during a weekly maintenance window. Most updates
are applied with no interruption; the window exists for the small number that
require a restart.

## When the window is

| Environment | Window (UTC) |
| --- | --- |
| Production | Sunday 02:00 – 04:00 |
| Sandbox | Thursday 02:00 – 04:00 |

Maintenance never starts outside the window. If Beacon is unavailable at any
other time, treat it as an incident rather than maintenance.

## What happens to your work

- **In-flight requests** are drained before a restart, so nothing you have
  already submitted is lost.
- **Scheduled jobs** that would have fired during a restart are queued and run
  once the service is back, in their original order.
- **Active sessions** stay signed in. You may see a single retryable error if a
  request lands mid-restart.

## Checking whether a window is active

Open **Settings → System status**. An active window shows a banner with the
expected end time. The same information is available from the status endpoint if
you need to gate your own automation on it.

## If Beacon is still unavailable after the window

Collect the request ID from the error banner and contact support. Do not retry a
write more than once — see [[Retry and idempotency]] for how Beacon deduplicates
repeated writes.
