// TODO: Create a variable that selects the main element
const mainElement = document.querySelector('main');

// TODO: Create a function that builds an element and appends it to the DOM
function buildAndAppendElement(tagName, attributes, textContent, parentElement) {
    const element = document.createElement(tagName);
    if (attributes) {
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }
    if (textContent) {
        element.textContent = textContent;
    }
    parentElement.appendChild(element);
}

// TODO: Create a function that handles the case where there are no blog posts to display
function handleNoBlogPosts() {
    const message = "No blog posts to display.";
    const errorMessage = document.createElement("p");
    errorMessage.textContent = message;
    mainElement.appendChild(errorMessage);
}

// TODO: Create a function that reads from local storage and returns the data
function readFromLocalStorage() {
    const data = localStorage.getItem('blogPosts');
    return JSON.parse(data);
}

// TODO: Call the function to render the list of blog posts
const blogPosts = readFromLocalStorage();
if (blogPosts && blogPosts.length > 0) {
    blogPosts.forEach((post) => {
        buildAndAppendElement('div', { class: 'blog-post' }, post.title, mainElement);
        buildAndAppendElement('p', { class: 'blog-post-content' }, post.content, mainElement);
    });
} else {
    handleNoBlogPosts();
}
