// class roll {
//   type;
//   price;

//   constructor(type, price) {
//     this.type = type;
//     this.price = price;
//   }
// }

// const oriRoll = new roll("originalCinnamon", 2.49);
// const glazer = [0.0, 0.0, 0.5, 1.5];
// const pack = [1.0, 3.0, 5.0, 10.0];

class Glaze {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const originalCinnamon = new Glaze("Original Cinnamon", 0.0);
const sugarMilk = new Glaze("Sugar Milk", 0.0);
const vanillaMilk = new Glaze("Vanilla Milk", 0.5);
const doubleChocolate = new Glaze("Double Chocolate", 1.5);

class Pack {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
const packOne = new Pack("1", 1);
const packThree = new Pack("3", 3);
const packSix = new Pack("6", 5);
const packTwelve = new Pack("12", 10);

let glazeArr = [originalCinnamon, sugarMilk, vanillaMilk, doubleChocolate];
let packArr = [packOne, packThree, packSix, packTwelve];

let glazingOption = document.getElementById("glazingOptions");
for (i = 0; i < glazeArr.length; i++) {
  let glazeElement = document.createElement("option");
  glazeElement.textContent = glazeArr[i].name;
  glazingOption.appendChild(glazeElement);
}

let packOption = document.getElementById("packOptions");
for (i = 0; i < glazeArr.length; i++) {
  let packElement = document.createElement("option");
  packElement.textContent = packArr[i].name;
  packOption.appendChild(packElement);
}

// function updatePrice() {
//   glazeSelect = document.getElementById("glazingOptions");
//   packSelect = document.getElementById("packOptions");

//   totalPrice = ((2.49 + glazePrice) * packPrice).toFixed(2);
//   document.getElementById("totalPrice").innerHTML = "$" + totalPrice.toFixed(2);
// }

function updatePrice(element) {
  let basePrice = 2.49;

  const glazeFinal = element.value;

  let packItem = document.getElementsByClassName("pack-dropdownOptions")[0];
  let packPrice = packItem.options;

  totalPrice = ((basePrice + glazePrice) * packPrice).toFixed(2);
  document.getElementById("totalPrice").innerHTML = "$" + totalPrice.toFixed(2);
}
