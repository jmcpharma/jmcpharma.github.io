# Component Documentation

This document provides detailed information about the key components used in the JMC Group website.

## Header Component

The header component provides the main navigation for the website and features a WebStudy-style floating effect on scroll.

### Files
- CSS: `assets/css/components/header.css`
- Layout: `assets/css/layout/header.css`
- JavaScript: `assets/js/components/header-scroll.js`

### Features
- Fixed position at the top of the page
- Transforms into a floating header on scroll
- Rounded corners when floating
- Transparent background with blur effect
- Responsive design for all screen sizes

### Usage
```html
<header class="header">
  <div class="container">
    <nav class="navbar">
      <div class="logo">
        <a href="#"><img src="assets/images/jmc-logo.png" alt="JMC Group Logo"></a>
      </div>
      <div class="nav-menu">
        <ul class="nav-list">
          <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
          <!-- More nav items -->
        </ul>
      </div>
    </nav>
  </div>
</header>
```

## Wave Decorations

Wave decorations are used to create smooth transitions between sections.

### Files
- CSS: `assets/css/components/waves.css`

### Features
- Seamless connection between sections
- Responsive design that works on all screen sizes
- Support for both top and bottom waves

### Usage
```html
<div class="wave-container top-wave">
  <img src="assets/images/layered-waves.svg" alt="wave decoration" class="wave-img">
</div>
<section class="about" id="about">
  <!-- Section content -->
</section>
<div class="wave-container bottom-wave">
  <img src="assets/images/down-layered-waves.svg" alt="wave decoration" class="wave-img">
</div>
```

## Button Components

Buttons provide interactive elements for user actions.

### Files
- CSS: `assets/css/components/buttons.css`

### Types
1. **Primary Button**: Filled background with primary color
2. **Outline Button**: Transparent with border
3. **Button Sizes**: Small, Medium, Large

### Usage
```html
<!-- Primary button -->
<a href="#contact" class="btn btn-primary">Contact Us</a>

<!-- Outline button -->
<a href="#about" class="btn btn-outline">Learn More</a>

<!-- Button with icon -->
<button class="btn btn-primary btn-icon">
  <i class="icon-download"></i> Download
</button>
```

## Hero Section

The hero section is the main banner area at the top of the page.

### Files
- CSS: `assets/css/layout/hero.css`

### Features
- Full-height design
- Centered content
- Call-to-action buttons
- Animation layer for background effects

### Usage
```html
<section class="hero" id="home">
  <div class="container">
    <div class="hero-content">
      <h1 class="hero-title">Welcome to <span class="highlight">JMC Group</span></h1>
      <p class="hero-subtitle">Leading pharmaceutical distribution across India</p>
      <div class="hero-cta">
        <a href="#contact" class="btn btn-primary">Contact Us</a>
        <a href="#about" class="btn btn-outline">Learn More</a>
      </div>
    </div>
  </div>
  <div class="animation-layer">
    <!-- Animation elements -->
  </div>
</section>
```

## Contact Form

The contact form allows users to send messages directly from the website.

### Files
- CSS: `assets/css/layout/contact.css`
- JavaScript: `assets/js/components/contact-form.js`

### Features
- Form validation
- Success message
- Styled input fields
- Responsive layout

### Usage
```html
<form id="contact-form" class="contact-form">
  <div class="form-group">
    <label for="name" class="form-label">Name</label>
    <input type="text" id="name" class="form-control" required>
  </div>
  <div class="form-group">
    <label for="email" class="form-label">Email</label>
    <input type="email" id="email" class="form-control" required>
  </div>
  <div class="form-group">
    <label for="message" class="form-label">Message</label>
    <textarea id="message" class="form-control" rows="5" required></textarea>
  </div>
  <button type="submit" class="btn btn-primary form-submit">Send Message</button>
</form>
```
