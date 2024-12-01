document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les données du formulaire
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(!email || !message) return;

    // Contenu de l'email
    const emailBody = `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name} ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
    `;

    // Envoyer l'email via SMTP.js
   // Envoyer l'email via SMTP.js
Email.send({
    Host: "ssl0.ovh.net", // Serveur SMTP OVH
    Port: 587, // Port SMTP pour TLS (ou 465 pour SSL)
    Username: "contact@quadragragui.com", // Identifiant SMTP (adresse e-mail complète)
    Password: "Qu@d123Badr", // Mot de passe SMTP
    To: "touyakmohammed7@gmail.com", // Adresse e-mail de destination
    From: email, // L'adresse expéditeur 
    Subject: `New message from ${name} ${surname}`,
    Body: emailBody, // Contenu de l'e-mail
})
    .then(() => {
        alert(`${name} Votre email envoyé avec succès !`);
        document.getElementById("contact-form").reset(); // Réinitialise le formulaire
    })
    .catch((error) => {
        console.error("Erreur SMTP : ", error);
        alert("Erreur lors de l'envoi de l'email : " + error);
    });

});
