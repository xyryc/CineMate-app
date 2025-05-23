require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

const port = process.env.PORT || 9000;
const app = express();

app.use(express.json());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const db = client.db("CineMate");
    const metricsCollection = db.collection("metrics");

    // get all metrics
    app.get("/metrics", async (req, res) => {
      const result = await metricsCollection.find().toArray();
      res.send(result);
    });

    // save metrics
    app.post("/metrics", async (req, res) => {
      const metricsInfo = req.body;
      const result = await metricsCollection.insertOne(metricsInfo);
      res.send(result);
    });
    
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(port, () => {
  console.log(`CineMate server running on port ${port}`);
});
