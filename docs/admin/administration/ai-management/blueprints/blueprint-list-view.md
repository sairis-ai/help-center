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
<!-- 
<a href="/general/tutorials/create-blueprint-tutorial.html">
  <img src="/images/watch-tutorial-button.png" alt="User Tutorial" style="width:200px;">
</a> -->

<a href="/videos/creating-blueprints-in-sairis.mp4" target="_blank">
  <img src="/images/watch-tutorial-button.png" alt="User Tutorial" style="width:200px;">
</a>

## Accessing Blueprint AI Settings

Blueprint AI Settings can be accessed:

![homepage](/images/blueprint-new.png)

- When creating a new Blueprint by clicking the "+ Add" button
- When editing an existing Blueprint by clicking the pencil icon
- Through the "AI Settings" section of an existing Blueprint

To access this component, navigate to `/blueprint/BlueprintListView` in the system. You'll typically find a link to this page in the administration menu or AI configuration section.

**Issues Accessing a Blueprint?**: 
- Some settings may be locked if you don't have edit permissions for the Blueprint or if it's marked as 'Secure'.
- You also may not be able to edit a Blueprint if you granted ownership/edit capabilities of the blueprint.   
  - Please check with your Business Admin or Global Admin if you believe either of these may be the issue.
- Also, if the blueprint was auto-created when you created the Knowledge Base, the blueprint will be locked for direct editing [you can change settings via the matching knowledge base].  This will be indicated by 'Locked' being enabled under Features.

![homepage](/images/blueprint-locked.png)

## Blueprint Manager Interface Overview

The Blueprint Manager consists of these key components:

![homepage](/images/blueprint-manager.png)

1. **Header Section**: Contains the title "Blueprint Manager" with blueprint count badge, description, and Add Blueprint button
2. **Search and Filter Controls**: Tools for finding specific blueprints including global search, topic filter, and feature filter
3. **Data Table**: Displays blueprint information in a sortable, filterable table
4. **Action Buttons**: Quick access to refresh data, clear filters, and export to Excel
5. **Blueprint Editor**: Full-screen dialog for creating and editing blueprints

## Secure Blueprint Protection

Blueprints can be marked as secure, which means:
- Only owners can view and modify the actual settings
- Non-owners will see a "Secure Blueprint" message
- Users can still use the Blueprint but cannot see its configuration

If you see the secure Blueprint message, you can still use the Blueprint but will need owner access to view or modify its settings.

## Blueprint Settings Categories

Blueprint settings are organized into three main categories:

1. **Instructions**: Define what the AI should do and how it should behave
2. **Response Style**: Control how the AI generates and formats its responses
3. **Content Sources**: Determine what information the AI can access

## Configuring AI Instructions

Instructions are the most powerful way to guide AI behavior:

1. Click the "Edit" button next to Instructions
2. In the dialog that appears, enter detailed instructions explaining:
   - What role the AI should adopt
   - How it should analyze information
   - What format its responses should follow
   - Any limitations or restrictions it should observe

**Best Practices for Instructions**:
- Be specific and detailed
- Clearly define the AI's purpose and audience
- Specify any required structures or formats
- Include examples of ideal responses when possible
- Instructions can be several paragraphs long

## Response Style Settings

### AI Model Selection

Choose which AI model powers your Blueprint:

1. Click on the model name to open the selection dialog
2. Options typically include:
   - **Haiku 3.5**: Faster response times, good for general knowledge, lower cost
   - **Sonnet 3.5**: More advanced reasoning, better for complex tasks, higher cost
   - Other models may be available depending on your organization

### AI Mode

Select how the AI processes information:

- **Question & Answers**: Simple direct responses to queries using only your selected content
- **Agentic**: Advanced mode that uses research, reasoning, and analysis with access to multiple tools

### LLM General Knowledge

Control whether the AI can use its pre-trained knowledge:

- **Allow LLM Answers**: Enable the AI to use its training data when responding
- **Block LLM Answers**: Restrict the AI to only use the content sources you specify

This setting is particularly important when you need to ensure responses come only from your approved content.

### Citation Settings

Control whether the AI provides sources for its information:

- **Citations On**: The AI will include references for facts and quotes
- **Citations Off**: The AI will provide information without citations

Citations are particularly useful when accuracy verification is important.

### Profanity Controls

Determine how the AI handles sensitive language:

- **Allowed**: The AI can include potentially offensive language when appropriate
- **Blocked**: The AI will filter out profanity and sensitive content

## Content Sources Configuration

### Live Web Lookup

Enable the AI to search the internet in real-time:

1. Toggle "Live Web" on to allow internet searches
2. Specify the number of search results (1-25) to include
3. More results provide more comprehensive information but may increase response time

### Live News Lookup

Enable the AI to search recent news articles:

1. Toggle "Live News" on to allow news searches
2. Configure:
   - Number of news results to include (1-50)
   - How recent the news should be (1-1825 days)

### Knowledge Base Settings

Fine-tune how the AI searches through your organization's knowledge:

1. **KB Search Results**: Set how many matching document chunks to retrieve (1-500)
   - Higher values provide more comprehensive but potentially redundant information
   - Lower values focus on the most relevant matches

2. **KB Min Score Results**: Set the minimum relevance threshold (1-100%)
   - Higher values (e.g., 80%) ensure only highly relevant content is included
   - Lower values (e.g., 40%) capture more distantly related information

### Managing Knowledge Sources

Control what content the AI can access:

1. Click "Edit Content" to open the content selection dialog
2. Select from two types of sources:
   - **Knowledge Bases**: Collections of related documents
   - **Assigned Content**: Individual files and documents

3. Search for specific content using the search boxes
4. Selected items are highlighted and show in the count badges
5. Selections are automatically applied when you close the dialog

### Web Pages Configuration

Specify up to 15 specific web pages for the AI to reference:

1. Expand the "Use Specific Web Pages" section
2. Click the "+" button to add a new web page
3. Enter the complete URL starting with "https://"
4. Remove pages by clicking the trash icon

This feature is useful when you want the AI to analyze specific online resources.

## Working with Blueprint Settings

### Editing AI Instructions

To modify the instructions:

1. Click "Edit" next to Instructions
2. In the dialog, enter your detailed instructions
3. Focus on clarity and specificity
4. Close the dialog to apply changes

### Handling Restricted Blueprints

If a Blueprint is marked as "Limited" or has restricted access:

1. You'll see a lock icon and notification
2. Restricted elements will be disabled
3. You can still use the Blueprint but cannot modify restricted settings

### Saving Changes

After configuring all settings:

1. Return to the main Blueprint editor
2. Click "Save" to apply your changes
3. The updated settings will take effect immediately for all users of the Blueprint

## Troubleshooting

**Issue**: Cannot edit certain settings
- Verify you have owner permissions for the Blueprint
- Check if the Blueprint is marked as secure or limited
- Some Blueprints linked to knowledge bases may have locked settings

**Issue**: Web or news search not working
- Ensure the toggles are enabled
- Verify search results count is greater than 0
- Check if your organization allows these features

**Issue**: Knowledge base content not appearing in AI responses
- Ensure content is properly selected
- Check if the minimum match score is set appropriately
- Verify the content contains information relevant to your queries

**Issue**: Changes not saving
- Make sure you have edit permissions
- Click the Save button after making changes
- Check for any validation errors in required fields

---

For additional assistance with Blueprint AI settings, please contact your system administrator.







