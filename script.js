document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // 👈 bloque le rechargement de la page

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      alert(Merci ${name} ! Ton message a bien été envoyé 😊);
      form.reset();
    } else {
      alert("Veuillez remplir tous les champs avant d’envoyer !");
    }
  });
});