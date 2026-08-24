---
kind: doc
status: published
title: API key rotation
feature: API key rotation
jira_issue: DOC-17
published_at: '2026-08-24T13:11:34.424Z'
---
# API key rotation

## Overview
API key rotation allows you to generate a new API key while keeping your existing key active to prevent service interruption during a maintenance window. During a 24-hour (Coordinated Universal Time / UTC) overlap window, both the old and new keys remain fully functional, giving you time to update your integrations. After this period, the old key automatically expires.

## Prerequisites
* Access to the Settings menu.
* An existing active API key.

## Steps
1. Navigate to **Settings** > **API keys**.
2. Click **Rotate** next to the API key you want to replace.
   > **WARNING:** This action is irreversible. Once you initiate rotation, the old API key is scheduled for permanent expiration and will automatically stop working exactly 24 hours (Coordinated Universal Time / UTC) after the rotation timestamp.
3. Copy the newly generated API key and update your active integrations.

## FAQ

**Can I customize the 24-hour overlap window for a specific key?**
No. Per-key custom overlap windows are not supported. The overlap window is fixed at exactly 24 hours (Coordinated Universal Time / UTC) for all keys.

**Is there a way to schedule automatic API key rotations?**
No. Automatic scheduled rotation is not supported. All key rotations must be performed manually.

**How can I audit when an API key was rotated?**
Each key rotation is logged in the system with the performing account and the exact timestamp (Coordinated Universal Time / UTC) of the action.
