// TODO: Create a variable that selects the form element
const formElement = document.querySelector('form');
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.
const handleFormSubmit = function (event) {
  event.preventDefault();
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#content').value;
  if (!title || !content) {
    alert('Please fill out all fields.');
    return;
  }
  const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  posts.push({ title, content });
  localStorage.setItem('blogPosts', JSON.stringify(posts));
  redirectPage('blog.html');
};

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formElement.addEventListener('submit', handleFormSubmit);
