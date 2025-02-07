//// course-detail.js

document.addEventListener('DOMContentLoaded', function () {
  // Get course ID from URL parameters (example)
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get('id');

  // In a real application, you would fetch course data based on the ID
  // For now, we'll use placeholder data

  const courseData = {
    id: courseId,
    title: 'Web Development Bootcamp',
    description: 'Learn to build websites from scratch.',
    modules: [
      {
        title: 'Module 1: Introduction to HTML',
        lessons: ['Lesson 1.1: Basic HTML Structure', 'Lesson 1.2: HTML Tags and Attributes'],
      },
      {
        title: 'Module 2: CSS Styling',
        lessons: ['Lesson 2.1: CSS Selectors', 'Lesson 2.2: CSS Properties'],
      },
    ],
    reviews: [
      { author: 'John Doe', text: 'Great course! I learned a lot.' },
      { author: 'Jane Smith', text: 'The instructor was excellent and very knowledgeable.' },
    ],
    price: 99,
  };

  // Update the page content with course data
  document.querySelector('.course-header h1').textContent = courseData.title;
  document.querySelector('.course-header .description').textContent = courseData.description;

  const modulesSection = document.querySelector('.course-modules');
  modulesSection.innerHTML = '<h2>Course Modules</h2>'; // Clear existing content
  courseData.modules.forEach(module => {
    const moduleDiv = document.createElement('div');
    moduleDiv.classList.add('module');
    moduleDiv.innerHTML = `
              <h3>${module.title}</h3>
              <p>Overview of ${module.title}.</p>
              <ul class="lessons">
                  ${module.lessons.map(lesson => `<li>${lesson}</li>`).join('')}
              </ul>
          `;
    modulesSection.appendChild(moduleDiv);
  });

  const reviewsSection = document.querySelector('.student-reviews');
  reviewsSection.innerHTML = '<h2>Student Reviews</h2>'; // Clear existing content
  courseData.reviews.forEach(review => {
    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');
    reviewDiv.innerHTML = `
              <p>"${review.text}"</p>
              <p class="author">- ${review.author}</p>
          `;
    reviewsSection.appendChild(reviewDiv);
  });

  document.querySelector('.enroll-section .price').textContent = `Price: $${courseData.price}`;

  // Enroll button functionality (example)
  const enrollButton = document.querySelector('.enroll-section .btn');
  enrollButton.addEventListener('click', function () {
    alert('Enrolling in: ' + courseData.title);
    // In a real application, you would redirect to a payment or enrollment page
  });
});
