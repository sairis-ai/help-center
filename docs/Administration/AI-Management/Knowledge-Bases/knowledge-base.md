# Knowledge Base Configuration Guide

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

## Introduction

The Knowledge Base Configuration dialog allows administrators to create and edit knowledge bases within the AI Assistant platform. A knowledge base (KB) is a collection of content that the AI uses to provide answers to user queries. This guide explains how to configure knowledge bases effectively using the KB Dialog interface.

## Accessing Knowledge Base Configuration

The Knowledge Base Configuration dialog is accessible to users with specific roles:
- Admin
- Content
- Manager

This dialog appears when:
- Creating a new knowledge base by clicking "Add KB" in the Knowledge Base List View
- Editing an existing knowledge base by clicking its name or the edit button

## Knowledge Base Dialog Overview

The Knowledge Base Dialog is divided into two main columns:

**Left Column**: Contains basic information fields
- Name and initials
- Description
- Group access settings
- Topic and tag selection

**Right Column**: Contains AI and search configuration
- AI foundation model selection
- Creativity settings
- System instructions
- Search configuration parameters
- Sharing and visibility toggles

## Basic Information Section

### Name and Initials

1. **Name** (Required):
   - The primary identifier for your knowledge base
   - Should be descriptive and unique
   - Appears in the knowledge base list and selection dropdowns
   - Maximum length: 255 characters

2. **Initials** (Required):
   - Two-character identifier used for the knowledge base avatar
   - Automatically generated from the first two letters of the name
   - Can be manually overridden
   - Used in visual representations throughout the system

### Description

The description field provides context about the knowledge base's purpose and content:
- Helps users understand what information the KB contains
- Appears in the knowledge base list and selection interfaces
- Use clear, concise language explaining the KB's scope and use cases
- Optional but strongly recommended

### Group Access

Group Access controls which users can access this knowledge base:

1. **Group Selection**:
   - Choose from existing groups in the system
   - Multiple groups can be selected
   - Only users belonging to selected groups will see this knowledge base
   - Groups are displayed as a tag list for easy management

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

### Foundation Model Selection

Choose the AI model that will power this knowledge base:

1. **AI Model** (Required):
   - Options: "haiku" or "sonnet"
   - Haiku: Optimized for speed and efficiency
   - Sonnet: Optimized for depth and complexity
   - Selection affects response quality and processing time

### Creativity Settings

Control how creative or precise the AI responses should be:

1. **Creativity** (Required):
   - Options: "Creative," "Balanced," or "Precise"
   - Creative: More varied and imaginative