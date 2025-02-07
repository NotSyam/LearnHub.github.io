// home.js

document.addEventListener('DOMContentLoaded', function () {
  // Search Functionality (Basic)
  const searchBar = document.querySelector('.search-bar input[type="text"]');
  const searchButton = document.querySelector('.search-bar button');

  if (searchButton && searchBar) {
    searchButton.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent form submission
      const searchTerm = searchBar.value.trim();
      if (searchTerm) {
        // In a real application, you would redirect to a search results page
        alert('Searching for: ' + searchTerm);
      } else {
        alert('Please enter a search term.');
      }
    });
  }

  // Newsletter Form Submission (Basic)
  const newsletterForm = document.getElementById('newsletter-form');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent default form submission
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (email) {
        // In a real application, you would send the email to a server
        alert('Subscribing with email: ' + email);
        emailInput.value = ''; // Clear the input
      } else {
        alert('Please enter your email address.');
      }
    });
  }
});
// JavaScript Document