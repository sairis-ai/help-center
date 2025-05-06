# Smart Group Management Guide

<!--
## Table of Contents
- [Smart Groups Management Guide](#smart-groups-management-guide)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Accessing Smart Groups](#accessing-smart-groups)
  - [Smart Groups Interface Overview](#smart-groups-interface-overview)
  - [Navigating the Smart Groups List](#navigating-the-smart-groups-list)
    - [Sorting Groups](#sorting-groups)
    - [Filtering Groups](#filtering-groups)
    - [Quick Actions](#quick-actions)
  - [Smart Group Operations](#smart-group-operations)
    - [Creating a New Smart Group](#creating-a-new-smart-group)
    - [Editing Smart Groups](#editing-smart-groups)
    - [Viewing Group Members](#viewing-group-members)
    - [Deleting Smart Groups](#deleting-smart-groups)
    - [Exporting Group Data](#exporting-group-data)
  - [Understanding Smart Group Information](#understanding-smart-group-information)
  - [Advanced Features](#advanced-features)
    - [Smart Group Dialog](#smart-group-dialog)
    - [State Persistence](#state-persistence)
  - [Troubleshooting](#troubleshooting)
--> 

## Introduction

The Smart Group Management interface provides administrators with a powerful tool for creating and managing security and role groups within your organization. Smart Groups allow you to dynamically organize users based on specific criteria, simplifying access control and permissions management across your platform.

## Accessing Smart Group Management

The Smart Group Management interface is accessible to users with the following roles:
- Admin
- Content
- Manager

To access the Smart Group Manager, navigate to the Users section from the main administration menu and select "Smart Groups."

## Smart Group Interface Overview

![homepage](/images/smart-groups-manage.png)

The Smart Group Manager interface consists of these key components:

1. **Header Section**: Contains the title "Smart Groups" with an Add button
2. **Search and Filter Controls**: Tools to find and filter groups
3. **Data Table**: Displays all groups with sortable columns
4. **Action Buttons**: Refresh, filter, export, and help options
5. **Group Editor**: Opens when adding or editing a group

## Understanding Smart Groups

Smart Groups serve two main purposes in the system:

### 1. Security Groups

Security groups determine what content and features users can access:
- Control access to knowledge bases
- Determine visibility of AI content
- Manage permissions for features and sections
- Define who can see and use specific resources

### 2. Role Groups

Role groups determine what actions users can perform:
- Admin: Full system administration rights
- Content: Content management capabilities
- Manager: Team and resource management permissions
- User: Basic system access and usage
- Other custom roles specific to your organization

**Note**: Role groups are indicated by a lock icon and have special protection since they affect system-level permissions.

## Smart Group List View

The main table displays all groups you have permission to view. Each row contains:

1. **Group Initials**: Visual identifier for the group (clickable to edit)
2. **Name**: The group name, with a lock icon for role groups (clickable to edit)
3. **Description**: Explains the group's purpose or criteria
4. **Type**: Shows whether it's a Security or Role group
5. **Users**: Displays the count of users in the group
6. **Actions**: Buttons for viewing members, editing, and deleting the group

## Searching for Groups

To find specific groups:

1. Use the search box in the upper-left corner
2. Type keywords to search across group names and descriptions
3. Results update automatically as you type
4. A filter indicator appears when search filters are active

## Filtering Groups

The Smart Group Manager offers several filtering options:

### Quick Filters

Use the buttons at the top of the list to filter by group type:
- **Role**: Shows only role-based groups
- **Security**: Shows only security permission groups

The selected filter button appears filled, while inactive filters appear outlined.

### Column Filtering

Each column has its own filtering capabilities:
1. Click the filter icon in any column header
2. Enter filter criteria in the popup
3. The table will update to show only matching records

## Creating a New Smart Group

![homepage](/images/smart-groups-new.png)

To create a new group:

1. Click the "Smart Group" button in the upper-right corner
2. The Group Editor dialog will open
3. Fill in the required information:
   - Name (required)
   - Description (recommended)
   - Group Type (Security or Role)
   - Query criteria that define membership
4. Click "Save" to create the group

## Managing Existing Groups

### Editing a Group

![homepage](/images/smart-groups-actions.png)

To modify an existing group:

1. Click on the group's name, initials, or the pencil icon
2. The Group Editor dialog will open with current settings
3. Make your desired changes
4. Click "Save" to update the group

### Viewing Group Members

To see all users in a group:

1. Click the users icon in the Actions column
2. A dialog will open showing all members
3. You can search, filter, and view details about each member
4. Member lists automatically update based on the group's query criteria

### Deleting a Group

![homepage](/images/smart-groups-actions.png)

To delete a group:

1. Click the trash icon in the Actions column
2. A confirmation dialog will appear
3. Click "Delete" to confirm or "Cancel" to abort
4. The group will be permanently removed

**Warning**: Deleting a group will remove all associated permissions. Users in the deleted group may lose access to certain features or content.

## Group Types and Special Considerations

### Role Groups

Role groups have special protection because they affect system functionality:
- Indicated by a lock icon next to the name
- May have restricted editing or deletion
- Often predefined by the system
- Changes may affect multiple system features

### Security Groups

Security groups offer more flexibility:
- Can be freely created and customized
- Used for resource access control
- Can be nested or combined
- Support complex membership queries

## Smart Group Query Builder

The power of Smart Groups comes from the query builder, which allows you to define membership criteria based on:

1. **User Attributes**: Properties like organization, department, or location
2. **User Metadata**: Custom fields and tags associated with users
3. **System Activity**: Usage patterns, login frequency, or feature access
4. **Logical Operators**: AND/OR conditions to create complex rules
5. **Group Membership**: Inclusion or exclusion from other groups

The query builder offers a visual interface to construct these rules without requiring programming knowledge.

## Managing the Group List

### Refreshing the List

To ensure you're viewing the most current information:

1. Click the refresh icon in the top-right corner
2. The list will reload with the latest data from the server

### Clearing Filters

To remove all active filters:

1. Click the filter-slash icon in the top-right corner
2. All filters will be reset to show all groups

### Exporting Group Data

To export the group list for reporting or analysis:

1. Click the export icon in the top-right corner
2. Confirm the export in the popup dialog
3. A CSV file will be downloaded to your computer
4. The exported file includes all visible columns for all groups matching your current filters

## Accessing Help Resources

For additional guidance on using the Smart Group Manager:

1. Click the question mark icon in the top-right corner
2. The Help Center dialog will open
3. Relevant documentation for group management will be displayed

## Empty State Handling

If no groups are found (either because none exist or due to filters):

1. A helpful empty state message appears
2. The message suggests possible actions:
   - Check your filters
   - Clear filters
   - Add a new Smart Group
3. A visual illustration helps identify the empty state

## Troubleshooting

**Issue**: No groups appearing in the list
- Check if filters are active (indicated by the filter badge)
- Click the filter-slash icon to clear all filters
- Verify you have permission to view groups
- Click the refresh button to update the list

**Issue**: Cannot create or edit a group
- Verify you have appropriate permissions
- Check for any error messages that appear during save operations
- Ensure all required fields are completed
- Role groups may have restricted editing

**Issue**: Group membership not updating
- Group membership evaluates automatically based on your query
- Check your query criteria for logical errors
- Verify that user profiles contain the expected data
- Allow time for membership changes to propagate

**Issue**: Export not working
- Check your browser's download settings
- Ensure you have permission to export data
- Try refreshing the page and attempting the export again

**Issue**: Cannot delete a group
- Verify you have administrative permissions
- Check if the group is a system-required role group
- Ensure the group isn't required by other system components
- Try refreshing the page and attempting deletion again

---

For additional assistance with Smart Group management, click the Help button in the top-right corner for context-specific guidance.
