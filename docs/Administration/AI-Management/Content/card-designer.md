# AI Card Designer User Guide

<!--
## Table of Contents
- [AI Card Designer User Guide](#ai-card-designer-user-guide)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Accessing the Card Designer](#accessing-the-card-designer)
  - [Card Designer Interface Overview](#card-designer-interface-overview)
  - [Creating and Editing Cards](#creating-and-editing-cards)
    - [Card Content Creation](#card-content-creation)
    - [Using Templates](#using-templates)
    - [Markdown Editor](#markdown-editor)
    - [Live Preview](#live-preview)
  - [Card Configuration](#card-configuration)
    - [Card Information](#card-information)
    - [Publishing Settings](#publishing-settings)
    - [AI Tuning](#ai-tuning)
  - [Interactive Elements](#interactive-elements)
    - [Adding Navigation Buttons](#adding-navigation-buttons)
    - [Button Types](#button-types)
    - [Button Management](#button-management)
  - [Display Options](#display-options)
    - [Preview Sizing](#preview-sizing)
    - [Device Simulation](#device-simulation)
  - [Managing Cards](#managing-cards)
    - [Saving Cards](#saving-cards)
    - [Deleting Cards](#deleting-cards)
  - [Best Practices](#best-practices)
  - [Troubleshooting](#troubleshooting)
-->

## Introduction

The AI Card Designer is a powerful tool that allows you to create rich, interactive content cards for your AI Assistant. Cards are structured content items that appear in AI responses, providing users with formatted information, visual elements, and interactive buttons. This guide explains how to use the Card Designer to create engaging and effective AI content.

## Accessing the Card Designer

The Card Designer is accessible to users with specific roles:
- Admin
- Content
- Manager

To access this component:
1. Navigate to the Content section in the main menu
2. Select "Add" and choose "Create a Card"
3. Or, select an existing card from the Content Manager to edit it

## Card Designer Interface Overview

The AI Card Designer consists of four main sections:

![homepage](/images/content-card.png)

1. **Header Bar**: Contains the title, action buttons (Templates, Delete, Done, Save), and description
2. **Content Preview**: Shows how your card will appear to users, with a live preview that updates as you edit
3. **Markdown Editor**: The text editor where you create and format your card content
4. **Configuration Panels**: Right-side panels for card information, publishing settings, and metadata

## Creating and Editing Cards

### Card Content Creation

Cards are created using Markdown, a simple formatting syntax:

1. **Basic Formatting**:
   - **Headings**: Use # symbols (# Title, ## Heading, ### Subheading)
   - **Text Style**: *Italics* (surround with *), **Bold** (surround with **)
   - **Lists**: Create with - or numbers (1. 2. 3.)
   - **Quotes**: Begin lines with >
   - **Horizontal Lines**: Insert with --- or ___

2. **Advanced Elements**:
   - **Tables**: Create structured data tables
   - **Links**: Insert clickable URLs
   - **Images**: Add images

### Using Templates

To speed up card creation:

1. Click the "Templates" button in the top-right corner
2. Choose from two template sources:
   - **System Templates**: Pre-built templates provided by the platform
   - **My Templates**: Your saved custom templates
3. Select a template from the list
4. The editor will populate with the template content
5. Customize the template to fit your needs

### Markdown Editor

The markdown editor appears at the bottom of the left column:

1. **Toolbar**: Contains formatting buttons for common Markdown elements
2. **Editor Area**: Where you type and edit your content
3. **Editor Controls**: Options for viewing modes and additional settings

The editor supports:
- Text formatting (bold, italic, underline)
- Lists (ordered and unordered)
- Headings and subheadings
- Tables and blockquotes
- Links and images

### Live Preview

Above the editor is a live preview showing how your card will appear:

1. The preview updates in real-time as you edit
2. Shows exactly how users will see the card
3. Includes any interactive buttons you've added
4. Can be resized to simulate different device views

## Card Configuration

### Card Information

Configure basic card details in the Card Information panel:

1. **Title**: The headline of your card (required)
   - Should be concise and descriptive
   - Appears at the top of the card

2. **Description**: Optional explanation of the card's purpose
   - Helps with search and discovery
   - Does not appear on the card itself

3. **Tags**: Add multiple relevant tags
   - Type a tag and press Enter to add it
   - Select from existing tags or create new ones
   - Helps with content organization and discovery

### Publishing Settings

Control where and how your card is used:

1. **Topic**: Select a single primary topic
   - Choose from predefined topic list
   - Used for high-level categorization and reporting

2. **Knowledge Bases**: Select which KBs can use this card
   - Cards must be associated with at least one knowledge base
   - The AI will only use the card when using selected knowledge bases
   - Multiple knowledge bases can be selected

### AI Tuning

Help the AI understand when to show your card:

1. **AI Tuning Field**: Enter additional keywords and phrases
   - These words don't appear in the card content
   - Help the AI match user questions to this card
   - Include synonyms and alternative phrasings
   - This improves the accuracy of card suggestions

## Interactive Elements

### Adding Navigation Buttons

Cards can include interactive buttons for user navigation:

1. Click the "Add Button" link below the card preview
2. The Button Manager panel will open
3. Click "Add Navigation Button to Card" to create a new button
4. Configure the button details (described below)
5. Add multiple buttons by repeating the process

### Button Types

Four types of buttons are available:

1. **Card**: Links to another card
   - Button Value: The name or ID of the destination card

2. **Web Link**: Opens an external website
   - Button Value: Complete URL (https://example.com)

3. **Prompt**: Sends a predefined query to the AI
   - Button Value: The text query to send

4. **Document**: Opens a document in the system
   - Button Value: The document ID or name

### Button Management

Manage your card's interactive buttons:

1. **Adding**: Click "Add Navigation Button to Card"
2. **Configuring**:
   - Button Name: Text that appears on the button
   - Button Type: Card, Web Link, Prompt, or Document
   - Button Value: Destination or action

3. **Reordering**: Drag and drop buttons to change their order
4. **Removing**: Click the trash icon to delete a button

## Display Options

### Preview Sizing

Control the preview size to test different viewing contexts:

1. **Height Toggle**: Click the FullScreen button in the speed dial menu
   - Toggles between normal height (38vh) and expanded height (78vh)
   - Helps visualize how longer cards will appear

2. **Width Settings**: Use the speed dial menu to simulate different devices

### Device Simulation

Test how your card appears on different devices:

1. **Desktop View**: Default view, full width
   - Access by clicking the Computer icon

2. **Tablet View**: 768px width
   - Access by clicking the Tablet icon

3. **Phone View**: 400px width
   - Access by clicking the Mobile icon
   - Important for testing responsiveness

## Managing Cards

### Saving Cards

To save your card:

1. Click the "Save" button in the top-right corner
2. The system will validate required fields
3. A success message confirms when the card is saved
4. For new cards, you'll be redirected to the edit view for the saved card

### Deleting Cards

To delete a card:

1. Click the "Delete" button in the top-right corner
2. A confirmation dialog will appear
3. Click "Delete" in the dialog to confirm
4. The card will be permanently removed
5. You'll be redirected to the Content Manager

## Best Practices

For creating effective AI cards:

1. **Clear Structure**:
   - Use headings to organize content
   - Keep paragraphs short and focused
   - Use lists for sequential information
   - Include a clear title that summarizes the card's purpose

2. **Visual Appeal**:
   - Use formatting to highlight important information
   - Include horizontal rules to separate sections
   - Don't overuse bold or italics
   - Consider adding relevant images when helpful

3. **Interactive Elements**:
   - Add buttons for common follow-up actions
   - Name buttons with clear action verbs
   - Limit to 3-5 buttons per card for clarity
   - Ensure button destinations exist and work

4. **AI Optimization**:
   - Use the AI Tuning field for synonyms and variations
   - Include industry-specific terminology
   - Think about how users might phrase questions
   - Test cards with sample questions

5. **Knowledge Base Association**:
   - Associate cards with all relevant knowledge bases
   - Consider creating specialized versions for different departments
   - Review KB assignments when content changes

## Troubleshooting

**Issue**: Preview not updating
- Check if you've toggled the preview mode off
- Try clicking the refresh button
- Ensure your markdown syntax is correct

**Issue**: Cannot save card
- Verify the required Title field is completed
- Check that at least one knowledge base is selected
- Look for error messages in the toast notifications

**Issue**: Buttons not appearing in preview
- Ensure button configuration is complete (name, type, value)
- Save the card and reload if necessary
- Check that the button manager is properly closed

**Issue**: Templates not loading
- Try selecting a different template and then your preferred one
- Refresh the page and try again
- Check your network connection

**Issue**: Card markdown looks different in preview vs. actual use
- Some advanced markdown features may render differently
- Stick to common formatting elements for consistency
- Test your card in the actual AI interface

**Issue**: Button destinations not working
- Verify the button value is correct (URL, card ID, etc.)
- For card links, ensure the destination card exists
- For web links, include the complete URL with https://

---

For additional assistance with the AI Card Designer, please contact your system administrator or refer to the platform documentation.
