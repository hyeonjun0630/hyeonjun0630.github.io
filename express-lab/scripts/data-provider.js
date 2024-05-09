const path = require("path");
const fs = require("fs");

const file = process.env.DATAFILE;
const jsonPath = path.join(__dirname, "../data", file);
const jsonData = fs.readFileSync(jsonPath, "utf8");
// convert string data into JSON object
const stocks = JSON.parse(jsonData);

module.exports = {
  filename: file,
  data: stocks,
};
