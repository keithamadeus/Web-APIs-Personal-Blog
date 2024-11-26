document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle the light/dark mode
    function toggleMode() {
        // Get the current mode from local storage
        const currentMode = localStorage.getItem('mode');

        // Check if the current mode is 'dark'
        if (currentMode === 'dark') {
            // If it is 'dark', switch to 'light'
            document.body.classList.remove('dark-mode');
            localStorage.setItem('mode', 'light');
        } else {
            // If it is 'light', switch to 'dark'
            document.body.classList.add('dark-mode');
            localStorage.setItem('mode', 'dark');
        }
    }

    // Function to initialize the mode based on the value in local storage
    function initializeMode() {
        // Get the current mode from local storage
        const currentMode = localStorage.getItem('mode');

        // Check if the current mode is 'dark'
        if (currentMode === 'dark') {
            // If it is 'dark', apply the 'dark-mode' class to the body
            document.body.classList.add('dark-mode');
        }
    }

    // Call the initializeMode function to set the initial mode
    initializeMode();

    // Add event listener to toggle the mode when the button is clicked
    const toggleButton = document.querySelector('.toggle-button');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleMode);
    } else {
        console.error('Toggle button not found');
    }

    // Function to read from local storage
    function readFromLocalStorage(key) {
        return localStorage.getItem(key);
    }

    // Function to write to local storage
    function writeToLocalStorage(key, value) {
        localStorage.setItem(key, value);
    }
});
