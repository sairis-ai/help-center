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

The Knowledge Base Manager provides administrators and content managers with a powerful interface for creating, managing, and organizing AI knowledge bases. Knowledge bases are collections of content that power your AI assistant, enabling it to provide accurate, relevant responses based on your organization's specific information and documentation.

<a href="/general/tutorials/create-kb-tutorial.html">
  <img src="/images/watch-tutorial-button.png" alt="User Tutorial" style="width:200px;">
</a>

## Accessing the Knowledge Base Manager

The Knowledge Base Manager is accessible to users with the following roles:
- Admin
- Content
- Manager

To access the Knowledge Base Manager, navigate to the Knowledge Bases section from the assistant management menu.

## Knowledge Base Manager Interface Overview

![homepage](/images/knowledge-base-manager.png)

The Knowledge Base Manager interface consists of these key components:

1. **Header Section**: Contains the title "Knowledge Bases" with a count badge and the "Add KB" button
2. **Search and Filter Controls**: Tools to find and filter knowledge bases
3. **Data Table**: Displays all knowledge bases with sortable columns
4. **Action Buttons**: Refresh, filter, export, and help options
5. **Knowledge Base Editor**: Opens when adding or editing a knowledge base

## Knowledge Base List View

The main table displays all knowledge bases you have access to view. Each row contains:

1. **KB Initials**: Visual identifier for the knowledge base (clickable to edit)
2. **Name and Description**: The primary identifier and purpose description (clickable to edit)
3. **Groups**: Visual representation of groups with access to the knowledge base
4. **Topic**: Category classification for organizational purposes
5. **Actions**: Buttons for managing the knowledge base and its content

## Searching for Knowledge Bases

To find specific knowledge bases:

1. Use the search box in the upper-left corner
2. Type keywords to search across knowledge base names, descriptions, and topics
3. Results update automatically as you type
4. A filter indicator appears when search filters are active

## Filtering Knowledge Bases

The Knowledge Base Manager offers several filtering options:

### Column Filtering

Each column has its own filtering capabilities:
1. Click the filter icon in any column header
2. Enter filter criteria in the popup
3. The table will update to show only matching records

### Filter Examples

- **Groups Filter**: Select a specific group to show only knowledge bases shared with that group
- **Topic Filter**: Select a topic to show only knowledge bases with that classification
- **Global Search**: Enter text to search across all searchable fields

## Creating a New Knowledge Base

To create a new knowledge base:

1. Click the "Add KB" button in the top-right corner
2. The Knowledge Base Editor dialog will open
3. Fill in the required information:
   - Name (required)
   - Description
   - Initials (auto-generated from name if not specified)
   - Topic (optional category)
   - Group assignments for access control
4. Configure any additional settings
5. Click "Save" to create the knowledge base
6. See [Knowledge Base Settings](/admin/administration/ai-management/knowledge-bases/knowledge-base) for more details on Knowledge Base settings fields

## Managing Knowledge Bases

### Editing a Knowledge Base

To modify an existing knowledge base:

1. Click on the knowledge base name, description, or initials in the table
2. The Knowledge Base Editor dialog will open with current settings
3. Make your desired changes
4. Click "Save" to update the knowledge base

### Deleting a Knowledge Base

To delete a knowledge base:

1. Click the trash icon in the Actions column
2. A confirmation dialog will appear:
   - If the knowledge base contains content, you'll be prompted to delete the content first
   - If the knowledge base is empty, you can confirm deletion

**Important**: You cannot delete a knowledge base that contains content. You must first delete or reassign all content items.

## Knowledge Base Actions

The Actions column provides quick access to common tasks:

### View AI Content

![homepage](/images/knowledge-base-actions.png)

Click the palette icon to:
- View all content items in this knowledge base
- The system will navigate to the Content List filtered to show only items in this knowledge base

### Run Test Cases

Click the gauge icon to:
- Access the test case interface for this knowledge base
- Create and run test scenarios to evaluate AI responses
- Verify knowledge base performance

### AI Sync/Embed

Click the microchip icon to:
- View the processing status of content in this knowledge base
- Check if content has been properly embedded and indexed
- Troubleshoot content that failed to process

## Group Access Management

The Groups column shows which groups have access to each knowledge base:

- Each group is represented by an avatar with the group's initials
- Up to 8 groups are shown directly as avatars
- If more than 8 groups have access, a "+N" indicator shows the additional count
- Hover over any avatar to see the full group name in a tooltip

## Knowledge Base Status Indicators

The list provides visual indicators for each knowledge base:

- **KB Initials**: Appears as a colorful square avatar in the leftmost column
- **Topic Tag**: Shows the assigned topic category
- **Group Avatars**: Show which groups have access
- **Content Count**: Tracked internally and used during deletion

## Managing the Knowledge Base List

### Refreshing the List

To ensure you're viewing the most current information:

1. Click the refresh icon in the top-right corner
2. The list will reload with the latest data from the server

### Clearing Filters

To remove all active filters:

1. Click the filter-slash icon in the top-right corner
2. All filters will be reset to show all knowledge bases

### Exporting Knowledge Base Data

To export the knowledge base list for reporting or analysis:

1. Click the export icon in the top-right corner
2. Confirm the export in the popup dialog
3. A CSV file will be downloaded to your computer
4. The exported file includes all visible columns for all knowledge bases matching your current filters

## Empty State Handling

If no knowledge bases are found (either because none exist or due to filters):

1. A helpful empty state message appears
2. The message suggests possible actions:
   - Check your filters
   - Clear filters
   - Add a new knowledge base
3. A visual illustration helps identify the empty state

## Accessing Help Resources

For additional guidance on using the Knowledge Base Manager:

1. Click the question mark icon in the top-right corner
2. The Help Center dialog will open
3. Relevant documentation for knowledge base management will be displayed

## Troubleshooting

**Issue**: No knowledge bases appearing in the list
- Check if filters are active (indicated by the filter badge)
- Click the filter-slash icon to clear all filters
- Verify you have permission to view knowledge bases
- Click the refresh button to update the list

**Issue**: Cannot create or edit a knowledge base
- Verify you have appropriate permissions (Admin, Content, or Manager role)
- Check for any error messages that appear during save operations
- Ensure all required fields are completed

**Issue**: Cannot delete a knowledge base
- Check if the knowledge base contains content (indicated in the confirmation dialog)
- Navigate to the content list and delete all content in the knowledge base first
- Return to the Knowledge Base Manager and try deleting again

**Issue**: Export not working
- Check your browser's download settings
- Ensure you have permission to export data
- Try refreshing the page and attempting the export again

---

For additional assistance with the Knowledge Base Manager, click the Help button in the top-right corner for context-specific guidance.
