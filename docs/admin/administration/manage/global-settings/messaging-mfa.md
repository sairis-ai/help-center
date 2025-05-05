# MFA Message Configuration Guide

## Introduction

The Multi-Factor Authentication (MFA) Message Configuration interface allows administrators to customize the SMS messages sent when users authenticate using two-factor verification. This specialized template lets you format the security code delivery message to align with your organization's communication style while ensuring users can easily identify and use the verification code.

## Accessing MFA Message Configuration

The MFA Message Configuration interface is accessible within the Tenant Messaging settings:

1. Navigate to the Administration section from the main menu
2. Select "Tenant Settings" and choose the "Messaging" tab
3. Click "MFA" from the messaging menu on the left

**Note**: You need Admin, Content, or Manager role permissions to configure MFA messages.

## Understanding MFA Messages

MFA messages serve a critical security function in your authentication process:

### When MFA Messages Are Sent

These messages are triggered when:
- A user logs in with enabled MFA
- A user accesses the platform from a new device
- A user logs in from an unusual location
- Security policies require additional verification
- A user accesses sensitive functions that require MFA

### MFA Delivery Method

MFA verification uses SMS as the primary delivery method:
- SMS messages are sent to the user's registered mobile phone
- Delivery is typically immediate for real-time authentication
- Messages contain a time-limited security code
- The user must enter this code to complete login

## MFA Message Configuration Interface

The MFA message configuration is straightforward, focusing on a single template:

### SMS Message Configuration

The SMS configuration field allows you to create a plain text MFA message:

- **Character Constraints**: Keep messages concise for optimal delivery
- **Required Placeholders**: Must include `{####}` for the verification code
- **Company Identification**: Should include your organization name
- **Security Context**: Brief explanation of the verification purpose
- **Example Format**: "Your [Company] verification code is: {####}. Valid for 5 minutes."

## Special Considerations for MFA Messages

MFA messages have unique requirements:

### Security vs. Usability

The balance is critical:
- Messages must be secure enough to prevent misuse
- But simple enough for users to quickly understand during login
- Clarity and brevity are essential for a smooth authentication experience

### Immediacy Requirements

MFA messages must be designed for immediate action:
- Users are actively waiting for the code during the login process
- Any confusion or delay may result in authentication failures
- Clear instructions and prominent code display are essential

### Expiration Context

MFA codes typically have short expiration windows:
- Most codes expire within 5-10 minutes
- Include this timing information in the message
- This helps users understand if they need to request a new code

## Using Dynamic Placeholders

The MFA template requires a specific placeholder:

### Required Placeholder

This placeholder **must** be included in your MFA template:

**Verification Code**: `{####}`
- Inserts the system-generated MFA security code
- Required for the template to function
- Should be visually separated for easy identification
- Typically 6 digits depending on your security settings

## MFA Template Best Practices

For effective MFA SMS messages:

### Content Structure

1. **Organization Identification**:
   - Start with your company name for immediate recognition
   - Prevents confusion with other services that may send codes

2. **Purpose Statement**:
   - Clearly state this is an authentication or verification code
   - Helps distinguish from other types of messages

3. **Code Presentation**:
   - Make the code visually distinct (e.g., "Code: {####}")
   - Avoid placing the code at the beginning of the message
   - Ensure it's easily located in the middle of the message

4. **Expiration Information**:
   - Include how long the code remains valid
   - Helps users know when to request a new code

5. **Security Context**:
   - Brief mention that this is for account access
   - Optionally include the service name for multi-service organizations

### Language Considerations

1. **Clarity and Brevity**:
   - Use simple, direct language
   - Avoid technical jargon
   - Keep the entire message under 160 characters when possible

2. **Global Usage**:
   - If your organization is international, consider that SMS messages may:
     - Be received in different time zones
     - Be read by users with different language preferences
     - Display differently on various mobile devices

## Sample MFA Message Templates

These examples can be customized for your organization:

### Basic Template

[Company Name] verification code: {####}. Valid for 5 minutes.

### Extended Template

[Company Name] security code: {####}. Use this code to complete your sign-in. Valid for 5 minutes. Do not share this code.

### Context-Rich Template

[Company Name] authentication: Your secure sign-in code is {####}. This code expires in 5 minutes. If you didn't request this code, please contact support.

## MFA Configuration Testing

To test your configured MFA message:

1. Enable MFA for a test user account
2. Log in with that account
3. Observe the MFA message received
4. Verify the code is clearly displayed
5. Confirm the message is clear and actionable
6. Test from multiple device types if possible

## Troubleshooting

**Issue**: Placeholder not appearing properly in sent messages
- Verify placeholder syntax is exactly as shown: `{####}`
- Check if the placeholder was accidentally deleted or modified
- Ensure the placeholder is not inside special characters
- Try resetting to the default template

**Issue**: Messages not being delivered
- Verify user phone numbers are in international format (+1XXXXXXXXXX)
- Check system logs for SMS sending errors
- Confirm the SMS delivery service is properly configured
- Test with an alternative carrier if problems persist

**Issue**: Users confused by MFA messages
- Simplify the message language
- Ensure your company name is clearly visible
- Make the verification code stand out visually
- Add clearer instructions on how to use the code

**Issue**: Codes expiring before users can enter them
- Check your MFA timeout settings
- Consider extending the expiration window slightly
- Make the expiration time clear in the message
- Ensure your system clock is synchronized

## Additional MFA Security Considerations

While configuring MFA messages, keep these security aspects in mind:

1. **Phone Number Verification**:
   - Ensure user phone numbers are verified before enabling MFA
   - Prevent unauthorized changes to phone numbers
   - Implement a process for updating phone numbers securely

2. **Fallback Authentication**:
   - Have a backup method if SMS is unavailable
   - Consider recovery codes for emergency access
   - Document the recovery process for users

3. **Rate Limiting**:
   - The system automatically limits repeated code requests
   - Excessive requests may be temporarily blocked
   - This helps prevent SMS flooding attacks

4. **Audit Logging**:
   - All MFA activity is logged for security purposes
   - Failed MFA attempts are tracked and reportable
   - Monitor for unusual patterns of MFA usage

---

For additional assistance with MFA message configuration, please contact your system administrator or security team.
