---
title: L-001 — Example lesson
status: approved
scope: all Beacon docs
approved_by: Truong Le Vinh Phuc
source: seed
---

## Rule

State time windows in UTC and give the local-time conversion only as a
parenthetical. Never write a bare local time.

## Why

The first draft of the published *Scheduled maintenance* doc used the
author's local timezone, which read as an outage to everyone outside it.

## How to apply

When a doc names a recurring window, render it as a table with an explicit
`(UTC)` column header, as in the published maintenance doc.
