const express = require("express");
const path    = require("path");

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

app.listen(8888, () => {
  console.log(`start listening on port 8888`);
});
