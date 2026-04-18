// Load selected item on page
window.onload = function () {
    let item = localStorage.getItem("selectedItem");
    let price = localStorage.getItem("selectedPrice");
    let image = localStorage.getItem("selectedImage");

    const itemText = document.getElementById("item");
    const priceText = document.getElementById("price");
    const itemImg = document.getElementById("item-img");

    if (item && price && image) {
        itemText.textContent = "Item: " + item;
        priceText.textContent = "Price: ₱" + price;
        itemImg.src = image;
        itemImg.style.display = "inline-block";
    } else {
        itemText.textContent = "Item: No item selected";
        priceText.textContent = "Price: ₱0";
        itemImg.style.display = "none";
    }
};

// Confirm purchase
function confirmOrder() {
    let item = localStorage.getItem("selectedItem");
    let price = localStorage.getItem("selectedPrice");
    let image = localStorage.getItem("selectedImage");

    // Get inputs safely
    const facebookInput = document.getElementById("facebook");
    const robloxInput = document.getElementById("roblox");
    const gcashInput = document.getElementById("gcash");

    // Check if inputs exist
    if (!facebookInput || !robloxInput || !gcashInput) {
        alert("Input fields missing in Pay.html");
        return;
    }

    let facebook = facebookInput.value.trim();
    let roblox = robloxInput.value.trim();
    let gcash = gcashInput.value.trim();

    // Validate inputs
    if (facebook === "" || roblox === "" || gcash === "") {
        alert("Please fill out your Facebook, Roblox name, and GCash number.");
        return;
    }

    // Get existing orders
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    // Create new order
    let newOrder = {
        item: item,
        price: price,
        image: image,
        facebook: facebook,
        robloxName: roblox,
        gcashNumber: gcash,
        status: "Pending",
        date: new Date().toLocaleString()
    };

    // Save order
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    alert("Purchase confirmed!");

    // IMPORTANT: correct file name
    window.location.href = "Order.html";
}

// Go back to shop
function goBack() {
    window.location.href = "Shop.html";
}