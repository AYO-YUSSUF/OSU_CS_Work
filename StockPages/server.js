'use strict';

const PORT = 3000;

// The variable stocks has the same value as the variable stocks in the file 'stocks.js'
const stocks = require('./stocks.js').stocks;

const express = require("express");
const app = express();


app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
// Note: Don't add or change anything above this line.

// Add your code here

// This runs when someone uses the Stock Listing page (listing.html) and places an order for a stock
app.post("/stockOrder", (req, res) => {

    // Grabs name of stock and quanity that user entered
    const stock = req.body.stock;
    const quantity = req.body.quantity;

    // Uses the stock name to dig up the per share price then calculates total order cost
    var price = findStockPrice(stock);
    var cost = price * quantity;

    // Provides the user with finalized order information
    res.send(`You ordered ${quantity} share(s) of ${stock} stock.  <p>The price of each share is \$${price} and the total order cost is \$${cost}.</p>`);

})

// This runs when someone uses the Stock Search page (search.html) and wants to look up a stock
app.post("/highLow", (req, res) => {

    // Grabs an array featuring the lowest and highest stock objects
    const stockInfo = findStockByPrice();

    // Returns the stock the user chose
    if (req.body.price == "high") {

        res.send(stockInfo[1]);

    } else {

        res.send(stockInfo[0]);

    }


});

function findStockPrice(stock) {

    // This function takes the name of a stock provided by the end user, searches our stocks array for it, and returns the per share price of the chosen stock when found
    for (const[key, value] of Object.entries(stocks)){

        if (value.company == stock) {

            return value.price;

        }

    }

}

function findStockByPrice() {

    // This function loops through our stocks array, finds the stocks with the highest and lowest prices, and returns an array containing both stock objects
    var highestPrice = 0;
    var lowestPrice = 999999;
    var highObj;
    var lowObj;

    for (const[key, value] of Object.entries(stocks)){

        if (value.price > highestPrice) {

            highestPrice = value.price;
            highObj = value;

        }

        if (value.price < lowestPrice) {

            lowestPrice = value.price;
            lowObj = value;

        }

    }

    return [lowObj, highObj];

}



// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});