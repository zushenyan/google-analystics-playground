const express = require("express");
const path    = require("path");

const PORT = process.env.PORT || 8888;

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

app.get("/page1", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/page1.html"));
});

app.get("/page2", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/page2.html"));
});

app.listen(PORT, () => {
  console.log(`start listening on port ${PORT}`);
});
