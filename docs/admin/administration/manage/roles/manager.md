# User Role Manager Guide

## Introduction

The User Role Manager is a powerful administrative tool that allows administrators to manage user roles, permissions, and settings across the application. By defining roles with specific access levels and feature permissions, you can control what different groups of users can see and do within the system. Any changes made to a role automatically update all users assigned to that role.

<a href="/general/tutorials/create-roles-tutorials.html">
  <img src="/images/watch-tutorial-button.png" alt="User Tutorial" style="width:200px;">
</a>

## Accessing the Role Manager

The Role Manager is accessible to users with the following roles:
- Admin
- Content
- Manager

To access, navigate to the Role Manager page through the administration menu or directly via the appropriate URL.

## Role Manager Interface Overview

The Role Manager interface consists of these key components:

1. **Header Section**: Contains the component title "User Role Manager", description, and action buttons
2. **Role List Panel**: Left sidebar showing all available roles with search capabilities
3. **Role Configuration Area**: Main section for viewing and editing role details
4. **Tabbed Interface**: Organizes role settings into logical groupings

## Managing Roles

### Creating a New Role

To create a new role:

1. Click the "+ Role" button in the top-right corner of the header
2. Fill in the required information in the role configuration form:
   - **Role Name** (Required): A descriptive name for the role
   - **Role Description**: Optional details about the role's purpose
   - **Organization/Department**: Default organization for users with this role
   - **User License**: Select either "Generate" or "Discover"
   - **Allocated Credits**: Monthly credit allocation (0 = unlimited)
   - **Hard Stop Credit Count**: Maximum monthly credit limit (0 = unlimited)
3. Configure access levels and feature permissions (see sections below)
4. Click "Save" to create the role

### Selecting an Existing Role

To manage an existing role:

1. Find the role in the left sidebar list
   - Use the search box to filter by name if needed
   - Click the refresh button to update the list
2. Click on the role name to select it
3. The role's current configuration will load in the main panel

### Cloning a Role

To create a new role based on an existing one:

1. Select the role you want to clone
2. Click the "Clone" button in the top right of the role details panel
3. A new role will be created with "(Copy)" appended to the original name
4. Modify any settings as needed and save the new role

### Deleting a Role

To delete a role:

1. Select the role you want to delete
2. Click the "Delete" button in the top right of the role details panel
3. Confirm the deletion in the prompt that appears
   - Note: You cannot delete a role that has users assigned to it
   - You must first reassign or remove all users from the role

## Configuring Role Settings

### Access Level Configuration

Control who can manage different parts of the application with three permission tiers:

- **Denied (0)**: No access to the feature or section
- **Assigned (1)**: Users can only manage content where they're named as an Owner with Edit rights
- **Global (2)**: Administrative oversight of all content in that section

These permissions apply to:
- Content management
- Knowledge bases
- Blueprints
- Groups
- Test cases
- Reporting features

#### Content Managers & Reporting Permissions

Configure access to content management and reporting features:
- Admin Content
- Admin AI Blueprint
- Admin AI KB
- Admin Test Case
- Admin Group
- Admin Dashboard

#### Global Administration Permissions

Configure access to system-wide administration features:
- Admin User
- Admin Group
- Admin Tenant Settings

### Default User Settings

These settings will be applied when new users are created with this role:

- **Organization/Department**: Default organizational unit(s)
- **User License**: Determines the level of AI capabilities
  - Generate: Full AI capabilities
  - Discover: Limited to question and answer functionality
- **Allocated Credits**: Monthly credit allowance per user (0 = unlimited)
- **Hard Stop Credit Count**: Maximum monthly credit limit (0 = unlimited)
- **Default Blueprint**: Pre-selected blueprint for new users
- **Auto Login**: Whether users are automatically logged in
- **Control Panel Expanded**: Default expansion state of the control panel
- **Session Timeout**: Inactivity timeout in hours
- **Theme**: Default UI theme (light or dark)

## Assigning Users to Roles

To manage user assignments:

1. Select a role from the list
2. Click the "Assigned Users" tab
3. Use the transfer list interface to:
   - Move users from "Unassigned Users" to "Assigned Users" to add them to the role
   - Move users from "Assigned Users" to "Unassigned Users" to remove them from the role
4. Use the search boxes to find specific users in either list
5. Changes are saved when you save the role

**Note**: Users removed from a role will be automatically assigned to the default "User" role.

### Important Considerations

- **Global Admins**: Users with the "Global Admin" role cannot be reassigned directly from the Role Manager. You must use the User Manager to change their role.
- **Role Changes**: When you save changes to a role, all users with that role will be automatically updated with the new settings.

## Troubleshooting

**Issue**: Unable to delete a role
- Check if users are still assigned to the role
- Go to the "Assigned Users" tab and remove all users first

**Issue**: Changes not saving
- Verify all required fields are completed (Role Name is mandatory)
- Check for validation errors (red text under fields)
- Ensure you have appropriate permissions

**Issue**: "Services Error" message
- Note the error code provided in the message
- Check network connectivity
- Contact system administrator if the issue persists

**Issue**: Role not appearing in list
- Click the refresh button to update the role list
- Clear any active search filters
- Verify you have permission to view the role

---

For additional assistance with role management, please contact your system administrator.
