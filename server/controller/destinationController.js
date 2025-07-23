const Destination = require('../models/Destination');

// Get all destinations
exports.getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new destination
exports.addDestination = async (req, res) => {
  const destination = new Destination({
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
  });

  try {
    const newDestination = await destination.save();
    res.status(201).json(newDestination);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

