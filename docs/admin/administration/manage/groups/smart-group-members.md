# Group Members Viewer Guide

## Introduction

The Group Members Viewer provides administrators with a detailed interface for viewing and managing the users within a Smart Group. This powerful tool allows you to see real-time membership, search for specific users, and understand the composition of your groups to ensure proper access management across your platform.

## Accessing the Group Members Viewer

You can access the Group Members Viewer in several ways:
- From the Smart Group list by clicking the users icon in the Actions column
- Within the Smart Group Editor under the "Users in Group" tab
- When reviewing membership changes after updating group criteria

**Note**: You need Admin, Content, or Manager role permissions to view group membership.

## Group Members Interface Overview

The Group Members interface consists of several key components:

1. **Header Area**: Contains search tools and the membership count
2. **Data Table**: Displays all group members with detailed information
3. **Search Field**: Allows filtering of the member list
4. **Refresh Button**: Updates the membership list
5. **Empty State**: Appears when no users are found or match filters

## Viewing Group Membership

The main data table displays all users who are members of the selected group:

### Member Information Columns

Each user entry includes the following information:

1. **Avatar**: Visual representation showing user initials
2. **First Name**: User's first name (sortable)
3. **Last Name**: User's last name (sortable)
4. **Username**: System login identifier (sortable)
5. **Organization(s)**: Organizational units the user belongs to (sortable)
6. **Role**: User's system role displayed as a chip (sortable)

### Visual Indicators

The interface uses several visual cues to enhance understanding:

- **User Avatars**: Circle avatars with user initials in the primary color
- **Organization Badges**: Rounded rectangles showing organizational affiliations
- **Role Chips**: Colored chips indicating system roles
- **Multiple Organizations**: When a user belongs to multiple organizations, up to three are displayed as separate badges

## Searching and Filtering Members

To find specific users within the group:

### Quick Search

1. Use the search field in the top-left corner
2. Type any text to filter across all searchable fields (names, username, organization, role)
3. Results update automatically as you type
4. A visual indicator appears when filters are active

### Column Sorting

To organize members by specific attributes:
1. Click any column header to sort by that attribute in ascending order
2. Click again to sort in descending order
3. A sort indicator appears in the active column header

### Column Filtering

For more precise filtering:
1. Click the filter icon in any column header
2. Enter specific filter criteria in the popup
3. The table will update to show only matching records

## Refreshing Membership Data

To ensure you're viewing the most current membership:

1. Click the "Refresh Users" button in the top-right corner
2. The system will re-evaluate group membership based on current user data
3. A loading indicator appears during the refresh process
4. The membership count updates to reflect any changes

This is particularly useful after user data has been updated or when checking the effects of changes to other groups.

## Understanding Group Membership

### Dynamic Membership

Smart Groups have dynamic membership based on query criteria:
- Users automatically join when they meet the criteria
- Users are automatically removed when they no longer match
- No manual user assignment is needed
- Membership updates when user attributes change

### Membership Sources

Users can become group members through various criteria:
- Direct attribute matches (name, organization, etc.)
- Role assignments
- Membership in other groups
- Complex query logic combining multiple conditions

## Empty State Display

If no users match the current filters or if the group has no members:

1. A helpful empty state message appears
2. The message suggests possible actions:
   - Check your filters
   - Clear filters
   - Add new group criteria
3. A visual illustration helps identify the empty state

## Loading State

When the system is retrieving membership data:

1. A loading overlay appears with a progress spinner
2. "Getting Users..." message indicates the process is underway
3. The spinner automatically disappears when data is loaded

## Group Member Management Best Practices

### Effective Searching

For optimal member management:
- Use partial searches to find users with similar attributes
- Sort by organization to understand departmental distribution
- Sort by role to identify permission patterns
- Use column filters for precise targeting

### Performance Considerations

For large groups:
- The interface uses virtual scrolling for efficient rendering
- Consider using more specific filters when working with large memberships
- Pagination controls appear automatically for large result sets
- Export functionality can be used for offline analysis

### Regular Auditing

Best practices for group maintenance:
- Regularly review group membership for unexpected inclusions/exclusions
- Check for users with multiple organizations who might have broader access
- Verify that role distributions align with expectations
- Use the refresh function after organizational changes

## Troubleshooting

**Issue**: No users appear in the member list
- Check if your search filters are active (clear them and try again)
- Verify the group criteria are properly configured
- Ensure the group has been saved after criteria changes
- Try the refresh button to update membership

**Issue**: Unexpected users appear in the list
- Review the group criteria in the Smart Group Builder
- Check user profile data for unexpected values
- Consider whether nested group memberships are affecting results
- Verify role assignments are as expected

**Issue**: Search not finding expected users
- Try different search terms or partial matches
- Check if the user actually belongs to the group
- Verify spelling of names and usernames
- Try searching by organization or role instead

**Issue**: Table appears empty with no empty state
- This typically indicates a loading issue
- Try refreshing the page
- Check your network connection
- Verify you have the necessary permissions

---

For additional assistance with Group Member management, please contact your system administrator.
