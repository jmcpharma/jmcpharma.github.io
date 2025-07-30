/**
 * Header scroll behavior component
 * Creates WebStudy-style floating header on scroll
 */
export function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  let lastScroll = 0;

  function updateHeaderState() {
    const currentScroll = window.pageYOffset;
    
    // Handle header visibility
    if (currentScroll > lastScroll && currentScroll > 150) {
      header.classList.add('header-hidden');
    } else {
      header.classList.remove('header-hidden');
    }
    
    // Add scrolled class for WebStudy-style floating header
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  }
  
  // Check initial state
  updateHeaderState();
  
  // Add event listener for scroll
  window.addEventListener('scroll', updateHeaderState);
}
