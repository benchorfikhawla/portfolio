const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');  
const router = express.Router();
const { protect } = require('../middleware/auth');  
const jwt = require('jsonwebtoken');

// Route to register a new user
router.post('/register', async (req, res) => {
  const { name, profession, description, bio,biohome, image, imageprofile, email, tel, password } = req.body;

  if (!name || !profession || !description || !bio || !biohome || !image || !imageprofile || !email || !password) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists!' });
    }

    const newUser = new User({
      name,
      profession,
      description,
      bio,
      biohome,
      image,
      imageprofile,
      email,
      tel,
      password,
    });

    await newUser.save();
    return res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Server error, please try again later.' });
  }
});

// Route to login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required!' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password!' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password!' });
    }

    // Génère un token JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Retourne le token au frontend
    return res.status(200).json({ message: 'Login successful!', token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error, please try again later.' });
  }
});

// Route to get user profile by email (you could also use user ID)
router.get('/profile', async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ message: 'Email is required to fetch profile.' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }

    const { password, ...userProfile } = user._doc; // Omit password from the response
    return res.status(200).json(userProfile);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error retrieving user profile.' });
  }
});

// Route pour récupérer tous les utilisateurs
router.get('/', async (req, res) => {
    try {
      const users = await User.find(); // Utilisation de "users" pour récupérer tous les utilisateurs
      return res.status(200).json(users); // Envoyer la réponse avec la variable "users"
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erreur lors de la récupération des profils.' });
    }
  });
  
module.exports = router;
