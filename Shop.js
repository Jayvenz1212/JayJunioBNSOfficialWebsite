function buyItem(itemName, itemPrice, itemImage) {
    localStorage.setItem("selectedItem", itemName);
    localStorage.setItem("selectedPrice", itemPrice);
    localStorage.setItem("selectedImage", itemImage);

    window.location.href = "Pay.html";
}
function goBack() {
    window.location.href = "Welcome.html";
}