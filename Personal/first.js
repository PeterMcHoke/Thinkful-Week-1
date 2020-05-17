
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

require('./index.test.js');(void 0);
