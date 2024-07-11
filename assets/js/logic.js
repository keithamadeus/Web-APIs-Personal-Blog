// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleButton = document.getElementById('toggle');
const mainElement = document.querySelector('main');
// TODO: Create functions to read and write from local storage
toggleButton.addEventListener('click', () => {
    // get current mode
    const currentMode = window.getComputedStyle(mainElement).getPropertyValue('--mode');
    // switch to opposite mode
    if (currentMode === 'light') {
        mainElement.style.setProperty('--mode', 'dark');
    } else {
        mainElement.style.setProperty('--mode', 'light');
    }
});
//code isn't working, need to figure out why.