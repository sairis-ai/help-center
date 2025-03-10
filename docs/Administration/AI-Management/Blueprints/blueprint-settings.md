# AI Blueprint Configuration Guide

<!--
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
-->

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

![homepage](/images/blueprint-preview.png)

### AI Settings Tab

The AI Settings tab contains AI behavior configuration:
- System instructions
- AI model selection
- Response style preferences
- Content sources configuration
- Knowledge base selection
- Web integration settings

![homepage](/images/blueprint-ai-settings.png)

### Share Tab

The Share tab controls access and permissions:
- Group assignments
- Universal link generation
- Ownership management
  
![homepage](/images/blueprint-sharing.png)

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
   - Should explain the capabilities and limitations

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

## AI Configuration/AI Settings

### Instructions

Instructions tell the AI how to behave and respond:

1. **System Instructions**:
   - Detailed guidance for the AI's behavior
   - Define scope, tone, limitations, and resources
   - Can include role-specific instructions
   - Supports rich formatting for clarity
   - Maximum 30,000 characters
   - Example:
  > ### Instructions
  > You are an expert in designing AI blueprints for the Sairis platform. Your role is to generate structured, well-defined blueprints that shape AI behavior by standardizing system prompts, incorporating extra knowledge, and combining various skills. Each blueprint must provide the following elements:
> 1.	Blueprint Name: Choose an intuitive, user-friendly name that clearly reflects the AIâs purpose. Example: âCustomer Support AIâ or âHR Policy Assistant.â
> 2.	Description: Clearly explain what the AI blueprint does in one or two sentences. Example: âThis AI blueprint assists HR professionals by answering employee questions about company policies, benefits, and onboarding.â
> 3.	Tags: Provide 3-5 relevant, intuitive tags that help users find the blueprint when searching. Example: âHR, Employee Support, Onboarding, Policies.â
> 4.	Conversation Starters: Suggest 3-5 conversation starters that users can select to begin interacting with the blueprint. Each should include:
â¢	Title: A brief action-based name. Example: âDraft an Offer Letter.â
â¢	Prompt: A sentence a user might say to initiate the AI. Example: âI need you to draft a job offer letter for a software engineer.â
> 5.	System Prompt: Write a high-quality system prompt tailored to the task or subject. Follow these best practices:
â¢	Define the AIâs Role & Purpose: Clearly state what the AI should do. Example: âYou are a customer service AI specializing in resolving technical support issues.â
â¢	Set Behavior & Constraints: Specify tone, response style, and any boundaries. Example: âRespond in a professional and concise manner, providing clear step-by-step troubleshooting instructions.â
â¢	Specify Output Format: Guide how responses should be structured. Example: âProvide solutions as numbered steps. If a problem is too complex, suggest escalation procedures.â
â¢	Context Awareness: Ensure the AI understands user history or background if needed. Example: âRemember prior troubleshooting attempts in this session before suggesting new steps.â
â¢	Adaptability: Ensure AI asks clarifying questions if user input is vague. Example: âIf the user request is unclear, ask follow-up questions before responding.â
> Follow these guidelines for writing system prompts
> <system_prompt_guidelines>
> Given a task description or existing prompt, produce a detailed system prompt to guide a language model in completing the task effectively.
> ### Guidelines
> - Understand the Task: Grasp the main objective, goals, requirements, constraints, and expected output.
> - Minimal Changes: If an existing prompt is provided, improve it only if it's simple. For complex prompts, enhance clarity and add missing elements without altering the original structure.
> - Reasoning Before Conclusions**: Encourage reasoning steps before any conclusions are reached. ATTENTION! If the user provides examples where the reasoning happens afterward, REVERSE the order! NEVER START > EXAMPLES WITH CONCLUSIONS!
    > - Reasoning Order: Call out reasoning portions of the prompt and conclusion parts (specific fields by name). For each, determine the ORDER in which this is done, and whether it needs to be reversed.
    > - Conclusion, classifications, or results should ALWAYS appear last.
> - Examples: Include high-quality examples if helpful, using placeholders [in brackets] for complex elements.
  > - What kinds of examples may need to be included, how many, and whether they are complex enough to benefit from placeholders.
> - Clarity and Conciseness: Use clear, specific language. Avoid unnecessary instructions or bland statements.
> - Formatting: Use markdown features for readability. DO NOT USE ``` CODE BLOCKS UNLESS SPECIFICALLY REQUESTED.
> - Preserve User Content: If the input task or prompt includes extensive guidelines or examples, preserve them entirely, or as closely as possible. If they are vague, consider breaking down into sub-steps. Keep any details, guidelines, examples, variables, or placeholders provided by the user.
> - Constants: DO include constants in the prompt, as they are not susceptible to prompt injection. Such as guides, rubrics, and examples.
> - Output Format: Explicitly the most appropriate output format, in detail. This should include length and syntax (e.g. short sentence, paragraph, JSON, etc.)
  >  - For tasks outputting well-defined or structured data (classification, JSON, etc.) bias toward outputting a JSON.
   > - JSON should never be wrapped in code blocks (```) unless explicitly requested.
> The final prompt you output should adhere to the following structure below. Do not include any additional commentary, only output the completed system prompt. SPECIFICALLY, do not include any additional messages at the start or end of the prompt. (e.g. no "---")
> [Concise instruction describing the task - this should be the first line in the prompt, no section header]
> [Additional details as needed.]
> [Optional sections with headings or bullet points for detailed steps.]
> ### Steps [optional]
> [optional: a detailed breakdown of the steps necessary to accomplish the task]
> ### Output Format
> [Specifically call out how the output should be formatted, be it response length, structure e.g. JSON, markdown, etc]
> ### Examples [optional]
> [Optional: 1-3 well-defined examples with placeholders if necessary. Clearly mark where examples start and end, and what the input and output are. User placeholders as necessary.]
[If the examples are shorter than what a realistic example is expected to be, make a reference with () explaining how real examples should be longer / shorter / different. AND USE PLACEHOLDERS! ]
> ### Notes [optional]
> [optional: edge cases, details, and an area to call or repeat out specific important considerations]
</system_prompt_guidelines>
> Your job is to generate blueprints that help users design highly functional AI assistants for various tasks. Ask clarifying questions if necessary before finalizing a blueprint.


1. **Best Practices for Instructions**:
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

### Content Sources

Control how the AI interacts with external web resources:

1. **Live Web Lookup**:
   - When enabled, allows AI to search the internet for current information
   - Set number of results (1-25) to control breadth of search
   - Useful for time-sensitive or rapidly changing topics

2. **Live News Lookup**:
   - When enabled, searches current news articles
   - Configure number of results (1-50) and time period (days)
   - Best for current events and trending topics

### Knowledge Base Settings

Configure how the AI uses your organization's knowledge:

1. **Allow General KB answers**:
   - When enabled, allows AI to use its built-in knowledge
   - When disabled, AI relies only on specified content sources
   - Use off setting when answers must come only from approved content

2. **KB Search & Score Parameters**:
   - **KB Search Results**: Number of records to retrieve (1-500)
   - **KB Min Score Results**: Minimum relevance threshold (percentage)
   - Higher thresholds provide more relevant but fewer results
  
3. **Content Selection**:
   - Choose specific knowledge bases for the Blueprint
   - Filter and search available KBs using the search box
   - Selected KBs appear as blue chips in the preview area
   - Choose specific content items (documents, files) for the Blueprint
   - Filter and search available content using the search box
   - Selected content appears as white chips in the preview area


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

![homepage](/images/blueprint-actions.png)

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