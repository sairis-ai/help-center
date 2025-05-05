# Verification Message Configuration Guide

## Introduction

The Verification Message Configuration interface provides administrators with specialized tools to customize the communications sent when users need to verify their identity, reset passwords, or recover their accounts. This template editor allows you to create personalized verification emails and SMS messages that deliver security codes and verification links in a way that aligns with your organization's branding and communication style.

## Accessing Verification Message Configuration

The Verification Message Configuration interface is accessible within the Tenant Messaging settings:

1. Navigate to the Administration section from the main menu
2. Select "Tenant Settings" and choose the "Messaging" tab
3. Click "Verification" from the messaging menu on the left

**Note**: You need Admin, Content, or Manager role permissions to configure verification messages.

## Understanding Verification Messages

Verification messages serve critical security and account recovery functions:

### When Verification Messages Are Sent

These messages are triggered when:
- A user requests a password reset
- Account verification is required during registration
- Security policies require identity confirmation
- A user attempts to recover account access
- Suspicious login activity is detected

### Delivery Methods

The system supports two delivery channels:
- **Email**: Rich HTML messages with formatting, branding, and verification links
- **SMS**: Plain text messages with verification codes for mobile device delivery

The system will use the appropriate channel based on the user's available contact information, with email being the preferred method when both are available.

## Verification Message Configuration Interface

The configuration interface is divided into three main sections:

1. **SMS Message Configuration**: For text-based mobile messages
2. **Email Subject Configuration**: For email subject lines
3. **Email Body Editor**: Rich HTML editor for email content

### SMS Message Configuration

The SMS configuration field allows you to create a plain text verification message:

- **Character Constraints**: SMS messages should be concise due to length limitations
- **Required Placeholders**: Must include `{####}` for the verification code
- **Username Inclusion**: Consider including `{username}` to clarify which account
- **Best Practice**: Include your organization name and expiration information
- **Example Format**: "Your [Company] verification code is: {####}. Valid for 15 minutes."

### Email Subject Configuration

The subject line editor allows you to create a clear email subject:

- **Length Consideration**: Keep subjects under 50 characters for optimal visibility
- **Organization Inclusion**: Include your company name for immediate recognition
- **Purpose Clarity**: Clearly indicate this is a verification message
- **Example Format**: "[Company Name] Account Verification Code"

### Email Body Editor

The rich text editor provides comprehensive tools for creating professional verification emails:

#### Editor Toolbar

The toolbar includes formatting options such as:
- Text formatting (Bold, Italic, Underline)
- Font selection and sizing
- Text and background colors
- Alignment controls
- List formatting (ordered and unordered)
- Link creation
- Image insertion
- HTML source code editing
- Full-screen editing mode

#### Template Design Areas

A typical verification email includes several key sections:

1. **Header**: Company logo and branding elements
2. **Security Context**: Brief explanation of why the verification is needed
3. **Verification Code**: Prominently displayed verification code using placeholder
4. **Alternative Verification Link**: Email-based verification option using placeholder
5. **Expiration Information**: How long the code/link remains valid
6. **Security Reminders**: Instructions if the user didn't request verification
7. **Support Information**: Contact details for assistance
8. **Footer**: Legal information and company details

## Using Dynamic Placeholders

Placeholders are essential variables that get replaced with user-specific information when messages are sent:

### Required Placeholders

These placeholders **must** be included in your verification templates:

1. **Verification Code**: `{####}`
   - Inserts the system-generated verification code
   - Required for SMS and email verification
   - Should be visually highlighted for easy identification
   - Typically 6-8 digits depending on your security settings

2. **Email Verification Link**: `{##Verify Email##}`
   - Creates a clickable verification link in email templates
   - Optional but recommended for email verification
   - Provides a one-click alternative to entering codes
   - May not be available for all verification scenarios

### Optional Placeholders

These placeholders can be used to personalize verification messages:

1. **Username**: `{username}`
   - Inserts the user's username
   - Helps identify which account needs verification
   - Useful when users have multiple accounts

## Template Customization Best Practices

### Email Design Best Practices

For effective verification emails:

1. **Professional Appearance**:
   - Use your organization's logo and colors
   - Maintain consistent branding with your platform
   - Use a clean, readable layout
   - Include appropriate spacing between sections

2. **Content Structure**:
   - Start with a clear purpose statement
   - Display the verification code prominently
   - Include clear instructions for using the code
   - Mention expiration timing
   - Provide alternative verification methods when available

3. **Security Considerations**:
   - Include instructions for users who didn't request a verification
   - Avoid including sensitive account details
   - Never ask for additional personal information
   - Include recognizable security elements from your brand

4. **Responsive Design**:
   - Ensure your template works on mobile devices
   - Use tables for consistent layout across email clients
   - Test on multiple screen sizes and email clients
   - Keep critical information "above the fold"

### SMS Design Best Practices

For effective verification SMS messages:

1. **Brevity and Clarity**:
   - Keep messages under 160 characters when possible
   - Focus only on the verification code and basic instructions
   - Begin with your organization name for context
   - Clearly indicate the purpose of the code

2. **Security Considerations**:
   - Include enough context to verify legitimacy
   - Mention expiration timing (e.g., "Valid for 10 minutes")
   - Provide a way to report unrequested verification attempts
   - Never ask for additional information via SMS

## Factory Reset Option

If you need to revert to the system default template:

1. Click the "Factory Reset Verification Template" button in the top-right corner
2. The system will replace your current templates with the default versions
3. Default templates include your current branding colors and company name
4. You can further customize the default templates after reset

**Note**: This action cannot be undone, so consider saving a copy of your current template if needed.

## Template Saving and Testing

Templates are saved automatically as part of your tenant configuration:

1. Changes to templates are preserved when you navigate away from the page
2. No explicit "Save" button is needed
3. Templates use your current branding colors automatically
4. If you update branding colors, you can reset the template to adopt new colors

To test your configured templates:

1. Trigger a password reset or verification process
2. Observe the verification message received
3. Verify all placeholders are correctly replaced
4. Test the verification process using the provided code or link
5. Verify the expiration behavior works as expected

## Security Considerations

Verification messages are a critical security component:

1. **Code Complexity**: The system generates verification codes with sufficient security
2. **Expiration Timing**: Codes expire based on your security settings (typically 10-30 minutes)
3. **Rate Limiting**: Systems prevent abuse through request rate limiting
4. **Logging**: All verification attempts are logged for security monitoring

## Troubleshooting

**Issue**: Placeholders not appearing properly in sent messages
- Verify placeholder syntax is exactly as shown: `{####}` and `{##Verify Email##}`
- Check if placeholders were accidentally deleted or modified
- Ensure placeholders are not inside HTML tags that might hide them
- Try resetting to the default template

**Issue**: Email verification links not working
- Check that the `{##Verify Email##}` placeholder is correctly included
- Verify the placeholder is inside an `<a href="...">` tag
- Ensure the HTML structure around the link is valid
- Try testing with the default template

**Issue**: Messages not being delivered
- Verify recipient contact information is correct
- Check system logs for sending errors
- Ensure message content doesn't trigger spam filters
- Confirm the delivery service is properly configured

**Issue**: Verification codes expiring too quickly
- Check your security settings for code expiration timing
- Consider extending the expiration window if users report issues
- Include clear expiration information in the message
- Provide an easy way to request a new code

---

For additional assistance with verification message configuration, please contact your system administrator or support team.
