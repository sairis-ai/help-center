# Content Manager User Guide

## Table of Contents
- [Content Manager User Guide](#content-manager-user-guide)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Accessing Content Manager](#accessing-content-manager)
  - [Content Manager Interface Overview](#content-manager-interface-overview)
  - [Viewing Content](#viewing-content)
    - [Content List Components](#content-list-components)
    - [Content Type Icons](#content-type-icons)
  - [Searching and Filtering Content](#searching-and-filtering-content)
    - [Global Search](#global-search)
    - [Content Type Filtering](#content-type-filtering)
    - [Knowledge Base Filtering](#knowledge-base-filtering)
    - [Topic and Tag Filtering](#topic-and-tag-filtering)
    - [Quick Filters](#quick-filters)
    - [Clearing Filters](#clearing-filters)
  - [Managing Content](#managing-content)
    - [Adding New Content](#adding-new-content)
    - [Viewing and Editing Content](#viewing-and-editing-content)
  - [Content Operations](#content-operations)
    - [Exporting Content List](#exporting-content-list)
    - [Refreshing Content Data](#refreshing-content-data)
  - [Understanding Content Types](#understanding-content-types)
    - [Documents](#documents)
    - [Cards](#cards)
    - [Web Links](#web-links)
    - [Assets](#assets)
    - [Other Content Types](#other-content-types)
  - [Best Practices](#best-practices)
  - [Troubleshooting](#troubleshooting)

## Introduction

The Content Manager provides a comprehensive interface for viewing, creating, and managing all content within your AI Assistant platform. This centralized hub allows you to work with various types of content including documents, cards, links, and assets. The Content Manager makes it easy to find, filter, and organize content across your knowledge bases.

## Accessing Content Manager

The Content Manager is accessible to users with specific roles:
- Admin
- Content
- Manager

To access this component, navigate to the Content section in the main navigation menu. The default view shows all content across the system.

## Content Manager Interface Overview

The Content Manager consists of these key components:

1. **Header Section**: Contains the title "Content Manager" with content count badge, description, and Add button
2. **Search and Filter Controls**: Tools for finding specific content including global search, content type filters, knowledge base filters, and quick filters
3. **Data Table**: Displays content items in a sortable, filterable table
4. **Action Buttons**: Quick access to refresh data, clear filters, and export to Excel

## Viewing Content

### Content List Components

The content list displays comprehensive information about each content item:

1. **Content Type Icon**: Visual indicator showing the type of content (document, card, link, etc.)
2. **Name/Description**: The primary identifier and explanatory text for each content item
3. **Knowledge Base Associations**: Visual representation of knowledge bases containing this content
4. **Topic Tags**: Categorization labels for the content
5. **Content Tags**: Additional classification tags
6. **Update Information**: When the content was last modified

### Content Type Icons

Different icons represent various content types:

- **Documents**: File-specific icons for PDF, Word, Excel, PowerPoint, etc.
- **Cards**: Credit card icon
- **Links**: Link icon
- **FAQ Items**: List icon
- **Assets**: Image icon
- **Featured Content**: Grid icon
- **Web Crawler Content**: Sitemap icon

## Searching and Filtering Content

### Global Search

The search box at the top of the interface searches across multiple content fields:
- Content name
- Description
- Tags
- Topics
- Content ID
- User names (created/updated by)

Enter text in the search box to instantly filter the list to matching content items.

### Content Type Filtering

To filter content by type:

1. Click the "Type" button to open the content type selection menu
2. Options include:
   - **All Content**: Shows all content types
   - **PDF**: Only PDF documents
   - **MS Word**: Word documents (.doc, .docx)
   - **MS Excel**: Excel spreadsheets (.xls, .xlsx)
   - **MS PowerPoint**: PowerPoint presentations (.ppt, .pptx)
   - **Rich Text**: RTF documents
   - **Text File**: Plain text files (.txt)
   - **CSV**: Comma Separated Value files
   - **JSON**: JSON data files
   - **XML**: XML data files
   - **HTML**: Web page files
   - **Video MP4**: Video files
   - **Audio MP3**: Audio files
   - **Markdown**: MD files
   - **Web Link**: External links

3. The selected filter displays on the button (e.g., "PDF" or "Link")
4. The list updates to show only content of the selected type

### Knowledge Base Filtering

To filter content by knowledge base:

1. Click the "KB" button to open the knowledge base selection menu
2. Options include:
   - **All KBs**: Shows content from all knowledge bases
   - Individual knowledge bases listed by name
3. The selected KB name displays on the button
4. The list updates to show only content in the selected knowledge base

### Topic and Tag Filtering

To filter by topics or tags:

1. Click the filter icon in the column header for Topics or Tags
2. Select from the dropdown list of available topics or tags
3. The list updates to show only content with the selected topic or tag

### Quick Filters

Pre-configured filters for common scenarios:

1. **My**: Shows only content updated by the current user
2. **Recent**: Sorts content by update date with newest items first

### Clearing Filters

When filters are active, a "Filter On" indicator appears and the filter button turns blue.

To clear all active filters:
1. Click the filter slash button (filter icon with a slash)
2. All filters will be reset to their default state
3. The complete content list will be displayed

## Managing Content

### Adding New Content

To add new content:

1. Click the "Add" button in the top-right corner
2. The content type menu appears with options:
   - **Upload Documents**: Add document files (PDF, Word, Excel, etc.)
   - **Create a Card**: Build rich multimedia content cards
   - **Create Web Link**: Add external web page references
   - **Add to Asset Library**: Upload images and other assets for use in cards

3. Click the desired option to navigate to the specific creation interface

### Viewing and Editing Content

To view or edit an existing content item:

1. Click anywhere on the content row in the table
2. The system navigates to the appropriate editor based on content type:
   - Documents open in the document viewer
   - Cards open in the card designer
   - Links open in the link editor

## Content Operations

### Exporting Content List

To export the content list to Excel:

1. Click the "Export to Excel" button (external link icon in top-right)
2. Confirm the export in the dialog that appears
3. The browser will download a CSV file
4. The export includes all currently visible content (respects active filters)

### Refreshing Content Data

To ensure you're viewing the most current data:

1. Click the "Refresh Data" button (refresh icon in top-right)
2. The system will reload all content data from the server
3. This is useful after making changes or when multiple users are working simultaneously

## Understanding Content Types

### Documents

Documents can be various file types:
- **PDFs**: Standard document format with fixed layout
- **Office Documents**: Word, Excel, PowerPoint files
- **Text Files**: Plain text, RTF, CSV, JSON, XML
- **Media Files**: MP4 videos, MP3 audio
- **Code/Markup**: HTML, Markdown

Documents are processed by the AI and their content becomes searchable in knowledge bases.

### Cards

Cards are rich content items created in the platform:
- Designed for engaging user interactions
- Can contain text, images, buttons, and other interactive elements
- Often used for frequently accessed information
- Appear in the AI interface as structured responses

### Web Links

Web links point to external resources:
- Reference websites outside the platform
- Appear in search results and LaunchPad
- Include title, description, and URL
- Can be categorized with topics and tags

### Assets

Assets are supporting files:
- Images, icons, and graphics
- Used within cards and other content
- Stored in the asset library
- Not directly processed by AI but support other content

### Other Content Types

- **FAQ Items**: Question and answer pairs
- **Featured Content**: Highlighted items for prominent display
- **Web Crawler Content**: Automatically gathered from websites

## Best Practices

For effective content management:

1. **Naming Conventions**:
   - Use clear, descriptive names
   - Include content type in name when appropriate
   - Keep names concise but informative

2. **Knowledge Base Organization**:
   - Assign content to appropriate knowledge bases
   - Consider creating specialized KBs for different departments or subjects
   - Review KB assignments periodically

3. **Topics and Tags**:
   - Use topics for primary categorization
   - Use tags for more granular classification
   - Be consistent with tag naming
   - Don't over-tag content (5-7 tags maximum is ideal)

4. **Regular Maintenance**:
   - Review older content for relevance
   - Update content when information changes
   - Remove duplicates or outdated material
   - Check for broken links

5. **Search Optimization**:
   - Include relevant keywords in content names and descriptions
   - Use clear, specific topic categories
   - Add descriptive tags that users might search for

## Troubleshooting

**Issue**: Content list is empty
- Check if filters are active (blue filter button indicates active filters)
- Click the "Clear Filters" button to remove all filters
- Refresh the data using the refresh button
- Verify you have permissions to view content

**Issue**: Cannot find specific content
- Try searching by partial name or description
- Clear all filters and browse the complete list
- Check if you're looking in the correct knowledge base
- Verify the content exists and you have permissions to view it

**Issue**: Content appears in wrong format
- Check the file extension and content type
- Some file types may be represented by generic icons
- Verify the file was uploaded correctly

**Issue**: Knowledge base avatars not displaying correctly
- The KB store may need refreshing
- Try refreshing the page
- Check if the knowledge bases exist in the system

**Issue**: Filter shows no results
- Your filter combination may be too restrictive
- Try removing one filter at a time to see what's causing the issue
- Verify that content matching your criteria exists

**Issue**: Export not working
- Check browser download settings
- Ensure you have proper permissions
- Try with a smaller dataset by applying filters first

---

For additional assistance with content management, please contact your system administrator or refer to the platform documentation.