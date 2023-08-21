function price(newInput) {
  const priceField = document.getElementById(newInput);
  const priceFieldString = priceField.innerText;
  const price = parseFloat(priceFieldString);

  const oldTotalCostField = document.getElementById("totalCost");
  const oldTotalCostString = oldTotalCostField.innerText;
  const oldTotalCost = parseFloat(oldTotalCostString);

  const newTotal = oldTotalCost + price;
  oldTotalCostField.innerText = newTotal;

  const totalField = document.getElementById("total");
  const totalString = totalField.innerText;
  const total = parseFloat(totalString);
  totalField.innerText = newTotal;

  const purchaseField = document.getElementById("purchase");
  if (purchaseField.disabled) {
    purchaseField.removeAttribute("disabled");
  }

  if (newTotal >= 200) {
    const couponField = document.getElementById("coupon");
    if (couponField.disabled) {
      couponField.removeAttribute("disabled");
    }
  }
}

function discount() {
  const couponField = document.getElementById("code");
  const coupon = couponField.value;

  if (coupon === "SELL200") {
    const totalField = document.getElementById('total');
    const totalString = totalField.innerText;
    const total = parseFloat(totalString);

    const oldDiscountField = document.getElementById('discount');
    const oldDiscountString = oldDiscountField.innerText;
    const oldDiscount = parseFloat(oldDiscountString);

    const newDiscount = total * 0.2;
    oldDiscountField.innerText = newDiscount;

    const afterDiscount = total - newDiscount;
    totalField.innerText = afterDiscount;
  }
}

function productName(inputName){
    const itemsContainer = document.getElementById('items');
    const inputNameField = document.getElementById(inputName)
    const itemName = inputNameField.innerText;
    const li = document.createElement('ol');
    li.innerText = itemName;
    itemsContainer.appendChild(li);
}
