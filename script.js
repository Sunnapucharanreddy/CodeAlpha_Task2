// script.js

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Simulate successful submission
  alert('Thank you for your message, Charan will get back to you soon!');
  this.reset();
});
