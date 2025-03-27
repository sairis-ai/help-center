# Knowledge Base Configuration Guide

<!--
## Table of Contents
- [Knowledge Base Configuration Guide](#knowledge-base-configuration-guide)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Accessing Knowledge Base Configuration](#accessing-knowledge-base-configuration)
  - [Knowledge Base Dialog Overview](#knowledge-base-dialog-overview)
  - [Basic Information Section](#basic-information-section)
    - [Name and Initials](#name-and-initials)
    - [Description](#description)
    - [Group Access](#group-access)
    - [Topics and Tags](#topics-and-tags)
  - [AI Configuration Section](#ai-configuration-section)
    - [Foundation Model Selection](#foundation-model-selection)
    - [Creativity Settings](#creativity-settings)
-->

## Introduction

The AI Knowledge Base Dialog provides an interface for creating and managing Knowledge Bases (KBs) - specialized collections of information that your AI can access when responding to questions. This form-based component allows administrators and content managers to configure how knowledge bases appear, what information they contain, and how the AI processes that information when generating responses. Well-configured knowledge bases are essential for providing accurate and relevant AI responses that leverage your organization's specific information.

## Accessing Knowledge Base Configuration

The Knowledge Base Configuration dialog is accessible to users with specific roles:
- Admin
- Content
- Manager
- 
To access this dialog:
1. Navigate to the AI section in the main menu
2. Select "Knowledge Bases" from the dropdown
3. Click "Create New" button or select "Edit" on an existing KB
4. The dialog opens as an overlay or dedicated page


## Knowledge Base Dialog Overview

![homepage](/images/knowledge-base-new.png)

The Knowledge Base Dialog is divided into two main sections:

**Top/Main Section**: Contains basic information fields
- Knowledge Base Name and Initials
- Description field
- Group Access settings
- Topic and Tags selectors

**Secondary (AI Configuration) Section**: Contains AI and search configuration
- AI Model selection
- Creativity settings
- System Instructions
- KB Search configuration
- Publishing options

## Basic Information Section

The fundamental settings for your knowledge base:

1. **Name**:
   - Enter a descriptive name for the knowledge base
   - Maximum 255 characters
   - This name appears in KB selection menus
   - Required field

2. **Initials**:
   - 1-2 character abbreviation for the knowledge base
   - Auto-generates from the first two letters of the name
   - Used in KB avatars and compact displays
   - Can be manually edited
   - Required field
3. **Description**:
The description field provides context about the knowledge base's purpose and content:
   - Detailed description of the knowledge base purpose and content
   - Appears in KB selection interfaces
   - Helps users understand when to use this KB
   - Optional but recommended


### Group Access

Group Access controls which users can access this knowledge base:

1. **Group Selection**:
   - Click in the Group Access field
   - A dropdown menu appears showing available groups
   - Select one or more groups to grant access
   - Selected groups appear as chips in the field
   - Click the X on any chip to remove that group
   - Empty selection means all users can access (if permissions allow)

2. **Access Implications**:
   - Adding many groups increases visibility but may expose sensitive information
   - Limited group selection creates specialized access for specific teams
   - No groups selected means no users can access the knowledge base

### Topics and Tags

Topics and tags help organize and categorize knowledge bases:

1. **KB Topic**:
   - Single selection from predefined list
   - Used for major categorization
   - Helps organize knowledge bases in the list view
   - Optional field

2. **KB Tags**:
   - Multiple selections from predefined list
   - Can create new tags if needed
   - Used for more granular categorization
   - Helps users find relevant knowledge bases
   - Optional field

## AI Configuration Section

Configure how the AI processes information in this knowledge base:

1. **AI Model**:
   - Select from available models (e.g., "haiku", "sonnet")
   - Different models offer varying capabilities and processing speeds
   - Required field
   - Default is "haiku"

2. **Creativity**:
   - Choose from "Creative", "Balanced", or "Precise"
   - Controls how strictly the AI adheres to source material
   - "Creative" allows more flexibility in responses
   - "Precise" prioritizes accuracy over creative expression
   - Required field

3. **Instructions**:
   - System instructions that guide AI behavior
   - Define the assistant's role, tone, and limitations
   - Can include specialized knowledge domains
   - 30,000 character maximum
   - Optional field (system provides defaults)

### Search Configuration

Control how the AI searches and uses the knowledge base content:

1. **KB Search Results**:
   - Number of results to include when answering questions
   - Range: 1-100
   - Higher values provide more comprehensive answers
   - Lower values create more focused responses
   - Default: 35

2. **KB Results Match Score**:
   - Minimum relevance score (0-100) for included results
   - Higher values ensure only highly relevant content is used
   - Lower values include more content with less strict matching
   - Recommended: 60 or higher
   - Default: 60

### Publishing Options

Control visibility and sharing options for the knowledge base:

1. **Allow Copies**:
   - Toggle switch to enable/disable copying
   - When enabled, others can create derivative KBs
   - When disabled, the KB cannot be duplicated
   - Default: Off

2. **Publish in Quick List**:
   - Toggle to show in the main AI Selector dropdown
   - Makes the KB more easily accessible
   - Reserved for frequently used KBs
   - Default: Off

3. **Publish on Home Page**:
   - Toggle to display on users' home pages
   - Increases visibility and promotes usage
   - Use for important or newly created KBs
   - Default: Off

## Advanced Settings

Several advanced settings can be configured:

1. **System Instructions**:
   - Detailed guidelines for the AI
   - Can include specific instructions on how to use the KB content
   - May define constraints or special handling of information
   - Best used by experienced administrators

2. **Match Score Tuning**:
   - Adjusting the match score affects response quality
   - Values around 60-70 work well for most cases
   - Below 50 may include irrelevant information
   - Above 80 may exclude useful but slightly different content
   - 
## Saving Your Changes

To save your knowledge base configuration:

1. Review all settings for accuracy
2. Click the "Submit Knowledge Base" button at the bottom
3. The system validates your inputs
4. If validation succeeds:
   - A success message appears
   - The dialog closes
   - The KB list updates with your changes
5. If validation fails:
   - Error messages appear near the problematic fields
   - Fix the issues and submit again


## Knowledge Base Permissions

Knowledge base access is controlled through:

1. **Role-Based Access**:
   - Only users with proper roles can create/edit KBs
   - Admin, Content, and Manager roles have access

2. **Group-Based Access**:
   - KBs can be restricted to specific groups
   - Users must belong to allowed groups to access
   - Empty group selection makes KB available to all users
   - 
## Best Practices

For optimal knowledge base configuration:

1. **Naming Conventions**:
   - Use clear, descriptive names
   - Include the subject matter in the name
   - Choose distinct initials for easy recognition
   - Avoid generic names like "Test KB" or "New KB"

2. **Effective Descriptions**:
   - Describe the content and purpose
   - Mention intended use cases
   - Note any special features or limitations
   - Help users decide if this KB is appropriate for their needs

3. **AI Model Selection**:
   - Use "haiku" for faster, more economical responses
   - Use "sonnet" for more nuanced, complex topics
   - Match the model to your content complexity

4. **Group Access Management**:
   - Be deliberate about access restrictions
   - Consider creating specialized KBs for different departments
   - Review access settings periodically

5. **Search Configuration**:
   - For technical or precise content, use higher match scores (70+)
   - For general information, standard scores (60) work well
   - Test and adjust based on response quality

## Troubleshooting

**Issue**: Knowledge base creation fails
- Check for required fields (Name, Initials, AI Model, Creativity)
- Ensure the name is unique
- Verify you have the proper permissions
- Check for error messages in the response

**Issue**: Groups don't appear in the selection menu
- Wait a moment as groups may still be loading
- Verify you have permissions to see groups
- Check if your organization has configured groups
- Try refreshing the page

**Issue**: Saved settings don't affect AI responses
- Ensure you've clicked "Submit Knowledge Base" to save changes
- Allow time for settings to propagate (especially for large KBs)
- Verify that users have the necessary access permissions
- Check if the KB is properly indexed (see Embedding Status)

**Issue**: System instructions not taking effect
- Instructions have a 30,000 character limit
- Very complex instructions may be truncated
- Test with simpler instructions first
- Ensure instructions are clear and don't contradict each other

**Issue**: Cannot see "Submit Knowledge Base" button
- Scroll to the bottom of the form
- Check if your screen resolution hides the button
- Try a different browser if the issue persists
- Verify you have edit permissions for knowledge bases

---

For additional assistance with Knowledge Base configuration, please contact your system administrator or refer to the platform documentation.
