# Coding Style Guide

This document outlines the coding style conventions for the JMC Group website project. Following these guidelines will ensure consistency across the codebase.

## HTML Guidelines

### Formatting
- Use 2 spaces for indentation
- Use lowercase for element names, attributes, and values
- Use double quotes for attribute values
- Use self-closing tags for void elements (`<img>`, `<br>`, etc.)

### Best Practices
- Use semantic HTML elements (`<header>`, `<section>`, `<article>`, etc.)
- Include appropriate ARIA attributes for accessibility
- Add alt text to all images
- Use proper heading hierarchy (h1 through h6)
- Keep the DOM structure as flat as possible

### Example
```html
<section class="about" id="about">
  <div class="container">
    <header class="section-header">
      <h2 class="section-title">About <span class="highlight">Us</span></h2>
      <p class="section-subtitle">Learn more about our company and mission</p>
    </header>
    <div class="about-content">
      <p>Content goes here...</p>
    </div>
  </div>
</section>
```

## CSS Guidelines

### Formatting
- Use 2 spaces for indentation
- Use lowercase for selectors, properties, and values
- Use hyphens for class names (`section-title`, not `sectionTitle`)
- Include a space before the opening brace
- Include a space after the colon in properties
- End all declarations with a semicolon
- Put each declaration on its own line

### Organization
- Group related properties together
- Follow a consistent property order:
  1. Positioning
  2. Box model
  3. Typography
  4. Visual styles
  5. Misc

### Best Practices
- Use CSS variables for colors, spacing, etc.
- Use classes instead of IDs for styling
- Use comments to explain complex styles
- Avoid using `!important`
- Minimize nesting selectors (max 3 levels)

### Example
```css
.feature-card {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 30px;
  border-radius: var(--border-radius);
  background-color: var(--white-color);
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-strong);
}
```

## JavaScript Guidelines

### Formatting
- Use 2 spaces for indentation
- Use semicolons at the end of statements
- Use single quotes for strings
- Add spaces after commas and around operators

### Best Practices
- Use ES6+ features (arrow functions, template literals, etc.)
- Use const and let instead of var
- Use descriptive variable and function names
- Comment complex logic
- Use modules to organize code
- Handle errors appropriately

### Example
```javascript
/**
 * Initialize the mobile menu component
 * @returns {void}
 */
export function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  
  if (!menuToggle || !navList) return;
  
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navList.classList.toggle('active');
  });
}
```

## File Organization

### CSS Files
- Base styles: `base/`
- Component styles: `components/`
- Layout styles: `layout/`
- Utility styles: `utils/`

### JavaScript Files
- Component functionality: `components/`
- Utility functions: `utils/`

### Naming Convention
- Use kebab-case for all filenames
- Group related files together
- Be descriptive but concise
