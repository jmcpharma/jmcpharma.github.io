// Simple hero section animations

document.addEventListener('DOMContentLoaded', function() {
  // Add a class to trigger animations after the page loads
  const heroSection = document.querySelector('.hero-simple');
  const heroContent = document.querySelector('.hero-content');
  const floatingElement = document.querySelector('.floating-element');
  
  // Create red accent element that follows cursor
  const redAccent = document.createElement('div');
  redAccent.className = 'red-accent';
  if (heroSection) {
    heroSection.appendChild(redAccent);
  }
  
  if (heroSection && heroContent) {
    // Use requestAnimationFrame for smoother animation rendering
    requestAnimationFrame(() => {
      heroSection.classList.add('loaded');
      heroContent.classList.add('loaded');
    });
    
    // Create a subtle parallax effect when scrolling
    window.addEventListener('scroll', function() {
      const scrolled = window.scrollY;
      if (scrolled < 600) {
        heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
        heroContent.style.opacity = 1 - (scrolled * 0.002);
        
        // Move floating element slightly faster for parallax effect
        if (floatingElement) {
          floatingElement.style.transform = `translate(-50%, -50%) translateY(${scrolled * 0.15}px)`;
        }
      }
    });
    
    // Add interactive effect on mouse movement
    if (floatingElement) {
      heroSection.addEventListener('mousemove', function(e) {
        const mouseX = (e.clientX / window.innerWidth) - 0.5;
        const mouseY = (e.clientY / window.innerHeight) - 0.5;
        
        // Calculate distance from center for color intensity
        const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
        
        // Apply subtle movement to the floating element
        floatingElement.style.transform = `translate(calc(-50% + ${mouseX * 40}px), calc(-50% + ${mouseY * 40}px))`;
        
        // Adjust redness based on mouse position (more pronounced red)
        const redIntensity = Math.min(0.4 + distance * 0.5, 0.7);
        const blurAmount = 40 + (distance * 20);
        
        // Apply enhanced red effect with multi-layered shadows
        floatingElement.style.boxShadow = `
          0 0 120px rgba(230, 57, 70, ${redIntensity}), 
          inset 0 0 80px rgba(230, 57, 70, ${redIntensity * 0.8}),
          0 0 60px rgba(255, 100, 100, ${redIntensity * 0.4})
        `;
        
        // Adjust the filter blur based on movement
        floatingElement.style.filter = `blur(${Math.max(30, Math.min(blurAmount, 60))}px) saturate(${1 + distance * 0.3})`;
        
        // Enhanced red gradient background
        floatingElement.style.background = `linear-gradient(
          ${135 + mouseX * 30}deg, 
          rgba(255, 255, 255, 0.8), 
          rgba(255, ${220 - distance * 50}, ${220 - distance * 80}, ${0.6 + distance * 0.2}), 
          rgba(255, ${180 - distance * 70}, ${180 - distance * 100}, ${0.4 + distance * 0.3})
        )`;
        
        // Move and show the red accent following cursor
        if (redAccent) {
          // Get actual position in hero section
          const rect = heroSection.getBoundingClientRect();
          const cursorX = e.clientX - rect.left;
          const cursorY = e.clientY - rect.top;
          
          // Position accent with slight lag for smooth effect
          redAccent.style.transform = `translate(${cursorX - 150}px, ${cursorY - 150}px)`;
          redAccent.style.opacity = Math.min(0.6, 0.2 + distance * 0.7);
          
          // Adjust intensity based on movement speed (using a little trick for detecting motion)
          if (!redAccent.lastX) {
            redAccent.lastX = cursorX;
            redAccent.lastY = cursorY;
          }
          
          const moveX = Math.abs(cursorX - redAccent.lastX);
          const moveY = Math.abs(cursorY - redAccent.lastY);
          const moveSpeed = Math.min(1, (moveX + moveY) / 30);
          
          redAccent.style.filter = `blur(${50 + moveSpeed * 20}px) saturate(${1 + moveSpeed})`;
          redAccent.lastX = cursorX;
          redAccent.lastY = cursorY;
        }
      });
      
      // Reset position and color when mouse leaves
      heroSection.addEventListener('mouseleave', function() {
        floatingElement.style.transform = 'translate(-50%, -50%)';
        floatingElement.style.boxShadow = '0 0 120px rgba(230, 57, 70, 0.3), inset 0 0 80px rgba(230, 57, 70, 0.2)';
        floatingElement.style.filter = 'blur(40px) saturate(1)';
        floatingElement.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 220, 220, 0.6), rgba(255, 180, 180, 0.4), rgba(255, 150, 150, 0.3))';
        
        // Hide red accent when mouse leaves
        if (redAccent) {
          redAccent.style.opacity = 0;
        }
      });
    }
  }
  
  // Handle smooth scrolling for hero buttons
  const heroButtons = document.querySelectorAll('.hero-buttons .btn');
  heroButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});
