// dashboard.js

document.addEventListener('DOMContentLoaded', function () {
  // Example: Dynamically update course progress (replace with actual data)
  const courseCards = document.querySelectorAll('.course-card');

  courseCards.forEach(card => {
    const progressBar = card.querySelector('.progress');
    const progressValue = parseInt(card.querySelector('p').textContent.replace('Progress: ', '').replace('%', ''));

    progressBar.style.width = progressValue + '%';
  });

  // Example: Fetch and display upcoming deadlines (replace with actual data)
  const upcomingDeadlinesList = document.querySelector('.upcoming-deadlines ul');
  const deadlinesData = [
    { title: 'Assignment 2', dueDate: 'February 28, 2025' },
    { title: 'Quiz 2', dueDate: 'March 5, 2025' },
  ];

  deadlinesData.forEach(deadline => {
    const listItem = document.createElement('li');
    listItem.textContent = `${deadline.title} - Due: ${deadline.dueDate}`;
    upcomingDeadlinesList.appendChild(listItem);
  });
});
