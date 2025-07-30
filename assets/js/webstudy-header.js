// WebStudy-style header scroll effect
// Simple and direct implementation

document.addEventListener('DOMContentLoaded', function() {
    // Get the header element
    const header = document.querySelector('.header');
    if (!header) return;
    
    // Define the scroll threshold
    const scrollThreshold = 100;
    
    // Function to toggle header class based on scroll position
    function toggleHeaderClass() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Check initial scroll position
    toggleHeaderClass();
    
    // Listen for scroll events
    window.addEventListener('scroll', toggleHeaderClass);
});
