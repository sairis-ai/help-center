# AI Settings Panel User Guide

<!--
## Table of Contents
- [AI Settings Panel User Guide](#ai-settings-panel-user-guide)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Accessing AI Settings](#accessing-ai-settings)
  - [AI Settings Panel Overview](#ai-settings-panel-overview)
  - [Blueprint Management](#blueprint-management)
    - [Loading Blueprints](#loading-blueprints)
    - [Saving Blueprint Changes](#saving-blueprint-changes)
    - [Viewing Blueprint Differences](#viewing-blueprint-differences)
    - [Secure Blueprints](#secure-blueprints)
  - [AI Instructions](#ai-instructions)
  - [AI Model Configuration](#ai-model-configuration)
    - [Model Selection](#model-selection)
    - [AI Mode](#ai-mode)
    - [Web Tools](#web-tools)
  - [Model Settings](#model-settings)
    - [General Knowledge](#general-knowledge)
    - [Citations](#citations)
    - [Content Filters](#content-filters)
  - [Knowledge Sources](#knowledge-sources)
    - [Knowledge Bases](#knowledge-bases)
    - [Content Selection](#content-selection)
    - [Search Configuration](#search-configuration)
    - [Web Pages](#web-pages)
  - [Advanced Features](#advanced-features)
    - [Options Menu](#options-menu)
    - [Blueprint Ownership](#blueprint-ownership)
  - [Best Practices](#best-practices)
  - [Troubleshooting](#troubleshooting)
--> 

## Introduction

The AI Settings Panel provides comprehensive control over how the AI Assistant functions, including its knowledge sources, behavior, and response style. This sidebar interface allows you to configure AI settings for the current session, load saved Blueprints, and customize the AI's capabilities to best suit your needs. This guide explains how to use each setting to optimize your AI interactions.

## Accessing AI Settings

The AI Settings Panel is accessible from the main AI Assistant interface:

1. Click the settings icon in the header area of the AI Assistant
2. The settings panel opens as a sidebar on the right side of the screen
3. All changes made in this panel apply to the current session

## AI Settings Panel Overview

The Settings Panel is organized into several key sections:

![homepage](/images/assistant-settings.png)

1. **Header** - Contains the title and Options menu
2. **Blueprint** - Load, save, and manage Blueprints
3. **Instructions** - Configure AI behavior through system prompts
4. **AI Model** - Select and configure the AI foundation model
5. **Web Tools** - Enable web search and news capabilities
6. **Model Settings** - Configure AI response parameters
7. **Knowledge Sources** - Select content for the AI to reference

## Blueprint Management

### Loading Blueprints

To use a saved Blueprint configuration:

![homepage](/images/assistant-blueprint.png)

1. Click the dropdown icon in the Blueprint section
2. A popup appears with available Blueprints
3. Optionally use the search box to filter Blueprints
4. Click on a Blueprint to load its settings
5. All settings in the panel update to match the selected Blueprint

Each Blueprint includes:
- Avatar with initials
- Blueprint name
- Brief description
- All associated AI settings

### Saving Blueprint Changes

When you modify settings from a loaded Blueprint:

1. A "Blueprint Changed" warning appears
2. The warning indicates settings no longer match the original Blueprint
3. Click the "Save" button in the warning or at the top of the Blueprint section
4. Confirm saving in the dialog that appears
5. The Blueprint is updated with your current settings

**Note**: You must have ownership permissions to save changes to a Blueprint.

### Viewing Blueprint Differences

To see what changes you've made to a Blueprint:

1. Click "Show Diff" in the warning message when a Blueprint has been modified
2. A dialog opens showing a comparison between:
   - Original Blueprint settings
   - Current modified settings
3. Review the differences before deciding to save

### Secure Blueprints

Some Blueprints may be marked as secure:

1. Secure Blueprints show a lockout screen when you don't have ownership
2. The message indicates "The author of this Blueprint has made the settings a secret"
3. You can still use the Blueprint but cannot view or edit its settings
4. Only owners of the Blueprint can see and modify secure settings

## AI Instructions

The Instructions section controls the AI's behavior through system prompts:

![homepage](/images/assistant-blueprint-instructions.png)

1. View the current instructions in the text area
2. Click the pencil icon to open the full Instructions editor
3. In the editor:
   - Read guidance about effective instructions
   - Edit the text in the large text area
   - Instructions guide the AI on how to respond, its role, and limitations

Best practices for instructions:
- Be specific about the AI's role
- Define any specialized knowledge domains
- Set boundaries for what the AI should/shouldn't do
- Include response format preferences
- Keep instructions clear and concise

## AI Model Configuration

### Model Selection

To select the AI foundation model:

![homepage](/images/assistant-model.png)

Before selecting or changing your Language Model you may wish to review the differences between the models.
[Understanding Large Language Models](/admin/Administration/AI-Management/Settings/llm)

1. Click on the model name box
2. The LLM selector dialog opens
3. Choose from available models (Claude 3 Haiku, Sonnet, etc.)
4. Selected model appears in the model box with logo
5. Different models offer varying capabilities, speeds, and costs

### AI Mode

Configure how the AI processes and responds to queries:

![homepage](/images/assistant-mode.png)

1. Use the AI Mode dropdown to select:
   - **Question & Answers**: Standard Q&A functionality
   - **Agentic**: More autonomous problem-solving abilities
   - **Tools**: Enables the use of specific tools and functions

### Web Tools

Control the AI's access to external information:

![homepage](/images/assistant-web-tools.png)

1. **Live Web Lookup**:
   - Toggle the "Live Web" button on/off
   - When enabled, adjust the number of search results (0-25) by clicking the badge
   - Higher numbers provide more comprehensive but potentially less focused results

2. **Live News Lookup**:
   - Toggle the "Live News" button on/off
   - When enabled, click the badge to configure:
     - Number of news results (0-50)
     - Time range for news (days in the past)
   - Useful for questions about current events and recent developments

## Model Settings

![homepage](/images/assistant-model-settings.png)

### General Knowledge

Control whether the AI can use its pre-trained knowledge:

1. Toggle "Allow LLM Answers" on/off
2. When ON: AI can answer using both its built-in knowledge and your content
3. When OFF: AI will only use information from your selected content sources
4. Useful for controlling exactly where information comes from

### Citations

Manage how the AI attributes information sources:

1. Toggle "Citations" on/off
2. When ON: AI includes numbered references and source information
3. When OFF: AI provides answers without explicit source attribution
4. Citations help verify information accuracy and source reliability

### Content Filters

Control content appropriateness:

1. Toggle "Profanity" allowed/blocked
2. When blocked: AI filters out inappropriate language
3. When allowed: AI may include language that would otherwise be filtered
4. Consider your organization's policies when configuring this setting

## Knowledge Sources

### Knowledge Bases

![homepage](/images/assistant-kbs.png)

Select knowledge repositories for the AI to use:

1. Expand the "Knowledge Bases" accordion
2. View currently selected Knowledge Bases and content as chips
3. Click "Edit Content" to open the content selection dialog
4. In the dialog:
   - Left panel: Select Knowledge Bases to include
   - Right panel: Choose specific content items
   - Use search boxes to filter options

### Content Selection

In the content selection dialog:

1. **Knowledge Bases**: Select entire knowledge repositories
   - Each KB contains multiple documents or content items
   - Selecting a KB includes all its content

2. **Assigned Content**: Choose specific individual content items
   - More granular control over exactly what information is included
   - Useful for targeted knowledge needs

### Search Configuration

Fine-tune how the AI searches knowledge sources:

1. **KB Search Results**: Set the number of results (1-500)
   - Higher values provide more comprehensive coverage
   - Lower values focus on the most relevant content

2. **Minimum Match Score**: Set the relevance threshold (1-500%)
   - Higher values only include highly relevant content
   - Lower values include more content with lower relevance
   - Standard setting is around 60-70%

### Web Pages

Add specific web pages as information sources:

![homepage](/images/assistant-webpages.png)

1. Expand the "Web Pages" accordion
2. View any currently added web pages
3. Click the "+" button to add a new web page
4. Enter the complete URL (including https://)
5. Up to 15 web pages can be added
6. Remove pages by clicking the trash icon
7. The AI will crawl these pages for information during conversations

## Advanced Features

### Options Menu

Access additional functionality through the three-dot menu:

1. **Show Settings Page**: Open the full settings interface
2. **Save This Blueprint**: Save current settings to the active Blueprint
3. **Copy to New Session**: Create a new chat with current settings
4. **Create New Blueprint**: Make a new Blueprint from current settings

### Blueprint Ownership

Blueprint permissions are based on ownership:

1. Users can view and use any Blueprint
2. Only owners can:
   - Modify and save changes to a Blueprint
   - View settings of secure Blueprints
   - Delete Blueprints they own

## Best Practices

For effective AI configuration:

1. **Targeted Knowledge Selection**:
   - Select only relevant Knowledge Bases for your current task
   - Too many sources can dilute relevance
   - Too few may limit the AI's knowledge

2. **Web Tools Balance**:
   - Enable web search for current information
   - Keep search results manageable (5-10)
   - Use news search when timeliness matters

3. **Model Selection**:
   - Use faster models (Haiku) for simple questions and drafts
   - Use more capable models (Sonnet) for complex reasoning

4. **Clear Instructions**:
   - Be specific about the AI's role and tone
   - Include examples of desired responses when possible
   - Update instructions for different use cases

5. **Blueprint Management**:
   - Create different Blueprints for different tasks
   - Update Blueprints when knowledge bases change
   - Use secure settings for sensitive configurations

## Troubleshooting

**Issue**: Changes to settings not affecting AI responses
- Ensure you've made changes in the current session
- Try asking a new question related to your changes
- Check if the correct Knowledge Bases are selected

**Issue**: Unable to save Blueprint changes
- Verify you have ownership of the Blueprint
- Check for any error messages in toast notifications
- Try refreshing the page and making changes again

**Issue**: Web search not providing current information
- Check that "Live Web" is toggled on
- Verify the search results number is sufficient (5+)
- Formulate questions that clearly ask for current information

**Issue**: Cannot view Blueprint settings
- It may be a secure Blueprint that you don't own
- Request access from the Blueprint owner
- Create your own Blueprint with similar settings

**Issue**: Knowledge Base content not being used
- Check minimum match score isn't too high
- Verify content is selected in the Content dialog
- Try asking more specific questions related to the content

**Issue**: Model selection dialog not showing all models
- Some models may require specific permissions
- Your organization may limit available models
- Check with your administrator about model access

---

For additional assistance with AI settings, please contact your system administrator or refer to the platform documentation.