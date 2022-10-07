class Glaze {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;

    this.element = null;
  }
}

let cart = [];

//Declare objects of Glaze
const originalCinnamon = new Glaze("Original Cinnamon", 0.0);
const sugarMilk = new Glaze("Sugar Milk", 0.0);
const vanillaMilk = new Glaze("Vanilla Milk", 0.5);
const doubleChocolate = new Glaze("Double Chocolate", 1.5);

//Array of Glazing
const glazeL = [originalCinnamon, sugarMilk, vanillaMilk, doubleChocolate];

//Create option tag using array of Glaze
let glazingOption = document.getElementById("glazingOptions");
for (let i = 0; i < glazeL.length; i++) {
  let glazeSelect = document.createElement("option");
  glazeSelect.textContent = glazeL[i].name;
  glazingOption.appendChild(glazeSelect);
}

class Pack {
  constructor(name) {
    this.name = name;
  }
}
//Declare objects of Pack Qty
const qty1 = new Pack("1");
const qty3 = new Pack("3");
const qty6 = new Pack("5");
const qty12 = new Pack("10");

//Array of Pack Qty
const packL = [qty1, qty3, qty6, qty12];

//Create option tag using array of Pack Qty
let packOption = document.getElementById("packOptions");
for (let i = 0; i < packL.length; i++) {
  let packSelect = document.createElement("option");
  packSelect.textContent = packL[i].name;
  packOption.appendChild(packSelect);
}
//HW4 START ----------------------
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

let basePrice = (document.getElementById("totalPrice").innerHTML =
  rolls[rollType].basePrice);
document.getElementById("rollHeader").innerHTML = [rollType] + " Cinnamon roll";
console.log(document.querySelector(".container-details img").src);
document.querySelector(".container-details img").src =
  rolls[rollType].imageFile;

function addToCart() {
  let packIndex = document.getElementsByClassName("pack-dropdownOptions")[0]
    .selectedIndex;
  let glazeIndex = document.getElementsByClassName("glaze-dropdownOptions")[0]
    .selectedIndex;
  let glazeOutput = glazeL[glazeIndex].name;
  let packOutput = packL[packIndex].name;
  //test
  let rollDetail = new Roll(rollType, glazeOutput, packOutput, basePrice);
  cart.push(rollDetail);
  console.log(cart);
}
//HW4 DETAIL ----------------------

//Connect value using new array and index of item
function updatePrice() {
  let basePrice = rolls[rollType].basePrice;

  let packOption = document.getElementsByClassName("pack-dropdownOptions")[0];
  let packIndex = packOption.selectedIndex;

  let glazeOption = document.getElementsByClassName("glaze-dropdownOptions")[0];
  let glazeIndex = glazeOption.selectedIndex;

  totalPrice = (
    (basePrice + glazeL[glazeIndex].price) *
    packL[packIndex].name
  ).toFixed(2);
  document.getElementById("totalPrice", "cart-totalPrice").innerHTML =
    "$" + totalPrice;
}

//HW 5 START ----------------------
