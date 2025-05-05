# Role User Assignment Guide

## Introduction

The Role User Assignment interface allows administrators to assign users to specific roles and remove users from roles. This functionality is crucial for managing permissions and access rights across your organization. When users are assigned to a role, they automatically inherit all the permissions and settings configured for that role.

## Accessing User Assignment

The User Assignment interface is accessible from the Role Manager by:

1. Selecting a role from the role list
2. Clicking the "Assigned Users" tab in the role details panel

Note: You must first save a new role before you can assign users to it.

## User Assignment Interface Overview

The User Assignment interface consists of the following components:

1. **Explanation Text**: Brief description of the assignment functionality
2. **Transfer List**: Two-panel interface for managing user assignments
   - **Left Panel (Unassigned Users)**: Lists users not assigned to the current role
   - **Right Panel (Assigned Users)**: Lists users currently assigned to the role
3. **Search Boxes**: Allow filtering users in both panels
4. **User Cards**: Display user information with avatar, name, role, and organization

## Assigning Users to Roles

To assign users to the selected role:

1. Find users in the "Unassigned Users" panel
   - Use the search box to filter by name, role, or organization
2. Click on a user card to move the user to the "Assigned Users" panel
3. The user will be added to the role when you save the role changes

## Removing Users from Roles

To remove users from the selected role:

1. Find users in the "Assigned Users" panel
   - Use the search box to filter by name, role, or organization
2. Click on a user card to move the user to the "Unassigned Users" panel
3. The user will be removed from the role when you save the role changes

**Important Note**: Users removed from a role will automatically be reassigned to the default "User" role. A notification will appear the first time you remove a user to explain this behavior.

## User Information Display

Each user card displays:
- **Avatar**: Showing the user's initials
- **Full Name**: The user's first and last name
- **Role**: The user's current role shown in parentheses
- **Organization**: The user's department or organization (if available)

## Special Considerations

### Global Admins

Users with the "Global Admin" role cannot be assigned or unassigned directly from the Role Manager. These users appear with reduced opacity and cannot be selected. If you attempt to modify a Global Admin's role, an information dialog will explain that:

- Global Admins cannot be assigned to other roles from this interface
- To change a Global Admin's role, you must use the User Manager

### New Roles

For newly created roles:
- The assignment interface will be hidden until the role is saved
- A message will inform you to save the role first
- After saving the role, reload the page to access the user assignment interface

### Bulk Updates

When you save a role with changed user assignments:
- All users added to the role will receive the role's permissions and settings
- All users removed from the role will be moved to the default "User" role
- These changes occur simultaneously when saving the role

## Troubleshooting

**Issue**: Cannot find a specific user
- Use the search box to search by name, role, or organization
- Ensure the user exists in the system
- Check if the user is already assigned to the role (check both panels)

**Issue**: Cannot assign a user (greyed out)
- Check if the user is a Global Admin (indicated by role name)
- Global Admins must be modified through the User Manager

**Issue**: User assignments not saving
- Ensure you click the "Save" button for the role after making assignment changes
- Check for any error messages that appear when saving
- Verify you have appropriate permissions to modify the role

**Issue**: User disappears after assignment
- This is normal behavior - the user moves to the other panel
- Use the search in the other panel to locate the user if needed

---

For additional assistance with user assignment, please contact your system administrator.
