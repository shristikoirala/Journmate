
const express = require('express');
const router = express.Router();
console.log('✅ Inside destinations router');
const Destination = require('../models/Destination');


router.get('/', (req, res) => {
  console.log('GET /api/destinations hit');
  res.send('✅ Destinations route is working!');
});



// Add a new destination
router.post('/', async (req, res) => {
  const destination = new Destination({
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
  });

  try {
    const newDest = await destination.save();
    res.status(201).json(newDest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
