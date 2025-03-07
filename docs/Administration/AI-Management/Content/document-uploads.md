# AI File Manager User Guide

<!--
## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Uploading Files](#uploading-files)
- [File Management](#file-management)
- [Knowledge Base Association](#knowledge-base-association)
- [File Information](#file-information)
- [Publish Attributes](#publish-attributes)
- [Advanced Features](#advanced-features)
- [Viewing Files](#viewing-files)
- [Troubleshooting](#troubleshooting)
-->

## Introduction

The AI File Manager is a powerful tool that allows you to upload, manage, and associate documents with AI knowledge bases. This guide will walk you through the process of uploading files, configuring their attributes, and preparing them for AI processing.

## Getting Started

### Accessing the File Manager

1. Navigate to the AI File Manager in the content management section
2. You'll see the main interface with upload area and configuration panels
3. If editing an existing file, the interface will display the current file's information

### Understanding the Interface

The AI File Manager has three main sections:

![homepage](/images/content-file.png)

- **File Upload Area** (left/center): Where you upload and manage files
- **File Information Panel** (right top): Configure basic file details
- **Publish Attributes Panel** (right middle): Set categorization and scheduling options

## Uploading Files

### Single File Upload

1. If no Knowledge Base is selected, first select at least one Knowledge Base using the dropdown at the top
2. Click the "+" button or drag and drop a file into the upload area
3. The file will appear in the upload queue with its name and size
4. The system automatically populates the Display Name based on the file name

### Multiple File Upload

1. Select at least one Knowledge Base using the dropdown at the top
2. Drag and drop multiple files or click the "+" button to select multiple files
3. Each file will appear in the upload queue
4. Note: When uploading multiple files, the common Display Name and Description fields are disabled

### File Name and Description Editing

For files in the upload queue:
1. Click the pencil icon next to the file name
2. In the dialog that appears, enter the new file name and description
3. Click "Save" to apply these changes

### Starting the Upload

1. After configuring all necessary attributes, click the "Upload" button
2. The upload progress will be indicated with a status label
3. Successful uploads will be marked with a green "Succeeded" badge
4. Failed uploads will show an error message

## File Management

### Viewing Existing Files

When accessing an existing file:
1. The file details are displayed in the center of the interface
2. You'll see the file name, size, type, and last update information
3. Click "View File" to open the file viewer

### Uploading New Versions

To replace an existing file with a new version:
1. Click "Upload New Version"
2. Select the new file from your device
3. The new file will replace the existing one while maintaining all settings

### Deleting Files

1. Click the "Delete" button in the top right corner
2. Confirm the deletion in the popup dialog
3. The file and its associated content will be removed from the system

## Knowledge Base Association

Knowledge Base association is required for AI processing:

1. Select one or more Knowledge Bases from the dropdown at the top
2. Files must be associated with at least one Knowledge Base to be processed by AI
3. If you attempt to upload without selecting a Knowledge Base, an error message will appear
4. You can change Knowledge Base associations after upload

## File Information

Configure basic file details in the File Information panel:

1. **Display Name**: The name that appears in listings and search results
   - Automatically populated based on the file name but can be customized
   - Required field

2. **Description**: Additional information about the file content
   - Optional but recommended for better search results
   - Appears in file listings

## Publish Attributes

The Publish Attributes panel allows detailed configuration:

### Tags and Topics

1. **Tags**: Add multiple tags to categorize the file
   - Type a tag name and press Enter to add it
   - Select from existing tags or create new ones
   - Tags help with content organization and discovery

2. **Topic**: Select a single topic that best describes the file
   - Choose from the predefined topic list
   - Topics are used for high-level categorization and reporting

### Publishing Schedule

Control when content is available:

1. **Start Date**: When the content will become available
   - Click to open a date/time picker
   - Leave blank for immediate availability

2. **End Date**: When the content will no longer be available
   - Click to open a date/time picker
   - Leave blank for permanent availability

### Featured Content

Make content appear in featured sections:

1. Toggle "Featured Content Enabled" to on
2. Configure featured presentation:
   - **Title**: Short, attention-grabbing headline
   - **Description**: Brief summary of the content
   - **Featured Image URL**: Web address of an image to display
3. A preview card shows how the featured content will appear

## Advanced Features

### Meta Information

View detailed file metadata by expanding the Meta Information panel:

- File Name: Original name of the uploaded file
- Content Type: Document, image, video, etc.
- File Size: Both upload and compressed sizes
- File Extension: File format
- Content ID: Unique identifier
- AI Process Status: Current AI processing state
- File Added: Creation date and user
- File Updated: Last modification date and user

## Viewing Files

### File Preview

1. Click "View File" to open the file viewer
2. The viewer interface adapts based on the file type:
   - PDF, Office documents: Interactive document viewer
   - Videos: Video player with controls
   - Text files: Formatted text viewer
   - HTML: Code view with option to view live page

### Video Transcription

For video files, a transcription feature is available:
1. Open the video in the viewer
2. Click on the "Video Transcription" accordion below the player
3. Transcription will be displayed when available

### Text File Viewing

For text-based files (TXT, CSV, JSON, etc.):
1. Content is displayed with appropriate formatting
2. For HTML files, you can toggle between code view and "View Live Page"

## Troubleshooting

### Upload Issues

If files fail to upload:
1. Check the error message for specific issues
2. Verify file size is under the 110MB limit
3. Ensure Knowledge Base is selected
4. Check that you have proper permissions

### AI Processing

After successful upload:
1. Files need to be processed by AI before appearing in knowledge bases
2. Processing time depends on file size and type
3. Large documents may take several minutes to process
4. You can check processing status in the Meta Information panel

### Help Resources

For additional assistance:
1. Click the "Help" button for context-specific guidance
2. Review the information about Tags, Knowledge Bases, and Topics
3. Contact your administrator for system-specific questions