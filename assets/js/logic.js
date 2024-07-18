// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
// const toggleButton = document.getElementById('toggle');
// const mainElement = document.querySelector('main');
// // TODO: Create functions to read and write from local storage
// toggleButton.addEventListener('click', () => {
//     // get current mode
//     const currentMode = window.getComputedStyle(mainElement).getPropertyValue('--mode');
//     // switch to opposite mode
//     if (currentMode === 'light') {
//         mainElement.style.setProperty('--mode', 'dark');
//     } else {
//         mainElement.style.setProperty('--mode', 'light');
//     }
// });

// Need to add local stroage to make the dark mode change. 
// if statment, remove body.classList else, then add - light mode
// add event listener when the button is clicked

const body = document.body;
const modeToggle = document.getElementById('toggle');
const isDarkMode = localStorage.getItem('darkMode') === 'true';

if (isDarkMode) {
    body.classList.add('dark-mode');
}

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
});

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Please, fill out every section of the form."); {
            // alert("Name must be filled out");
            return false;
        }
    }
}