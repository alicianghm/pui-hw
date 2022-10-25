//HW5 START

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

let cartArray = []

function createRoll(rollType, rollGlazing, packSize, basePrice) {
  const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
  cartArray.push(roll)
  return roll;
}
//Create template and remove item
function createElement(roll) {
  const template = document.querySelector("#roll-template");
  const clone = template.content.cloneNode(true);
  roll.element = clone.querySelector(".container-cart");


  const btnDelete = roll.element.querySelector(".remove");
  btnDelete.addEventListener("click", () => {
    deleteRoll(roll);
  });

  const cartElement = document.querySelector("#cart-list");
  cartElement.prepend(roll.element);

  updateElement(roll);
}

//Select id and update price of each item
function updateElement(roll) {
  const rollCartImg = roll.element.querySelector(".rollCartImg");
  const rollCartTitle = roll.element.querySelector(".rollCartTitle");
  const rollCartGlaze = roll.element.querySelector(".rollCartGlaze");
  const rollCartPack = roll.element.querySelector(".rollCartPack");
  const totalPriceCart = (
    (roll.basePrice + glaze[roll.glazing]) *
    pack[roll.size]
  ).toFixed(2);


  const totalPriceCart2 = roll.element.querySelector(".price-cart");

  rollCartTitle.innerText = [roll.type] + " Cinnamon roll";
  rollCartGlaze.innerText = "Glazing: " + roll.glazing;
  rollCartPack.innerText = "Pack Size: " + roll.size;
  totalPriceCart2.innerText = totalPriceCart;
  rollCartImg.src = rolls[roll.type].imageFile;
}

function deleteRoll(roll) {
  roll.element.remove();
  const index = cartArray.indexOf(roll);
  if (index > -1) { // only splice array when item is found
    cartArray.splice(index, 1); // 2nd parameter means remove one item only
  }
  updatePrice();
  saveToLocalStorage();
}

//Tabulate total price
function updatePrice() {
  let itemTotal = 0;
  for (roll of cartArray) {
    const totalPriceCart =
      (roll.basePrice + glaze[roll.glazing]) * pack[roll.size];
      itemTotal = Number(totalPriceCart) + itemTotal;
  }

  const finalTotal = document.querySelector("#cart-totalPrice");
  finalTotal.innerText = itemTotal.toFixed(2);
}


function saveToLocalStorage() {
  const cartArrayString = JSON.stringify(cartArray);
  console.log(cartArrayString);
  localStorage.setItem('storedCart', cartArrayString);

}

function updatePage() {
    for (roll of cartArray) {
    createElement(roll);
    updatePrice();
  }
}

function retrieveFromLocalStorage() {
  const cartArrayString = localStorage.getItem('storedCart');
  cartArray = JSON.parse(cartArrayString);
  /* Updating the page with the current cart. */
  updatePage();
}


if (localStorage.getItem('storedCart') != null) {
  retrieveFromLocalStorage();
}
else {
  updatePage();
}
