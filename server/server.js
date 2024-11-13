const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const uri ="mongodb+srv://khawlabenchorfi:bU3VwMOYpeYbseew@cluster0.ojlpkxf.mongodb.net/protofile?retryWrites=true&w=majority&appName=Cluster0";
 

mongoose.connect(uri)
  .then(() => console.log("Connecté à MongoDB"))
  .catch((error) => console.error("Erreur de connexion MongoDB:", error));
require('dotenv').config();
// Middleware
app.use(cors());
app.use(express.json());

 
// Utilisation des routes de contact
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);
// Utilisation des routes de skills
const skillRoutes = require('./routes/skillRoutes');
app.use('/api/skills', skillRoutes);
// Utilisation des routes de service
const serviceRoutes = require('./routes/serviceRoutes');
app.use('/api/services', serviceRoutes);
// Utilisation des routes de education
const educationRoutes = require('./routes/educationRoutes');
app.use('/api/education', educationRoutes);
// Utilisation des routes de experience
const experienceRoutes = require('./routes/experienceRoutes');
app.use('/api/experience', experienceRoutes);
// Use user routes
const userRoutes = require('./routes/userRoutes');  
app.use('/api/users', userRoutes);
 // Use project routes
const projectsRoute = require('./routes/projectRoutes');
app.use('/api/projects', projectsRoute); 

// Route de test
app.get('/', (req, res) => {
  res.send('Bienvenue sur le backend de mon portfolio');
});

// Route pour envoyer un message depuis le formulaire de contact
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Ici tu peux ajouter une logique pour envoyer un email (par exemple avec nodemailer)

  // Pour l'instant, on simule une réponse.
  if (name && email && message) {
    return res.status(200).json({ success: true, message: 'Message envoyé avec succès!' });
  } else {
    return res.status(400).json({ success: false, message: 'Tous les champs sont requis.' });
  }
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Le serveur écoute sur http://localhost:${port}`);
});
