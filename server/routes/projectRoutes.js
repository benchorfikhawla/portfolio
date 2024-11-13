// routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Route pour obtenir tous les projets
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ date: -1 });  // Trie les projets par date, ou par un autre critère
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Route pour obtenir un projet par ID et les projets adjacents
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // Récupérer tous les projets et trier par date
    const projects = await Project.find().sort({ date: -1 });
    const currentProjectIndex = projects.findIndex((project) => project._id.toString() === id);

    if (currentProjectIndex === -1) return res.status(404).json({ error: 'Projet non trouvé' });

    // Récupérer le projet précédent et suivant
    const previousProject = projects[currentProjectIndex - 1] || null;
    const nextProject = projects[currentProjectIndex + 1] || null;

    // Renvoyer le projet actuel avec les ID des projets voisins
    const project = projects[currentProjectIndex];
    res.json({
      project,
      previousProjectId: previousProject ? previousProject._id : null,
      nextProjectId: nextProject ? nextProject._id : null,
    });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur lors de la récupération du projet' });
  }
});

// Route pour créer un nouveau projet
router.post('/', async (req, res) => {
  try {
    const { title, category, description, clientName, date, images,details, moreDetails } = req.body;
    const newProject = new Project({
      title,
      category,
      description,
      clientName,
      details,
      moreDetails,
      date,
      images
    });

    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création du projet' });
  }
});

module.exports = router;
