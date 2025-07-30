// Simple JavaScript to ensure map container displays correctly
document.addEventListener('DOMContentLoaded', function() {
  // Get the map container
  const mapContainer = document.querySelector('.map-container');
  const iframe = mapContainer?.querySelector('iframe');
  
  if (mapContainer && iframe) {
    // Ensure iframe is visible
    iframe.style.visibility = 'visible';
    
    // Add load event to iframe
    iframe.addEventListener('load', function() {
      // Remove any potential loading state
      mapContainer.classList.add('loaded');
    });
    
    // Fix for Safari and some mobile browsers
    setTimeout(function() {
      // Force repaint
      mapContainer.style.transform = 'translateZ(0)';
    }, 100);
  }
});
