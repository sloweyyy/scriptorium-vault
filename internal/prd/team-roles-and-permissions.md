---
kind: prd
feature: Team roles and permissions
jira_issue: DOC-13
source_ticket: 'https://slowey.atlassian.net/browse/DOC-13'
filed: '2026-08-24T13:00:14.498Z'
related:
  - '[[docs/team-roles-and-permissions]]'
---
# PRD — Team roles and permissions

## Feature

Team roles and permissions

## Audience

workspace admins

## User goal

restrict what teammates can see and change based on their assigned role

## Requirements

# Three roles: _Admin_ (full access), _Editor_ (can publish, cannot manage billing or members), _Viewer_ (read-only).

# Role is assigned per member from Settings → Team.

# A member with no role assigned defaults to Viewer.

# Changing a member's role takes effect immediately, without requiring them to log out.

## Out of scope

- Custom roles.
- Per-resource permission overrides.
