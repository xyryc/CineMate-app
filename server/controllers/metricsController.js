const Metrics = require("../models/Metrics");

exports.getMetrics = async (req, res) => {
  try {
    const data = await Metrics.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createMetrics = async (req, res) => {
  try {
    const { searchTerm, count, poster_url, movie_id, title } = req.body;

    if (!searchTerm || !count || !poster_url || !movie_id || !title) {
      res.status(400).send({
        status: 400,
        message: "Please provide necessary data.",
      });

      return;
    }

    const document = {
      searchTerm,
      count,
      poster_url,
      movie_id,
      title,
    };

    const newItem = new Metrics(document);
    const saved = await newItem.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
