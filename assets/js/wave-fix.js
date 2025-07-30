/* Helper script to fix wave images with inline styles */
document.addEventListener('DOMContentLoaded', function() {
    // Fix all wave images with inline styles
    const waveImages = document.querySelectorAll('.wave-img, img[alt="wave decoration"], .wave-container img');
    
    waveImages.forEach(img => {
        // Add inline styles to override any problematic settings
        img.style.marginLeft = '0';
        img.style.left = '0';
        img.style.width = '100%';
        img.style.maxWidth = '100%';
        img.style.position = 'relative';
        img.style.transform = 'none';
    });
    
    // Apply specific fixes for mobile devices
    if (window.innerWidth <= 480) {
        const waveContainers = document.querySelectorAll('.wave-container.bottom-wave, .wave-container.top-wave');
        waveContainers.forEach(container => {
            container.style.overflow = 'hidden';
            container.style.maxWidth = '100%';
        });
    }
});
