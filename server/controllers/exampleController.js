const Example = require("../models/Example");

exports.getExamples = async (req, res) => {
  try {
    const data = await Example.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createExample = async (req, res) => {
  try {
    const newItem = new Example({ title: req.body.title });
    const saved = await newItem.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
