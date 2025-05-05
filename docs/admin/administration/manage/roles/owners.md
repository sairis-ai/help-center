# Role Owners Management Guide

## Introduction

The Owners Management interface allows administrators to control who has edit permissions for roles. Owners with edit permissions can view, create, modify, and delete a role and all its settings. This feature provides granular control over role management responsibilities within your organization.

## Accessing Role Ownership Management

The Role Ownership interface is accessible from within the Role Manager in the "Owners" tab when editing a role. You must first create and save a role before you can manage its ownership.

## Ownership Interface Overview

The interface consists of these key components:

1. **Group Assignment Section**: Controls which groups can view and use the role (read-only access)
2. **Owners Section**: Manages users with edit permissions for the role
3. **Search Functionality**: Allows finding users and groups to add as owners
4. **Owner List**: Table displaying current owners with their information

## Understanding Role Ownership

### Types of Access

There are two primary levels of access for roles:

1. **View & Assign Access (Read-Only)**
   - Provided to groups selected in the "View & Assign Role" section
   - Allows users in these groups to view and select the role in various parts of the application
   - Cannot modify the role's settings or structure

2. **Edit Access (Full Control)**
   - Provided to users and groups added as "Owners"
   - Can view, create, modify, and delete the role and change any settings
   - Has complete management authority over the role

### Global Admin Considerations

Global Admins have special privileges:
- They can assign new owners and delete existing owners
- They cannot view content or secure information regarding the role
- They have system-level oversight without needing specific ownership

## Managing Group Assignments (Read-Only Access)

To control which groups can view and use this role:

1. Locate the "View & Assign Role" fieldset at the top of the interface
2. Read the description explaining how groups with read-only access can use the role
3. Use the multi-select dropdown to assign groups:
   - Select one or more groups from the dropdown list
   - Selected groups appear as chips in the input field
   - Filter the list by typing in the search box
   - Remove groups by clicking the "x" on their chips

## Managing Owners (Edit Access)

### Adding New Owners

To add a user or group as an owner with edit permissions:

1. Use the search box to find users or groups:
   - Type a name, username, or organization to search
   - Results display both users and groups matching your search
   - Users show with a person icon, groups with a sitemap icon
2. Select the user or group from the results
3. Click the "+ Owner" button to add them
4. The new owner appears in the owners table below

### User vs. Group Ownership

You can assign ownership to:
- **Individual Users**: Gives specific people edit access
- **Groups**: Gives edit access to all users in that group

### Removing Owners

To remove an owner:

1. Find the owner in the owners table
2. Click the trash icon in the Delete column
3. The owner is immediately removed

**Note**: You cannot remove the last owner of a role - at least one owner must remain to ensure the role can be managed.

## Owner Information Display

The owners table shows:
- **Icon**: Indicates if the owner is a user or group
- **Name**: Full name for users, group name for groups
- **Username**: Username for users, "Group" for groups
- **Organization(s)**: Organizational units the user belongs to (if applicable)
- **Delete**: Option to remove the owner (if there is more than one owner)

## First-Time Setup

When you first create a role:
1. You (the creator) are automatically assigned as the first owner
2. If the role is associated with a group, that group is also added as an owner
3. You must save the role before additional ownership changes can be made

## Troubleshooting

**Issue**: Cannot find a user or group in search
- Try different search terms (first name, last name, username, organization)
- Ensure the user or group exists in the system
- Check if they're already added as an owner

**Issue**: Cannot remove an owner
- Ensure there is more than one owner (you cannot remove the last owner)
- Verify you have appropriate permissions

**Issue**: Ownership changes not applying
- Ensure you save the role after making ownership changes
- Check for any error messages that appear when saving

---

For additional assistance with role ownership management, please contact your system administrator.
