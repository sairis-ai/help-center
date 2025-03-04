# AI Blueprint Configuration Guide

## Table of Contents
- [AI Blueprint Configuration Guide](#ai-blueprint-configuration-guide)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Accessing Blueprint Configuration](#accessing-blueprint-configuration)
  - [Blueprint Interface Overview](#blueprint-interface-overview)
  - [Blueprint Configuration Tabs](#blueprint-configuration-tabs)
    - [Blueprint Tab](#blueprint-tab)
    - [AI Settings Tab](#ai-settings-tab)
    - [Share Tab](#share-tab)
  - [Basic Blueprint Information](#basic-blueprint-information)
    - [Name and Description](#name-and-description)
    - [Topic and Tags](#topic-and-tags)
    - [Security Settings](#security-settings)
    - [Visibility Options](#visibility-options)
  - [Conversation Starters](#conversation-starters)
    - [Creating Conversation Starters](#creating-conversation-starters)
    - [Managing Launchpad Settings](#managing-launchpad-settings)
    - [Reordering Starters](#reordering-starters)
  - [AI Configuration](#ai-configuration)
    - [Instructions](#instructions)
    - [Model Selection](#model-selection)
    - [AI Mode](#ai-mode)
    - [Response Controls](#response-controls)
    - [Web Integration](#web-integration)
    - [Knowledge Base Configuration](#knowledge-base-configuration)
    - [Web Pages Configuration](#web-pages-configuration)
  - [Sharing and Access Control](#sharing-and-access-control)
    - [Group Assignments](#group-assignments)
    - [Universal Links](#universal-links)
    - [Ownership Management](#ownership-management)
  - [Blueprint Management](#blueprint-management)
    - [Saving Blueprints](#saving-blueprints)
    - [Blueprint Actions](#blueprint-actions)
    - [Import/Export](#importexport)
  - [Best Practices](#best-practices)
  - [Troubleshooting](#troubleshooting)

## Introduction

AI Blueprints allow administrators and content creators to define customized AI experiences with specific knowledge bases, web resources, instructions, and conversation flows. Blueprints serve as reusable configurations that can be shared with users to ensure consistent AI interactions tailored to specific needs or departments.

## Accessing Blueprint Configuration

The Blueprint configuration interface is accessible to users with specific roles:
- Admin
- Content
- Manager

To access Blueprint configuration:
1. Navigate to the Blueprint management section in the system
2. Select an existing Blueprint to edit, or
3. Create a new Blueprint using the "Add Blueprint" button

## Blueprint Interface Overview

The Blueprint interface consists of these key components:

1. **Navigation Tabs**: Blueprint, AI Settings, Share
2. **Action Buttons**: Save, Run, Actions menu
3. **Configuration Area**: Main content area that changes based on selected tab
4. **Preview Pane**: Real-time visualization of Blueprint appearance

## Blueprint Configuration Tabs

### Blueprint Tab

The Blueprint tab contains basic configuration settings:
- Name and description
- Visual identifiers (initials)
- Topics and tags
- Security settings
- Visibility options
- Conversation starters

### AI Settings Tab

The AI Settings tab contains AI behavior configuration:
- System instructions
- AI model selection
- Response style preferences
- Content sources configuration
- Knowledge base selection
- Web integration settings

### Share Tab

The Share tab controls access and permissions:
- Group assignments
- Universal link generation
- Ownership management

## Basic Blueprint Information

### Name and Description

The Blueprint name and description are fundamental identifiers:

1. **Name** (Required):
   - Clear, descriptive title that reflects purpose
   - Used as primary identifier throughout the system
   - Must be unique within the system
   - Examples: "Customer Support Assistant", "HR Policy Guide"

2. **Initials** (Required):
   - Two-letter identifier used in the Blueprint avatar
   - Automatically generated from name but can be customized
   - Used in visual representations throughout the system

3. **Description**:
   - Comprehensive explanation of the Blueprint's purpose
   - Helps users understand when to use this Blueprint
   - Appears in the Blueprint selection interface
   - Should explain capabilities and limitations

### Topic and Tags

Topics and tags help organize and categorize Blueprints:

1. **Topic**:
   - Single selection from predefined list
   - Used for high-level categorization
   - Helps filter Blueprints by subject area

2. **Tags**:
   - Multiple selections from predefined list
   - Can create new tags on demand
   - Used for more granular categorization
   - Facilitates Blueprint discovery

### Security Settings

Several toggles control Blueprint security:

1. **Secret**:
   - When enabled, hides Blueprint settings from non-owners
   - Users can still use the Blueprint but cannot view configuration
   - Useful for protecting proprietary instructions or data sources

2. **Allow Copies**:
   - When enabled, allows other users to create derivative Blueprints
   - When disabled, prevents duplication of your Blueprint
   - Useful for template distribution and knowledge sharing

### Visibility Options

Control where and how your Blueprint appears:

1. **Publish in Quick List**:
   - When enabled, Blueprint appears in main AI selector dropdown
   - Provides quick access for frequently used Blueprints
   - Recommended for widely used Blueprints

2. **Publish on Home Page**:
   - When enabled, Blueprint appears on users' home pages
   - Increases visibility and discovery
   - Use for important or new Blueprints that need promotion

## Conversation Starters

Conversation starters are predefined prompts that help guide users to effective interactions.

### Creating Conversation Starters

To add conversation starters:
1. Click the "+" button next to the Conversation Starters header
2. For each starter, provide:
   - **Title**: Short, action-oriented prompt (e.g., "Find policy information")
   - **Instructions**: Full prompt that will be sent to the AI
   - **LaunchPad**: Toggle to show/hide in the LaunchPad interface

### Managing Launchpad Settings

The LaunchPad is a quick access interface for conversation starters:
- Enable LaunchPad for frequently used conversation flows
- LaunchPad items appear as buttons on the Blueprint interface
- Use descriptive titles for clear user navigation

### Reordering Starters

Conversation starters can be reordered using drag-and-drop:
1. Hover over the conversation starter row
2. Use the vertical ellipsis (⋮⋮) handle on the left to drag
3. Drop in the desired position
4. Order is preserved when the Blueprint is saved

## AI Configuration

### Instructions

Instructions tell the AI how to behave and respond:

1. **System Instructions**:
   - Detailed guidance for the AI's behavior
   - Define scope, tone, limitations, and resources
   - Can include role-specific instructions
   - Supports rich formatting for clarity
   - Maximum 30,000 characters

2. **Best Practices for Instructions**:
   - Be specific about the AI's role and purpose
   - Define boundaries clearly (what it should/shouldn't do)
   - Specify preferred response format and style
   - Include domain-specific guidance when relevant

### Model Selection

Choose the AI foundation model that powers the Blueprint:

1. **Haiku**:
   - Faster responses
   - More economical
   - General knowledge capabilities
   - Best for straightforward questions and tasks

2. **Sonnet**:
   - More advanced reasoning
   - Handles complex queries
   - Better contextual understanding
   - Higher cost but better for specialized tasks

### AI Mode

Select the operational mode for the AI:

1. **Question & Answers**:
   - Fast responses focused on direct answers
   - Searches only through specified knowledge bases and content
   - Best for factual information retrieval

2. **Agentic**:
   - Comprehensive approach using multiple tools and sources
   - Longer processing time but more thorough results
   - Best for complex problems requiring multiple steps

3. **Tools**:
   - Advanced mode for complex workflows
   - Uses Chain of Thought processing
   - Best for specialized applications with multiple data sources
   - Requires more detailed configuration

### Response Controls

Several settings adjust how the AI responds:

1. **LLM General Knowledge**:
   - When enabled, allows AI to use its built-in knowledge
   - When disabled, AI relies only on specified content sources
   - Use off setting when answers must come only from approved content

2. **Cite Sources**:
   - When enabled, AI provides references for information
   - Enhances credibility and verifiability
   - Recommended for research or compliance scenarios

3. **Profanity**:
   - When enabled, allows AI to use potentially offensive language
   - When disabled (default), filters offensive content
   - Consider your audience and use case when configuring

### Web Integration

Control how the AI interacts with external web resources:

1. **Live Web Lookup**:
   - When enabled, allows AI to search the internet for current information
   - Set number of results (1-25) to control breadth of search
   - Useful for time-sensitive or rapidly changing topics

2. **Live News Lookup**:
   - When enabled, searches current news articles
   - Configure number of results (1-50) and time period (days)
   - Best for current events and trending topics

### Knowledge Base Configuration

Configure how the AI uses your organization's knowledge:

1. **Knowledge Base Selection**:
   - Choose specific knowledge bases for the Blueprint
   - Filter and search available KBs using the search box
   - Selected KBs appear as blue chips in the preview area

2. **Content Selection**:
   - Choose specific content items (documents, files) for the Blueprint
   - Filter and search available content using the search box
   - Selected content appears as white chips in the preview area

3. **Search Parameters**:
   - **KB Search Results**: Number of records to retrieve (1-500)
   - **KB Min Score Results**: Minimum relevance threshold (percentage)
   - Higher thresholds provide more relevant but fewer results

### Web Pages Configuration

Add specific web pages as knowledge sources:

1. **Adding Web Pages**:
   - Enter full URLs including https://
   - Limited to 15 pages per Blueprint
   - AI will retrieve and use content from these pages

2. **Managing Web Pages**:
   - Remove pages using the trash icon
   - Pages are processed each time the Blueprint is used
   - Ensure pages are accessible and contain relevant content

## Sharing and Access Control

### Group Assignments

Control which users can access the Blueprint:

1. **Group Selection**:
   - Choose from existing groups in the system
   - Multiple groups can be selected
   - Only users belonging to selected groups will see this Blueprint
   - No groups selected means no users can access the Blueprint

2. **Access Control Strategy**:
   - Department-based: Assign to department-specific groups
   - Role-based: Assign to groups based on job functions
   - Project-based: Assign to temporary project teams

### Universal Links

Create shareable links to the Blueprint:

1. **Universal Link**:
   - Automatically generated based on Blueprint ID
   - Can be copied and shared with authorized users
   - Recipients must still have group access to use the Blueprint
   - Format: `https://[domain]/ulink/[blueprint_id]`

### Ownership Management

Manage who can edit and administer the Blueprint:

1. **Adding Owners**:
   - Search for users by name or username
   - Added owners have full edit rights to the Blueprint
   - Owners can modify settings, content sources, and sharing

2. **Removing Owners**:
   - Click the trash icon next to an owner to remove them
   - At least one owner is required
   - Owners should be limited to necessary personnel

## Blueprint Management

### Saving Blueprints

To save a Blueprint:
1. Click the "Save" button in the top-right corner
2. All settings across all tabs are saved
3. The button is outlined when there are no changes
4. The button is solid when there are unsaved changes

### Blueprint Actions

The Actions menu provides additional operations:
1. **Save Blueprint**: Save current changes
2. **Save As New Blueprint**: Create a copy with a new name
3. **Delete Blueprint**: Remove the Blueprint entirely
4. **Enable/Disable Blueprint**: Toggle availability
5. **Change Owner**: Navigate to ownership management
6. **Create New Blueprint**: Start fresh with default settings
7. **Import/Export Blueprint**: Share configurations between systems

### Import/Export

Share Blueprint configurations between environments:

1. **Exporting**:
   - Select "Export Blueprint" from the Actions menu
   - A .blueprint file is saved to your browser downloads
   - Personal settings (IDs, owners) are removed during export

2. **Importing**:
   - Select "Import Blueprint" from the Actions menu
   - Upload a .blueprint file
   - Review and configure group permissions, topics, and ownership
   - Secure Blueprints cannot be exported

## Best Practices

For optimal Blueprint configuration:

1. **Naming Conventions**:
   - Use descriptive names that clearly communicate purpose
   - Be consistent across related Blueprints
   - Consider including department/function in the name

2. **Instructions**:
   - Be specific about the AI's purpose and limitations
   - Include sample dialogues for complex interactions
   - Review and refine based on actual usage

3. **Content Selection**:
   - Choose focused, relevant knowledge bases
   - Avoid including too many sources (can dilute results)
   - Test with representative questions before publishing

4. **Sharing Strategy**:
   - Create department-specific Blueprints for specialized needs
   - Use broader Blueprints for company-wide information
   - Regularly review access permissions

5. **Conversation Starters**:
   - Create starters that address common user needs
   - Use action-oriented language
   - Include diverse examples to demonstrate capabilities

## Troubleshooting

**Issue**: Blueprint name error message
- Names must be unique across the system
- Try a more specific name or add a qualifier
- Check for extra spaces that might affect validation

**Issue**: Imported Blueprint missing settings
- Some settings like groups and ownership must be reconfigured
- Secure Blueprints cannot be exported/imported
- Verify file format (.blueprint) is correct

**Issue**: Blueprint not appearing for users
- Check group assignments (users must belong to assigned groups)
- Verify Blueprint is enabled
- Check "Quick List" and "Home Page" settings based on expected visibility

**Issue**: Web page content not included in responses
- Verify URLs are correct and complete (including https://)
- Pages may require authentication or block AI access
- Some sites have anti-scraping measures that prevent access

**Issue**: Conversation starters not working
- Verify prompts are clear and specific
- Check LaunchPad toggle is enabled for visible starters
- Test prompts independently to verify expected behavior

**Issue**: Unexpected AI responses
- Review system instructions for clarity
- Check that knowledge bases contain relevant information
- Consider adjusting score threshold for more precise results
- Test with different AI modes to compare results

---

For additional assistance with Blueprint configuration, please contact your system administrator or refer to the platform documentation.