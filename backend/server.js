const express = require("express");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/items", (req, res) => {
  res.json([
    { id: 1, name: "Temperature Sensor", value: 22.5 },
    { id: 2, name: "Humidity Sensor", value: 60 }
  ]);
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
