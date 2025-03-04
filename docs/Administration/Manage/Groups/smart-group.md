# Smart Group Configuration Guide

## Table of Contents
- [Smart Group Configuration Guide](#smart-group-configuration-guide)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Smart Group Dialog](#smart-group-dialog)
    - [Basic Information](#basic-information)
    - [Smart Group Builder Interface](#smart-group-builder-interface)
    - [Managing Group Membership](#managing-group-membership)
    - [Knowledge Base Assignments](#knowledge-base-assignments)
    - [Membership Changes Tracking](#membership-changes-tracking)
  - [Group Members Component](#group-members-component)
    - [Members List Interface](#members-list-interface)
    - [Filtering and Searching](#filtering-and-searching)
    - [User Information Display](#user-information-display)
  - [Assigned Knowledge Bases Component](#assigned-knowledge-bases-component)
    - [Knowledge Base List](#knowledge-base-list)
    - [Managing Knowledge Base Assignments](#managing-knowledge-base-assignments)
  - [Advanced Features](#advanced-features)
    - [Query Builder](#query-builder)
    - [System Information](#system-information)
  - [Best Practices](#best-practices)
    - [Creating Effective Smart Groups](#creating-effective-smart-groups)
    - [Managing Group Membership](#managing-group-membership-1)

## Introduction

The Smart Group Configuration system provides powerful tools for creating and managing dynamic user groups that automatically update based on defined criteria. This guide covers the three main components of the system: GroupDialog, GroupMembers, and GroupAssignedKbs.

## Smart Group Dialog

The Smart Group Dialog is the primary interface for creating, configuring, and managing smart groups. It provides a comprehensive set of tools for setting group properties, defining membership criteria, and reviewing group composition.

### Basic Information

The top section of the dialog contains fields for essential group information:

1. **Group Name** (Required): The primary identifier for the group
   - Must be unique within the system
   - Used for display and reference throughout the application

2. **Group Description**: Additional context about the group's purpose
   - Should clearly explain the group's function and membership criteria
   - Helps administrators understand the group's purpose at a glance

3. **Initials** (Required): Two-character identifier used for the group avatar
   - Automatically generated from the first two letters of the group name
   - Can be manually overridden if needed
   - Used in visual representations of the group throughout the system

4. **Hidden Fields**: System information including:
   - Group ID: Auto-generated unique identifier
   - Group Type: Security classification (default)
   - Group Rule: Query definition that determines membership

### Smart Group Builder Interface

The Smart Group Builder tab provides a powerful query interface for defining membership criteria:

1. **Query Builder**: Allows you to create complex conditions that determine group membership
   - **Fields**: Select from user properties like name, department, title, etc.
   - **Operators**: Choose logical operators (contains, equals, starts with, etc.)
   - **Values**: Enter the specific values to match

2. **Query Logic**:
   - **AND**: All conditions must be true for a user to be included
   - **OR**: Any matching condition will include a user
   - **Nested Conditions**: Create complex logic by combining AND/OR groups

3. **Help Panel**: Toggle-able information explaining how to use the query builder
   - Explains the function of AND/OR logic
   - Describes how to add, remove, and clone conditions
   - Provides guidance on effective query construction

### Managing Group Membership

The Users in Group tab shows all users who match the defined criteria:

1. **Member List**: Displays all users who currently match the group's query criteria
   - Shows user details including name, username, and access level
   - Updates automatically when the query is modified

2. **Membership Count**: Badge showing the total number of users in the group
   - Updates in real-time as group criteria changes
   - Provides quick visibility into group size

### Knowledge Base Assignments

The Assigned KBs tab shows knowledge bases that are associated with this group:

1. **Knowledge Base List**: Shows all knowledge bases assigned to this group
   - Displays KB name, initials, and description
   - Links to the Knowledge Base Manager for making assignments

### Membership Changes Tracking

The system tracks and displays changes to group membership when updating an existing group:

1. **Users Added**: Shows users newly added to the group after a rule change
   - Appears as a tab when users are added
   - Displays a count badge with the number of additions

2. **Users Removed**: Shows users removed from the group after a rule change
   - Appears as a tab when users are removed
   - Displays a count badge with the number of removals

3. **Success Message**: After saving, displays a summary of membership changes
   - Total users in the group
   - Number of users added
   - Number of users removed

## Group Members Component

The Group Members component displays and manages user membership within a group.

### Members List Interface

The interface provides a comprehensive view of group membership:

1. **Search Box**: Filter the member list by name, username, or description
   - Dynamically updates results as you type
   - Searches across multiple user fields simultaneously

2. **Member Count**: Shows the total number of users in the group
   - Updates automatically when refreshing or when membership changes
   - Useful for quickly assessing group size

3. **Refresh Button**: Updates the member list with the latest data
   - Useful after making changes to group criteria
   - Ensures the display matches current system state

### Filtering and Searching

Multiple tools help you find specific users within a group:

1. **Global Search**: Searches across all visible user fields
   - Particularly useful for large groups
   - Case-insensitive matching

2. **Column Sorting**: Click column headers to sort the list
   - Ascending or descending order
   - Useful for alphabetical organization or finding specific values

3. **State Persistence**: User interface preferences are remembered
   - Column order and visibility
   - Sort preferences
   - Scroll position

### User Information Display

Each user in the member list shows comprehensive information:

1. **User Avatar**: Shows the user's initials in a circular badge
   - Uses first and last name
   - Provides visual identification

2. **Basic Information**:
   - First Name
   - Last Name
   - Username
   - Description (if available)

3. **Access Level**: Color-coded chip showing user permission level
   - User: Gray
   - Manager: Purple
   - Content Creator/Content: Green
   - Admin: Blue
   - Includes both the initial and full access level name

## Assigned Knowledge Bases Component

The Assigned Knowledge Bases component displays knowledge bases that are linked to the current group.

### Knowledge Base List

The interface shows all knowledge bases assigned to the group:

1. **Knowledge Base Cards**: Each KB is displayed with:
   - KB Initials: In a circular avatar badge
   - KB Name: Primary identifier
   - KB Description: Additional context about the knowledge base

2. **Empty State**: When no knowledge bases are assigned
   - Shows explanatory message
   - Provides a button to navigate to the Knowledge Base Manager
   - Explains how to make KB assignments

### Managing Knowledge Base Assignments

Group-KB relationships are managed through the Knowledge Base Manager:

1. **Navigation Link**: Button to access the KB Manager (`/assistant/kb/KBListView`)
   - Available when no KBs are assigned
   - Allows quick navigation to make assignments

2. **Assignment Process Note**: Explains that KB assignments are made from the KB Manager
   - Creates awareness of the correct workflow
   - Prevents confusion about assignment capabilities

## Advanced Features

### Query Builder

The Smart Group Builder uses a powerful query builder with extensive capabilities:

1. **Available Fields**: Broad range of user attributes to query against
   - Standard fields (name, username, email)
   - Job-related fields (title, department, reports to)
   - System fields (creation date, access level)
   - Custom fields (employee ID, language preference)

2. **Operator Types**:
   - **Contains**: Partial text matching (case-insensitive)
   - **Equal**: Exact value matching
   - **Not Equal**: Excludes exact value matches
   - **Exists**: Field has any value (not empty)
   - **Not Exist**: Field is empty or null
   - **Starts With**: Text begins with specified value

3. **Complex Logic**:
   - Clone individual conditions
   - Clone entire condition groups
   - Nest condition groups for complex logical expressions

### System Information

Advanced system information is available through an expandable panel:

1. **Group ID**: System-generated unique identifier
2. **Fields**: Technical field information
3. **Filters**: Raw filter data
4. **Updated**: Last modification timestamp

## Best Practices

### Creating Effective Smart Groups

1. **Clear Naming Convention**:
   - Use descriptive names that reflect the group's purpose
   - Include department or function in the name when applicable
   - Avoid vague or overly generic names

2. **Descriptive Information**:
   - Add comprehensive descriptions explaining the group's purpose
   - Document why the group exists and how membership is determined
   - Note any special considerations for the group

3. **Query Construction**:
   - Start with simple queries and test before adding complexity
   - Use the preview functionality to verify membership matches expectations
   - Consider performance implications for very complex queries

### Managing Group Membership

1. **Regular Reviews**:
   - Periodically check that group membership is appropriate
   - Verify that query logic still matches intended membership
   - Update criteria as organizational structures change

2. **Documentation**:
   - Document the logic behind complex query conditions
   - Note the purpose of each condition group
   - Document any manual inclusions or exclusions

3. **Testing Changes**:
   - Before saving, review the predicted membership changes
   - Check both added and removed users
   - Consider the impact on KB access and other permissions

---

For additional assistance with Smart Group configuration, please contact your system administrator or refer to the advanced administration documentation.