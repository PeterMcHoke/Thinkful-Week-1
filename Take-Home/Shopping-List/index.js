
let items = [
  {
    itemName: "Effective Programming Habits",
    type: "book",
    price: 13.99
  },
  {
    itemName: "Creation 3005",
    type: "computer",
    price: 299.99
  },
  {
    itemName: "Finding Your Center",
    type: "book",
    price: 15.00
  }
]

function cartPrice(items) {
  let total = 0;
  for (let i = 0; i < items.length;i++){
    total += items[i].price;
  }
  return total;
};

function mostExpensiveItemName(items) {
  let max = 0;
  let indexMax = 0;
  for (let i = 0; i < items.length;i++){
    if (items[i].price > max){
      max = items[i].price;
      indexMax = i;
    }
  }
  return items[indexMax].itemName;
}

function priceLookup(items,name){
  for (let i = 0; i < items.length;i++){
    if (items[i].itemName == name){
      return items[i].price;
    }
  }
  return "No item found with that name";
};

require('./index.test.js');(void 0);
