# Content Access Control Guide

## Introduction

The Content Access Control interface allows administrators and content managers to control who can view and edit AI content items. This powerful permissions system enables you to share content with specific security groups, assign it to knowledge bases, and manage ownership rights for ongoing content maintenance.

## Accessing Content Access Controls

The Content Access interface is available as a tab within the Content Management area:
- When creating new content, complete the upload and basic information first
- When editing existing content, select the "Access" tab at the top of the content editor
- Access controls can be modified at any time after content creation

## Access Control Interface Overview

The interface is organized into three main sections:

1. **View Permissions**: Controls who can see and use the content
2. **Edit Permissions**: Determines who can modify the content
3. **Content Authorship**: Shows creation and modification information

Each section provides visual indicators of current permissions and easy-to-use controls for updating access settings.

## View Permissions Management

### Understanding View Access

View permissions determine:
- Which users can see the content item in lists
- Who can use the content with the AI assistant
- Whether the content appears in knowledge base searches

View access is granted through two mechanisms:
1. Security group membership
2. Knowledge base assignment

### Managing Security Group Access

To control which security groups can view the content:

1. Locate the "Security Groups" section under "Who can VIEW this content?"
2. Current group assignments are displayed as chips with the group name
3. Click on a group chip to view its membership details
4. Empty state shows "Empty" if no groups are assigned

**Note**: Users must belong to at least one of the assigned security groups to view the content.

### Managing Knowledge Base Assignment

To control which knowledge bases include the content:

1. Locate the "Knowledge Bases" section under "Who can VIEW this content?"
2. Current knowledge base assignments are displayed as chips
3. Click on a knowledge base chip to view its details
4. Empty state shows "Empty" if not assigned to any knowledge bases

**Important**: Content must be assigned to at least one knowledge base to be usable by the AI.

## Edit Permissions Management

### Understanding Edit Access

Edit permissions determine:
- Who can modify the content's metadata
- Who can update or replace the content file
- Who can delete the content
- Who can change access permissions

Edit access is granted through two mechanisms:
1. Individual user assignment
2. Security group membership

### Managing Individual User Access

To control which specific users can edit the content:

1. Locate the "Individual Users" section under "Who can EDIT this content?"
2. Current user assignments are displayed as chips with names
3. Empty state shows "Empty" if no individual users are assigned

### Managing Group Edit Permissions

To grant edit permissions to entire security groups:

1. Locate the "Security Groups" section under "Who can EDIT this content?"
2. Current group assignments are displayed as chips with the group name
3. Click on a group chip to view its membership details
4. Empty state shows "Empty" if no groups have edit permissions

**Note**: Any user who is either individually listed or a member of a listed security group will have edit permissions.

## Content Authorship Information

The Content Authorship section provides visibility into the content's history:

### Creation Information

Displays details about when and by whom the content was created:
- Creator's full name and username
- Creation date and time

### Update Information

Shows the most recent modification details:
- Last editor's full name and username
- Last update date and time

This information helps track content history and provides accountability for content changes.

## Security Group Details

When working with security groups, you can view detailed membership information:

1. Click on any security group chip (in either view or edit sections)
2. A dialog opens showing:
   - Group name and details
   - List of all users who are members of the group
   - Group hierarchical relationships

This feature helps verify that appropriate users have access to the content.

## Knowledge Base Details

When managing knowledge base assignments:

1. Click on any knowledge base chip
2. A dialog opens showing:
   - Knowledge base name and details
   - Configuration settings
   - Associated content
   - Ownership information

This provides context about where the content is being used.

## Best Practices for Content Access Control

### Security Group Strategy

For optimal content management:
- Assign view permissions to broader department or functional groups
- Reserve edit permissions for content management groups
- Use consistent group assignments across related content
- Consider creating dedicated content management groups

### Knowledge Base Assignment

For effective knowledge organization:
- Assign content to all relevant knowledge bases
- Consider how content interrelates within knowledge bases
- Assign similar or related content to the same knowledge bases
- Regularly review knowledge base content assignments

### Edit Permission Management

For controlled content maintenance:
- Limit edit permissions to content creators and managers
- Consider using group-based edit permissions for teams
- Periodically audit edit permissions as team responsibilities change
- Document ownership assignments for critical content

## Access Control Troubleshooting

**Issue**: Users cannot see the content
- Verify they belong to at least one assigned security group
- Check if the content is assigned to an accessible knowledge base
- Ensure content is not in a draft or unpublished state

**Issue**: Users cannot edit the content
- Confirm they are listed as individual editors or belong to an editor group
- Verify their account has the necessary global permissions
- Check if the content is locked or in a protected state

**Issue**: Content not appearing in knowledge base
- Ensure the knowledge base is properly assigned
- Verify AI processing completed successfully
- Check knowledge base query settings

**Issue**: Cannot modify access controls
- Verify you have edit permissions for the content
- Check if content is locked or restricted
- Ensure you have the necessary administrative rights

---

For additional assistance with content access control, please contact your system administrator or content management team.
