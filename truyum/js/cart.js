function createCart() {
    var tableBody = document.querySelector("#table-items-body");
    tableBody.innerHTML = "";
    var total = 0;

    if (!sessionStorage.getItem("cart") || sessionStorage.getItem("cart") === "[]") {
        window.location.href = "cart-empty.html";
        return;
    }
    var cart = JSON.parse(sessionStorage.getItem("cart"));

    for (var i = 0; i < cart.length; i++) {
        var row = document.createElement("tr");

        var name = document.createElement("td");
        name.innerHTML = cart[i].name;
        
        var freeDelivery = document.createElement("td");
        freeDelivery.innerHTML = cart[i].freeDelivery ? "Yes" : "No";

        var price = document.createElement("td");
        price.innerHTML = cart[i].price;
        total += Number(cart[i].price);

        var del = document.createElement("a");
        del.href = "cart-notification.html";
        del.innerHTML = "Delete";
        del.classList.add("delete");
        del.dataset.index = i; 

        row.appendChild(name);
        row.appendChild(freeDelivery);
        row.appendChild(price);
        row.appendChild(del);

        tableBody.appendChild(row);
    }

    var totalPriceDiv = document.getElementById("totalPrice");
    if (!totalPriceDiv) {
        totalPriceDiv = document.createElement("div");
        totalPriceDiv.id = "totalPrice";
        document.querySelector("#table-body").appendChild(totalPriceDiv);
    }
    totalPriceDiv.innerHTML = "Total Rs. " + total;    
    addDeleteEventListeners();
}

function addDeleteEventListeners() {
    document.querySelectorAll(".delete").forEach(function(element) {
        element.addEventListener("click", function(event) {
            event.preventDefault(); 

            var cart = JSON.parse(sessionStorage.getItem("cart"));
            var index = parseInt(event.target.dataset.index);

            cart.splice(index, 1);
            sessionStorage.setItem("cart", JSON.stringify(cart));

            if (cart.length === 0) {
                window.location.href = "cart-empty.html";
            } else {
                window.location.href = "cart-notification.html"; 
            }
        });
    });
}

createCart();
