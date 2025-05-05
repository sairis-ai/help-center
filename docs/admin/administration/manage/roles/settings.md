# Role Settings Guide

## Introduction

The Role Settings interface allows administrators to configure detailed permissions and default settings for user roles. When you modify a role, all users assigned to that role will automatically inherit the new settings, providing an efficient way to manage permissions across your organization.

## Accessing Role Settings

The Role Settings interface is accessible to users with the following roles:
- Admin
- Content
- Manager

To access the settings for a role, first select the role from the list in the Role Manager, then navigate to the "Role Settings" tab.

## Role Settings Interface Overview

The Role Settings interface is organized into several sections:

1. **Header**: Shows the role name and description with action buttons
2. **Role Information**: Basic details about the role
3. **Access Levels**: Permissions for various administrative functions
4. **Application Modules**: Control which modules users can access
5. **Assistant Features**: Configure AI assistant capabilities
6. **User Preferences**: Default settings for users with this role

## Configuring Basic Role Information

The top section contains essential role details:

- **Role Name** (Required): A descriptive name for the role
- **Role Description**: Optional details about the role's purpose
- **Organization/Department**: Default organization for users with this role
- **User License**: Determines the level of AI capabilities
  - Generate: Full AI capabilities
  - Discover: Limited to question and answer functionality
- **Allocated Credits**: Monthly credit allocation (0 = unlimited)
- **Hard Stop Credit Count**: Maximum monthly credit limit (0 = unlimited)

## Access Level Configuration

### Permission Tiers

Control who can manage different parts of the application with three permission tiers:

- **Denied (0)**: No access to the feature or section
- **Assigned (1)**: Users can only manage content where they're named as an Owner with Edit rights
- **Global (2)**: Administrative oversight of all content in that section

### Content Managers & Reporting Permissions

Configure access to content management and reporting features:
- **Content Management**: Control permissions for managing content
- **Knowledge Bases Management**: Control permissions for managing knowledge bases
- **Blueprint Management**: Control permissions for managing AI blueprints
- **Group Management**: Control permissions for managing user groups
- **Reports & Dashboard Insights**: Control access to analytics and reporting
- **Test Case Management**: Control permissions for managing test cases

### Global Administration Permissions

Configure access to system-wide administration features:
- **User Management**: Control permissions for managing users
- **Global & AI Settings**: Control permissions for system configuration
- **Role Management**: Control permissions for managing roles

## Application Modules

Control which application modules are accessible to users with this role:

- **Content View**: Allow access to view lists of assigned content
- **Search View**: Enable search functionality across content
- **Learn Platform**: Enable access to learning resources

## Assistant Features

Configure AI assistant capabilities for users with this role:

- **Assistant Chat Bot**: Enable/disable the AI chatbot functionality
- **LaunchPad**: Enable/disable the organized content access interface
- **Assistant Control Panel**: Enable/disable the chat session management interface
- **Assistant Content Selector**: Enable/disable the ability to select content to chat with
- **Assistant AI Settings**: Enable/disable the ability to adjust AI behavior
- **Assistant Blueprints**: Enable/disable the ability to use predefined AI blueprints
- **Assistant Chat History**: Enable/disable saving of conversation history
- **Keep Chat History Duration**: Set how long (in days) chat history is retained

## User Preferences

Configure default settings that will be applied to users with this role:

- **Default AI Assistant Blueprint**: Pre-select an AI blueprint that will be loaded by default
- **Control Panel Expanded**: Set whether the control panel starts expanded or collapsed

## Managing Role Settings

### Saving Changes

After making changes to role settings:

1. Click the "Save" button in the top right corner
2. The system will save your changes and update all users assigned to the role
3. A confirmation message will appear once the update is complete

### Cloning a Role

To create a new role based on existing settings:

1. Click the "Clone" button in the top right corner
2. A new role will be created with "(Copy)" appended to the original name
3. Modify any settings as needed and save the new role

### Deleting a Role

To delete a role:

1. Click the "Delete" button in the top right corner
2. Confirm the deletion in the prompt that appears
3. Note: You cannot delete a role that has users assigned to it

## Troubleshooting

**Issue**: Changes not saving
- Verify all required fields are completed (Role Name is mandatory)
- Check for validation errors (red text under fields)
- Ensure you have appropriate permissions

**Issue**: "Services Error" message
- Note the error code provided in the message
- Check network connectivity
- Contact system administrator if the issue persists

**Issue**: Unable to delete a role
- Check if users are still assigned to the role
- Go to the "Assigned Users" tab and remove all users first

---

For additional assistance with role settings, please contact your system administrator.
