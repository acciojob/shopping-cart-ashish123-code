//your code helet total = 0;
document.getElementById("add").addEventListener("click", function() {
    let itemName = document.getElementById("item-name-input").value;
    let itemPrice = document.getElementById("item-price-input").value;
    if (itemName === "" || itemPrice === "") {
      alert("Please enter a valid name and price.");
      return;
    }
    if(isNaN(itemPrice)){
      alert("Please enter a valid price.")
      return;
    }
    let table = document.getElementById("table");
    let newRow = table.insertRow();
    let nameCell = newRow.insertCell();
    let priceCell = newRow.insertCell();
    nameCell.innerHTML = itemName;
    priceCell.innerHTML = itemPrice;
    total += parseFloat(itemPrice);
    document.getElementById("total").innerHTML = total;
    document.getElementById("item-name-input").value = "";
    document.getElementById("item-price-input").value = "";
  });re
