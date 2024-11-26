// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

// TODO: Create functions to read and write from local storage
// Function to write to local storage
function writeToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

// Function to read from local storage
function readFromLocalStorage(key) {
    return localStorage.getItem(key);
}

// Function to toggle light/dark mode
function toggleMode() {
    const body = document.body;
    const circle = document.querySelector('.circle');
    const currentMode = readFromLocalStorage('mode') || 'light';

    if (currentMode === 'light') {
        body.classList.add('dark-mode');
        circle.classList.add('dark-mode');
        writeToLocalStorage('mode', 'dark');
    } else {
        body.classList.remove('dark-mode');
        circle.classList.remove('dark-mode');
        writeToLocalStorage('mode', 'light');
    }
}

// Event listener for the toggle button
document.querySelector('.toggle-button').addEventListener('click', toggleMode);

// Initialize mode on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedMode = readFromLocalStorage('mode') || 'light';
    if (savedMode === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('.circle').classList.add('dark-mode');
    }
});
