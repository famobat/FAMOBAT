// script.js

// Bootstrap form validation
(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        alert('Merci ! Votre message a été envoyé.');
        form.reset();
      }
      form.classList.add('was-validated');
    });
  });
})();
// smooth-scroll pour les ancres
document.querySelectorAll('a.nav-link').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document
      .querySelector(a.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
