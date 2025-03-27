# Security Settings Configuration Guide

<!--
## Table of Contents
- [Security Settings Configuration Guide](#security-settings-configuration-guide)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Accessing Security Settings](#accessing-security-settings)
  - [Multi-Factor Authentication](#multi-factor-authentication)
  - [Identity Providers](#identity-providers)
    - [Sairis Native Security](#sairis-native-security)
    - [OIDC Integration](#oidc-integration)
    - [SAML 2.0 Integration](#saml-20-integration)
  - [Password Policy Configuration](#password-policy-configuration)
  - [OIDC Provider Configuration](#oidc-provider-configuration)
    - [Basic Configuration](#basic-configuration)
    - [Endpoint Management](#endpoint-management)
    - [Attribute Mapping](#attribute-mapping)
    - [Identity Provider Identifiers](#identity-provider-identifiers)
  - [SAML Provider Configuration](#saml-provider-configuration)
    - [Basic Configuration](#basic-configuration-1)
    - [Metadata Document](#metadata-document)
    - [SAML Signing and Encryption](#saml-signing-and-encryption)
    - [Attribute Mapping](#attribute-mapping-1)
    - [SAML Identifiers](#saml-identifiers)
  - [Best Practices](#best-practices)
  - [Troubleshooting](#troubleshooting)
--> 

## Introduction

The Security Settings component allows administrators to configure authentication methods, multi-factor authentication (MFA), and identity provider integrations for your organization. These settings determine how users authenticate with the system and what security measures are required for account access.

## Accessing Security Settings

![homepage](/images/settings-security.png)

The Security Settings component is accessible to users with specific roles:
- Admin
- Content
- Manager

To access this component, navigate to the Tenant Settings section in the administration interface.

## Multi-Factor Authentication

Multi-Factor Authentication (MFA) adds an extra layer of security by requiring users to provide a second verification method beyond their password. The system supports SMS-based MFA, sending a one-time password (OTP) to the user's mobile phone.

Three MFA options are available:

1. **MFA Off**: 
   - No additional authentication required beyond username/password
   - Lowest security option
   - Fastest login experience

2. **MFA On (Everyone)**:
   - All users must provide a mobile phone number
   - All users must verify via SMS code when logging in on new devices
   - Highest security option
   - Ensures consistent security policy across the organization

3. **MFA Optional (Per User)**:
   - Individual users can be configured for MFA
   - MFA can be enabled for specific users or roles
   - Balance between security and flexibility
   - Allows gradual rollout of MFA

## Identity Providers

The system supports three authentication approaches:

### Sairis Native Security

The default authentication method provided by the platform:
- Built-in user management
- Password-based authentication
- Configurable password policies
- Support for MFA
- Can act as an OIDC provider for other applications

### OIDC Integration

Connect to an existing OpenID Connect (OIDC) provider:
- Single Sign-On (SSO) with existing identity systems
- Delegate authentication to external providers
- Support for major providers like Google, Microsoft, Okta, Auth0
- Attribute mapping for user profile information

### SAML 2.0 Integration

Connect to an existing SAML 2.0 provider:
- Enterprise-grade SSO integration
- Support for legacy identity systems
- Digital signing and encryption options
- Attribute mapping for user profile information

## Password Policy Configuration

When using Sairis Native Security, you can configure comprehensive password policies:

1. **Password Minimum Length**:
   - Set the minimum number of characters required
   - Range: 6-99 characters
   - Recommended: 8 or more characters
   - Default: 8 characters

2. **Temporary Password Validity**:
   - Number of days before temporary passwords expire
   - Range: 0-365 days
   - Default: 30 days
   - Setting to 0 means passwords never expire

3. **Password Strength Requirements**:
   - **Require Lowercase Letters**: When enabled, passwords must include at least one lowercase letter
   - **Require Uppercase Letters**: When enabled, passwords must include at least one uppercase letter
   - **Require Numbers**: When enabled, passwords must include at least one numeric character
   - **Require Special Characters**: When enabled, passwords must include at least one special character

All strength requirements are enabled by default, providing maximum security.

## OIDC Provider Configuration

When "Identity Provider - OIDC" is selected, you must configure the OIDC integration:

### Basic Configuration

1. **Provider Name**:
   - Friendly name for the identity provider
   - Used in administration interfaces
   - Example: "Corporate OIDC", "Google SSO", "Okta"

2. **Client ID**:
   - Identifier issued by your OIDC provider
   - Uniquely identifies your application with the provider
   - Obtained when registering with the identity provider

3. **Client Secret**:
   - Secret key issued by your OIDC provider
   - Should be kept confidential
   - Used to authenticate your application with the provider

4. **Authorized Scopes**:
   - OAuth 2.0 scopes that determine what information is requested
   - Default: "openid" (minimum required)
   - Additional options: profile, email, phone, etc.
   - Multiple scopes should be space-separated

5. **Attribute Request Method**:
   - HTTP method used to retrieve user attributes
   - Options: GET or POST
   - Default: GET
   - Should match the configuration of your provider

### Endpoint Management

Two options for configuring endpoints:

1. **Auto Fill via Issuer URL**:
   - Automatically discovers endpoints using OpenID Connect discovery
   - Requires only the Issuer URL to be provided
   - System retrieves all endpoint URLs from the provider's discovery document
   - Recommended for most configurations

2. **Manually Configure Endpoints**:
   - Allows direct specification of all endpoint URLs
   - Required fields when selected:
     - **Authorization Endpoint**: URL for user authentication
     - **Token Endpoint**: URL for token exchange
     - **UserInfo Endpoint**: URL for retrieving user attributes
     - **JWKS URI Endpoint**: URL for JSON Web Key Set (for signature verification)
   - All URLs must include the full path, including "https://"

### Attribute Mapping

Maps OIDC attributes to user profile fields:

1. **Given Name**: Maps to user's first name
2. **Family Name**: Maps to user's last name
3. **Username**: Maps to login identifier
4. **Preferred Username**: Maps to display name
5. **Email**: Maps to user's email address
6. **Phone Number**: Maps to user's mobile phone

For each field, you must specify the corresponding attribute name from your OIDC provider.

### Identity Provider Identifiers

Optional domain identifiers for automatic provider selection:
- Allows routing users to the correct identity provider based on email domain
- Enter domain names that should be associated with this provider
- Example: "example.com" would route all users with @example.com emails
- Multiple domains can be entered (one per line)

## SAML Provider Configuration

When "Identity Provider - SAML 2.0" is selected, you must configure the SAML integration:

### Basic Configuration

1. **Provider Name**:
   - Friendly name for the SAML provider
   - Used in administration interfaces
   - Example: "Corporate SAML", "Azure AD", "ADFS"

2. **Add Sign-out Flow**:
   - When enabled, signing out from the application also signs out from the SAML provider
   - Creates a more seamless experience
   - Toggle on/off based on requirements

3. **IdP-initiated SAML Sign-in**:
   - **Require SP-initiated SAML assertions** (Recommended): More secure, requires sign-in to start from Sairis
   - **Accept SP-initiated and IdP-initiated SAML assertions**: More flexible, allows sign-in to start from the identity provider

### Metadata Document

SAML metadata document from your identity provider:
- XML document containing provider configuration details
- Includes certificates, endpoints, and entity IDs
- Paste the full XML document into the text area
- Required for establishing trust with the identity provider

### SAML Signing and Encryption

Advanced security options:

1. **Sign SAML Requests**:
   - When enabled, all SAML requests are digitally signed
   - Adds security by proving request authenticity
   - Requires trust configuration on the identity provider

2. **Require Encrypted SAML Assertions**:
   - When enabled, requires all SAML assertions to be encrypted
   - Enhances security by protecting data in transit
   - Requires proper key configuration

### Attribute Mapping

Maps SAML attributes to user profile fields:

1. **Given Name**: Maps to user's first name
2. **Family Name**: Maps to user's last name
3. **Username**: Maps to login identifier
4. **Preferred Username**: Maps to display name
5. **Email**: Maps to user's email address
6. **Phone Number**: Maps to user's mobile phone

For each field, you must specify the corresponding attribute name from your SAML provider.

### SAML Identifiers

Optional domain identifiers for automatic provider selection:
- Allows routing users to the correct identity provider based on email domain
- Enter domain names that should be associated with this provider
- Example: "example.com" would route all users with @example.com emails
- Multiple domains can be entered (one per line)

## Best Practices

For optimal security configuration:

1. **Multi-Factor Authentication**:
   - Enable MFA for all users when possible
   - At minimum, require MFA for administrative users
   - Ensure users have updated mobile phone numbers

2. **Password Policies**:
   - Use minimum length of 12+ characters for best security
   - Enable all character type requirements (upper, lower, number, special)
   - Set reasonable temporary password expiration (7-14 days)

3. **Identity Provider Integration**:
   - Use HTTPS for all endpoint URLs
   - Keep client secrets secure
   - Test the integration thoroughly before full deployment
   - Enable signing and encryption for SAML when supported

4. **Attribute Mapping**:
   - Verify attribute names exactly match those provided by your identity provider
   - Test with sample users before full deployment
   - Consider required vs. optional attributes in your provider

## Troubleshooting

**Issue**: Users cannot authenticate with external identity provider
- Verify client ID and secret are correct
- Check that all endpoint URLs are accessible
- Ensure attribute mappings match exactly what the provider sends
- Review identity provider logs for error details

**Issue**: MFA not working properly
- Verify user has a valid mobile phone number in their profile
- Check SMS service configuration in system settings
- Ensure proper country code is included with phone numbers

**Issue**: Password policy not enforced
- Verify Sairis Native Security is selected as the identity provider
- Check that policy settings are saved correctly
- Test with a new user account or password reset

**Issue**: SAML metadata document rejected
- Ensure the document is valid XML
- Check for any extraneous characters or encoding issues
- Verify the document is from a trusted provider
- Confirm the document includes all required elements
- Check with your internal IT department to confirm SAML settings

**Issue**: "Provider not found" error during login
- Check identifiers configuration for domain routing
- Verify the email domain matches the configured identifiers
- Ensure the identity provider is properly activated

---

For additional assistance with security configuration, please contact your system administrator or refer to the advanced administration documentation.