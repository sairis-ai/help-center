# Knowledge Base Management Guide

<!--
## Table of Contents
- [Knowledge Base Management Guide](#knowledge-base-management-guide)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Accessing Knowledge Base Management](#accessing-knowledge-base-management)
  - [Knowledge Base Interface Overview](#knowledge-base-interface-overview)
  - [Viewing Knowledge Bases](#viewing-knowledge-bases)
    - [List View Components](#list-view-components)
    - [Searching and Filtering](#searching-and-filtering)
    - [Sorting Knowledge Bases](#sorting-knowledge-bases)
  - [Managing Knowledge Bases](#managing-knowledge-bases)
    - [Creating a New Knowledge Base](#creating-a-new-knowledge-base)
    - [Editing Knowledge Base Details](#editing-knowledge-base-details)
    - [Assigning Groups to Knowledge Bases](#assigning-groups-to-knowledge-bases)
    - [Deleting Knowledge Bases](#deleting-knowledge-bases)
  - [Knowledge Base Related Actions](#knowledge-base-related-actions)
    - [Viewing KB Content](#viewing-kb-content)
    - [Running Test Cases](#running-test-cases)
    - [AI Sync and Embedding](#ai-sync-and-embedding)
  - [Data Management](#data-management)
    - [Exporting Knowledge Base Data](#exporting-knowledge-base-data)
    - [Refreshing the Knowledge Base List](#refreshing-the-knowledge-base-list)
  - [Troubleshooting](#troubleshooting)
-->

## Introduction

The Knowledge Base Management system allows administrators to create, manage, and organize collections of information that power the AI Assistant. Knowledge Bases (KBs) contain the content and context that enable the AI to provide accurate, relevant responses to user queries. This guide explains how to effectively use the Knowledge Base Management interface.

## Accessing Knowledge Base Management

The Knowledge Base Management component is accessible to users with specific roles:
- Admin
- Content
- Manager

To access this component, navigate to `/assistant/kb/KBListView` in the system. You'll typically find a link to this page in the administration menu or assistant configuration section.

## Knowledge Base Interface Overview

![homepage](/images/knowledge-base-manager.png)

The Knowledge Base Management interface consists of these key components:

1. **Header Section**: Contains the title "Knowledge Bases" with a count badge, description, and Add KB button
2. **Search and Filter Bar**: Tools for finding specific knowledge bases
3. **Data Table**: Displays knowledge base information in a sortable, filterable table
4. **Action Buttons**: Quick access to operations like refresh, clear filters, and export



## Viewing Knowledge Bases

The main interface displays all knowledge bases in a tabular format with key information:

### List View Components

1. **KB Avatar**: Visual representation showing the knowledge base initials in a square tile
2. **Name/Description**: The primary identifier and explanatory text for each knowledge base
3. **Groups**: Visual representation of groups with access to this knowledge base
4. **Topic Tag**: Categorization label for the knowledge base
5. **Action Buttons**: Quick access to operations specific to each knowledge base

### Searching and Filtering

Multiple search and filter options help locate specific knowledge bases:

1. **Global Search**: Enter text in the search box to filter across name, description, and topic fields
2. **Group Filter**: Select a specific group to show only knowledge bases accessible to that group
3. **Topic Filter**: Filter by topic tag to organize knowledge bases by subject matter
4. **Filter Indicator**: Blue filter button indicates when filters are active
5. **Clear Filters**: Button to remove all active filters and view the complete list

### Sorting Knowledge Bases

To organize the knowledge base list:
1. Click any column header to sort by that field
2. Click again to toggle between ascending and descending order
3. Click a third time to remove sorting

## Knowledge Base Related Actions

Each knowledge base has additional actions accessible via buttons in the Actions column:

### Viewing KB Content

![homepage](/images/knowledge-base-actions.png)

To view and manage content within a knowledge base:
1. Click the palette icon (first icon in Actions column)
2. You'll be redirected to the Content List View filtered for this knowledge base
3. From there you can manage all documents and content items in the knowledge base

### Running Test Cases

To evaluate AI performance with a specific knowledge base:
1. Click the gauge icon (second icon in Actions column)
2. You'll be redirected to the Test Case page for this knowledge base
3. Create or run tests to evaluate how well the AI handles queries related to this content

### AI Sync and Embedding

To process and update the AI embeddings for knowledge base content:
1. Click the microchip-AI icon (third icon in Actions column)
2. You'll be redirected to the File Queue status page
3. Here you can monitor and manage the synchronization of content with the AI system
4. This process ensures content is properly vectorized for accurate retrieval

## Managing Knowledge Bases

### Creating a New Knowledge Base

To create a new knowledge base:
1. Click the "Add KB" button in the top-right corner
2. The Knowledge Base Dialog will open
3. Fill in the required information:
   - **Name**: Provide a descriptive name (required)
   - **Initials**: Two-letter identifier for the avatar (auto-generated but can be changed)
   - **Description**: Explanation of the knowledge base's purpose
   - **Topic Tag**: Optional categorization tag
4. Click "Save" to create the knowledge base
5. See [Knowledge Base Settings](/admin/administration/ai-management/knowledge-bases/knowledge-base-list) for more details on Knowledge Base settings fields

### Editing Knowledge Base Details

To edit an existing knowledge base:
1. Click on the knowledge base name or description in the list
2. The Knowledge Base Dialog will open with current settings
3. Make necessary changes
4. Click "Save" to update the knowledge base

### Assigning Groups to Knowledge Bases

Knowledge base access is controlled through group assignments:

1. In the Knowledge Base Dialog, locate the Groups section
2. Select groups that should have access to this knowledge base
3. Users belonging to selected groups will be able to access this knowledge base content
4. The table displays assigned groups as avatar circles with group initials
5. Hovering over group avatars shows the full group name

### Deleting Knowledge Bases

To delete a knowledge base:
1. Click the trash icon in the Actions column
2. If the knowledge base contains content:
   - A warning dialog appears indicating the content count
   - You must first delete the content or click "Show Content" to view and manage it
3. If the knowledge base is empty:
   - A confirmation dialog appears
   - Click "Delete" to remove the knowledge base
4. A success notification confirms when deletion is complete


## Data Management

### Exporting Knowledge Base Data

To export the knowledge base list to Excel:
1. Click the "Export to Excel" button (external link icon in top-right)
2. Confirm the export in the dialog that appears
3. The browser will download a CSV file
4. The export includes all currently visible knowledge bases (respects active filters)

### Refreshing the Knowledge Base List

To ensure you're viewing the most current data:
1. Click the "Refresh Data" button (refresh icon in top-right)
2. The system will reload all knowledge base data from the server
3. This is useful after making changes or when multiple administrators are working simultaneously

## Troubleshooting

**Issue**: Knowledge base list is empty
- Check if filters are active (blue filter button indicates active filters)
- Click the "Clear Filters" button to remove all filters
- Refresh the data using the refresh button
- If still empty, you may need to create your first knowledge base

**Issue**: Cannot delete a knowledge base
- The knowledge base may contain content that must be deleted first
- Follow the prompts to view and manage content before deletion
- Ensure you have proper permissions for deletion

**Issue**: Group avatars not displaying correctly
- The groups store may need refreshing
- Try refreshing the page
- Verify that groups exist in the system

**Issue**: Search not finding expected results
- Check your spelling and try partial terms
- Clear all filters and try a broader search
- Knowledge base names are case-sensitive in some operations

**Issue**: Changes not appearing after edit
- Click the refresh button to reload the latest data
- Check for error messages in toast notifications
- Verify the changes were saved successfully

**Issue**: "Access denied" when trying to access content
- Verify you have permissions for the selected knowledge base
- Check your assigned groups
- Contact your system administrator for access rights

---

For additional assistance with knowledge base management, please contact your system administrator.