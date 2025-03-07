# Feature Settings Configuration Guide

<!--
## Table of Contents
- [Feature Settings Configuration Guide](#feature-settings-configuration-guide)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Accessing Feature Settings](#accessing-feature-settings)
  - [AI Assistant Feature Settings](#ai-assistant-feature-settings)
    - [Audio Support](#audio-support)
    - [Featured Content Row](#featured-content-row)
    - [Shortcuts Menu \& Actions](#shortcuts-menu--actions)
    - [Multiple Knowledge Bases](#multiple-knowledge-bases)
    - [PDF Viewer](#pdf-viewer)
    - [Topics Menu Selector](#topics-menu-selector)
  - [Messaging Configuration](#messaging-configuration)
    - [Welcome Message](#welcome-message)
    - [Help Menu Message](#help-menu-message)
  - [Feature Interactions](#feature-interactions)
  - [Best Practices](#best-practices)
  - [Troubleshooting](#troubleshooting)
-->

## Introduction

The Feature Settings component allows administrators to configure which features are available in the platform and customize the user experience. This interface provides toggles for enabling or disabling specific functionality and customizing system messages that users see throughout the application.

## Accessing Feature Settings

![homepage](/images/settings-features.png)

The Feature Settings component is accessible to users with specific roles:
- Admin
- Content
- Manager

To access this component, navigate to the Tenant Settings section in the administration interface and select the "Features" tab.

## AI Assistant Feature Settings

The AI Assistant Feature Settings section controls the availability of specific capabilities within the AI Assistant interface. Each feature can be independently enabled or disabled to tailor the experience to your organization's needs.

### Audio Support

- **Setting**: Enable Audio Support
- **Default**: Enabled (ON)
- **Description**: When enabled, allows users to:
  - Listen to AI responses through text-to-speech
  - Input queries using voice recognition
  - Control audio playback speed and volume
- **Use Cases**: 
  - Accessibility for users with visual impairments
  - Hands-free operation in certain environments
  - Multi-tasking scenarios where reading is impractical

### Featured Content Row

- **Setting**: Enable Featured Content Row
- **Default**: Enabled (ON)
- **Description**: When enabled:
  - Displays a scrollable row of featured content cards on the home screen
  - Shows curated content selected by administrators
  - Provides quick access to important resources
- **Use Cases**:
  - Highlighting new or important content
  - Promoting specific resources
  - Creating a guided experience for new users

### Shortcuts Menu & Actions

- **Setting**: Enable Shortcuts Menu & Actions
- **Default**: Enabled (ON)
- **Description**: When enabled:
  - Shows a floating shortcuts button in the interface
  - Provides quick access to common actions and queries
  - Allows administrators to define custom shortcuts
- **Use Cases**:
  - Streamlining common tasks
  - Guiding users to recommended actions
  - Reducing typing for frequent queries

### Multiple Knowledge Bases

- **Setting**: Enable Multiple Knowledge Bases
- **Default**: Enabled (ON)
- **Description**: When enabled:
  - Allows users to select which knowledge bases to include in their queries
  - Provides a knowledge base selector in the interface
  - Supports combining multiple knowledge sources in a single conversation
- **Use Cases**:
  - Departmental knowledge separation
  - Topic-specific searching
  - Reducing noise in search results

### PDF Viewer

- **Setting**: Enable New PDF Viewer
- **Default**: Enabled (ON)
- **Description**: When enabled:
  - Uses the enhanced PDF viewing experience
  - Provides advanced navigation and search within PDFs
  - Supports annotations and highlights
- **Use Cases**:
  - Detailed document review
  - Research scenarios requiring document analysis
  - Training contexts requiring reference material

### Topics Menu Selector

- **Setting**: Enable Topics Menu Selector
- **Default**: Enabled (ON)
- **Description**: When enabled:
  - Shows a categorized menu of available topics
  - Allows users to browse content by subject area
  - Provides structured navigation through available information
- **Use Cases**:
  - Helping users discover relevant content
  - Organizing information by department or function
  - Providing a browsing alternative to search

## Messaging Configuration

The Messaging section allows customization of the text messages displayed to users in key areas of the application.

### Welcome Message

- **Field**: Home screen landing page welcome message
- **Default**: "To start click on the shortcuts icon or type a question below"
- **Purpose**: This message appears prominently on the home screen when users first access the system
- **Guidelines**:
  - Keep it concise (1-2 sentences)
  - Include clear instructions for getting started
  - Maintain a friendly, helpful tone
  - Consider including your organization's name for personalization
  - Maximum recommended length: 120 characters

### Help Menu Message

- **Field**: Home screen help menu message
- **Default**: "There are many ways to get help. You can type a question, click on the shortcuts icon, or click on the topics icon to find the information you need."
- **Purpose**: This message appears in the help menu when users click the help icon
- **Guidelines**:
  - Be more comprehensive than the welcome message
  - Include multiple options for getting assistance
  - Reference available features (shortcuts, topics)
  - Maximum recommended length: 250 characters

## Feature Interactions

Understanding how features work together is important for creating a cohesive user experience:

1. **Topics and Shortcuts Integration**
   - When both Topics Menu and Shortcuts are enabled, they provide complementary navigation methods
   - Topics offers structured browsing while shortcuts provide quick access
   - Consider creating shortcuts that align with important topics

2. **Audio Support and PDF Viewer**
   - When both are enabled, users can have PDF content read aloud
   - Consider accessibility implications when disabling either feature

3. **Multiple Knowledge Bases and Featured Content**
   - Featured content can draw from all enabled knowledge bases
   - Users with access to multiple knowledge bases will see combined results

4. **Welcome Message and Enabled Features**
   - Ensure your welcome message references only features that are enabled
   - Update the message if you disable referenced features like shortcuts

## Best Practices

For optimal feature configuration:

1. **Consistent Experience**
   - Enable a cohesive set of features that work well together
   - Avoid confusing users by referencing disabled features in help text
   - Consider user workflow when deciding which features to enable

2. **Message Customization**
   - Personalize messages with your organization's name
   - Reference specific help resources relevant to your users
   - Keep language simple and direct
   - Ensure messages are appropriate for all user roles

3. **Feature Selection**
   - Consider your users' technical proficiency when enabling features
   - Start with core features for new deployments
   - Gradually introduce advanced features as users become comfortable
   - Get feedback on which features are most valuable

4. **Performance Considerations**
   - Enabling all features may impact performance on some devices
   - Multiple Knowledge Bases can increase query complexity
   - Audio features require additional browser capabilities

## Troubleshooting

**Issue**: Features appear enabled but aren't visible to users
- Check user role permissions in the User Management section
- Verify that the feature is supported in the user's browser
- Check for conflicts with other system settings

**Issue**: Custom messages not appearing
- Ensure messages are saved after editing
- Check character limits (system may truncate very long messages)
- Verify that the correct tenant settings are active

**Issue**: Audio features not working
- Verify browser compatibility (requires modern browsers)
- Check user device microphone and speaker permissions
- Ensure network connectivity for text-to-speech services

**Issue**: Featured content not displaying
- Check that content has been marked as "featured" in the content manager
- Verify user has permission to view the featured content
- Ensure featured content exists in knowledge bases the user can access

**Issue**: PDF viewer showing old version
- Clear browser cache
- Check if users need to refresh their application
- Verify the setting has been properly saved

---

For additional assistance with feature configuration, please contact your system administrator or refer to the platform documentation.