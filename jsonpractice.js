// console.log('before parse');
var markets = require('./colorado_farmers_markets_2013.json');


var markets_in_denver = markets.filter(function(market) {
  if(market.city === "Denver") return true;
})

// markets_in_denver.forEach(function(a) { console.log(a.MarketName + "|" + a.x + "," + a.y );})
// console.log(markets_in_denver);

var food = ["Bakedgoods",
            "Cheese",
            "Eggs",
            "Seafood",
            "Herbs",
            "Vegetables",
            "Honey",
            "Jams",
            "Maple",
            "Meat",
            "Nuts",
            "Poultry",
            "Wine"
            ]


var sells_food = function(market) {
  var market_obj = {
    MarketName: market.MarketName,
    SellsFood: 0
  }

  market_obj.SellsFood = Number(food.some(function(food_item) {
    return market[food_item] ;
  }));

  return market_obj;
}

console.log(sells_food(markets[1]));
