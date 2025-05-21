# AI Content Properties Management Guide

## Introduction

The Content Properties Management interface provides a powerful tool for uploading, organizing, and managing the documents that power your AI assistant. This document-centric approach allows you to provide your AI with structured information, control how content is processed, and organize information for optimal retrieval.

## Accessing Content Properties Management

The Content Properties Management interface is accessible to users with Content Manager permissions. You can access it:
- Through the main navigation menu under "Content"
- Via the Knowledge Base interface when adding or managing content
- By clicking "Manage Content" in various AI administration areas

## Content Properties Management Interface Overview

The interface consists of two main tabs:
1. **Content**: For managing file information, uploading documents, and configuring metadata
2. **Access**: For controlling which knowledge bases include the content

## Uploading Content

### Adding New Files

To add files to your AI knowledge base:

1. **Select Knowledge Base(s)**:
   - Choose one or more knowledge bases from the dropdown at the top
   - This is required before uploading files
   - A red border indicates this needs to be completed

2. **Add Files**:
   - Drag and drop files directly onto the upload area
   - Click anywhere in the upload area to open the file browser
   - Multiple files can be uploaded simultaneously (in "Add New" mode)

3. **Supported File Types**:
   - Documents: PDF, DOCX, DOC, RTF, TXT, MD
   - Spreadsheets: XLSX, XLS, CSV
   - Presentations: PPTX, PPT
   - Media: MP4, MP3, AMR, MOV, AVI, FLAC, WAV, WebM, OGG, M4A
   - Other: XML, HTML, JSON

4. **Upload Process**:
   - Click the "Upload" button to begin file processing
   - A progress indicator appears during upload
   - Status badges show "Pending" → "Uploading" → "Succeeded"

### AI Processing Status

After uploading, files are processed by the AI system:

1. Processing status is indicated in the Content Properties
2. During processing, a progress indicator is shown
3. If processing takes longer than expected, a "Retry AI Processing" button appears
4. Click "Retry" if processing seems stuck or encounters issues

**Note**: Processing can take several minutes per document depending on size and complexity. Larger documents may take longer.

## Content Information Configuration

### Basic File Information

Configure essential details about your content:

1. **Display Name**: The title users will see (auto-populated from filename but can be customized)

2. **Description**: Optional context about the document's purpose or content

3. **File Information**: System displays automatically:
   - File type and extension
   - File size (both upload and compressed)
   - Processing status

### Publish Attributes

Control how content is organized and when it's available:

1. **Tags**: Add keywords to make the content discoverable
   - Type a tag name and press Enter to add
   - Select from existing tags in the dropdown
   - Multiple tags can be assigned to each item

2. **Topic**: Categorize content by subject area
   - Select a single topic from the dropdown
   - Topics help organize content by domain

3. **Publishing Schedule**:
   - Start Date: When the content becomes available (optional)
   - End Date: When the content expires (optional)
   - Content outside its publish window won't be used in responses

### Featured Content Settings

Highlight important content for easy discovery:

1. **Featured Content Enabled**: Toggle to mark the document as featured
2. **Title**: Custom display title for the featured view
3. **Description**: Brief summary that appears in the featured card
4. **Featured Image URL**: Link to an image that represents the content
5. **Preview Card**: Shows how the featured content will appear

## Managing Existing Content

### Viewing Content Files

For supported file types, you can preview the content:

1. Click the "View File" button next to the document
2. A full-screen viewer opens with the appropriate format:
   - PDF, Office documents: Built-in document viewer
   - Video files: Video player with controls
   - Text files: Formatted markdown preview
   - HTML: Code view with option to open the live page

### Updating Files

To replace an existing file:

1. Click "Update File" next to the current document
2. Select a new file to replace the current one
3. The file is uploaded and processed while maintaining the same metadata

### AI Processing Status

After uploading, files are processed by the AI system:

1. Processing status is indicated in the Content Properties
2. During processing, a progress indicator is shown
3. If processing takes longer than expected, a "Retry AI Processing" button appears
4. Click "Retry" if processing seems stuck or encounters issues
   
### Editing Multiple Files

When uploading multiple files:
1. The display name and description fields are disabled
2. Click the pencil icon next to each file to edit:
   - Custom filename
   - File-specific description

### Deleting Content

To remove content:

1. Click the "Delete" button in the header
2. Confirm deletion in the popup dialog
3. The content is removed from all knowledge bases

**Note**: Deleting content may affect AI responses that previously used this information.

## Content Access Control

The Access tab allows you to control which knowledge bases include this content:

### Knowledge Base Assignment

1. View current knowledge base assignments
2. Add or remove knowledge base associations
3. Configure knowledge base-specific settings

**Note**: Content must be assigned to at least one knowledge base to be utilized by the AI.

## Meta Information

View detailed technical information about the content:

1. Click on the "Meta Information" panel to expand
2. Review details including:
   - Original filename
   - Content type and extension
   - File sizes (original and compressed)
   - Content ID (unique identifier)
   - AI processing status
   - Creation and modification information

## Content Properties Management Best Practices

### Document Optimization

For best results with AI processing:
- Use clear, well-structured documents
- Include headers and organized sections
- Keep individual documents focused on specific topics
- Use standard formatting when possible
- Ensure text is selectable (not images of text)

### Organization Strategy

Effective content organization:
- Use consistent naming conventions
- Apply relevant tags for cross-reference
- Group related documents in the same knowledge bases
- Use topics for high-level categorization
- Set appropriate publish dates for time-sensitive content

### Monitoring and Maintenance

Regular content management tasks:
- Review processing status to ensure successful indexing
- Update content when information changes
- Remove outdated or redundant documents
- Check AI responses against your content to verify retrieval quality
- Monitor knowledge base performance with test questions

## Troubleshooting

**Issue**: File upload fails
- Check file size (maximum 100MB)
- Verify file format is supported
- Ensure knowledge base selection is made
- Try uploading one file at a time

**Issue**: Content not appearing in AI responses
- Verify AI processing completed successfully
- Check if content is assigned to the correct knowledge base
- Ensure publish dates are valid (if specified)
- Test with specific questions related to the content

**Issue**: File preview not working
- Check if file format is supported for preview
- Verify file was properly uploaded
- Try using the "View Live Page" option for HTML content
- Some complex files may have limited preview capabilities

---

For additional assistance with content management, click the question mark icons next to each section heading for contextual help.
