
const express = require('express');
const Education = require('../models/Education');
const router = express.Router();

// Get all education records
router.get('/', async (req, res) => {
  try {
    const education = await Education.find();
    res.status(200).json(education);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching education', error });
  }
});

// Add new education
router.post('/', async (req, res) => {
  const { title, institution, startDate, endDate, description, certificateImage } = req.body;

  try {
    const newEducation = new Education({
      title,
      institution,
      startDate,
      endDate,
      description,
      certificateImage,
    });
    await newEducation.save();
    res.status(201).json(newEducation);
  } catch (error) {
    res.status(400).json({ message: 'Error adding education', error });
  }
});

// Update education
router.put('/:id', async (req, res) => {
  const { title, institution, startDate, endDate, description, certificateImage } = req.body;

  try {
    const updatedEducation = await Education.findByIdAndUpdate(
      req.params.id,
      { title, institution, startDate, endDate, description, certificateImage },
      { new: true }
    );
    if (!updatedEducation) {
      return res.status(404).json({ message: 'Education not found' });
    }
    res.status(200).json(updatedEducation);
  } catch (error) {
    res.status(400).json({ message: 'Error updating education', error });
  }
});

// Delete education
router.delete('/:id', async (req, res) => {
  try {
    const deletedEducation = await Education.findByIdAndDelete(req.params.id);
    if (!deletedEducation) {
      return res.status(404).json({ message: 'Education not found' });
    }
    res.status(200).json({ message: 'Education deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting education', error });
  }
});

module.exports = router;
