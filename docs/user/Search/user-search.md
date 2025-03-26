# Content Search User Guide

## Table of Contents
- [Content Search User Guide](#content-search-user-guide)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Accessing Content Search](#accessing-content-search)
  - [Search Interface](#search-interface)
  - [Searching Content](#searching-content)
    - [Selecting a Knowledge Base](#selecting-a-knowledge-base)
    - [Entering Search Queries](#entering-search-queries)
    - [Submitting Searches](#submitting-searches)
  - [Search Results](#search-results)
    - [Results Display](#results-display)
    - [Result Information](#result-information)
    - [Ranking System](#ranking-system)
  - [Filtering Results](#filtering-results)
    - [Content Type Filter](#content-type-filter)
    - [Filter Options](#filter-options)
  - [Viewing Content](#viewing-content)
    - [Document Viewer](#document-viewer)
    - [PDF Documents](#pdf-documents)
    - [Video Files](#video-files)
    - [Text-Based Files](#text-based-files)
    - [HTML Files](#html-files)
  - [No Results State](#no-results-state)
  - [Loading States](#loading-states)
  - [Best Practices](#best-practices)
  - [Troubleshooting](#troubleshooting)

## Introduction

The Content Search feature provides a powerful way to search through Knowledge Base content using natural language queries. This dedicated search interface allows you to find relevant documents, videos, and other content items across your organization's knowledge repositories. Unlike the AI Assistant which provides conversational answers, Content Search directly shows you the source documents that contain the information you need.

## Accessing Content Search

Content Search is accessible to users with various roles:
- User
- Admin
- Content
- Manager

To access this component:
1. Navigate to the Content section in the main menu
2. Select "Search" from the dropdown menu
3. The search interface will load with the Knowledge Base selector

## Search Interface

The Content Search interface consists of these major components:

1. **Header**: Contains the title "Search Content by Knowledge Base" and description
2. **Search Controls**: Knowledge Base selector, search input field, and search button
3. **Filter Controls**: Options to filter results by content type
4. **Results Area**: Displays search results with relevant excerpts and metadata
5. **Document Viewer**: Full-screen drawer that opens when viewing content

## Searching Content

### Selecting a Knowledge Base

Before searching, you must select a Knowledge Base to search within:

1. Click the "KB" button on the left side of the search bar
2. A dropdown menu appears showing available Knowledge Bases
3. Each Knowledge Base shows:
   - Avatar with initials
   - Name (displayed in uppercase)
   - Brief description
4. Click on any Knowledge Base to select it
5. The button text updates to show the selected Knowledge Base name

### Entering Search Queries

To search effectively:

1. Type your question or keywords in the search field
2. Use natural language questions for best results
   - Example: "What is the company policy on remote work?"
   - Example: "quarterly financial report 2024"
3. Be specific to narrow results
4. Keep queries concise but complete

### Submitting Searches

To execute your search:

1. After entering your query, either:
   - Press Enter key
   - Click the search icon button
2. The system will display a loading indicator while searching
3. Results will appear below the search bar
4. The number of results found appears in a badge

## Search Results

### Results Display

Search results appear in a vertical list below the search controls:

1. Each result is displayed in a card-like format
2. Results are ordered by relevance score
3. Empty state message appears if no results are found
4. A count of total results appears at the top of the list

### Result Information

Each result contains detailed information:

1. **Document Icon**: Shows the file type (PDF, Word, Excel, etc.)
2. **Document Title**: Clickable title to open the document
3. **Excerpt**: Text snippet showing relevant content with context
4. **Metadata**: File extension, creation date, and update date
5. **Relevance Score**: Numerical ranking of how relevant the document is

File types are identified by distinctive icons:
- PDF: Document icon
- Word: Word document icon
- Excel: Spreadsheet icon
- PowerPoint: Presentation icon
- Text: Text file icon
- CSV: Database icon
- HTML: Code icon
- Video: Video icon
- Audio: Headphones icon

### Ranking System

Each result shows a relevance score:

1. Score appears as a button in the right column
2. Values range from 1-100 (higher is more relevant)
3. Represents how closely the content matches your query
4. Based on sophisticated vector search algorithms
5. Scores above 70 typically indicate strong matches

## Filtering Results

### Content Type Filter

After receiving search results, you can filter by content type:

1. Click the "Type" button in the top-right area
2. A dropdown menu appears with content type options
3. Select a type to filter the results list
4. The button text updates to show the current filter
5. To restore all results, select "All Content"

### Filter Options

Available filter options include:

- **All Content**: Shows all document types (default)
- **PDF**: Only PDF documents
- **MS Word**: Word documents (.doc, .docx)
- **MS Excel**: Excel spreadsheets (.xls, .xlsx)
- **Power Point**: PowerPoint presentations (.ppt, .pptx)
- **Text File**: Plain text files (.txt)
- **CSV**: Comma Separated Value files
- **JSON**: JSON data files
- **Web Html**: HTML files
- **Video**: Video files
- **Audio**: Audio files
- **MarkDown**: MD files

## Viewing Content

### Document Viewer

To view document content:

1. Click on a document title in the results list
2. A full-screen drawer opens containing the document
3. The drawer header shows the document name
4. Content is rendered using an appropriate viewer based on file type
5. Close the drawer using the X button in the top-right corner

### PDF Documents

When viewing PDF documents:

1. The WebViewer component loads to display the document
2. Relevant text from your search may be highlighted
3. Navigation controls allow browsing through pages
4. The viewer automatically adapts to light/dark mode

### Video Files

When viewing video files:

1. A video player appears with standard controls:
   - Play/pause
   - Volume adjustment
   - Playback position scrubber
2. Video plays automatically when opened
3. Downloads are disabled for security
4. An accordion section below shows "Video Transcription" (when available)

### Text-Based Files

When viewing text files (CSV, RTF, JSON, XML):

1. Content is displayed in a formatted preview
2. Syntax highlighting is applied for code formats
3. The MdPreview component renders the content
4. Vuepress theme is applied for consistent styling

### HTML Files

When viewing HTML files:

1. Raw HTML code is displayed by default
2. A message appears offering to view the rendered page
3. Click "View Live Page" to open the HTML in a new browser tab
4. This approach maintains security while providing access to both code and rendered content

## No Results State

When no search results are found or before the first search:

1. A prominent "No Search Results Found" message appears
2. The message includes an icon and explanatory text
3. Instructions remind you to:
   - Select a Knowledge Base
   - Enter a search into the prompt
4. This state helps guide users to take appropriate action

## Loading States

Visual indicators appear during search operations:

1. **Search Loading**:
   - A circular progress spinner appears in the center
   - "AI Searching Content. Please wait." text is displayed
   - The spinner uses the primary theme color

2. **File Loading**:
   - When opening a document that requires processing
   - A spinner with "File is loading. Please wait." message
   - Disappears once content is ready to view

## Best Practices

For effective content searching:

1. **Query Formulation**:
   - Use specific, descriptive terms
   - Phrase questions naturally
   - Include key terms that would appear in target documents
   - Consider synonyms for important concepts

2. **Knowledge Base Selection**:
   - Choose the most relevant Knowledge Base for your topic
   - Use broader Knowledge Bases for general searches
   - Select specialized Knowledge Bases for domain-specific queries

3. **Result Evaluation**:
   - Check relevance scores to gauge match quality
   - Review excerpts to determine if content meets needs
   - Open documents with scores above 70 first
   - Try alternative search terms if results aren't relevant

4. **Filter Usage**:
   - Start broad and then apply filters if needed
   - Use type filters when looking for specific document formats
   - Return to "All Content" if filtered results are too limited

## Troubleshooting

**Issue**: No results found for a search
- Try using different search terms or synonyms
- Ensure you've selected the correct Knowledge Base
- Check if your query is too specific
- Verify the content you're looking for exists in the selected KB

**Issue**: Knowledge Base selector shows no options
- Wait a moment as Knowledge Bases might still be loading
- Check if you have permissions to access Knowledge Bases
- Try refreshing the page
- Contact your administrator if the issue persists

**Issue**: Document doesn't open when clicked
- Wait a moment as large documents take time to load
- Check if your browser supports the file format
- Try a different browser if issues persist
- Ensure you have permissions to view the document

**Issue**: Video playback issues
- Check if your browser supports HTML5 video
- Ensure you have a stable internet connection
- Try reducing video quality if available
- Some security settings may restrict media playback

**Issue**: Text files appear empty or corrupted
- Wait for file loading to complete
- Check if file encoding is standard UTF-8
- Try clicking the refresh button
- Some heavily formatted text files may not display correctly

**Issue**: HTML files don't display properly
- Use the "View Live Page" button to see the rendered page
- Raw HTML code is shown by default for security reasons
- External resources in the HTML may be blocked
- Some interactive elements may not function in the viewer

---

For additional assistance with Content Search, please contact your system administrator or refer to the platform documentation.