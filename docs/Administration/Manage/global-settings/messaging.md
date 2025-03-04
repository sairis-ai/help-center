# Messaging Templates Configuration Guide

## Table of Contents
- [Messaging Templates Configuration Guide](#messaging-templates-configuration-guide)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Accessing Messaging Templates](#accessing-messaging-templates)
  - [Messaging Settings Interface Overview](#messaging-settings-interface-overview)
  - [Message Template Types](#message-template-types)
    - [Invitation Templates](#invitation-templates)
    - [Verification Templates](#verification-templates)
    - [Multi-Factor Authentication Templates](#multi-factor-authentication-templates)
  - [Rich Text Editor](#rich-text-editor)
  - [Dynamic Placeholders](#dynamic-placeholders)
  - [Branding Integration](#branding-integration)
  - [Best Practices](#best-practices)
  - [Troubleshooting](#troubleshooting)

## Introduction

The Messaging Templates Configuration allows administrators to customize all system-generated communications sent to users. These communications include account invitations, verification codes, and multi-factor authentication (MFA) messages sent via email or SMS. By customizing these templates, you can ensure all system communications align with your organization's branding and communication style.

## Accessing Messaging Templates

The Messaging Templates configuration is accessible to users with specific roles:
- Admin
- Content
- Manager

To access this component, navigate to the Tenant Settings section and select "Messaging" from the menu.

## Messaging Settings Interface Overview

The Messaging Settings interface consists of these key components:

1. **Navigation Menu**: Left sidebar with options for different message types
   - Invitation
   - Verification
   - MFA
   - Help

2. **Content Area**: Main section that displays the template editor for the selected message type

3. **Help Section**: Informational content explaining the purpose and usage of message templates

Each message type has its own dedicated template editor with appropriate fields and options.

## Message Template Types

### Invitation Templates

The Invitation template is used when a new user account is created. It provides login credentials and instructions for accessing the system for the first time.

**Available Fields:**

1. **SMS Message**:
   - Used when sending invitations via text message
   - Must include `{username}` and `{####}` placeholders for username and temporary password
   - Example: `Your Sairis username is {username} and the temporary password is: {####}`

2. **Email Subject**:
   - Subject line for invitation emails
   - Example: `Your Company Name - Account Invitation`

3. **Email Body**:
   - HTML-formatted content for invitation emails
   - Rich text editor allows for formatted text, images, and layout customization
   - Must include `{username}` and `{####}` placeholders
   - "Apply Branding" button automatically creates a branded template

### Verification Templates

The Verification template is used when users need to verify their identity, such as during account recovery or when security policies require verification.

**Available Fields:**

1. **SMS Message**:
   - Used when sending verification codes via text message
   - Must include `{####}` placeholder for the verification code
   - Example: `Your verification code is: {####}`

2. **Email Subject**:
   - Subject line for verification emails
   - Example: `Your Company Name - Account Verification`

3. **Email Body**:
   - HTML-formatted content for verification emails
   - Must include either `{####}` placeholder or `{##Verify Email##}` for clickable verification link
   - "Apply Branding" button automatically creates a branded template

### Multi-Factor Authentication Templates

The MFA template is used when multi-factor authentication is enabled, sending a verification code to the user's mobile device.

**Available Fields:**

1. **SMS MFA Message**:
   - Text message sent during MFA challenges
   - Must include `{####}` placeholder for the verification code
   - Example: `Your authentication code is: {####}`

## Rich Text Editor

The system includes a comprehensive rich text editor for customizing email templates with the following features:

1. **Formatting Tools**:
   - Text styling (bold, italic, underline)
   - Font selection and sizing
   - Text and background color controls
   - Paragraph alignment options

2. **Content Tools**:
   - Bulleted and numbered lists
   - Links and images
   - Tables for structured layout
   - Source code view for direct HTML editing

3. **Preview Mode**:
   - Full-screen preview to see how the template will appear

## Dynamic Placeholders

Certain placeholders must be included in templates to provide personalized information to users:

1. **Required Placeholders**:
   - `{username}`: The user's login username
   - `{####}`: Temporary password or verification code
   - `{##Verify Email##}`: Creates a clickable verification link in email templates

2. **Placeholder Usage**:
   - Placeholders must be entered exactly as shown, including braces
   - SMS templates require plain text with placeholders
   - Email templates can incorporate placeholders into HTML design

## Branding Integration

The system can automatically apply your organization's branding to message templates:

1. **Apply Branding Button**:
   - Located in the top-right corner of each template editor
   - Generates a professionally designed template using your organization's:
     - Company name from tenant settings
     - Primary brand colors
     - Logo (if configured)
     - System hostname for proper links

2. **Brand Elements Applied**:
   - Header with company logo/name
   - Branded color scheme matching your tenant settings
   - Footer with legal information
   - Responsive design for various devices

## Best Practices

For effective messaging templates:

1. **Clear Communication**:
   - Keep instructions simple and straightforward
   - Prominently display important information (username, codes)
   - Include clear next steps for the user

2. **Branding Consistency**:
   - Use the "Apply Branding" feature to maintain visual consistency
   - Ensure colors and styling match your organization's brand guidelines
   - Include your company logo in email communications

3. **Mobile Optimization**:
   - Keep SMS messages concise (under 160 characters if possible)
   - Ensure email templates are responsive for mobile viewing
   - Test templates on different devices and email clients

4. **Security Considerations**:
   - Do not include sensitive information beyond required credentials
   - Inform users about the expiration time for verification codes
   - Include contact information for support

## Troubleshooting

**Issue**: Placeholders not being replaced with actual values
- Verify the exact format of placeholders (`{username}` and `{####}`)
- Check for extra spaces or characters in placeholders
- Ensure placeholders are in the correct template (invitation vs. verification)

**Issue**: HTML formatting not appearing in sent emails
- Verify HTML syntax in the source code view
- Test email in multiple email clients
- Check for missing closing tags or invalid HTML

**Issue**: "Apply Branding" button doesn't update template
- Ensure tenant settings include company name
- Verify branding colors are properly configured
- Try toggling between template types and back

**Issue**: SMS messages too long
- SMS messages should ideally be under 160 characters
- Consider abbreviating instructions
- Focus only on essential information for SMS templates

**Issue**: Email template looks different when received
- Different email clients render HTML differently
- Use simple, well-supported HTML elements
- Test with major email clients (Gmail, Outlook, etc.)

---

For additional assistance with messaging template configuration, please contact your system administrator.