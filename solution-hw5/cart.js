class Glaze {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const name = {
  "Original Cinnamon Roll": "Original Cinnamon Roll",
  "Sugar Milk": "Sugar Milk",
  "Vanilla Milk": "Vanilla Milk",
  "Double Chocolate": "Double Chocolate",
};

const glaze = {
  "Original Cinnamon": 0,
  "Sugar Milk": 0,
  "Vanilla Milk": 0.5,
  "Double Chocolate": 1.5,
};

const pack = {
  1: 1,
  3: 3,
  6: 5,
  12: 10,
};

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;

    this.element = null;
  }
}

const rollSet = new Set();

function createRoll(rollType, rollGlazing, packSize, basePrice) {
  const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
  rollSet.add(roll);

  return roll;
}

function createElement(roll) {
  const template = document.querySelector("#roll-template");
  const clone = template.content.cloneNode(true);
  roll.element = clone.querySelector(".container-cart");

  const btnDelete = roll.element.querySelector(".remove");
  console.log("element removed");
  btnDelete.addEventListener("click", () => {
    deleteRoll(roll);
  });

  const cartElement = document.querySelector("#cart-list");
  cartElement.prepend(roll.element);

  updateElement(roll);
}

function updateElement(roll) {
  console.log(roll);
  const rollCartImg = roll.element.querySelector(".rollCartImg");
  const rollCartTitle = roll.element.querySelector(".rollCartTitle");
  const rollCartGlaze = roll.element.querySelector(".rollCartGlaze");
  const rollCartPack = roll.element.querySelector(".rollCartPack");
  const totalPriceCart = (
    (roll.basePrice + glaze[roll.glazing]) *
    pack[roll.size]
  ).toFixed(2);
  console.log(roll.basePrice, glaze[roll.glazing], pack[roll.size]);
  const totalPriceCart2 = roll.element.querySelector(".price-cart");
  console.log(totalPriceCart);

  rollCartTitle.innerText = [roll.type] + " Cinnamon roll";
  rollCartGlaze.innerText = "Glazing: " + roll.glazing;
  rollCartPack.innerText = "Pack Size: " + roll.size;
  totalPriceCart2.innerText = totalPriceCart;
  rollCartImg.src = rolls[roll.type].imageFile;
}

function deleteRoll(roll) {
  roll.element.remove();
  rollSet.delete(roll);
  updatePrice();
}

function updatePrice() {
  let itemTotal = 0;
  for (const roll of rollSet) {
    const totalPriceCart =
      (roll.basePrice + glaze[roll.glazing]) * pack[roll.size];

    console.log(
      typeof roll.basePrice,
      typeof glaze[roll.glazing],
      typeof pack[roll.size],
      typeof totalPriceCart
    );

    itemTotal = Number(totalPriceCart) + itemTotal;
    console.log("itemTotal", itemTotal);
  }

  const finalTotal = document.querySelector("#cart-totalPrice");
  finalTotal.innerText = itemTotal.toFixed(2);
}

const roll1 = createRoll(
  "Apple",
  "Original Cinnamon",
  "3",
  rolls["Apple"]["basePrice"]
);

const roll2 = createRoll(
  "Raisin",
  "Sugar Milk",
  "3",
  rolls["Raisin"]["basePrice"]
);

const roll3 = createRoll(
  "Walnut",
  "Vanilla Milk",
  "12",
  rolls["Walnut"]["basePrice"]
);

const roll4 = createRoll(
  "Original",
  "Sugar Milk",
  "1",
  rolls["Original"]["basePrice"]
);

for (const roll of rollSet) {
  console.log(roll);
  createElement(roll);
  updateElement(roll);
  updatePrice();
}
