# JMC Group Website Migration Guide

This document outlines how to migrate from the old project structure to the new modular structure. The new structure follows best practices for web development and makes the codebase more maintainable and scalable.

## CSS Migration

### Old Structure
- Multiple CSS files with overlapping functionality
- No clear organization pattern
- Direct imports in HTML

### New Structure
- Modular CSS organized into directories:
  - `base/`: Reset, variables, typography
  - `components/`: Reusable UI components
  - `layout/`: Section-specific layouts
  - `utils/`: Helper classes, responsive utilities

### Migration Steps
1. Identify the purpose of each existing CSS file
2. Move rules to appropriate new files based on their purpose
3. Replace direct HTML imports with the unified CSS file:

```html
<!-- Before -->
<link rel="stylesheet" href="assets/css/main.css">
<link rel="stylesheet" href="assets/css/header-fixes.css">
<link rel="stylesheet" href="assets/css/wave-styles.css">

<!-- After -->
<link rel="stylesheet" href="assets/css/main.unified.css">
```

## JavaScript Migration

### Old Structure
- Multiple JS files with specific functionality
- Direct imports in HTML
- Global functions and variables

### New Structure
- Modular JS with imports/exports
- Organized into directories:
  - `components/`: Component-specific functionality
  - `utils/`: Helper functions

### Migration Steps
1. Identify the purpose of each existing JS file
2. Move functions to appropriate new files
3. Add export statements to make functions available
4. Update the main JS file to import and initialize all modules
5. Replace direct HTML imports:

```html
<!-- Before -->
<script src="assets/js/main.js"></script>
<script src="assets/js/mobile-menu.js"></script>

<!-- After -->
<script type="module" src="assets/js/main.modern.js"></script>
```

## Progressive Migration Approach

To minimize risk during migration:

1. Keep the old files during transition
2. Use both old and new files in HTML
3. Move functionality one component at a time
4. Test thoroughly after each migration step
5. Remove old files only when new structure is fully tested

## Best Practices Going Forward

1. Always add new components to the appropriate module
2. Use semantic names for files and functions
3. Comment your code thoroughly
4. Update documentation when making significant changes
5. Follow the established naming conventions:
   - Components: `component-name.js`
   - Utilities: `utility-name.js`
   - CSS follows the same pattern
