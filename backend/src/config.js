const fs = require("fs");

const readFileSync = filename => fs.readFileSync(filename).toString("utf8");

module.exports = {
  port: process.env.PORT || 8080
};
