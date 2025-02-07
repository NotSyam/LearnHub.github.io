// contact.js

document.addEventListener('DOMContentLoaded', function () {
  // Form Validation
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      if (!validateContactForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
      } else {
        alert('Message sent!'); // Replace with actual submission logic
        contactForm.reset();
      }
    });
  }

  function validateContactForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      alert('Please fill in all fields.');
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert('Please enter a valid email address.');
      return false;
    }

    return true;
  }

  // FAQ Toggle Functionality
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', function () {
      item.classList.toggle('active');
    });
  });
});
