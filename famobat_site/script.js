// script.js

// Quand le formulaire est soumis
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêcher l'envoi classique

        alert('Merci ! Votre message a été envoyé.');

        form.reset(); // Réinitialiser le formulaire
    });
});
