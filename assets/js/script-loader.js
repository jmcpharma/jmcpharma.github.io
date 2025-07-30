// Script loader for JMC website

// Array of script paths to load
const scripts = [
    '/assets/js/main.js',
    '/assets/js/header-effects.js',
    '/assets/js/mobile-menu.js',
    '/assets/js/wave-fix.js'
];

// Function to load scripts in sequence
function loadScripts(scriptPaths, index = 0) {
    if (index >= scriptPaths.length) return;
    
    const script = document.createElement('script');
    script.src = scriptPaths[index];
    script.onload = () => loadScripts(scriptPaths, index + 1);
    script.onerror = () => loadScripts(scriptPaths, index + 1);
    document.body.appendChild(script);
}

// Start loading scripts when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadScripts(scripts);
    
    // Force header scrolled state for testing (remove in production)
    // setTimeout(() => {
    //     const header = document.querySelector('.header');
    //     if (header) header.classList.add('scrolled');
    // }, 500);
});
