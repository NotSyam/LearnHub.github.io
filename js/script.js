// script.js

// Form Validation (Basic Example)
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false; // Form doesn't exist

  const inputs = form.querySelectorAll('input[required], textarea[required]');
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      alert('Please fill in all required fields.');
      return false;
    }
  }
  return true;
}

// Responsive Navigation (Mobile Menu Toggle)
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('nav .menu-icon');
  const navList = document.querySelector('nav ul');

  if (menuIcon && navList) {
    menuIcon.addEventListener('click', function () {
      navList.classList.toggle('show');
    });
  }
});
