// Select main element and back button
let mainElement = document.querySelector('main');
const backButton = document.querySelector('.back-button');

// Function to create and append elements to the DOM
function createElement(tag, className, textContent, parent) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    if (parent) parent.appendChild(element);
    return element;
}

// Display message when no blog posts exist
function displayNoPosts() {
    const noPosts = createElement('div', 'no-posts', null, mainElement);
    createElement('h2', null, 'No Blog Posts Yet', noPosts);
    createElement('p', null, 'Be the first to create a blog post!', noPosts);
    const createPostLink = createElement('a', 'create-post-link', 'Create a Post', noPosts);
    createPostLink.href = './index.html';
}

// Render blog posts list
function renderBlogList() {
    if (!mainElement) {
        console.error('Main element not found');
        return;
    }

    mainElement.innerHTML = '';

    const blogPosts = JSON.parse(localStorage.getItem('blogData')) || [];
    blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (blogPosts.length === 0) {
        displayNoPosts();
    } else {
        blogPosts.forEach(post => {
            const article = createElement('article', 'blog-post', null, mainElement);
            createElement('h2', 'post-title', post.title, article);
            createElement('p', 'post-content', post.content, article);
            createElement('p', 'post-meta', `Posted by: ${post.userName} on ${new Date(post.date).toLocaleString()}`, article);
        });
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', renderBlogList);

if (backButton) {
    backButton.addEventListener('click', () => {
        window.location.href = './index.html';
    });
} else {
    console.error('Back button not found');
}