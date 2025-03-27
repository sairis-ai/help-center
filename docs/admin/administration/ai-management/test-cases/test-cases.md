# AI Test Case Configuration Guide

## Table of Contents
- [AI Test Case Configuration Guide](#ai-test-case-configuration-guide)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Accessing Test Case Configuration](#accessing-test-case-configuration)
  - [Test Case Interface Overview](#test-case-interface-overview)
  - [AI Tuning Configuration](#ai-tuning-configuration)
    - [Model Selection](#model-selection)
    - [System Instructions](#system-instructions)
    - [Response Parameters](#response-parameters)
  - [Parameter Controls](#parameter-controls)
    - [Randomness (Temperature)](#randomness-temperature)
    - [Top K](#top-k)
    - [Top P (Nucleus Sampling)](#top-p-nucleus-sampling)
    - [Search Results](#search-results)
    - [Minimum Score](#minimum-score)
  - [Managing Test Questions](#managing-test-questions)
    - [Adding Questions](#adding-questions)
    - [Organizing Questions](#organizing-questions)
    - [Removing Questions](#removing-questions)
  - [Test Case Operations](#test-case-operations)
    - [Saving Configurations](#saving-configurations)
    - [Running Tests](#running-tests)
    - [Comparing Results](#comparing-results)
    - [Promoting to Production](#promoting-to-production)
  - [Best Practices](#best-practices)
  - [Troubleshooting](#troubleshooting)

## Introduction

The AI Test Case system allows administrators to experiment with various AI settings and parameters without affecting production environments. This testing framework enables you to evaluate how changes to AI tuning will impact responses before deploying them to live systems. You can create test configurations, run comparative tests with sample questions, and promote successful configurations to production when satisfied with the results.

## Accessing Test Case Configuration

The Test Case Configuration is accessible to users with specific roles:
- Admin
- Content
- Manager

This interface is typically found within the Knowledge Base management section or AI configuration areas of the platform.

## Test Case Interface Overview

The Test Case system consists of two main components:

1. **AI Tuning Dialog**: Configure AI model settings and parameters
   - Model selection
   - System instructions
   - Response parameter tuning with visual controls

2. **Questions Dialog**: Manage test case questions
   - Add and organize test questions
   - Run tests against configurations
   - Compare results between test and production

## AI Tuning Configuration

### Model Selection

Select the foundation model that will power your test:

1. **AI Foundation Model** dropdown provides options:
   - **Anthropic Claude**:
     - Haiku 3
     - Sonnet 3
     - Sonnet 3.5
   - **Meta**:
     - Llama 3
     - Llama 3.1

2. **Model Selection Considerations**:
   - Different models have varying capabilities and costs
   - Selection affects response quality and processing time
   - Some models may be better suited for specific use cases

### System Instructions

Configure how the AI behaves and responds:

1. **System 1 - Role of assistant**:
   - Define the AI's role and capabilities
   - Set boundaries for what it can/cannot do
   - Provide guidance on tone and approach
   - Optional field with 4,000 character limit
   - Default instructions are used if left blank

2. **System 2** (hidden option):
   - Controls output formatting
   - Can specify citation requirements
   - Sets output style (Markdown, HTML, etc.)
   - Not visible in the current interface version

### Response Parameters

Fine-tune how the AI generates responses through various parameters displayed as interactive knobs:

1. **Parameter Controls**:
   - Each parameter has a visual dial/knob control
   - Knobs can be adjusted by dragging or clicking
   - Changes take effect after saving
   - Default values are pre-set for new tests

## Parameter Controls

### Randomness (Temperature)

Controls creativity and variability in responses:

1. **Knob Settings**:
   - Range: 1-20
   - Default: 1
   - Step: 1

2. **Effect**:
   - Higher values (10-20): More creative, varied responses
   - Lower values (1-5): More consistent, predictable responses
   - Middle values (5-10): Balance between creativity and consistency

### Top K

Controls diversity of word selection:

1. **Knob Settings**:
   - Range: 0-500
   - Default: 50
   - Step: 5

2. **Effect**:
   - Higher values: Consider more word possibilities
   - Lower values: Focus on most likely words
   - Setting of 0: Disable top-k filtering

### Top P (Nucleus Sampling)

Controls probability threshold for word selection:

1. **Knob Settings**:
   - Range: 0-1000
   - Default: 700
   - Step: 1

2. **Effect**:
   - Higher values (700-1000): Consider wider range of words
   - Lower values (0-300): Focus on most probable words
   - Middle values (300-700): Balanced approach

### Search Results

Controls how many search results are used for context:

1. **Knob Settings**:
   - Range: 5-60
   - Default: 35
   - Step: 1

2. **Effect**:
   - Higher values: More comprehensive but potentially noisy responses
   - Lower values: More focused but potentially limited responses
   - Optimal setting depends on content volume and complexity

### Minimum Score

Sets the relevance threshold for including content:

1. **Knob Settings**:
   - Range: 1-500
   - Default: 60
   - Step: 1

2. **Effect**:
   - Higher values: Only highly relevant content considered
   - Lower values: More content included, possibly less relevant
   - Balance based on content quality and query specificity

## Managing Test Questions

The Questions Dialog allows you to create and organize test questions that will be used to evaluate AI configurations.

### Adding Questions

To create test questions:

1. Click the "Add Question" button at the bottom of the question list
2. A new text field appears in the list
3. Type your test question into the field
4. Questions should be representative of real-world user queries
5. Include a variety of question types to test different aspects of AI performance

### Organizing Questions

Test questions can be reordered to create a logical flow:

1. **Moving Questions**:
   - Use the up arrow button to move a question higher in the list
   - Use the down arrow button to move a question lower in the list
   - Questions are processed in the order they appear

2. **Question Order Strategy**:
   - Group related questions together
   - Progress from simple to complex questions
   - Include questions that test different capabilities

### Removing Questions

To delete test questions:

1. Click the red close (×) button next to the question
2. The question is immediately removed from the list
3. Remember to save changes to make removal permanent

## Test Case Operations

### Saving Configurations

To save your test configuration:

1. **AI Tuning**: Click the "Save Test AI Tuning Prompt" button
2. **Test Questions**: Click the "SAVE ALL QUESTIONS" button
3. A success message confirms when settings are saved
4. Both configurations (tuning and questions) must be saved separately

### Running Tests

After configuring both tuning parameters and questions:

1. Run tests from the main test case interface
2. The system will process each question using:
   - Current production configuration
   - Test configuration with your new settings
3. Results are displayed side-by-side for comparison

### Comparing Results

The comparison view shows:

1. Each test question
2. The response using production settings
3. The response using test settings
4. Performance metrics for both responses
5. Visual indicators of differences between responses

### Promoting to Production

When satisfied with test results:

1. Click the "Promote to Production" button
2. Confirm the promotion in the dialog that appears
3. The test configuration becomes the new production configuration
4. Changes take effect immediately

## Best Practices

For effective AI test case configuration:

1. **Systematic Testing**:
   - Change one parameter at a time
   - Document the impact of each change
   - Create multiple test configurations for comparison
   - Test across a range of question types

2. **Question Development**:
   - Include questions that represent real user queries
   - Test both simple and complex scenarios
   - Include edge cases and potential problem areas
   - Use questions that target specific knowledge areas

3. **Parameter Tuning**:
   - Start with default values
   - Make incremental adjustments
   - Find the right balance between creativity and accuracy
   - Different content types may require different settings

4. **System Instructions**:
   - Be specific about the AI's role and limitations
   - Provide clear guidance on response style
   - Include examples of desired outputs
   - Consider user experience and expectations

5. **Evaluation Process**:
   - Define clear success criteria before testing
   - Compare responses objectively
   - Look for improvements in accuracy, relevance, and style
   - Get feedback from potential users

## Troubleshooting

**Issue**: Changes not reflected in test results
- Verify that you saved the configuration after making changes
- Check that you're viewing results from the latest test run
- Try refreshing the page and running the test again

**Issue**: Test case submission error
- Check for error messages in the response
- Verify all required fields are completed
- Ensure parameter values are within acceptable ranges
- Check your network connection

**Issue**: Inconsistent AI responses
- This may be expected with higher randomness settings
- Try lowering the temperature value for more consistency
- Run multiple tests to understand the range of responses

**Issue**: Missing knowledge in responses
- Check the Search Results parameter (try increasing)
- Verify the Minimum Score isn't too high
- Ensure relevant content exists in the knowledge base
- Review system instructions for any limitations

**Issue**: Responses too generic or vague
- Increase the Minimum Score parameter
- Decrease the number of Search Results
- Add more specific guidance in system instructions
- Review test questions for clarity

**Issue**: Cannot save questions
- Ensure you're clicking the "SAVE ALL QUESTIONS" button
- Check for any validation errors
- Verify you have the necessary permissions
- Try refreshing the page and attempting again

---

For additional assistance with AI test case configuration, please contact your system administrator or refer to the platform documentation.