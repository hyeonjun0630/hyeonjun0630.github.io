const fs = require("fs");
const path = require("path");
const express = require("express");

const file = "stocks-complete.json";
const jsonPath = path.join(__dirname, "data", file);
const jsonData = fs.readFileSync(jsonPath, "utf8");
const stocks = JSON.parse(jsonData);

const app = express();

app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/stock/name/:substring", (req, resp) => {
  // change user supplied substring to lower case
  const substring = req.params.substring.toLowerCase();
  // search the array of objects for a match
  const matches = stocks.filter((obj) =>
    obj.name.toLowerCase().includes(substring)
  );
  // return the matching stocks
  resp.json(matches);
});

// Use express to listen to port
let port = 8080;
app.listen(port, () => {
  console.log("Server running at port= " + port);
});
