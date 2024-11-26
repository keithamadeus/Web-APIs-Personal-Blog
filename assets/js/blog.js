// Function to build and append an element
function buildAndAppendElement(tag, attributes, textContent, parentElement) {
    const element = document.createElement(tag);
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    element.textContent = textContent;
    parentElement.appendChild(element);
}

// Function to handle the case where there are no blog posts to display
function handleNoBlogPosts() {
    const message = "No blog posts to display.";
    const errorMessage = document.createElement("p");
    errorMessage.textContent = message;
    mainElement.appendChild(errorMessage);
}

// Function to read from local storage and return the data
function readFromLocalStorage() {
    const data = localStorage.getItem('blogPosts');
    return JSON.parse(data);
}

// Call the function to render the list of blog posts
const mainElement = document.getElementById('blog-posts');
const blogPosts = readFromLocalStorage();
if (blogPosts && blogPosts.length > 0) {
    blogPosts.forEach((post) => {
        buildAndAppendElement('div', { class: 'blog-post' }, post.title, mainElement);
        buildAndAppendElement('p', { class: 'blog-post-content' }, post.content, mainElement);
        buildAndAppendElement('p', { class: 'blog-post-username' }, post.username, mainElement);
    });
} else {
    handleNoBlogPosts();
}

document.addEventListener('DOMContentLoaded', function() {
    const blogPostsContainer = document.getElementById('blog-posts');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    blogPosts.forEach(post => {
      const article = document.createElement('article');
      article.innerHTML = `
        <h2>${post.title}</h2>
        <blockquote>${post.quote}</blockquote>
        <p>${post.content}</p>
        <br/>
        <p><em>${post.username}</em></p>
      `;
      blogPostsContainer.appendChild(article);
    });

    // Add event listener for back button
    const backButton = document.getElementById('back-to-index');
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    } else {
        console.error('Back button not found');
    }
});