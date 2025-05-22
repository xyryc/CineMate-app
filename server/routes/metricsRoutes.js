const express = require("express");
const router = express.Router();
const {
  getMetrics,
  createMetrics,
} = require("../controllers/metricsController");

router.get("/", getMetrics);
router.post("/", createMetrics);

module.exports = router;
