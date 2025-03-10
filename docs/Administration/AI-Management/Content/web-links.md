# Web Link Manager User Guide

<!--
## Table of Contents
- [Web Link Manager User Guide](#web-link-manager-user-guide)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Accessing Web Link Manager](#accessing-web-link-manager)
  - [Web Link Manager Interface Overview](#web-link-manager-interface-overview)
  - [Creating Web Links](#creating-web-links)
    - [Basic Link Information](#basic-link-information)
    - [Icon Configuration](#icon-configuration)
    - [Theme-Specific Styling](#theme-specific-styling)
  - [Icon Customization](#icon-customization)
    - [Selecting an Icon](#selecting-an-icon)
    - [Customizing Icon Colors](#customizing-icon-colors)
    - [Light and Dark Mode Settings](#light-and-dark-mode-settings)
  - [Knowledge Base Integration](#knowledge-base-integration)
  - [Publishing Configuration](#publishing-configuration)
    - [Tags and Topics](#tags-and-topics)
    - [Publishing Schedule](#publishing-schedule)
  - [Featured Content Configuration](#featured-content-configuration)
    - [Featured Content Settings](#featured-content-settings)
    - [Featured Content Preview](#featured-content-preview)
  - [Managing Existing Links](#managing-existing-links)
    - [Editing Links](#editing-links)
    - [Deleting Links](#deleting-links)
  - [Metadata and Information](#metadata-and-information)
  - [Best Practices](#best-practices)
  - [Troubleshooting](#troubleshooting)
-->

## Introduction

The Web Link Manager allows you to create and manage hyperlinks to external websites and applications, complete with customized icons and styling. These links can be used throughout the AI Assistant platform and in LaunchPad interfaces, providing users with quick access to important resources. This guide explains how to create, customize, and manage web links effectively.

Creating an Web Link is just a way to create a hyperlink to a url with an icon and design. These Web Links can be put into LaunchPad so users have quick access to your company's web apps.


## Accessing Web Link Manager

The Web Link Manager is accessible to users with specific roles:
- Admin
- Content
- Manager

To access this component:
1. Navigate to the Content section in the main menu
2. Select "Add" and choose "Create Web Link"
3. Or, select an existing web link from the Content Manager to edit it

## Web Link Manager Interface Overview

The Web Link Manager consists of these key sections:

![homepage](/images/content-web-link.png)

1. **Header Bar**: Contains the title, help button, and action buttons (Save, Delete, Done)
2. **Link Configuration Panel**: Where you configure the link title, description, and URL
3. **Icon Styler**: Tools to customize icon appearance for light and dark themes
4. **Publish Attributes Panel**: Controls for tags, topics, scheduling, and featured content settings

## Creating Web Links

### Basic Link Information

To configure the fundamental link details:

1. **Web Link Title**: Enter a descriptive name for the link
   - This appears as the title beneath the icon
   - Should be concise but descriptive

2. **Link Description**: Provide context about the link's purpose
   - Explain why someone would use this web link
   - This helps the AI understand and suggest the link appropriately

3. **Link URL**: Enter the complete web address
   - Must include https:// or http:// prefix
   - Will be validated to ensure it's a properly formatted URL

### Icon Configuration

Each link has a visual icon that represents it in the interface:

1. The default icon appears in the preview box at the top of the form
2. Click on the icon or preview box to open the Icon Picker dialog
3. The icon appears within a customizable container that can be styled separately

### Theme-Specific Styling

Links can have different appearances in light and dark modes:

1. Use the Light/Dark toggle button to switch between theme configurations
2. Configure colors independently for each theme
3. Changes in one theme don't affect the other theme's settings

## Icon Customization

### Selecting an Icon

To choose an icon for your link:

1. Click on the icon preview box at the top of the form
2. The Icon Picker dialog will open
3. Browse through available icons or use the search function
4. Click on your desired icon to select it
5. The dialog will close and the selected icon will appear in the preview

### Customizing Icon Colors

Three color components can be customized:

1. **Background**: The color behind the icon
   - Default: White (#FFFFFF) in light mode, Black (#000001) in dark mode
   - Affects the square container where the icon appears

2. **Icon**: The color of the icon itself
   - Default: Dark gray (#353535) in light mode, White (#FFFFFF) in dark mode
   - Changes the actual icon color

3. **Border**: The outline color around the icon container
   - Default: Dark gray (#353535) in light mode, Medium gray (#686868) in dark mode
   - Defines the border of the square container

### Light and Dark Mode Settings

To configure theme-specific appearances:

1. Click the Light/Dark toggle button to switch between modes
2. Each mode has its own independent color settings
3. Use the color pickers to select colors for each component
4. The preview instantly updates to show how your selections look

## Knowledge Base Integration

Web links can be associated with knowledge bases:

1. Select one or more Knowledge Bases from the dropdown
2. This makes the link available when using those knowledge bases
3. The AI can suggest the link when answering questions related to selected knowledge bases
4. Not required, but recommended for better AI integration

## Publishing Configuration

### Tags and Topics

Categorize your link for better organization and discovery:

1. **Tags**: Add multiple relevant tags
   - Type a tag and press Enter to add it
   - Select from existing tags or create new ones
   - Helps with filtering and organization
   - No limit to number of tags

2. **Topic**: Select a single primary topic
   - Choose from pre-defined topic list
   - One topic per link for clear categorization
   - Used for reporting and analytics

### Publishing Schedule

Control when your link is visible to users:

1. **Start Date**: When the link becomes available
   - Click to open a date/time picker
   - Optional - leave blank for immediate availability
   - Includes both date and time selection

2. **End Date**: When the link is no longer available
   - Click to open a date/time picker
   - Optional - leave blank for permanent availability
   - Useful for temporary resources or time-limited promotions

## Featured Content Configuration

### Featured Content Settings

Make your link stand out in featured sections:

1. Toggle "Featured Content Enabled" to make the link eligible for featured display
2. When enabled, additional configuration options appear:
   - **Featured Title**: Attention-grabbing headline (may differ from link title)
   - **Featured Description**: Brief summary to explain the link's value
   - **Featured Image URL**: Web address of an image to display
     - Must be a valid URL (https://...)
     - Best dimensions: 300px × 200px
     - Appears at the top of the featured card

### Featured Content Preview

A live preview card shows how your featured content will appear:

1. Updates in real-time as you modify settings
2. Shows exact layout and appearance of the featured card
3. Helps ensure your content looks appealing when featured

## Managing Existing Links

### Editing Links

To modify an existing link:

1. Navigate to the link in the Content Manager
2. Click on the link to open it in the Web Link Manager
3. Make desired changes to any aspect of the link
4. Click "Save" to apply your changes

### Deleting Links

To remove a link from the system:

1. Click the "Delete" button in the top-right corner
2. A confirmation dialog will appear
3. Click "Delete" in the dialog to confirm
4. The link will be permanently removed

## Metadata and Information

The Meta Information panel provides additional details about the link:

1. Click the expandable "Meta Information" panel at the bottom right
2. View technical information including:
   - File Name: System name for the link
   - Content Type: Always "Link" for web links
   - File Extension: Always "web" for web links
   - Content ID: Unique identifier
   - AI Process Status: Current AI processing state
   - Creation Information: Date and user who created the link
   - Update Information: Date and user of last modification

## Best Practices

For effective web link management:

1. **Clear Naming**:
   - Use descriptive, concise titles
   - Ensure titles make sense out of context
   - Avoid abbreviations unless widely recognized

2. **Icon Selection**:
   - Choose icons that visually represent the link purpose
   - Ensure good contrast between icon and background
   - Test appearance in both light and dark modes

3. **Link Description**:
   - Focus on why users would need this link
   - Include relevant keywords for AI matching
   - Keep descriptions under 200 characters for readability

4. **Knowledge Base Association**:
   - Associate links with all relevant knowledge bases
   - Consider when the AI should suggest this link
   - Update associations when new knowledge bases are created

5. **Featured Content**:
   - Use high-quality, relevant images
   - Write compelling but honest featured descriptions
   - Only feature truly important links to avoid clutter

## Troubleshooting

**Issue**: Icon colors not appearing correctly
- Toggle between light and dark modes to ensure both are configured
- Clear your browser cache to ensure updated styles are loading
- Verify color values are correctly formatted (hex codes)

**Issue**: Link URL validation fails
- Ensure URL includes http:// or https:// prefix
- Check for spaces or special characters in the URL
- Try opening the URL in a browser to verify it works

**Issue**: Cannot access Icon Picker
- Click directly on the icon preview box
- Try refreshing the page and attempting again
- Check your browser console for errors

**Issue**: Featured image not displaying
- Verify the image URL is accessible and correct
- Ensure the URL is a direct link to an image (ends with .jpg, .png, etc.)
- Check if the image host allows hotlinking

**Issue**: Cannot save link
- Verify all required fields are completed
- Check URL format is valid
- Ensure you have proper permissions to create/edit links

---

For additional assistance with web link management, please contact your system administrator or refer to the platform documentation.