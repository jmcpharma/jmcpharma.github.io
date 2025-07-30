// WebStudy-style floating header effect - enhanced for large screens
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!header) return;
    
    // Throttle function to improve scroll performance
    function throttle(callback, delay) {
        let lastCall = 0;
        return function(...args) {
            const now = new Date().getTime();
            if (now - lastCall >= delay) {
                lastCall = now;
                callback(...args);
            }
        };
    }
    
    // Dynamically adjust scroll threshold based on screen size
    function getScrollThreshold() {
        // For very large screens, use a higher threshold
        if (window.innerWidth >= 3840) {
            return 120; // For 8K displays
        } else if (window.innerWidth >= 2560) {
            return 100; // For 4K displays
        } else if (window.innerWidth >= 1920) {
            return 90; // For 2K displays
        } else if (window.innerWidth >= 1440) {
            return 80; // For Laptop L screens
        } else if (window.innerWidth >= 1200) {
            return 70; // For regular laptops
        } else {
            return 60; // Default for smaller screens
        }
    }
    
    // Function to toggle header class based on scroll position
    function toggleHeaderClass() {
        const scrollThreshold = getScrollThreshold();
        
        // For smoother experience, add a slight delay on larger screens
        if (window.scrollY > scrollThreshold) {
            if (!header.classList.contains('scrolled')) {
                header.classList.add('scrolled');
                document.body.classList.add('header-scrolled');
                
                // Force a layout recalculation for smoother animation
                setTimeout(function() {
                    header.style.visibility = 'visible';
                }, 10);
            }
        } else {
            if (header.classList.contains('scrolled')) {
                header.classList.remove('scrolled');
                document.body.classList.remove('header-scrolled');
                
                // Force a layout recalculation for smoother animation
                setTimeout(function() {
                    header.style.visibility = 'visible';
                }, 10);
            }
        }
    }
    
    // Check initial scroll position
    toggleHeaderClass();
    
    // Add scrolled class when page is scrolled (throttled for performance)
    window.addEventListener('scroll', throttle(toggleHeaderClass, 50));
    
    // Handle resize events to ensure proper display on orientation changes
    window.addEventListener('resize', throttle(function() {
        // Recalculate and apply appropriate header state after resize
        toggleHeaderClass();
    }, 100));
    
    // Debug helper - uncomment to log screen size during development
    // window.addEventListener('resize', throttle(function() {
    //     console.log(`Screen width: ${window.innerWidth}px, Height: ${window.innerHeight}px`);
    // }, 100));
    
    // Uncomment for immediate testing of the scrolled state
    // setTimeout(() => { header.classList.add('scrolled'); document.body.classList.add('header-scrolled'); }, 500);
    
    // Mobile menu toggle functionality
    if (menuToggle && navMenu) {
        // Toggle mobile menu
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent scrolling when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 992) {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
        
        // Close menu when resizing to desktop view
        window.addEventListener('resize', throttle(function() {
            if (window.innerWidth > 992 && navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }, 100));
    }
});
