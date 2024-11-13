const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Configurer le transporteur Nodemailer (par exemple avec Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'khawlabenchorfi@gmail.com',  // Remplacez par votre email
    pass: 'your-email-password',   // Remplacez par votre mot de passe
  },
});

// Route pour enregistrer un message de contact et envoyer un email
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Créer un nouveau message de contact dans MongoDB
  const newContact = new Contact({
    name,
    email,
    message,
  });

  try {
    // Sauvegarder dans MongoDB
    await newContact.save();

    // Configuration du mail
    const mailOptions = {
      from: email,
      to: 'khawlabenchorfi@gmail.com', 
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Envoyer l'email via Nodemailer
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: 'Error sending email', error });
      }
      res.status(200).json({ message: 'Message sent successfully!' });
    });
  } catch (error) {
    res.status(500).json({ message: 'Error saving message', error });
  }
});

module.exports = router;
