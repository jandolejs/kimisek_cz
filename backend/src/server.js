const express = require("express");

const app = express();

app.get("/", function(req, res, next) {
  res.send("Hi\n");
});

module.exports = app;
