const mongoose = require("mongoose");

const MetricsSchema = new mongoose.Schema({
  searchTerm: { type: String, required: true },
  count: { type: Number, default: 0 },
  poster_url: { type: String, required: true },
  movie_id: { type: Number, required: true },
  title: { type: String, required: true },
});

module.exports = mongoose.model("Metrics", MetricsSchema);
