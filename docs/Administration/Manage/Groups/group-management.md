# Smart Groups Management Guide

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

The Smart Groups component provides a powerful interface for creating and managing dynamic user groups. Unlike static groups, Smart Groups can automatically include members based on specified criteria, making them ideal for role-based access control, content targeting, and organizational structure management.

## Accessing Smart Groups

The Smart Groups component is accessible to users with specific roles:
- Admin
- Content
- Manager

To access this component, navigate to `/groups/GroupListView` in the system. You'll typically find a link to this page in the user management section or administration menu.

## Smart Groups Interface Overview

The Smart Groups interface consists of these key components:

![homepage](/images/smart-groups-manage.png)

1. **Header Section**: Contains the title "Smart Groups" with a brief description
2. **Action Buttons**: 

   - Create new Smart Group
   - Refresh data
   - Clear filters
   - Export to Excel
3. **Search Bar**: Global search field for finding specific groups
4. **Data Table**: Displays group information in a scrollable, sortable table
5. **Empty State**: Information displayed when no groups match current filters

## Navigating the Smart Groups List

### Sorting Groups

To sort the Smart Groups list:
1. Click on any sortable column header (Name, Description, Users)
2. Click again to toggle between ascending and descending order
3. Click a third time to remove sorting

### Filtering Groups

There are multiple ways to filter the Smart Groups list:

1. **Global Search**: 
   - Enter text in the search box in the top-left corner
   - The system will search across group name and description fields

2. **Filter Indicator**:
   - When filters are active, the filter button turns blue
   - Click the "Filter Slash" button to clear all active filters

### Quick Actions

The interface provides quick action buttons in the top-right corner:

1. **Refresh Data**: Updates the list with the latest group information
2. **Clear Filters**: Removes all active filters
3. **Export to Excel**: Exports the current list view to a CSV file

## Smart Group Operations


### Creating a New Smart Group

To create a new Smart Group:

![homepage](/images/smart-groups-new.png)

1. Click the "+ Smart Group" button in the top-right corner
2. The Smart Group Dialog will open with empty fields
3. Configure the group settings:
   - Group Name (required)
   - Group Description
   - Membership rules and conditions
4. Click "Save" to create the Smart Group

### Viewing Group Members

To see which users belong to a Smart Group:

![homepage](/images/smart-groups-actions.png)

1. Click the users icon (people) in the Actions column
2. The Group Members dialog will open
3. All users matching the group's criteria will be displayed
4. Close the dialog when finished
   
### Editing Smart Groups

To edit an existing Smart Group:

![homepage](/images/smart-groups-actions.png)

1. Click on the group name or the pencil icon in the Actions column
2. The Smart Group Dialog will open with the current settings
3. Make necessary changes
4. Click "Save" to update the Smart Group

### Deleting Smart Groups

To delete a Smart Group:

![homepage](/images/smart-groups-actions.png)

1. Click the trash icon in the Actions column
2. A confirmation dialog will appear asking "Are you sure you want to delete [group_name]?"
3. Click "Delete" to confirm or "Cancel" to abort
4. A success notification will appear when deletion is complete

### Exporting Group Data

To export the Smart Groups list to Excel:

1. Click the "Export to Excel" button (external link icon)
2. Confirm the export in the dialog that appears
3. The browser will download a CSV file
4. The export includes all currently visible groups (respects active filters)

## Understanding Smart Group Information

The Smart Groups list displays the following information for each group:

1. **Group Avatar**: Displays group initials in a circular badge
2. **Name**: The primary identifier for the group
3. **Description**: Information about the group's purpose
4. **Users**: Badge showing the number of users in the group
5. **Actions**: Interactive buttons for viewing members, editing, and deleting

## Advanced Features

### Smart Group Dialog

The Smart Group Dialog provides powerful tools for defining group membership:

1. **Basic Information**:
   - Group name
   - Description
   - Visual indicators (colors, icons)

2. **Membership Rules**:
   - Create complex query conditions
   - Combine multiple criteria with AND/OR logic
   - Preview membership results

3. **Manual Adjustments**:
   - Force include specific users
   - Force exclude specific users
   - Override query results

### State Persistence

The Smart Groups component saves your view preferences:
- Sort order
- Visible columns
- Scroll position

These preferences are stored in the session, so they persist when you navigate away and return.

## Troubleshooting

**Issue**: Smart Groups list is empty
- Check if filters are active (blue filter button indicates active filters)
- Click the "Clear Filters" button to remove all filters
- Refresh the data using the refresh button
- Check for network connectivity issues

**Issue**: Cannot create or edit a Smart Group
- Ensure you have proper permissions (Admin, Content, or Manager roles)
- Check that all required fields are completed
- Verify network connectivity
- Look for error messages in toast notifications

**Issue**: Group membership not updating
- Smart Group membership is calculated in real-time
- User attributes may have changed
- Click the refresh button to reload the latest data
- Check if the group query conditions still match your expectations

**Issue**: Export not working
- Check browser download settings
- Ensure you have proper permissions
- Try with a smaller dataset by applying filters first

**Issue**: Delete operation fails
- The group may be referenced by other system components
- Another administrator may be editing the group
- Check error messages for specific details
- Try refreshing the list before attempting to delete again

**Issue**: Cannot access Smart Groups feature
- Verify you have the required role (Admin, Content, or Manager)
- Check if your access credentials are still valid
- Ensure your browser supports all required features

---

For additional assistance with Smart Groups management, please contact your system administrator.