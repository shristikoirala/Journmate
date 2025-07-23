const Destination = require('../../models/Destination');

exports.createDestination = async (req, res) => {
  const dest = new Destination(req.body);
  await dest.save();
  res.status(201).json(dest);
};

exports.updateDestination = async (req, res) => {
  const dest = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(dest);
};

exports.deleteDestination = async (req, res) => {
  await Destination.findByIdAndDelete(req.params.id);
  res.json({ message: 'Destination deleted' });
};
