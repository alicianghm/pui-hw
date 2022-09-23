class Glaze {
  constructor(name) {
    this.name = name;
  }
}
//Declare objects of Glaze
const originalCinnamon = new Glaze("Original Cinnamon");
const sugarMilk = new Glaze("Sugar Milk");
const vanillaMilk = new Glaze("Vanilla Milk");
const doubleChocolate = new Glaze("Double Chocolate");

//Array of Glazing
const glazeL = [originalCinnamon, sugarMilk, vanillaMilk, doubleChocolate];

//Create option tag using array of Glaze
let glazingOption = document.getElementById("glazingOptions");
for (i = 0; i < glazeL.length; i++) {
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
const qty6 = new Pack("6");
const qty12 = new Pack("12");

//Array of Pack Qty
const packL = [qty1, qty3, qty6, qty12];

//Create option tag using array of Pack Qty
let packOption = document.getElementById("packOptions");
for (i = 0; i < packL.length; i++) {
  let packSelect = document.createElement("option");
  packSelect.textContent = packL[i].name;
  packOption.appendChild(packSelect);
}

//Connect value using new array and index of item
function updatePrice() {
  let basePrice = 2.49;

  const glazeVal = [0.0, 0.0, 0.5, 1.5];
  const packVal = [1, 3, 5, 10];

  let packOption = document.getElementsByClassName("pack-dropdownOptions")[0];
  let packIndex = packOption.selectedIndex;

  let glazeOption = document.getElementsByClassName("glaze-dropdownOptions")[0];
  let glazeIndex = glazeOption.selectedIndex;

  totalPrice = (
    (basePrice + glazeVal[glazeIndex]) *
    packVal[packIndex]
  ).toFixed(2);
  document.getElementById("totalPrice").innerHTML = "$" + totalPrice;
}
