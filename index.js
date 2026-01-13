const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

console.log("NEW VERSION DEPLOYED - HEALTH ROUTE ADDED");

app.get("/", (req, res) => {
  res.send("Reward backend is running");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
