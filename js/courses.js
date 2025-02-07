// courses.js

document.addEventListener('DOMContentLoaded', function () {
  const coursesContainer = document.getElementById('courses-container');
  const categoryFilter = document.getElementById('category');
  const sortFilter = document.getElementById('sort');

  // Sample course data (replace with your actual data source)
  const coursesData = [
    { id: 1, title: 'Web Development Basics', category: 'development', description: 'Learn the basics of HTML, CSS, and JavaScript.', imageUrl: 'image/g2.gif' },
    { id: 2, title: 'Graphic Design Fundamentals', category: 'design', description: 'Master the principles of graphic design.', imageUrl: 'image/g2.gif' },
    { id: 3, title: 'Social Media Marketing', category: 'marketing', description: 'Learn how to create effective social media campaigns.', imageUrl: 'image/g2.gif' },
    { id: 4, title: 'Advanced JavaScript', category: 'development', description: 'Take your JavaScript skills to the next level.', imageUrl: 'image/g2.gif' },
    { id: 5, title: 'UI/UX Design', category: 'design', description: 'Create user-friendly and visually appealing interfaces.', imageUrl: 'image/g2.gif' },
    { id: 6, title: 'Content Marketing Strategy', category: 'marketing', description: 'Develop a winning content marketing strategy.', imageUrl: 'image/g2.gif' },
  ];

  // Function to generate course cards
  function generateCourseCard(course) {
  return `
        <div class="course-card">
            <img src="${course.imageUrl}" alt="${course.title}" style="width: 100px; height: 100px; object-fit: cover; margin: auto; display: block;">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <a href="course-detail.html?id=${course.id}" class="btn">View Details</a>
        </div>
    `;
}


  // Function to display courses based on filters
  function displayCourses(courses) {
    coursesContainer.innerHTML = ''; // Clear existing courses
    if (courses.length === 0) {
      coursesContainer.innerHTML = '<p>No courses found.</p>';
      return;
    }
    courses.forEach(course => {
      coursesContainer.innerHTML += generateCourseCard(course);
    });
  }

  // Function to filter courses by category
  function filterCourses(category) {
    if (category === 'all') {
      return coursesData;
    }
    return coursesData.filter(course => course.category === category);
  }

  // Function to sort courses (basic example, can be expanded)
  function sortCourses(courses, sortBy) {
    if (sortBy === 'popular') {
      // In a real application, you would sort by a popularity metric
      return courses;
    } else if (sortBy === 'newest') {
      // In a real application, you would sort by a date added metric
      return courses;
    }
    return courses;
  }

  // Event listeners for filter and sort changes
  categoryFilter.addEventListener('change', function () {
    const selectedCategory = categoryFilter.value;
    let filteredCourses = filterCourses(selectedCategory);
    const selectedSort = sortFilter.value;
    filteredCourses = sortCourses(filteredCourses, selectedSort);
    displayCourses(filteredCourses);
  });

  sortFilter.addEventListener('change', function () {
    const selectedCategory = categoryFilter.value;
    let filteredCourses = filterCourses(selectedCategory);
    const selectedSort = sortFilter.value;
    filteredCourses = sortCourses(filteredCourses, selectedSort);
    displayCourses(filteredCourses);
  });

  // Initial display of all courses
  displayCourses(coursesData);
});
