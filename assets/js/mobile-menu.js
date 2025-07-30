// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navList.classList.toggle('active');
    });
  }
  
  // Close menu when clicking a nav link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      navList.classList.remove('active');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isNavList = event.target.closest('.nav-list');
    const isMenuToggle = event.target.closest('.menu-toggle');
    
    if (!isNavList && !isMenuToggle && navList.classList.contains('active')) {
      menuToggle.classList.remove('active');
      navList.classList.remove('active');
    }
  });
});
