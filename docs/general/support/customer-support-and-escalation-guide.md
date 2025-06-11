# Sairis Customer Support and Escalation Guide

## Change History

| Date       | Version | Created by | Description of Change |
|------------|---------|------------|-----------------------|
| 04/16/2025 | 0.1     | Sairis     | Basic document outline |

## Overview

This guide outlines Sairis’s customer support processes, escalation paths, and service level agreements (SLAs) to ensure efficient issue resolution, compliant with ISO/IEC 27001:2022 and GDPR Article 32.

## Office Hours

- **Monday–Friday**: 7:00 AM – 6:00 PM MST
- **After Hours**: All other times, with extended SLA response times.

## Contact Methods

| Method            | Details                              | Office Hours Response | After Hours Response |
|-------------------|--------------------------------------|-----------------------|----------------------|
| **Email**         | `support@sairis.ai`                  | 4 hours               | 8 hours             |
| **Phone/Voicemail** | [Contact Sairis Support for Number] | 2 hours               | 2 hours             |

- **Security**: Support interactions use TLS 1.3 and AES-256 encryption for data protection.
- **Access**: Only authorized contacts may submit tickets. To add contacts, coordinate with your Customer Success Manager.

## How to Report Issues

### Content-Related Issues

Provide:
- Member login experiencing the issue.
- Device/serial number.
- Content details (e.g., “Recipe.pdf” in Organization > Recipes > Fall Menu).

If requested by Sairis Support:
- **Diagnostic Report**: Tap the gear icon, select “Generate Diagnostic Report,” and submit (encrypted with AES-256).
- **End-User Collaboration**: Work directly with affected users (e.g., managers, crew).

### Team Manager-Related Issues

Provide:
- Location number.
- Employee ID.
- Course or form name.
- Approximate date/time of the issue.

## Support Metrics and SLAs

### New Ticket Response Time

- **Description**: Tickets to `support@sairis.ai` receive an instant automated reply. Engineers and managers are notified via text and desktop app. Unassigned tickets escalate after 15 minutes.
- **SLAs**:
  - Business Hours: 12 minutes
  - After Hours: 23 minutes

### Regular Support Tickets

- **Description**: Issues not requiring software development, handled by engineers with access to servers, databases, backups, licensing, and monitoring systems (AWS CloudWatch, SIEM). Skills include debugging, database administration, and security.
- **SLAs**:
  - Business Hours: 3.1 hours
  - After Hours: 4.3 hours

### Software Bugs – Critical/Hot Fix

- **Description**: Bugs affecting >5% of users, preventing application use. Hotfixes are developed, tested, and applied outside normal cycles to servers or apps.
- **SLAs**:
  - Business Hours: 17.3 hours
  - After Hours: 22.5 hours

### Software Bugs – Major

- **Description**: Bugs impacting >5% of users, blocking a feature but with workarounds. Fixed in Agile 2-week sprints, with monthly releases.
- **SLA**: 4 weeks (Business or After Hours)

### Software Bugs – Minor

- **Description**: Bugs in obscure cases with workarounds, not impeding workflows.
- **SLA**: 8 weeks (Business or After Hours)

## Escalation Path

For unresolved issues, escalate as follows:
1. **VP of Operations**: `rfick@sairis.ai`
2. **CTO**: `rsmith@sairis.ai`


- **Process**: Escalations use MFA-secured channels, logged in Sairis’s ITSM system.

## Validity and Document Management

Valid as of April 16, 2025. The CTO (`rsmith@sairis.ai`) reviews and updates annually.

---

*Contact: For inquiries, email `support@sairis.ai`.*  
*Updated: April 16, 2025*