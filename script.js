// script.js
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const hiBtn = document.getElementById('hi-btn');
    const mainContent = document.getElementById('main-content');

    // Show popup initially
    popup.classList.remove('hidden');

    // Add event listener to the button
    hiBtn.addEventListener('click', function() {
        // Hide popup
    popup.classList.add('hidden');
        // Show main content
        mainContent.classList.remove('hidden');
    });
});
