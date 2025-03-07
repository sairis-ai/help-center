# AI Blueprint Manager Guide

<!--
## Table of Contents
- [AI Blueprint Manager Guide](#ai-blueprint-manager-guide)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Accessing Blueprint Manager](#accessing-blueprint-manager)
  - [Blueprint Manager Interface Overview](#blueprint-manager-interface-overview)
  - [Viewing Blueprints](#viewing-blueprints)
    - [Blueprint List View](#blueprint-list-view)
    - [Blueprint Information Display](#blueprint-information-display)
    - [Blueprint Features Indicators](#blueprint-features-indicators)
  - [Searching and Filtering Blueprints](#searching-and-filtering-blueprints)
    - [Global Search](#global-search)
    - [Topic Filtering](#topic-filtering)
    - [Feature Filtering](#feature-filtering)
    - [Group Filtering](#group-filtering)
    - [Clearing Filters](#clearing-filters)
  - [Managing Blueprints](#managing-blueprints)
    - [Creating Blueprints](#creating-blueprints)
    - [Editing Blueprints](#editing-blueprints)
    - [Unsaved Changes Handling](#unsaved-changes-handling)
  - [Blueprint Operations](#blueprint-operations)
    - [Exporting Blueprint List](#exporting-blueprint-list)
    - [Refreshing Blueprint Data](#refreshing-blueprint-data)
  - [Blueprint Data Management](#blueprint-data-management)
    - [Group Associations](#group-associations)
    - [Understanding Blueprint Metadata](#understanding-blueprint-metadata)
  - [Best Practices](#best-practices)
  - [Troubleshooting](#troubleshooting)
-->

## Introduction

The Blueprint Manager provides a comprehensive interface for administrators to create, view, edit, and manage AI Blueprints. Blueprints define how the AI assistant behaves, what knowledge it can access, and how it interacts with users. This guide covers how to effectively use the Blueprint Manager to organize and maintain your AI experiences.

## Accessing Blueprint Manager

The Blueprint Manager is accessible to users with specific roles:
- Admin
- Content
- Manager

To access this component, navigate to `/blueprint/BlueprintListView` in the system. You'll typically find a link to this page in the administration menu or AI configuration section.

## Blueprint Manager Interface Overview

The Blueprint Manager consists of these key components:

![homepage](/images/blueprint-manager.png)

1. **Header Section**: Contains the title "Blueprint Manager" with blueprint count badge, description, and Add Blueprint button
2. **Search and Filter Controls**: Tools for finding specific blueprints including global search, topic filter, and feature filter
3. **Data Table**: Displays blueprint information in a sortable, filterable table
4. **Action Buttons**: Quick access to refresh data, clear filters, and export to Excel
5. **Blueprint Editor**: Full-screen dialog for creating and editing blueprints


## Viewing Blueprints

### Blueprint List View

The main interface displays all blueprints in a tabular format with key information:

1. **Blueprint Icon**: Visual indicator for blueprint type
2. **Name and Description**: Primary identifier and explanatory text for each blueprint
3. **Group Associations**: Visual representation of groups with access to this blueprint
4. **Topic**: Categorization label for the blueprint
5. **Features**: Status indicators for key blueprint settings
6. **Update Information**: Details about when and by whom the blueprint was updated

### Blueprint Information Display

Each blueprint entry shows comprehensive information:

1. **Blueprint Name**: The primary identifier (shown in bold)
2. **Status Indicator**: "Disabled" badge appears for inactive blueprints
3. **Description**: Text explaining the blueprint's purpose
4. **Tags**: Small badges showing associated tags for categorization


### Blueprint Features Indicators

The Features column uses visual indicators to show enabled settings:

1. **Secure**: Green indicator when the blueprint has security settings enabled
2. **Home Screen**: Green indicator when the blueprint appears on the home screen
3. **Quick List**: Green indicator when the blueprint appears in quick selection menus

## Searching and Filtering Blueprints

### Global Search

The global search field searches across multiple blueprint fields:
- Blueprint name
- Description
- Topic tags
- Author information

Enter text in the search box to instantly filter the list to matching blueprints.

### Topic Filtering

To filter blueprints by topic category:

1. Click the "Topic" button to open the topic selection menu
2. Select a specific topic from the list to filter blueprints
3. Only blueprints with the selected topic will be displayed
4. Click "Remove Filter" to clear the topic filter

### Feature Filtering

To filter blueprints by feature settings:

1. Use the "Features" multi-select dropdown
2. Select any combination of:
   - "Secure" - Shows only blueprints with secure mode enabled
   - "Home Screen" - Shows only blueprints displayed on the home screen
   - "Quick List" - Shows only blueprints in the quick selection list
3. The filter applies immediately, showing only blueprints with all selected features enabled

### Group Filtering

To filter blueprints by associated groups:

1. Click the filter icon in the Groups column header
2. Select a group from the dropdown
3. Only blueprints assigned to that group will be displayed

### Clearing Filters

When filters are active, a "Filter On" indicator appears, and the filter slash button turns blue.

To clear all active filters:
1. Click the "Filter Slash" button
2. All filters will be reset to their default state
3. The complete blueprint list will be displayed

## Managing Blueprints

### Creating Blueprints

To create a new blueprint:

![homepage](/images/blueprint-new.png)

1. Click the "Add" button in the top-right corner
2. The Blueprint Editor dialog will open
3. Configure the blueprint settings across the available tabs
4. Click "Save" to create the blueprint
5. The new blueprint will appear in the list


### Editing Blueprints

To edit an existing blueprint:

1. Click anywhere on the blueprint row in the table
2. The Blueprint Editor dialog will open with the blueprint's current settings
3. Make necessary changes across the available tabs
4. Click "Save" to update the blueprint
5. The updated blueprint information will reflect in the list

### Unsaved Changes Handling

The system protects against accidental loss of blueprint changes:

1. When you make changes to a blueprint, the system tracks them
2. If you attempt to close the Blueprint Editor with unsaved changes:
   - A confirmation dialog appears
   - You can choose to leave and discard changes
   - Or cancel and return to save your changes
3. This ensures important configuration changes aren't lost accidentally

## Blueprint Operations

### Exporting Blueprint List

To export the blueprint list to Excel:

1. Click the "Export to Excel" button (external link icon in top-right)
2. Confirm the export in the dialog that appears
3. The browser will download a CSV file
4. The export includes all currently visible blueprints (respects active filters)

### Refreshing Blueprint Data

To ensure you're viewing the most current data:

1. Click the "Refresh Data" button (refresh icon in top-right)
2. The system will reload all blueprint data from the server
3. This is useful after making changes or when multiple administrators are working simultaneously

## Blueprint Data Management

### Group Associations

Blueprint access is controlled through group assignments:

1. Each blueprint can be assigned to multiple groups
2. The table displays assigned groups as avatar circles with group initials
3. Up to 3 groups are shown directly in the table
4. Additional groups are represented by a "+N" indicator
5. Hovering over group avatars shows the full group name
6. Clicking the group filter allows filtering by specific group assignment

### Understanding Blueprint Metadata

Each blueprint includes metadata about its creation and updates:

1. **Author**: The name of the person who last updated the blueprint
2. **Update Date**: When the blueprint was last changed
3. This information helps track changes and responsible parties

## Best Practices

For effective blueprint management:

1. **Naming Conventions**:
   - Use descriptive names that clearly indicate purpose
   - Consider including department or function in the name
   - Use consistent naming patterns across blueprints

2. **Filtering Strategy**:
   - Use topic filtering for high-level organization
   - Use feature filtering to find special-purpose blueprints
   - Combine filters for more precise results

3. **Organization**:
   - Assign meaningful tags for easier discovery
   - Use consistent topic categories across similar blueprints
   - Limit home screen and quick list blueprints to essential ones

4. **Maintenance**:
   - Regularly review disabled blueprints
   - Check for outdated or redundant blueprints
   - Update descriptions when blueprint functionality changes

5. **Access Control**:
   - Assign groups strategically based on who needs access
   - Review group assignments periodically
   - Consider creating specific groups for blueprint access

## Troubleshooting

**Issue**: Blueprint list is empty
- Check if filters are active (blue filter button indicates active filters)
- Click the "Clear Filters" button to remove all filters
- Refresh the data using the refresh button
- Verify you have permissions to view blueprints

**Issue**: Cannot find a specific blueprint
- Try searching by partial name or description
- Clear all filters and browse the complete list
- Check if the blueprint might be disabled
- Verify the blueprint exists and you have permissions to view it

**Issue**: Blueprint editor won't close
- You likely have unsaved changes
- Choose to either save your changes or discard them
- If the dialog persists, try refreshing the page (may lose changes)

**Issue**: Group avatars not displaying correctly
- The groups store may need refreshing
- Click the refresh button to reload data
- Check if groups exist in the system

**Issue**: Filter shows no results
- Your filter combination may be too restrictive
- Try removing one filter at a time to see what's causing the issue
- Verify that blueprints matching your criteria exist

**Issue**: Export not working
- Check browser download settings
- Ensure you have proper permissions
- Try with a smaller dataset by applying filters first

---

For additional assistance with blueprint management, please contact your system administrator.