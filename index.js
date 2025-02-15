// index.js
// JavaScript code can be added here for interactivity, animations, etc.

// Example: Smooth scrolling with JavaScript (alternative to CSS scroll-behavior)

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default jump behavior

        const targetId = this.getAttribute('href').substring(1); // Get target section ID
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth' // Smooth scrolling
        });
    });
});

// Add any other JavaScript functionality as needed
document.addEventListener('DOMContentLoaded', (event) => {
    const backgroundImageContainer = document.querySelector('.background-image-container');
    const section1 = document.getElementById('section1');

    function updateBackgroundOpacity() {
        if (window.pageYOffset === 0) { // Check if at top
            backgroundImageContainer.style.opacity = 1; // Initial Opacity
        } else {
            backgroundImageContainer.style.opacity = 0.5; // Darker Opacity on Scroll
        }
    }

    // Set initial opacity on load
    updateBackgroundOpacity();

    window.addEventListener('scroll', updateBackgroundOpacity);
});