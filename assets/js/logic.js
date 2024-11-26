// Select toggle and body elements
const toggle = document.getElementById('toggle');
const body = document.body;

// Function to toggle dark/light mode
function toggleMode() {
    const img = document.querySelector('.toggle-button img');
    const currentMode = img.getAttribute('data-state');
    const newMode = currentMode === 'light' ? 'dark' : 'light';

    applyMode(newMode);
    localStorage.setItem('mode', newMode);
    img.setAttribute('data-state', newMode);
    img.src = newMode === 'light' ? './assets/images/sun_icon.png' : './assets/images/moon_icon.png';
}

// Function to apply mode styles
function applyMode(mode) {
    body.classList.toggle('dark-mode', mode === 'dark');
    body.classList.toggle('light-mode', mode === 'light');
}

// Read data from local storage
function readLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

// Store data in local storage
function storeLocalStorage(key, newData) {
    const data = readLocalStorage(key);
    data.push(newData);
    localStorage.setItem(key, JSON.stringify(data));
}

// Event listener for toggle button
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleMode);

        const savedMode = localStorage.getItem('mode') || 'light';
        applyMode(savedMode);
        const img = toggleButton.querySelector('img');
        img.setAttribute('data-state', savedMode);
        img.src = savedMode === 'light' ? './assets/images/sun_icon.png' : './assets/images/moon_icon.png';
    } else {
        console.error('No toggle button found');
    }
});

// Log data from local storage
console.log('data', readLocalStorage('blogData'));

// Redirect functions
const redirectIndex = url => location.assign(url);
const redirectBlog = url => {
    location.assign(url);
    console.log('redirecting to blog');
};

// Example redirect URLs
let redirectURL = './index.html';
let redirectBlogURL = './blog.html';