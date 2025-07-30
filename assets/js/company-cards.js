// Company Cards Animation

document.addEventListener('DOMContentLoaded', function() {
  // Animate the company cards with a staggered effect
  const companyCards = document.querySelectorAll('.company-card');
  
  // Check if cards exist
  if (companyCards.length) {
    // Create intersection observer to trigger animations when in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add staggered animation with delay based on index
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 150); // 150ms delay between each card
          
          // Stop observing after animation
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });
    
    // Set initial styles and start observing
    companyCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(card);
    });
    
    // Add interaction effect for specialty list items
    const specialtyItems = document.querySelectorAll('.specialty-list li');
    specialtyItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.specialty-icon');
        if (icon) {
          icon.style.transform = 'scale(1.1)';
          icon.style.transition = 'transform 0.3s ease';
        }
      });
      
      item.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.specialty-icon');
        if (icon) {
          icon.style.transform = 'scale(1)';
        }
      });
    });
  }
});
