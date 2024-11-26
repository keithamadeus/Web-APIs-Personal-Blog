// Select form and error message elements
const form = document.querySelector('form');
const errorMessage = document.querySelector('#error');

// Handle form submission
function handleFormSubmission(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (!username || !title || !content) {
        errorMessage.textContent = 'Please fill out all fields';
        alert("All fields are required!");
        return;
    }

    const blogPost = {
        username,
        title,
        content,
        date: new Date().toISOString()
    };

    try {
        storeLocalStorage('blogData', blogPost);
        window.location.href = './blog.html'; // Changed from function call to direct assignment
    } catch (error) {
        console.error('Error saving to local storage', error);
        errorMessage.textContent = 'An error occurred. Please try again.';
    }
}

// Store data in local storage
function storeLocalStorage(key, newData) {
    let existingData = JSON.parse(localStorage.getItem(key)) || [];
    existingData.push(newData);
    localStorage.setItem(key, JSON.stringify(existingData));
}

// Add event listener for form submission
document.addEventListener('DOMContentLoaded', () => {
    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    } else {
        console.error('No form found');
    }
});