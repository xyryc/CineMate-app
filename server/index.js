const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const metricsRoutes = require("./routes/metricsRoutes");
const logger = require("./middleware/logger");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api/v1/metrics", metricsRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
