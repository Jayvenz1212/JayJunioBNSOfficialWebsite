let orders = JSON.parse(localStorage.getItem("orders")) || [];
let container = document.getElementById("orders-list");

function renderOrders() {
    container.innerHTML = "";

    if (orders.length === 0) {
        container.innerHTML = "<p class='no-orders'>No orders yet.</p>";
    } else {
        orders.forEach((order, index) => {
            container.innerHTML += `
                <div class="order-card">
                    <img src="${order.image}" class="order-img" alt="${order.item}">
                    <p><b>Item:</b> ${order.item}</p>
                    <p><b>Price:</b> ₱${order.price}</p>
                    <p><b>Facebook:</b> ${order.facebook}</p>
                    <p><b>Roblox Name:</b> ${order.robloxName}</p>
                    <p><b>GCash:</b> ${order.gcashNumber}</p>
                    <p><b>Status:</b> ${order.status}</p>
                    <button onclick="markPaid(${index})" class="paid-btn">Mark as Paid</button>
                    <button onclick="deleteOrder(${index})" class="delete-btn">Delete</button>
                    <p><b>Date:</b> ${order.date}</p>
                </div>
            `;
        });
    }
}

function markPaid(index) {
    orders[index].status = "Paid";
    localStorage.setItem("orders", JSON.stringify(orders));
    renderOrders();
}

function deleteOrder(index) {
    orders.splice(index, 1);
    localStorage.setItem("orders", JSON.stringify(orders));
    renderOrders();
}

function clearOrders() {
    let confirmClear = confirm("Are you sure you want to delete all orders?");
    if (confirmClear) {
        localStorage.removeItem("orders");
        orders = [];
        renderOrders();
    }
}
function goBack() {
    window.location.href = "Pay.html";
}

renderOrders();