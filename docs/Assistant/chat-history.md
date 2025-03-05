# AI Chat History Manager User Guide

## Table of Contents
- [AI Chat History Manager User Guide](#ai-chat-history-manager-user-guide)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Accessing Chat History](#accessing-chat-history)
  - [Chat History Interface](#chat-history-interface)
  - [Managing Conversations](#managing-conversations)
    - [Creating New Chats](#creating-new-chats)
    - [Selecting Existing Chats](#selecting-existing-chats)
    - [Searching Chat History](#searching-chat-history)
    - [Sorting Options](#sorting-options)
  - [Chat Actions](#chat-actions)
    - [Renaming Chats](#renaming-chats)
    - [Adding Tags](#adding-tags)
    - [Viewing Token Counts](#viewing-token-counts)
    - [Clearing Conversations](#clearing-conversations)
    - [Deleting Chats](#deleting-chats)
  - [Blueprint Management](#blueprint-management)
    - [Viewing Blueprints](#viewing-blueprints)
    - [Using Blueprints](#using-blueprints)
    - [Creating Blueprints](#creating-blueprints)
  - [Advanced Features](#advanced-features)
    - [Tag Visibility](#tag-visibility)
    - [Refreshing History](#refreshing-history)
  - [Mobile Experience](#mobile-experience)
  - [Troubleshooting](#troubleshooting)

## Introduction

The AI Chat History Manager provides a comprehensive interface for organizing, searching, and managing your AI conversations. This sidebar allows you to access past conversations, create new chat sessions, work with AI Blueprints, and organize your AI interactions through tags and naming. This guide explains how to effectively use the Chat History Manager to maximize your AI assistant experience.

## Accessing Chat History

The Chat History Manager appears as a sidebar panel within the AI Assistant interface:

1. Access by clicking the chat history icon in the main Assistant interface
2. The panel displays your conversation history and available Blueprints
3. History is organized chronologically with newest conversations at the top by default

## Chat History Interface

The Chat History Manager consists of two main sections:

1. **Chat History Section**:
   - Search bar at the top for finding specific conversations
   - Sorting and display controls
   - List of past conversations with action menus
   - New chat creation button

2. **Blueprints Section** (when enabled):
   - List of available AI Blueprints
   - Blueprint creation button
   - Blueprint action buttons

## Managing Conversations

### Creating New Chats

To start a fresh conversation:

1. Click the "+" button in the top-right corner of the Chat History section
2. A new conversation appears at the top of your history list
3. The conversation initially uses the default date/time as its name
4. The AI Assistant interface resets to begin a new conversation

You can also create new chats through keyboard shortcut Ctrl+N or from the main Assistant interface.

### Selecting Existing Chats

To resume a previous conversation:

1. Locate the desired conversation in the history list
2. Click on the conversation name
3. The main Assistant interface loads the selected conversation
4. All previous messages and context are restored

### Searching Chat History

To find specific conversations:

1. Type keywords in the search field at the top of the history panel
2. Search matches conversation names and tags
3. Results update in real-time as you type
4. The list filters to show only matching conversations

### Sorting Options

Change the order of your conversation list:

1. Click the sort icon (stack of lines) to open the sort menu
2. Choose from available sorting options:
   - **Updated (New → Old)**: Most recently active first (default)
   - **Updated (Old → New)**: Oldest active first
   - **Alpha (A → Z)**: Alphabetical by name
   - **Alpha (Z → A)**: Reverse alphabetical
   - **Created (New → Old)**: Newest created first
   - **Created (Old → New)**: Oldest created first

3. The selected sort is highlighted and applied immediately
4. The sort preference persists until changed

## Chat Actions

### Renaming Chats

To give your conversations meaningful names:

1. Click the three-dot menu next to a conversation
2. Select "Rename & Tags"
3. In the dialog that appears:
   - Enter a new name in the "Chat Name" field
   - Click "Save" to apply the change
4. The conversation appears with its new name in the list

Newly created conversations start with a date/time name that you can customize for easier reference.

### Adding Tags

Tags help organize and find related conversations:

1. Click the three-dot menu next to a conversation
2. Select "Rename & Tags"
3. In the dialog that appears:
   - Type a tag name and press Enter to add it
   - Click the X on any tag to remove it
   - Click "Save" to apply changes
4. Tags appear below conversation names when tag display is enabled

### Viewing Token Counts

To see token usage statistics for a conversation:

1. Click the three-dot menu next to a conversation
2. Select "Token Count"
3. A dialog appears showing:
   - Total tokens used (input and output)
   - Number of requests made
   - Breakdown by model used
   - Charts visualizing usage patterns
4. This helps track resource utilization

### Clearing Conversations

To remove all messages from a conversation while keeping the chat:

1. Click the three-dot menu next to a conversation
2. Select "Clear Conversation"
3. Confirm in the dialog that appears
4. The conversation remains in your history but all messages are removed
5. You can start fresh while maintaining the chat's name and tags

### Deleting Chats

To completely remove a conversation:

1. Click the three-dot menu next to a conversation
2. Select "Delete Chat"
3. Confirm the deletion in the dialog that appears
4. The conversation is permanently removed from your history

## Blueprint Management

### Viewing Blueprints

When Blueprints are enabled:

1. The lower half of the sidebar shows available Blueprints
2. Each Blueprint displays its name
3. Tags appear when tag display is enabled
4. The currently active Blueprint is highlighted

### Using Blueprints

To switch to a Blueprint:

1. Click on the Blueprint name in the list
2. The main Assistant interface loads the Blueprint
3. The Blueprint's settings, knowledge sources, and specialized capabilities become active
4. The conversation starts with the Blueprint's home screen

### Creating Blueprints

To create a new Blueprint:

1. Click the "+" button in the top-right corner of the Blueprints section
2. The Blueprint editor opens
3. Configure the Blueprint settings
4. Save to add it to your Blueprints list

You can also edit existing Blueprints by clicking the pencil icon next to their name.

## Advanced Features

### Tag Visibility

Control whether tags are visible in the history list:

1. Click the tag icon in the button bar above the history list
2. When highlighted blue, tags are visible beneath each conversation name
3. When gray, tags are hidden to save space
4. Tags are still searchable even when not displayed

### Refreshing History

To update the history list with the latest data:

1. Click the refresh icon in the button bar
2. The system retrieves the latest conversation data
3. Useful after creating new conversations in other windows
4. A loading spinner appears during refresh

## Mobile Experience

When using the Chat History Manager on mobile devices:

1. The interface adapts to fit smaller screens
2. Swipe gestures can be used for navigation
3. The Blueprint section may appear below the history section
4. Tap and hold replaces right-click for menu access
5. The search bar remains accessible at the top

## Troubleshooting

**Issue**: Chat history not loading
- Click the refresh icon to reload data
- Check your network connection
- Verify you're signed in properly
- If problems persist, try reloading the page

**Issue**: Cannot find specific conversations
- Try different search terms
- Check if you're using the correct sorting order
- Try showing tags if they might contain relevant keywords
- Consider if the conversation might have been deleted

**Issue**: Cannot delete or clear conversations
- Ensure you're not trying to perform actions while the AI is busy responding
- Check if you have proper permissions for the action
- Try refreshing the history list
- If an error appears, note the error message for support

**Issue**: Rename not appearing immediately
- Some name changes may take a moment to propagate
- The "Renaming..." indicator shows when a rename is in progress
- Try refreshing the history list if names aren't updating

**Issue**: Blueprint list not showing all Blueprints
- Click the refresh icon to reload Blueprints
- Check if your search term might be filtering the list
- Verify you have permissions to see all Blueprints
- Some Blueprints may be restricted to certain users

**Issue**: Tags not appearing
- Ensure the tag visibility button is activated (blue)
- Check if the conversation has any tags assigned
- Try adding tags through the Rename & Tags dialog

---

For additional assistance with the Chat History Manager, please contact your system administrator or refer to the platform documentation.