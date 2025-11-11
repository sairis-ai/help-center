# Knowledge Base - User Guide
<!-- ## Table of Contents
1. [Overview](#overview)
2. [Getting Started](#getting-started)
3. [Eight Powerful Modes](#eight-powerful-modes)
4. [Feature 1: File Listing](#feature-1-file-listing)
5. [Feature 2: Targeted Search](#feature-2-targeted-search)
6. [Feature 3: Full Document Summarization](#feature-3-full-document-summarization)
7. [Feature 4: Document Comparison](#feature-4-document-comparison)
8. [Feature 5: Document Diff](#feature-5-document-diff)
9. [Feature 6: Read Document into Context](#feature-6-read-document-into-context)
10. [Feature 7: Search in File](#feature-7-search-in-file)
11. [Feature 8: Find Files by Content](#feature-8-find-files-by-content)
12. [Document Caching System](#document-caching-system)
13. [Best Practices](#best-practices)
14. [Common Use Cases](#common-use-cases)
15. [Troubleshooting](#troubleshooting)
16. [FAQ](#faq)
--- -->
## Overview

The **Knowledge Base Tool** is your intelligent assistant for working with documents, PDFs, and text content. It provides eight powerful modes to help you discover, search, summarize, compare, diff, load, and explore documents efficiently.

### What Can It Do?

- 📋 **List all available documents** in your knowledge base
- 🔍 **Search for specific information** across documents
- 📄 **Summarize complete documents** in seconds
- ⚖️ **Compare multiple documents** side-by-side
- 🔀 **Show textual differences** between document versions (diff)
- 📖 **Read documents into context** for analysis
- 🔎 **Search within specific files** using natural language
- 📁 **Find files by content** to discover relevant documents
- ⚡ **Cache documents** to prevent redundant loading

### Who Is It For?

- Business users who need quick answers from document libraries
- Researchers comparing multiple reports or studies
- Analysts reviewing company profiles or market data
- Developers comparing code or configuration files
- Anyone working with large document collections

## Getting Started

### Prerequisites

You need:
1. Access to the chat system with KB tool enabled
2. Documents uploaded to your knowledge base OR
3. Access to a shared knowledge base

### Basic Usage

Simply ask natural language questions! The system automatically:
- Detects what you want to do
- Chooses the right mode
- Retrieves the relevant information
- Formats the response clearly

**No special commands or syntax required** - just ask naturally!

## Eight Powerful Modes

### Quick Reference Table

| Mode | When to Use | Example Query |
|------|-------------|---------------|
| **📋 File Listing** | See what's available | "What files do you have?" |
| **🔍 Targeted Search** | Find specific facts | "Where is Russell Ridge located?" |
| **📄 Full Document** | Get complete summary | "Summarize the sales report" |
| **⚖️ Document Comparison** | Compare 2+ docs | "Compare Russell Ridge and ABC Distillery" |
| **🔀 Document Diff** | Show line-by-line changes | "Diff version1.txt and version2.txt" |
| **📖 Read Document** | Load full doc into context | "Read the policy document" |
| **🔎 Search in File** | Search within specific file | "Find revenue in Russell Ridge Vintners" |
| **📁 Find Files** | Discover files by content | "Which files mention tequila?" |

## Feature 1: File Listing

### What Is It?

Discover what documents are available in your knowledge base before asking questions.

### When to Use It

- Starting a new research session
- Unsure what documents you have access to
- Planning which documents to analyze
- Exploring a new knowledge base

### How to Use It

Simply ask:

```
"What files are available?"
"List all documents in the knowledge base"
"Show me what content you have access to"
"What documents can I ask about?"
"What's in the KB?"
```

### What You Get

A complete list showing:
- **Document names/titles**
- **Publication source** (if available)
- **Date** (if available)
- **Document type** (report, profile, policy, etc.)
- **Industry/category**

### Example Response

```
Available Documents (15 found):

1. Russell Ridge Vineyards Profile
   - Publication: Company Profiles
   - Date: 2024-01-15
   - Type: Company Profile
   - Industry: Beverage Alcohol

2. ABC Distillery Overview
   - Publication: Market Research
   - Date: 2024-02-20
   - Type: Company Profile
   - Industry: Beverage Alcohol

3. 2023 Annual Sales Report
   - Publication: Internal Reports
   - Date: 2024-01-10
   - Type: Annual Report
   - Industry: General

... (12 more documents)
```

### Tips

✅ **DO:**
- Use file listing when starting a session
- Review the list before asking detailed questions
- Note exact document names for later queries

❌ **DON'T:**
- Skip this step if unsure what's available
- Guess document names

## Feature 2: Targeted Search

### What Is It?

Search for specific facts, data points, or information across all documents using semantic AI search.

### When to Use It

- Looking for a specific piece of information
- Answering a focused question
- Finding data points across documents
- Quick fact retrieval

### How to Use It

Ask specific questions naturally:

```
"Where is Russell Ridge Vineyards located?"
"What is the revenue for 2023?"
"Who is the CEO of ABC Distillery?"
"What products does XYZ Winery produce?"
"When was the company founded?"
```

### How It Works

The system:
1. **Understands** your question semantically (not just keywords)
2. **Searches** across all document chunks
3. **Ranks** results by relevance
4. **Returns** the most relevant passages (typically 5-10 chunks)

### What You Get

The most relevant sections from documents that answer your question, including:
- **Text passages** with the answer
- **Source information** (document name, page number)
- **Context** around the answer
- **Relevance scores**

### Example Interaction

**Your Question:**
```
"Where is Russell Ridge Vineyards located?"
```

**Response:**
```
Russell Ridge Vineyards is located in Paso Robles, California.

Source: Russell Ridge Vineyards Profile, Page 2

Additional context: The winery sits on 45 acres in the
Paso Robles wine region, specifically in the Templeton Gap
District known for its ideal growing conditions for
Rhône varietals.
```

### Advanced Search Tips

#### Use Synonyms
The system understands synonyms automatically:
- "company" = "distillery" = "winery" = "brewery" = "producer"
- "location" = "address" = "where" = "site"
- "products" = "offerings" = "portfolio"

#### Ask Follow-up Questions
```
Q1: "What does Russell Ridge produce?"
Q2: "What about their pricing?" (system remembers context)
Q3: "How does this compare to industry average?"
```

#### Combine Multiple Topics
```
"Tell me about Russell Ridge's location, products, and market positioning"
```

### Tips

✅ **DO:**
- Ask specific, focused questions
- Use natural language
- Ask follow-up questions for more detail
- Mention document names for better precision

❌ **DON'T:**
- Ask overly broad questions ("Tell me everything")
- Use this mode for complete summaries
- Expect full document content

## Feature 3: Full Document Summarization

### What Is It?

Get a comprehensive summary of an **entire document** from start to finish, perfect for understanding the full scope of a document.

### When to Use It

- Need to understand a complete document
- Want executive summary of a report
- Reviewing document before deep dive
- Need overview of document contents

### How to Use It

Ask to summarize with document name:

```
"Summarize the Russell Ridge Vineyards document"
"Give me a complete summary of the 2023 annual report"
"Tell me everything about the ABC Distillery profile"
"What's in the sales policy document?"
"Summarize the employee handbook"
```

### Important Rules

#### ✅ Valid Requests

```
✅ "Summarize the Russell Ridge Vineyards document"
   (specific document named)

✅ "Give me a summary of the 2023 report"
   (specific document identified)

✅ Single document attached
   (can omit name if only one document)
```

#### ❌ Invalid Requests

```
❌ "Summarize all documents"
   (too vague - which document?)

❌ "Summarize the knowledge base"
   (must specify a document)

❌ "Give me a summary"
   (when multiple documents - must specify which one)
```

### What You Get

A complete summary including:
- **Overview** of document purpose
- **Key sections** highlighted
- **Main points** from each section
- **Important data** and facts
- **Conclusions** or recommendations
- **Metadata** (pages, date, source)

### Example Interaction

**Your Request:**
```
"Summarize the Russell Ridge Vineyards profile document"
```

**Response:**
```
RUSSELL RIDGE VINEYARDS - COMPLETE SUMMARY

Overview:
Russell Ridge Vineyards is a boutique winery located in
Paso Robles, California, specializing in Rhône-style wines...

Company Background:
- Founded: 2008
- Location: 45 acres in Templeton Gap District
- Founders: Smith Family
- Annual Production: 5,000 cases

Product Portfolio:
The winery produces 8 different wines focusing on...
[detailed product information]

Market Positioning:
Russell Ridge positions itself in the premium wine segment...
[market analysis]

Distribution & Sales:
Primary distribution through tasting room (60%), wine club (25%)...
[sales channels]

Key Differentiators:
1. Estate-grown Rhône varietals
2. Sustainable farming practices
3. Small-batch artisan approach...

Document Details:
- Source: Company Profiles Database
- Date: January 2024
- Pages: 12
- Type: Company Profile
```

### Tips

✅ **DO:**
- Name the specific document you want summarized
- List files first if unsure of document names
- Use for comprehensive understanding
- Request summaries of specific sections if needed

❌ **DON'T:**
- Request "all documents" summary
- Be vague about which document
- Use for quick fact lookups (use targeted search instead)

## Feature 4: Document Comparison

### What Is It?

Compare **2 or more complete documents** side-by-side to understand differences, similarities, and make informed decisions.

### When to Use It

- Comparing competitor profiles
- Analyzing year-over-year reports
- Evaluating multiple options
- Finding differences between versions
- Contrasting approaches or strategies

### How to Use It

Ask to compare with document names:

```
"Compare Russell Ridge Vineyards and ABC Distillery"
"What are the differences between the 2023 and 2024 reports?"
"Russell Ridge vs ABC Distillery - key differences?"
"How do the XYZ Winery and ABC Brewery profiles differ?"
"Compare the policy documents for Region A, B, and C"
```

### Supported Query Patterns

| Pattern | Example |
|---------|---------|
| **Compare X and Y** | "Compare Russell Ridge and ABC Distillery" |
| **X vs Y** | "Russell Ridge vs ABC Distillery" |
| **X versus Y** | "Russell Ridge versus ABC Distillery" |
| **Differences between X and Y** | "Differences between Doc1 and Doc2" |
| **Compare X, Y, and Z** | "Compare 2022, 2023, and 2024 reports" |

### Important Rules

#### ✅ Valid Requests

```
✅ "Compare Russell Ridge and ABC Distillery"
   (2 documents named)

✅ "Russell Ridge vs XYZ Brewery"
   (2 documents with vs format)

✅ "Compare 2022, 2023, and 2024 annual reports"
   (3+ documents specified)

✅ "What are differences between Doc1 and Doc2?"
   (2 documents identified)
```

#### ❌ Invalid Requests

```
❌ "Compare all documents"
   (must name specific documents)

❌ "Compare the documents"
   (ambiguous - which documents?)

❌ "What are the differences?"
   (no documents specified)

❌ "Compare ABC Distillery"
   (only 1 document - need at least 2)
```

### What You Get

A comprehensive comparison showing:
- **Complete content** from each document
- **Side-by-side analysis** by the AI
- **Key differences** highlighted
- **Similarities** identified
- **Strengths/weaknesses** of each
- **Recommendations** (if appropriate)

### Example Interaction

**Your Request:**
```
"Compare Russell Ridge Vineyards and ABC Distillery to
understand their product offerings and market positioning"
```

**Response:**
```
COMPARISON: Russell Ridge Vineyards vs ABC Distillery

OVERVIEW:
Russell Ridge Vineyards (Wine) | ABC Distillery (Spirits)
- Both are craft beverage producers
- Different industries and product categories
- Similar commitment to quality and craftsmanship

PRODUCT OFFERINGS:

Russell Ridge Vineyards:
- 8 wine varietals focusing on Rhône styles
- Price range: $28-65 per bottle
- Limited production: 5,000 cases annually
- Specialties: Syrah, Grenache, Mourvèdre blends

ABC Distillery:
- 5 spirit products (vodka, gin, whiskey, rum)
- Price range: $35-120 per bottle
- Production: 15,000 bottles annually
- Specialties: Small-batch bourbon and craft gin

MARKET POSITIONING:

Russell Ridge Vineyards:
- Premium wine segment
- Direct-to-consumer focused (tasting room + wine club)
- Regional distribution (California + 3 states)
- Target: Wine enthusiasts and collectors

ABC Distillery:
- Craft spirits segment
- Distribution-focused (bars, restaurants, retail)
- National distribution (42 states)
- Target: Cocktail culture and mixologists

KEY DIFFERENCES:

1. Industry Focus:
   - Russell Ridge: Wine production
   - ABC Distillery: Spirit distillation

2. Scale:
   - Russell Ridge: Smaller, boutique scale
   - ABC Distillery: Larger craft production

3. Distribution Strategy:
   - Russell Ridge: Direct sales emphasis
   - ABC Distillery: Wholesale distribution

4. Price Positioning:
   - Russell Ridge: Premium wine pricing
   - ABC Distillery: Ultra-premium spirits

SIMILARITIES:

1. Both emphasize craft/artisan approach
2. Strong brand identity and storytelling
3. Quality over quantity philosophy
4. Commitment to sustainable practices
5. Family-owned businesses

COMPETITIVE ADVANTAGES:

Russell Ridge:
+ Unique terroir and estate vineyards
+ Strong wine club loyalty
+ Award-winning wines
- Limited distribution reach

ABC Distillery:
+ Broader distribution network
+ Diverse product portfolio
+ Strong bar/restaurant presence
- Higher competition in spirits market

SUMMARY:
Russell Ridge excels in the wine category with a focused,
direct-to-consumer approach, while ABC Distillery has
built a broader spirits portfolio with extensive distribution.
Choose Russell Ridge for premium wine investment;
choose ABC for spirits market opportunity.
```

### Advanced Comparison Tips

#### Compare More Than 2 Documents

```
"Compare the Russell Ridge, ABC Distillery, and XYZ Brewery profiles"
```

The system retrieves all three and provides multi-way comparison.

#### Focus Comparison on Specific Aspects

```
"Compare Russell Ridge and ABC Distillery focusing on
their sustainability practices and environmental commitments"
```

The AI will emphasize those aspects in the comparison.

#### Historical Comparisons

```
"Compare the 2022, 2023, and 2024 quarterly reports
to identify trends"
```

Perfect for year-over-year or quarter-over-quarter analysis.

### Tips

✅ **DO:**
- Name all documents you want to compare
- Be specific about what aspects to compare
- Limit to 5 documents for best performance
- List files first if unsure of exact names
- Documents are cached automatically for faster reloading

❌ **DON'T:**
- Use ambiguous references ("the documents")
- Compare without naming documents
- Request comparison of entire KB
- Compare 10+ documents (performance impact)

## Feature 5: Document Diff

### What Is It?

Compute and display **line-by-line textual differences** between exactly 2 documents, similar to a "git diff". Perfect for comparing versions, tracking changes, or identifying what's different between two similar documents.

### When to Use It

- Comparing two versions of the same document
- Tracking changes between document revisions
- Finding what changed in an updated policy or report
- Identifying differences in configuration files or code
- Reviewing edits between drafts

### How to Use It

Ask to diff with exactly 2 document names:

```
"Diff version1 and version2"
"Show me the diff between policy_2024 and policy_2025"
"What changed between draft1 and draft2?"
"Diff the old report and new report"
"Show differences between config_dev and config_prod"
```

### Important Rules

#### ✅ Valid Requests

```
✅ "Diff document_A and document_B"
   (exactly 2 documents named)

✅ "Show me the diff between version1 and version2"
   (2 documents with diff format)

✅ "What changed from draft1 to draft2?"
   (2 documents for change tracking)
```

#### ❌ Invalid Requests

```
❌ "Diff all versions"
   (must specify exactly 2 documents)

❌ "Diff document_A, document_B, and document_C"
   (diff only works with 2 documents - use compare for 3+)

❌ "Show me the diff"
   (no documents specified)
```

### What You Get

A detailed diff output showing:
- **Unified diff format** with context lines
- **Additions** (lines added in document 2)
- **Deletions** (lines removed from document 1)
- **Unchanged context** (surrounding lines for clarity)
- **Line numbers** for both documents
- **Statistics** (number of additions, deletions, similarity %)
- **Document metadata** (names, chunk counts, content lengths)

### Example Interaction

**Your Request:**
```
"Diff policy_2024.txt and policy_2025.txt"
```

**Response:**
```
DOCUMENT DIFF: policy_2024.txt vs policy_2025.txt

Statistics:
- Additions: 23 lines
- Deletions: 15 lines
- Total changes: 38 lines
- Similarity: 87.3%

Unified Diff:
--- policy_2024.txt (Document 1)
+++ policy_2025.txt (Document 2)
@@ -15,7 +15,7 @@

 ## Remote Work Policy

-Employees may work remotely up to 2 days per week.
+Employees may work remotely up to 3 days per week.

 Remote work must be approved by direct supervisor.

@@ -45,10 +45,15 @@

 ## Paid Time Off

-Full-time employees receive 15 days PTO annually.
-Part-time employees receive 10 days PTO annually.
+Full-time employees receive 20 days PTO annually.
+Part-time employees receive 12 days PTO annually.
+
+New: Unlimited sick leave for chronic conditions.
+New: Parental leave extended to 16 weeks.

 PTO accrues monthly and must be used within calendar year.
+Unused PTO up to 5 days may now roll over to next year.

...

📋 Both documents retrieved from cache
```

### Diff Output Format

The diff uses standard unified diff format:
- **`---` line**: Document 1 (before/old version)
- **`+++` line**: Document 2 (after/new version)
- **`@@` lines**: Line number ranges being shown
- **Lines starting with `-`**: Removed from document 1 (deletions)
- **Lines starting with `+`**: Added in document 2 (additions)
- **Lines without prefix**: Unchanged context lines

### Use Cases for Diff

#### Version Tracking
```
"Diff employee_handbook_v2 and employee_handbook_v3"
→ See exactly what changed between versions
```

#### Policy Updates
```
"Show me what changed from 2024_benefits to 2025_benefits"
→ Track policy changes year over year
```

#### Configuration Comparison
```
"Diff config_staging and config_production"
→ Identify environment-specific differences
```

#### Document Review
```
"What's different between my_draft and final_version"
→ Review editor changes or revisions
```

### Tips

✅ **DO:**
- Use diff for exactly 2 documents
- Specify complete document names clearly
- Use diff for version tracking and change detection
- Review statistics before examining detailed diff

❌ **DON'T:**
- Try to diff more than 2 documents (use compare instead)
- Use diff for unrelated documents (results won't be meaningful)
- Forget that diff shows line-by-line changes (best for text documents)

## Feature 6: Read Document into Context

### What Is It?

**Load complete document content** directly into the conversation context with intelligent chunk overlap removal. This gives you access to the full document text for in-depth analysis, question-answering, or discussion - different from summarization which condenses content.

### When to Use It

- Need to analyze or work with full document text
- Want to ask multiple detailed questions about content
- Performing deep analysis requiring complete context
- Working with structured data or code in documents
- Need to reference specific sections or details repeatedly

### How to Use It

Ask to read, load, or retrieve the document:

```
"Read the policy document"
"Load the employee handbook"
"Read everything from the 2024 report"
"Give me the full content of the technical spec"
"Load the configuration file"
"Retrieve the entire contract document"
```

### Difference from Summarization

| Feature | **Read Document** | **Summarize Document** |
|---------|-------------------|------------------------|
| **Output** | Complete full text | Condensed summary |
| **Use Case** | Deep analysis, Q&A | Quick overview |
| **Content** | Every word preserved | Key points extracted |
| **Best For** | Working with content | Understanding content |
| **Follow-ups** | Can ask about any detail | May need to read for details |

### What You Get

Complete document content including:
- **Full text** with intelligent overlap removal (clean, seamless)
- **All sections** in correct sequential order
- **Metadata** (title, pages, chunks, length)
- **Cache status** (📋 cached or 🔍 freshly loaded)
- **Loaded timestamp** for cached documents
- **Ready for analysis** - ask questions about any part

### Example Interaction

**Your Request:**
```
"Read the employee handbook document"
```

**Response:**
```
Successfully read 128 chunks (45,678 characters).
📋 Retrieved from cache (loaded 12 minutes ago)

Content ID: handbook_2024_v3
Title: Employee Handbook 2024 - Complete Edition
Document Type: Policy Document

[FULL DOCUMENT TEXT FOLLOWS]

EMPLOYEE HANDBOOK
=================

Welcome to [Company Name]! This handbook contains...

Section 1: Introduction
-----------------------
Our company was founded in...

Section 2: Work Schedule and Hours
----------------------------------
Standard work hours are...

Section 3: Remote Work Policy
-----------------------------
Employees may work remotely...

[... complete document content continues ...]

Section 15: Appendices
---------------------
Appendix A: Contact Directory...

Now loaded into context. You can ask me questions about any
section or detail from this document.
```

**Follow-up Questions:**
```
"What's the remote work policy?"
"How many vacation days do I get?"
"Who do I contact for IT support?"
"What's the dress code policy?"
```

All questions answered from the loaded document context!

### Intelligent Overlap Removal

When documents are stored in chunks, there's often overlapping text between chunks to maintain context. The read feature **automatically detects and removes these overlaps** (typically 20+ character sequences) to give you clean, seamless text without duplication.

**Without overlap removal:**
```
...end of first chunk with some text here
with some text here and continues...
```

**With overlap removal (automatic):**
```
...end of first chunk with some text here and continues...
```

### Tips

✅ **DO:**
- Use read for deep document analysis
- Ask follow-up questions after loading
- Load multiple documents if needed for comparison
- Take advantage of caching for repeated access

❌ **DON'T:**
- Use read when you only need a summary
- Load extremely large documents if you only need specific facts
- Forget that documents are cached automatically

## Feature 7: Search in File

### What Is It?

Search for specific information **within a single document** using natural language queries. Unlike general search which scans all documents, this feature focuses on one file and returns relevant chunks with their scores and locations.

### When to Use It

- Need to find information in a specific document
- Want to see all mentions of a topic in one file
- Looking for specific data points with context
- Need relevance scores to judge match quality
- Want to control result quantity and quality thresholds

### How to Use It

Ask naturally with the filename and search query:

```
"Search for revenue in Russell Ridge Vintners"
"Find information about sustainability in the ABC Distillery profile"
"What does the employee handbook say about vacation?"
"In the 2024 report, search for Q4 results"
"Look for pricing information in Russell Ridge"
```

### Supported Query Patterns

The system understands multiple natural language formats:

| Pattern | Example |
|---------|---------|
| **Search for X in [file]** | "Search for revenue in Russell Ridge" |
| **Find X in [file]** | "Find pricing in the sales report" |
| **What does [file] say about X** | "What does the handbook say about PTO?" |
| **In [file] search/find X** | "In Russell Ridge find production data" |
| **[file]: search terms** | "Russell Ridge: vineyard location" |

The system also automatically matches filenames from your available documents, so you can use partial names or descriptions.

### Configurable Parameters

Control your search results:

- **k (number of results)**: How many chunks to return (default: 10)
- **score_threshold**: Minimum relevance score (default: 0.5, range: 0.0-1.0)

Higher thresholds = fewer, higher-quality results
Lower thresholds = more results, potentially less relevant

### What You Get

Relevant chunks from the specified document including:

- **Matched text passages** with your search terms
- **Relevance scores** (0.0-1.0, higher = better match)
- **Page numbers** where content appears
- **Chunk indices** (position in document)
- **Result statistics** (k used, threshold, score range)
- **Document metadata** (name, content_id)

### Example Interaction

**Your Request:**
```
"Search for annual production in Russell Ridge Vintners"
```

**Response:**
```
SEARCH RESULTS: Russell Ridge Vintners

Search Parameters:
- Query: "annual production"
- Results returned: 10 (requested: 10)
- Score threshold: 0.5
- Score range: 0.89 to 0.52

Results:

1. Score: 0.89 | Page: 3 | Chunk: 12
   "Annual Production: Russell Ridge Vineyards produces
   approximately 5,000 cases annually across 8 different
   wine varietals. Production has grown steadily from
   the initial 2,000 cases in 2008..."

2. Score: 0.76 | Page: 7 | Chunk: 28
   "Production Capacity: The winery's current production
   facility can handle up to 8,000 cases annually with
   plans to expand to 10,000 cases by 2026..."

3. Score: 0.68 | Page: 5 | Chunk: 19
   "Estate Vineyard: 45 acres planted with Rhône varietals
   providing 80% of fruit for annual production. Remaining
   20% sourced from neighboring vineyards..."

[... 7 more results ...]

Source: Russell Ridge Vintners (content_id: russell_ridge_2024)
```

### Advanced Usage

#### Adjust Result Quantity

```
"Search for revenue in Russell Ridge, return top 5 results"
"Find all mentions of sustainability in ABC Distillery, show 20 results"
```

#### Adjust Quality Threshold

```
"Search for pricing in Russell Ridge with high confidence"
(system uses threshold 0.7 for "high confidence")

"Find any mentions of awards in Russell Ridge, include low confidence"
(system uses threshold 0.3 for "any mentions")
```

#### Combine Both

```
"Search for distribution channels in ABC Distillery,
return top 15 results with medium confidence"
```

### Tips

✅ **DO:**
- Name the specific file you want to search
- Use natural language queries
- Review relevance scores to judge quality
- Adjust k or threshold if results aren't right
- Use page numbers to reference source material

❌ **DON'T:**
- Search without specifying a file (use general search instead)
- Expect results across multiple files (use general search or find_files)
- Set threshold too high (0.9+) if you want comprehensive results

## Feature 8: Find Files by Content

### What Is It?

Discover **which files contain specific information** without retrieving all the chunks. This feature searches across all documents and returns a sorted list of files that match your query, along with their best relevance scores.

### When to Use It

- Want to know which files discuss a topic
- Need to discover relevant documents before deep diving
- Looking for files containing specific keywords or concepts
- Planning which documents to analyze further
- Creating a reading list based on content

### How to Use It

Simply ask what files contain the information:

```
"Which files mention tequila?"
"Find files about sustainability practices"
"What documents discuss revenue growth?"
"Show me files containing pricing information"
"Which files cover distribution strategies?"
```

### Configurable Parameters

Control your file discovery:

- **k (number of files)**: How many files to return (default: 10)
- **score_threshold**: Minimum relevance score (default: 0.3, range: 0.0-1.0)

*Note: Lower default threshold (0.3) to discover more potentially relevant files*

### How It Works

The system:
1. **Searches broadly** across all document chunks (k × 10 chunks)
2. **Aggregates by file** (groups chunks by content_id)
3. **Keeps best score** per file (highest relevance)
4. **Returns sorted list** of top k files by relevance

### What You Get

A ranked list of files containing:

- **File names/titles** that match your query
- **Relevance scores** (best match per file)
- **Content IDs** (unique document identifiers)
- **Document metadata** (type, source, date if available)
- **Result statistics** (files found, search parameters)

### Example Interaction

**Your Request:**
```
"Which files mention tequila production?"
```

**Response:**
```
FILES CONTAINING: "tequila production"

Search Parameters:
- Files requested: 10
- Files found: 3
- Score threshold: 0.3
- Score range: 0.92 to 0.61

Matching Files:

1. Luna Azul Tequila Profile
   Score: 0.92 | Content ID: luna_azul_2024
   Type: Company Profile | Date: 2024-02-15

   Best matching content preview:
   "Luna Azul specializes in premium tequila production
   using traditional methods and blue agave from Jalisco..."

2. ABC Distillery Overview
   Score: 0.78 | Content ID: abc_distillery_2024
   Type: Company Profile | Date: 2024-01-20

   Best matching content preview:
   "Product portfolio includes craft vodka, gin, rum, and
   small-batch tequila production launched in 2023..."

3. 2024 Beverage Alcohol Market Report
   Score: 0.61 | Content ID: market_report_2024
   Type: Market Analysis | Date: 2024-03-10

   Best matching content preview:
   "The tequila production segment has seen 15% growth
   year-over-year with premium brands leading expansion..."

Next Steps:
- Read or summarize specific files for details
- Compare files to understand differences
- Search within specific files for deeper analysis
```

### Use Cases

#### Topic Discovery

```
"Which files discuss environmental sustainability?"
→ Find all documents mentioning sustainability
→ Prioritize by relevance
```

#### Competitive Intelligence

```
"Which files mention competitor XYZ?"
→ Discover all competitor references
→ Read specific files for analysis
```

#### Research Planning

```
"Find files about pricing strategies"
→ Create reading list
→ Compare most relevant files
```

#### Content Audit

```
"Which files cover year 2023?"
→ Identify historical documents
→ Plan year-over-year analysis
```

### Advanced Usage

#### Broad Discovery (More Files)

```
"Find top 20 files mentioning revenue"
(returns 20 files instead of default 10)
```

#### Strict Quality Filter

```
"Find files with strong mentions of innovation"
(system interprets as higher threshold ~0.6)
```

#### Comprehensive Discovery

```
"Find any files mentioning awards, include all matches"
(system uses low threshold ~0.2 for comprehensive results)
```

### Workflow Integration

**Typical workflow using find_files:**

1. **Discover files**
   ```
   "Which files discuss market expansion?"
   → Returns: Doc A (0.89), Doc B (0.75), Doc C (0.62)
   ```

2. **Summarize top candidates**
   ```
   "Summarize Doc A"
   "Summarize Doc B"
   ```

3. **Search specific files**
   ```
   "Search for expansion timeline in Doc A"
   "Find revenue projections in Doc B"
   ```

4. **Compare if needed**
   ```
   "Compare Doc A and Doc B on market strategies"
   ```

### Tips

✅ **DO:**
- Use for initial document discovery
- Review scores to prioritize reading
- Follow up with summarize or read for details
- Adjust k if you need more/fewer files
- Use lower threshold (0.2-0.3) for comprehensive discovery

❌ **DON'T:**
- Expect detailed content (just file list with previews)
- Set threshold too high if doing broad discovery
- Forget to follow up with deeper analysis

## Document Caching System

### What Is It?

The Knowledge Base Tool includes an **intelligent document caching system** that automatically stores recently accessed documents in memory to improve performance and reduce redundant data loading.

### How It Works

#### Automatic Caching

When you read, compare, diff, or summarize a document:
1. **First access**: Document is retrieved from the knowledge base and stored in cache
2. **Subsequent access**: Document is served from cache (much faster!)
3. **Cache validation**: System checks if document has changed
4. **Smart refresh**: If document changed, cache is updated automatically

#### Cache TTL (Time to Live)

- **Default TTL**: 30 minutes
- **Automatic expiration**: Cached documents expire after TTL
- **Fresh reload**: Expired documents are automatically reloaded from KB
- **Manual refresh**: You can force a fresh load anytime

#### Cache Invalidation

Cache is automatically invalidated when:
- **TTL expires**: Document older than 30 minutes
- **Document changes**: Chunk count mismatch detected
- **Manual refresh**: You request a fresh load with `refresh=true`

### User Benefits

#### Performance

⚡ **Instant access** to cached documents (no KB query delay)
⚡ **Faster operations** when working with same documents
⚡ **Reduced latency** for repeated reads, compares, and diffs

#### Context Management

📋 **Prevents duplication** - reading same document twice doesn't duplicate content in context
📋 **Smart reuse** - compare/diff operations share cached documents
📋 **Memory efficient** - cached documents replace redundant KB queries

#### Transparency

🔍 **Cache status visible** in every response:
- `📋 Retrieved from cache (loaded 5 minutes ago)`
- `🔍 Freshly loaded from knowledge base`
- `📋 2 from cache, 1 freshly loaded` (multi-document operations)

### Cache Status Messages

#### Single Document Operations

```
"📋 Retrieved from cache (loaded just now)"
"📋 Retrieved from cache (loaded 5 minutes ago)"
"📋 Retrieved from cache (loaded 2.3 hours ago)"
"🔍 Freshly loaded from knowledge base"
```

#### Multi-Document Operations

**Compare documents:**
```
"📋 All documents retrieved from cache"
"📋 2 from cache, 1 freshly loaded"
"🔍 All documents freshly loaded from knowledge base"
```

**Diff documents:**
```
"📋 Both documents retrieved from cache"
"📋 1 document from cache, 1 freshly loaded"
"🔍 Both documents freshly loaded from knowledge base"
```

### Advanced: Manual Cache Control

While caching is automatic, you can control it if needed:

#### Force Fresh Load

```python
# API/programmatic access only
kb_search.read_document(query="document_name", refresh=True)
```

Setting `refresh=True` bypasses cache and reloads from KB.

#### Custom Cache TTL

```python
# API/programmatic access only
kb_search.read_document(query="document_name", cache_ttl_minutes=60)
```

Override default 30-minute TTL with custom value.

### Cache Behavior Examples

#### Example 1: Repeated Document Reads

```
12:00 PM: "Read the employee handbook"
→ 🔍 Freshly loaded from knowledge base (5 seconds)

12:05 PM: "Read the employee handbook again"
→ 📋 Retrieved from cache (loaded 5 minutes ago) (instant)

12:35 PM: "Read the employee handbook"
→ 🔍 Freshly loaded from knowledge base (cache expired after 30min)
```

#### Example 2: Document Comparison with Caching

```
User: "Compare Doc A and Doc B"
→ 🔍 Both documents freshly loaded
→ Cache: Doc A (cached), Doc B (cached)

User: "Compare Doc A and Doc C"
→ 📋 1 from cache (Doc A), 1 freshly loaded (Doc C)
→ Cache: Doc A, Doc B, Doc C (all cached)

User: "Diff Doc B and Doc C"
→ 📋 Both documents retrieved from cache (instant)
→ No KB queries needed!
```

#### Example 3: Cache Invalidation on Change

```
12:00 PM: "Read policy_2024"
→ Document has 25 chunks
→ Cached with 25 chunks

[Administrator updates policy_2024 in KB → now 27 chunks]

12:10 PM: "Read policy_2024"
→ Cache check: 25 chunks (cached) vs 27 chunks (current)
→ 🔍 Freshly loaded from knowledge base (document changed)
→ Cache updated with 27 chunks
```

### Tips

✅ **DO:**
- Trust the automatic caching - it's transparent and smart
- Notice cache status messages to understand performance
- Work with same documents in a session for maximum benefit
- Use cached documents for fast comparisons and analysis

❌ **DON'T:**
- Worry about cache management (it's automatic)
- Try to manually clear cache (not needed - expires automatically)
- Expect cache across different sessions (cache is per-session)

## Best Practices

### Before You Start

#### 1. **List Available Files**
Always start by asking "What files are available?" to know what you're working with.

#### 2. **Note Document Names**
Write down exact document names from the file list to use in later queries.

#### 3. **Plan Your Questions**
Think about what you need:
- Which files discuss this topic? → Find files by content
- Quick fact across all docs? → Targeted search
- Search within one document? → Search in file
- Complete overview? → Full document summary
- Work with full content? → Read document
- Multiple docs? → Document comparison
- See what changed? → Document diff
- Documents load fast thanks to automatic caching! 📋

### During Your Session

#### 4. **Be Specific**
```
✅ "What is Russell Ridge's annual production?"
❌ "Tell me about production"
```

#### 5. **Name Documents When Needed**
```
✅ "Summarize the Russell Ridge Vineyards document"
❌ "Summarize it" (ambiguous)
```

#### 6. **Use Natural Language**
Don't try to use special syntax - just ask naturally!

```
✅ "Where is Russell Ridge located?"
❌ "SEARCH: location Russell Ridge" (unnecessary)
```

#### 7. **Ask Follow-up Questions**
The system remembers context:
```
Q1: "What does Russell Ridge produce?"
Q2: "What's their price range?"
Q3: "How does this compare to competitors?"
```

### Optimizing Performance

#### 8. **Limit Comparison Scope**
Compare 2-5 documents for best performance (not 10+).

#### 9. **Use Targeted Search for Quick Facts**
Don't use full document mode when you just need one fact.

#### 10. **Combine Related Questions**
```
✅ "Tell me about Russell Ridge's location, products, and pricing"
❌ Three separate questions
```

## Common Use Cases

### Use Case 1: Market Research

**Scenario:** Researching beverage companies for investment analysis

**Workflow:**
1. **List files** to see available company profiles
   ```
   "What company profiles are available?"
   ```

2. **Compare key competitors**
   ```
   "Compare Russell Ridge Vineyards, ABC Distillery,
   and XYZ Brewery focusing on market position and growth"
   ```

3. **Deep dive on top candidate**
   ```
   "Summarize the Russell Ridge Vineyards profile"
   ```

4. **Get specific data points**
   ```
   "What is Russell Ridge's annual revenue?"
   "Who are their main distribution partners?"
   "What awards have they won?"
   ```

### Use Case 2: Policy Review

**Scenario:** Understanding company policies across regions

**Workflow:**
1. **List policy documents**
   ```
   "Show me all policy documents"
   ```

2. **Compare policies**
   ```
   "Compare the HR policies for US, UK, and EU regions"
   ```

3. **Get specific policy details**
   ```
   "What is the remote work policy in the US document?"
   "What are the PTO allowances in each region?"
   ```

### Use Case 3: Annual Report Analysis

**Scenario:** Analyzing year-over-year performance

**Workflow:**
1. **List annual reports**
   ```
   "What annual reports are available?"
   ```

2. **Compare multi-year trends**
   ```
   "Compare 2022, 2023, and 2024 annual reports
   focusing on revenue and growth metrics"
   ```

3. **Summarize latest report**
   ```
   "Summarize the 2024 annual report"
   ```

4. **Get specific metrics**
   ```
   "What was Q4 2024 revenue?"
   "What are the key risks mentioned in 2024?"
   ```

### Use Case 4: Competitive Intelligence

**Scenario:** Understanding competitor strategies

**Workflow:**
1. **Compare competitor profiles**
   ```
   "Compare our top 3 competitors: Company A, B, and C"
   ```

2. **Deep dive on each**
   ```
   "Summarize Company A's profile"
   "Summarize Company B's profile"
   ```

3. **Specific competitive questions**
   ```
   "What is Company A's pricing strategy?"
   "How does Company B differentiate their products?"
   "What markets is Company C targeting?"
   ```

### Use Case 5: Document Discovery

**Scenario:** New employee exploring company knowledge base

**Workflow:**
1. **See what's available**
   ```
   "What documents are in the knowledge base?"
   ```

2. **Explore by category**
   ```
   "Show me all HR documents"
   "What training materials are available?"
   ```

3. **Read key documents**
   ```
   "Summarize the employee handbook"
   "Summarize the benefits guide"
   ```

4. **Quick reference**
   ```
   "What is the vacation policy?"
   "Who do I contact for IT support?"
   ```

### Use Case 6: Topic Discovery and Deep Dive

**Scenario:** Researching sustainability practices across company portfolio

**Workflow:**
1. **Find relevant files**
   ```
   "Which files mention sustainability practices?"
   → Returns: 5 files ranked by relevance
   ```

2. **Search within top file**
   ```
   "Search for environmental certifications in [Top File]"
   → Returns: Specific chunks with scores about certifications
   ```

3. **Compare approaches**
   ```
   "Compare [File1] and [File2] on sustainability initiatives"
   ```

4. **Get specific metrics**
   ```
   "Search for carbon footprint in [File1]"
   "Find water conservation in [File2]"
   ```

## Troubleshooting

### Problem: "Knowledge base not available"

**Cause:** System couldn't initialize connection to knowledge base

**Solutions:**
- Wait a moment and try again
- Check if you have documents uploaded or KB access
- Contact administrator to verify KB configuration

### Problem: "Cannot summarize entire knowledge base"

**Cause:** You requested summary without specifying a document

**Example Error:**
```
❌ "Summarize all documents"
❌ "Give me a summary" (when multiple docs available)
```

**Solutions:**
1. List files first: `"What files are available?"`
2. Specify document: `"Summarize the [Document Name] document"`

### Problem: "Must specify at least 2 documents to compare"

**Cause:** Comparison request without 2+ document names

**Example Error:**
```
❌ "Compare the documents"
❌ "What are the differences?"
```

**Solutions:**
1. List files first to see available documents
2. Name specific documents: `"Compare Doc1 and Doc2"`

### Problem: No Results Returned

**Cause:** Document doesn't exist or query too vague

**Solutions:**
1. **List files** to confirm document names
2. **Check spelling** of document names
3. **Rephrase question** to be more specific
4. **Use different keywords** or synonyms

### Problem: Results Not Relevant

**Cause:** Query semantics don't match document content

**Solutions:**
1. **Rephrase using different words**
   - Instead of "company size" try "number of employees"
   - Instead of "location" try "headquarters" or "address"

2. **Be more specific**
   - Instead of "products" try "wine products" or "specific wine varietals"

3. **Name the document**
   - "What products does Russell Ridge offer?" (includes document name)

### Problem: Slow Response

**Cause:** Retrieving too much data or comparing many documents

**Solutions:**
1. **Limit comparison scope** (2-5 docs, not 10+)
2. **Use targeted search** instead of full document mode
3. **Break into smaller queries**

## FAQ

### General Questions

**Q: Do I need special syntax or commands?**

A: No! Just ask questions naturally. The system understands natural language.

**Q: Can I ask follow-up questions?**

A: Yes! The system remembers context within a conversation.

**Q: How accurate are the results?**

A: The system uses AI semantic search which is highly accurate for understanding intent and finding relevant information. However, always verify critical data from source documents.

**Q: Can I search across multiple knowledge bases?**

A: You search within the KB(s) you have access to. If you have multiple KBs or documents uploaded, they're all searchable.

### File Listing Questions

**Q: How often is the file list updated?**

A: The file list reflects current KB contents in real-time.

**Q: Can I filter the file list by type or date?**

A: Currently, all files are listed. You can ask "What reports are available?" or "Show me 2024 documents" and the system will filter in the response.

**Q: Why don't I see all metadata for every file?**

A: Some documents may not have all metadata fields (date, publication, etc.). The system shows what's available.

### Search Questions

**Q: How many results do I get from a search?**

A: Typically 5-10 most relevant document chunks, ranked by relevance.

**Q: Can I search for exact phrases?**

A: The system uses semantic search, not exact text matching. It understands meaning, not just keywords.

**Q: What if my search has no results?**

A: Try rephrasing with different words, or verify the information exists by listing files first.

### Summarization Questions

**Q: How long are document summaries?**

A: Summaries vary based on document length but aim to capture key points comprehensively. Typically 1-2 pages for a 10-20 page document.

**Q: Can I get a shorter summary?**

A: Yes! Ask: "Give me a brief summary of [Document]" or "What are the key highlights of [Document]?"

**Q: Can I summarize just a section of a document?**

A: Yes! Ask: "Summarize the financial section of the 2024 annual report"

**Q: What's the maximum document size?**

A: Documents are chunked during processing. Very large documents (100+ pages) may be summarized in sections.

### Comparison Questions

**Q: How many documents can I compare?**

A: You can compare 2-10 documents. For best performance, limit to 2-5 documents.

**Q: Can I compare documents from different time periods?**

A: Yes! Perfect for year-over-year analysis: "Compare 2022, 2023, and 2024 reports"

**Q: How does the comparison work?**

A: The system retrieves complete content from all specified documents and the AI analyzes them side-by-side based on your request.

**Q: Can I focus comparison on specific aspects?**

A: Yes! Example: "Compare Doc1 and Doc2 focusing on pricing and market strategy"

### Search in File Questions

**Q: How is "search in file" different from regular search?**

A: Regular search looks across ALL documents. Search in file focuses on ONE specific document, returning chunks with scores and page numbers from that file only.

**Q: What's a good relevance score?**

A: Scores range 0.0-1.0. Generally: 0.8+ (excellent), 0.6-0.8 (good), 0.4-0.6 (moderate), <0.4 (weak). Default threshold is 0.5.

**Q: Can I control how many results I get?**

A: Yes! Ask for more/fewer: "Search for revenue in Russell Ridge, return 20 results" or specify confidence: "high confidence" (0.7), "medium confidence" (0.5), "low confidence" (0.3).

**Q: Do I need to know the exact filename?**

A: No! The system uses NLP to extract filenames from your query. You can say "Search for pricing in Russell Ridge" and it will match "Russell Ridge Vintners Profile.pdf".

### Find Files Questions

**Q: How is "find files" different from "file listing"?**

A: File listing shows ALL files you have access to. Find files searches BY CONTENT and returns only files containing your query, ranked by relevance.

**Q: How many files should I search for?**

A: Default is 10 files. Adjust based on your needs: "Find 20 files mentioning revenue" for broader discovery, or "Find top 5 files about pricing" for focused results.

**Q: What does the relevance score mean for files?**

A: It's the BEST (highest) relevance score from all chunks in that file. Higher score = file contains stronger matches to your query.

**Q: Can I use find files to plan my research?**

A: Absolutely! Use find files to discover relevant documents → review scores → summarize top candidates → read or compare the most relevant ones.

### Technical Questions

**Q: What happens to my queries?**

A: Queries are logged for monitoring and debugging (with request IDs for correlation) but are not used for training.

**Q: Is my data secure?**

A: Yes. The system uses tenant isolation - you only see documents you have access to.

**Q: Can I access documents offline?**

A: No. The knowledge base requires active connection to function.

**Q: What file formats are supported?**

A: PDFs, text files, Word documents, and other common document formats (depending on system configuration).

## Quick Reference Card

### Command Patterns

| Want to... | Say this... |
|------------|-------------|
| **See available files** | "What files are available?" |
| **Find files by topic** | "Which files mention [topic]?" |
| **Search across all docs** | "Where is [company] located?" |
| **Search in specific file** | "Search for [query] in [filename]" |
| **Summarize document** | "Summarize the [Document Name]" |
| **Compare 2 docs** | "Compare [Doc1] and [Doc2]" |
| **Compare 3+ docs** | "Compare [Doc1], [Doc2], and [Doc3]" |
| **Diff 2 docs** | "Diff [Doc1] and [Doc2]" |
| **Read document** | "Read the [Document Name]" |
| **Get specific data** | "What is [specific question]?" |
| **Follow-up** | Just ask - context is remembered |

### Mode Selection Guide

```
Need to discover files?
  → 📁 Find Files by Content
  Example: "Which files mention tequila?"

Need a quick fact?
  → 🔍 Targeted Search
  Example: "What is the revenue?"

Want to search in one file?
  → 🔎 Search in File
  Example: "Search for pricing in Russell Ridge"

Want complete overview?
  → 📄 Full Document Summary
  Example: "Summarize the annual report"

Comparing options?
  → ⚖️ Document Comparison
  Example: "Compare report A and B"

See what changed?
  → 🔀 Document Diff
  Example: "Diff version1 and version2"

Need full document text?
  → 📖 Read Document
  Example: "Read the employee handbook"

Starting fresh?
  → 📋 File Listing
  Example: "What files are available?"
```

### Do's and Don'ts

| ✅ DO | ❌ DON'T |
|------|----------|
| Name specific documents | Use vague references |
| List files first | Guess document names |
| Ask naturally | Use special syntax |
| Be specific | Ask overly broad questions |
| Use for summaries | Use for single facts |
| Compare 2-5 docs | Compare 10+ docs |
| Ask follow-ups | Start new session for each question |

## Getting Help

### Support Resources

1. **This User Guide** - Comprehensive feature documentation
2. **Administrator** - For KB access and configuration issues
3. **Technical Documentation** - For API/integration details

### Reporting Issues

If you encounter problems:
1. Note the exact query you used
2. Note any error messages
3. Note what you expected vs. what happened
4. Contact your administrator with this information

### Feature Requests

Have ideas for improvements? Contact your administrator to suggest:
- New query patterns
- Additional metadata fields
- Export capabilities
- Integration features

## Version Information

**Document Version:** 3.0
**Last Updated:** October 31, 2025
**KB Tool Version:** 8.0 (Eight-Mode System with Advanced Search)

### Recent Enhancements

- **October 2025 (v8.0):**
  - 🔎 **Search in File feature** - Search within specific files using NLP with configurable k and thresholds
  - 📁 **Find Files by Content** - Discover which files contain specific information
  - 🎯 **Metadata-only filtering** - Improved file listing reliability (eliminates semantic query bias)
  - 📊 **Relevance scores** - All search results include quality scores
  - 🧠 **NLP query extraction** - Natural language understanding for file-specific searches
- **October 2025 (v6.0):**
  - ⚡ **Intelligent document caching system** (30-min TTL, automatic invalidation)
  - 🔀 **Document diff feature** for line-by-line comparisons
  - 📖 **Read document into context** with overlap removal
  - 📋 **Cache status notifications** (shows cached vs fresh loads)
  - ⏱️ **Cache age display** (shows when documents were loaded)
- **October 2025 (v4.0):** Document comparison feature added
- **October 2025:** File listing capability added
- **October 2025:** Full document summarization with validation rules
- **October 2025:** Lazy metadata enrichment for better search
- **September 2025:** Enhanced semantic search with synonyms

## Appendix: Technical Details

### Search Algorithm

The system uses **semantic vector search** powered by AWS Bedrock embeddings and Pinecone vector database. This means:
- Understands **meaning**, not just keywords
- Finds **related concepts** automatically
- Ranks by **relevance score**
- Works in **natural language**

### Document Processing

Documents are:
1. **Chunked** into manageable sections
2. **Embedded** as vectors (mathematical representations)
3. **Stored** in vector database with metadata
4. **Indexed** for fast retrieval

### Metadata Fields

Each document chunk includes:
- `content_id` - Unique document identifier
- `title` - Document title
- `content_name` - Document name
- `page` - Page number
- `chunk_index` - Position in document
- `document_type` - Type (report, profile, policy, etc.)
- `company_type` - Company category (winery, distillery, etc.)
- `industry` - Industry classification
- `publication` - Publication source
- `date` - Publication date
- `url` - Document URL (if available)

### Performance Specs

- **File Listing:** ~1-3 seconds (metadata-only filtering)
- **Find Files by Content:** ~1-3 seconds (searches k×10 chunks, aggregates)
- **Targeted Search:** ~0.5-2 seconds (semantic search across all docs)
- **Search in File:** ~0.3-1 second (focused search in one document)
- **Full Document Summary:** ~2-5 seconds (retrieves and summarizes)
- **Document Comparison (2 docs):** ~2-4 seconds
- **Document Comparison (5 docs):** ~4-8 seconds
- **Document Diff (2 docs):** ~2-4 seconds
- **Read Document:** ~1-3 seconds (with intelligent overlap removal)
- **Cached Document Access:** <0.5 seconds (instant from cache)

*Performance varies based on document size and system load.*

## Conclusion

The Knowledge Base Tool is a powerful assistant for discovering, searching, summarizing, comparing, diffing, loading, and exploring documents with intelligent caching. By mastering its eight modes - **File Listing**, **Targeted Search**, **Full Document Summarization**, **Document Comparison**, **Document Diff**, **Read Document**, **Search in File**, and **Find Files by Content** - you can efficiently extract insights from your document library.

**Remember:**
- 📋 Start with file listing to discover
- � Use find files to discover which documents contain topics
- �🔍 Use targeted search for quick facts across all documents
- 🔎 Use search in file for focused searches within one document
- 📄 Summarize for complete understanding
- ⚖️ Compare to make informed decisions
- 🔀 Diff to track changes between versions
- 📖 Read to load full content for analysis
- ⚡ Automatic caching makes repeated access instant!

**Happy searching!** 🚀
