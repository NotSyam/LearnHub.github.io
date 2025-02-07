// about.js

document.addEventListener('DOMContentLoaded', function () {
  // Example: Add interactivity to team member profiles (optional)
  const teamMembers = document.querySelectorAll('.team-member');

  teamMembers.forEach(member => {
    member.addEventListener('click', function () {
      alert('You clicked on: ' + member.querySelector('h3').textContent);
      // In a real application, you could show a detailed bio in a modal
    });
  });
});
