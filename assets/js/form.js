document.addEventListener('DOMContentLoaded', function() {
  // Select the form element
  const formElement = document.getElementById('my-form');

  // Function to handle form submission
  function submissionHandling(formElement) {
    formElement.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get form data
      const formData = new FormData(formElement);
      const formDataObject = Object.fromEntries(formData.entries());
      
      // Check for missing data
      if (Object.values(formDataObject).some(value => value === '')) {
        alert('Please fill in all fields');
        return;
      }
      
      // Store form data in local storage
      let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
      blogPosts.push(formDataObject);
      localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
      
      // Redirect to blog page
      redirectPage();
    });
  }

  // Function to redirect to the blog page
  function redirectPage() {
    window.location.href = 'blog.html';
  }

  // Add event listener to the form on submit
  if (formElement) {
    submissionHandling(formElement);
  } else {
    console.error('Form element not found');
  }
});