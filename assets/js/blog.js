// Create a variable that selects the main element
const mainElement = document.querySelector('main');

// Create a function that builds an element and appends it to the DOM
function createAndAppendElement(tag, content, parent) {
    const element = document.createElement(tag);
    element.textContent = content;
    parent.appendChild(element);
}

// Create a function that handles the case where there are no blog posts to display
function handleNoPosts() {
    createAndAppendElement('p', 'No blog posts available.', mainElement);
}

// Create a function that reads from local storage and returns the data
function getPostsFromLocalStorage() {
    const posts = localStorage.getItem('blogPosts');
    return posts ? JSON.parse(posts) : [];
}

// Call the function to render the list of blog posts
function renderPosts() {
    const posts = getPostsFromLocalStorage();
    if (posts.length === 0) {
        handleNoPosts();
    } else {
        posts.forEach(post => {
            createAndAppendElement('h2', post.title, mainElement);
            createAndAppendElement('p', post.content, mainElement);
        });
    }
}

// Initial call to render the list of blog posts
renderPosts();
