// TODO: Create a variable that selects the form element

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.


// document.addEventListener('DOMContentLoaded', function() {
//   // Select the form element
//   const formElement = document.getElementById('my-form');

//   // Function to handle form submission
//   function submissionHandling(formElement) {
//     formElement.addEventListener('submit', function(event) {
//       event.preventDefault();
      
//       // Get form data
//       const formData = new FormData(formElement);
//       const formDataObject = Object.fromEntries(formData.entries());
      
//       // Check for missing data
//       if (Object.values(formDataObject).some(value => value === '')) {
//         alert('Please complete the form.');
//         return;
//       }
      
//       // Store form data in local storage
//       let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
//       blogPosts.push(formDataObject);
//       localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
      
//       // Redirect to blog page
//       redirectPage();
//     });
//   }

//   // Function to redirect to the blog page
//   function redirectPage() {
//     window.location.href = 'blog.html';
//   }

//   // Add event listener to the form on submit
//   if (formElement) {
//     submissionHandling(formElement);
//   } else {
//     console.error('Form element not found');
//   }
// });