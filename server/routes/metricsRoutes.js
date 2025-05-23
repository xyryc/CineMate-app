const express = require("express");
const router = express.Router();
const {
  getMetrics,
  createMetrics,
} = require("../controllers/metricsController");

router.get("/all", getMetrics);
router.post("/create", createMetrics);
router.put("/:id", updateMetrics)

module.exports = router;
