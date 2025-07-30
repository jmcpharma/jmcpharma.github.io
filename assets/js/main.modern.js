/**
 * Main JavaScript file for JMC Group website
 * Initializes and coordinates all JavaScript functionality
 */

// Import components
import { initHeaderScroll } from './components/header-scroll.js';
import { initMobileMenu } from './components/mobile-menu.js';
import { initContactForm } from './components/contact-form.js';
import { initSmoothScrolling } from './utils/smooth-scroll.js';
import { updateCopyrightYear } from './utils/dom-utils.js';

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize core functionality
  initHeaderScroll();
  initSmoothScrolling();
  initContactForm();
  updateCopyrightYear();
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Log initialization complete
  console.log('JMC Group website initialized successfully');
});
