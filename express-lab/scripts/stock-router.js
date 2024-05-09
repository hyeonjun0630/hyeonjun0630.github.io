// error messages need to be returned in JSON format
const jsonMessage = (msg) => {
  return { message: msg };
};

/* Module for handling specific requests/routes for stock data */
const provider = require("./data-provider.js");
const stocks = provider.data;
// return all the stocks when a root request arrives
const handleAllStocks = (app) => {
  // define the API routes
  // return all the stocks when a root request arrives
  app.get("/", (req, resp) => {
    resp.json(stocks);
  });
};

// return just the requested stock
const handleSingleSymbol = (app) => {
  app.get("/stock/:symbol", (req, resp) => {
    // change user supplied symbol to upper case
    const symbolToFind = req.params.symbol.toUpperCase();
    // search the array of objects for a match
    const matches = stocks.filter((obj) => symbolToFind === obj.symbol);

    // return the matching stock
    if (matches.length > 0) {
      resp.json(matches);
    } else {
      resp.json(jsonMessage(`Symbol ${symbolToFind} not found`));
    }

    // return the matching stock
    resp.json(matches);
  });
};

// return all the stocks whose name contains the supplied text
const handleNameSearch = (app) => {
  // return all the stocks whose name contains the supplied text
  // substring이 들어가는 모든것 출력
  app.get("/stock/name/:substring", (req, resp) => {
    // change user supplied substring to lower case
    const substring = req.params.substring.toLowerCase();
    // search the array of objects for a match
    const matches = stocks.filter((obj) =>
      obj.name.toLowerCase().includes(substring)
    );

    // return the matching stocks
    if (matches.length > 0) {
      resp.json(matches);
    } else {
      resp.json(jsonMessage(`No symbol matches found for ${substring}`));
    }

    // return the matching stocks
    resp.json(matches);
  });
};

module.exports = {
  handleAllStocks,
  handleSingleSymbol,
  handleNameSearch,
};
