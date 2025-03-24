function createMenuItmesCustomerTable() {
    var tableBody = document.querySelector("#table-items-body");

    var items = JSON.parse(sessionStorage.menuItems);

    for (var i = 0; i < items.length; i++) {

        var row = document.createElement("tr");
        
        var name = document.createElement("td");
        name.innerHTML = items[i].name;
        
        var freeDelivery = document.createElement("td");
        freeDelivery.innerHTML = items[i].freeDelivery ? "Yes" : "No";

        var price = document.createElement("td");
        price.innerHTML = items[i].price;

        var category = document.createElement("td");
        category.innerHTML = items[i].category;

        var action = document.createElement("a");
        action.href = "menu-item-list-customer-notification.html";
        action.innerHTML = "Add to Cart";
        action.classList.add("action");

        row.appendChild(name);
        row.appendChild(freeDelivery);
        row.appendChild(price);
        row.appendChild(category);
        row.appendChild(action);

        tableBody.appendChild(row);
    }
}

createMenuItmesCustomerTable();

document.querySelectorAll(".action").forEach(function(element, index) {
    element.addEventListener("click", function() {

        var items = JSON.parse(sessionStorage.menuItems);

        if (sessionStorage.getItem("cart") === null) {
            cart = [];
        } else {
            cart = JSON.parse(sessionStorage.cart);
        }

        cart.push(items[index]);
        sessionStorage.setItem("cart", JSON.stringify(cart));
    });
});