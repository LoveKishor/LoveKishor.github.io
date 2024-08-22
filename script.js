document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const hiBtn = document.getElementById('hi-btn');
    const mainContainer = document.querySelector('.main-container'); // Correct selector for main content

    // Ensure the main container is hidden initially
    mainContainer.classList.add('hidden');

    // Show popup initially
    popup.classList.remove('hidden');

    // Add event listener to the button
    hiBtn.addEventListener('click', function() {
        // Hide popup
        popup.classList.add('hidden');
        // Show main content
        mainContainer.classList.remove('hidden');
    });

    // Toggle the visibility of top-right navigation links on small screens
    document.querySelector('.top-right-nav').addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

