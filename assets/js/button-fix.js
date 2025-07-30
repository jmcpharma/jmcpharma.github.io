// Ultra-simple button fix for hero section
(function() {
  // Simple function to fix the buttons
  function fixHeroButtons() {
    // Remove any red borders from hero and buttons
    document.querySelectorAll('.hero, .hero-content, .hero-cta, .btn').forEach(element => {
      element.style.outline = 'none';
      element.style.borderColor = 'transparent';
    });
    
    // Fix outline button separately to preserve its border
    const outlineBtn = document.querySelector('.btn-outline');
    if (outlineBtn) {
      outlineBtn.style.outline = 'none';
      outlineBtn.style.border = '2px solid rgba(255, 255, 255, 0.8)';
    }
    
    // Make sure all layers allow events to pass through
    document.querySelectorAll('.hero::before, .hero::after, .hero .animation-layer').forEach(layer => {
      layer.style.pointerEvents = 'none';
    });
    
    // Force hero-cta to be above everything
    const heroCta = document.querySelector('.hero-cta');
    if (heroCta) {
      heroCta.style.position = 'relative';
      heroCta.style.zIndex = '99999';
      heroCta.style.pointerEvents = 'auto';
      heroCta.style.border = 'none';
      heroCta.style.outline = 'none';
    }
    
    // Get buttons and apply direct fixes
    const contactBtn = document.getElementById('contact-btn');
    const partnersBtn = document.getElementById('partners-btn');
    
    // Fix contact button
    if (contactBtn) {
      contactBtn.style.position = 'relative';
      contactBtn.style.zIndex = '99999';
      contactBtn.style.pointerEvents = 'auto';
      contactBtn.style.cursor = 'pointer';
      contactBtn.style.outline = 'none';
      
      // Direct onclick handler
      contactBtn.onclick = function(e) {
        e.preventDefault();
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        return false;
      };
      
      // Add hover effect
      contactBtn.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 15px 30px rgba(230, 57, 70, 0.4), 0 0 25px rgba(230, 57, 70, 0.2)';
      });
      
      contactBtn.addEventListener('mouseout', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
      });
    }
    
    // Fix partners button
    if (partnersBtn) {
      partnersBtn.style.position = 'relative';
      partnersBtn.style.zIndex = '99999';
      partnersBtn.style.pointerEvents = 'auto';
      partnersBtn.style.cursor = 'pointer';
      
      // Direct onclick handler
      partnersBtn.onclick = function(e) {
        e.preventDefault();
        document.getElementById('companies').scrollIntoView({behavior: 'smooth'});
        return false;
      };
      
      // Add hover effect
      partnersBtn.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.2)';
      });
      
      partnersBtn.addEventListener('mouseout', function() {
        this.style.transform = '';
        this.style.backgroundColor = '';
        this.style.boxShadow = '';
      });
    }
  }
  
  // Run on load and also after DOM content loaded
  window.addEventListener('load', fixHeroButtons);
  document.addEventListener('DOMContentLoaded', fixHeroButtons);
  
  // Run immediately
  fixHeroButtons();
  
  // Run again after a short delay to ensure it catches any dynamic changes
  setTimeout(fixHeroButtons, 500);
})();
