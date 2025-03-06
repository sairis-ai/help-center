# Chat Token Counter User Guide

<!--
## Table of Contents
- [Chat Token Counter User Guide](#chat-token-counter-user-guide)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Accessing Token Counts](#accessing-token-counts)
  - [Token Counter Interface](#token-counter-interface)
  - [Understanding Token Metrics](#understanding-token-metrics)
    - [Total Requests](#total-requests)
    - [Total Tokens](#total-tokens)
    - [Input Tokens](#input-tokens)
    - [Output Tokens](#output-tokens)
  - [Token Formatting](#token-formatting)
  - [Empty States](#empty-states)
  - [Loading States](#loading-states)
  - [Best Practices](#best-practices)
  - [Troubleshooting](#troubleshooting)
--> 

## Introduction

The Chat Token Counter provides insights into the resource usage of your AI conversations. This component displays metrics about the number of tokens used in your interactions, helping you understand the computational resources consumed during your conversations. Tokens are the basic units that AI models process - each word is typically broken into multiple tokens, and token counts directly relate to processing cost and response time.

## Accessing Token Counts

The Token Counter is accessible from the chat history panel:

![homepage](/images/assistant-chat-tokens.png)

1. Open the Chat History sidebar in the AI Assistant
2. Click the three-dot menu next to a conversation 
3. Select "Token Count" from the menu
4. The Token Counter dialog appears, showing metrics for that conversation

## Token Counter Interface

The Token Counter displays information in a clean, card-based layout:

![homepage](/images/assistant-chat-token-count.png)

1. **Header**: "Token Counts" title at the top of the dialog
2. **Metric Cards**: Four visual cards showing different token metrics
3. **Icons**: Visual indicators for each metric type
4. **Values**: Numerical displays of token counts, formatted for readability
5. **Labels**: Descriptive text below each card explaining the metric

Each metric card uses a consistent design with:
- Light blue background
- Icon representing the metric type
- Large numerical display
- Descriptive label underneath

## Understanding Token Metrics

### Total Requests

The Requests card displays:

1. Comment bubble icon (pi-comments)
2. The total number of interactions/questions in the conversation
3. Label "Requests" below the value
4. Each request typically consists of your question and the AI's response

This metric helps you understand how many back-and-forth exchanges occurred in the conversation.

### Total Tokens

The Total Tokens card displays:

1. Sparkle icon (pi-sparkles) 
2. The sum of all tokens used in the conversation (input + output)
3. Label "Total Tokens" below the value
4. Represents the total computational resources used

This is the most important metric for understanding overall resource usage of the conversation.

### Input Tokens

The Input Tokens card displays:

1. Minimize window icon (pi-window-minimize)
2. The number of tokens used in your questions and prompts
3. Label "Input Tokens" below the value
4. Represents how much information you've provided to the AI

Input tokens include your questions, any document context provided, system instructions, and conversation history.

### Output Tokens

The Output Tokens card displays:

1. Maximize window icon (pi-window-maximize)
2. The number of tokens generated in AI responses
3. Label "Output Tokens" below the value
4. Represents how much information the AI has generated

Output tokens typically cost more computationally than input tokens and represent the AI's work in generating responses.

## Token Formatting

Large token numbers are automatically formatted for readability:

1. Numbers under 1,000 display as exact values
   - Example: 750 appears as "750"

2. Numbers between 1,000 and 999,999 display with "K" suffix
   - Example: 5,400 appears as "5.4 K"

3. Numbers between 1,000,000 and 999,999,999 display with "M" suffix
   - Example: 2,500,000 appears as "2.5 M"

4. Numbers over 1 billion display with "B" suffix
   - Example: 1,200,000,000 appears as "1.2 B"

5. Extremely large numbers (over 1 trillion) display with "T" suffix
   - Example: 1,500,000,000,000 appears as "1.5 T"

This makes large numbers easier to read at a glance while maintaining a clean interface.

## Empty States

If a conversation has no token data:

1. The metric cards do not display
2. Instead, a light blue message box appears
3. Text states "There are no tokens counts for this session"
4. This typically indicates a new or unused conversation

This empty state helps you understand when token data is unavailable rather than simply showing zeros.

## Loading States

While token data is being retrieved:

1. A loading spinner appears in the center of the dialog
2. The spinner uses the primary theme color
3. The animation indicates that data is being fetched
4. Once data loads, the spinner disappears and metrics display

The loading state provides visual feedback during data retrieval, especially important for conversations with extensive history.

## Best Practices

For effectively using the Token Counter:

1. **Regular Monitoring**:
   - Check token usage for long conversations
   - Monitor trends in your token consumption
   - Identify unusually token-heavy conversations

2. **Optimizing Conversations**:
   - Keep questions concise to reduce input tokens
   - Ask for more specific responses when possible
   - Begin new conversations for new topics rather than continuing very long ones

3. **Resource Planning**:
   - Use token metrics to estimate AI usage costs
   - Plan for resource allocation based on conversation patterns
   - Identify opportunities to optimize token usage

4. **Troubleshooting**:
   - Check token counts when responses seem slow
   - Very high token counts may indicate inefficient conversations
   - Abnormally low counts might suggest incomplete responses

## Troubleshooting

**Issue**: Token counts not loading
- Wait a few moments as data retrieves
- Check for error messages in the interface
- Try reopening the token counter dialog
- Verify network connectivity

**Issue**: Unexpected zero counts
- New conversations may not have metrics yet
- Ensure the conversation has completed requests
- Check if the conversation was recently cleared
- Try refreshing the token counter

**Issue**: Token counts seem unusually high
- Long conversations accumulate many tokens
- Document attachments significantly increase token count
- Complex queries with extensive context use more tokens
- Consider starting a new conversation if counts are very high

**Issue**: Error messages when loading tokens
- Note any specific error messages displayed
- Service unavailability may be temporary
- Try again later if system errors appear
- If persistent, contact your administrator

**Issue**: Token counts don't match conversation length
- Remember that tokens are not equivalent to words (usually more tokens than words)
- Hidden context and system instructions also consume tokens
- Document processing adds significant token usage
- Each AI model tokenizes text differently

---

For additional assistance with token counter information, please contact your system administrator or refer to the platform documentation.