class roll {
  // type;
  // price;

  constructor(type, price) {
    this.type = type;
    this.price = price;
  }
}

const oriRoll = new roll("originalCinnamon", 2.49);
const glaze = [0.0, 0.0, 0.5, 1.5];
const pack = [1.0, 3.0, 5.0, 10.0];

function updatePrice() {
  glazeSelect = document.getElementById("glazingOptions");
  packSelect = document.getElementById("packOptions");
  // console.log(glaze[glazeSelect.value - 1]);
  // console.log(pack[packSelect.value - 1]);
  totalPrice =
    (oriRoll.price + glaze[glazingOptions.value - 1]) *
    pack[packOptions.value - 1];
  // console.log(totalPrice);
  document.getElementById("totalPrice").innerHTML = "$" + totalPrice.toFixed(2);
}
