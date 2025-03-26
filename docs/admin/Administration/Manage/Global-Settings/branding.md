# Platform Branding & Customization Guide

<!--
## Table of Contents
- [Platform Branding \& Customization Guide](#platform-branding--customization-guide)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Accessing Branding Settings](#accessing-branding-settings)
  - [Organization Information](#organization-information)
  - [Theme Customization](#theme-customization)
    - [Primary Colors](#primary-colors)
    - [Secondary Colors](#secondary-colors)
    - [Surface Colors](#surface-colors)
      - [Light Mode Surface Color](#light-mode-surface-color)
      - [Dark Mode Surface Color](#dark-mode-surface-color)
    - [Display Mode](#display-mode)
    - [Gradient Generator](#gradient-generator)
  - [Logo Management](#logo-management)
    - [Logo Types](#logo-types)
    - [Uploading Logos](#uploading-logos)
    - [Logo Editor](#logo-editor)
  - [Advanced Layout Settings](#advanced-layout-settings)
    - [Menu Type](#menu-type)
    - [Menu Theme](#menu-theme)
  - [Best Practices](#best-practices)
  - [Troubleshooting](#troubleshooting)
--> 

## Introduction

The Platform Branding & Customization tool allows administrators to personalize the visual appearance of the application to match organizational branding guidelines. This component provides comprehensive controls for customizing colors, uploading logos, and adjusting layout settings to create a cohesive branded experience.

## Accessing Branding Settings

The Branding Settings component is accessible to users with specific roles:
- Admin
- Content
- Manager

To access this component, navigate to the tenant settings section and select "Branding" from the menu.

## Organization Information

The top section of the branding page contains fields for essential organizational information:

![homepage](/images/settings-branding.png)

1. **Company Name** (Required)
   - The official name of your organization
   - Displayed in various parts of the application
   - Required field that cannot be left empty

2. **Company Alias**
   - A shorter version or alternative name for your organization
   - Optional field used in space-constrained areas of the interface

3. **Account Notes**
   - Additional information about the account or branding guidelines
   - Optional field for administrative notes

## Theme Customization

The Colors & Logo section provides comprehensive controls for adjusting the application's appearance.

### Primary Colors

The primary color is the main accent color used throughout the application for buttons, highlights, and interactive elements.

To set the primary color:
1. Select one of the predefined color swatches, or
2. Use the custom color picker to select a precise color

When a primary color is selected:
- The application automatically generates a color palette based on the selection
- The theme updates in real-time to preview the changes
- The "custom" theme is activated when using the color picker

### Secondary Colors

The secondary color is used for accents, highlights, and complementary elements.

To set the secondary color:
1. Use the color picker to select a precise color
2. The application automatically generates a secondary color palette

### Surface Colors

Surface colors control the background shades used throughout the application. There are separate controls for light and dark modes.

#### Light Mode Surface Color
1. Select from predefined surface color swatches
2. Changes affect background colors when in light mode

#### Dark Mode Surface Color
1. Select from predefined surface color swatches
2. Changes affect background colors when in dark mode

### Display Mode

Control whether the application uses light or dark mode by default:
1. Select "Light" or "Dark" from the Display Mode toggle
2. The application instantly previews the selected mode
3. Users can still override this setting with their personal preferences

### Gradient Generator

Create custom gradients for use in promotional areas or backgrounds:

1. Select colors for the gradient start, middle, and end points
2. Preview the gradient in real-time
3. The gradient is stored for use in compatible application areas

## Logo Management

The Manage Application Logos section allows you to upload and configure the logos used throughout the application.

### Logo Types

The system requires four distinct logo files:

1. **Logo Light**
   - The primary full logo on light backgrounds
   - Recommended size: 155px × 60px
   - Used in headers and main navigation areas

2. **Mark Light**
   - The icon-only version on light backgrounds
   - Recommended size: 50px × 50px
   - Used in space-constrained areas and mobile views

3. **Logo Dark**
   - The primary full logo on dark backgrounds
   - Recommended size: 155px × 60px
   - Automatically used when dark mode is active

4. **Mark Dark**
   - The icon-only version on dark backgrounds
   - Recommended size: 50px × 50px
   - Used in space-constrained areas when dark mode is active

### Uploading Logos

To update any logo:

1. Click on the logo card you wish to update
2. The logo editor dialog will open showing the current logo
3. Click the folder icon or drag and drop a new image
4. Use the editor tools to crop and adjust the image
5. Click "Save logo" to apply changes

### Logo Editor

The built-in logo editor provides several tools:

1. **Open**: Import an image from your device
2. **Crop**: Adjust the visible portion of the image
3. **Confirm**: Accept the current crop selection
4. **Reset**: Revert to the original image
5. **Save logo**: Finalize and upload the edited logo

The editor automatically resizes images to the appropriate dimensions:
- Full logos to 155px × 60px
- Mark logos to 50px × 50px

## Advanced Layout Settings

For advanced users, additional controls are available to customize the application layout.

### Menu Type

Select from different navigation menu styles:
- **Static**: Fixed side menu that remains visible
- **Overlay**: Menu slides over content when activated
- **Slim**: Narrow icons-only menu that expands on hover
- **Slim+**: Enhanced slim menu with additional information
- **Reveal**: Menu that reveals when triggered
- **Drawer**: Slide-out panel containing the menu
- **Horizontal**: Menu that spans horizontally across the top

### Menu Theme

Choose how the menu's appearance relates to the overall theme:
- **Color Scheme**: Menu uses the application's color scheme
- **Primary Color**: Menu uses the primary color as its background
- **Transparent**: Menu has a transparent background

## Best Practices

For optimal branding results:

1. **Logo Consistency**
   - Maintain consistent visual elements between light and dark versions
   - Ensure all logos are clearly visible on their intended backgrounds
   - Use transparent backgrounds for logos when possible

2. **Color Selection**
   - Choose colors that reflect your brand identity
   - Ensure sufficient contrast for accessibility
   - Test your color scheme in both light and dark modes

3. **Gradient Usage**
   - Use gradients sparingly for maximum impact
   - Ensure gradient colors complement your primary brand colors
   - Test gradients for readability when text is overlaid

4. **Regular Review**
   - Periodically review how branding appears across different devices
   - Check that colors and logos remain consistent across the application
   - Update branding when organizational guidelines change

## Troubleshooting

**Issue**: Logo appears distorted after upload
- Use an image with the recommended dimensions
- Ensure the image has sufficient resolution
- Try using the crop tool to better fit the available space

**Issue**: Colors don't update immediately
- Toggle between light and dark mode to refresh the theme
- Refresh the browser if changes aren't appearing
- Check network connectivity for upload issues

**Issue**: Unable to upload logos
- Check that the image format is supported (PNG recommended)
- Ensure file size is below the maximum limit
- Verify you have the appropriate permissions

**Issue**: Gradient preview doesn't match actual appearance
- Different screens may display colors differently
- Test on multiple devices if possible
- Adjust colors for better cross-device consistency

**Issue**: Logo upload shows error
- Check the error message in the notification
- Verify the image format and dimensions
- Try a different browser if the issue persists

---

For additional assistance with branding customization, please contact your system administrator.