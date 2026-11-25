const form = document.getElementById('newsletter-form');
const status = document.getElementById('newsletter-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'Inscrição confirmada!';
});
