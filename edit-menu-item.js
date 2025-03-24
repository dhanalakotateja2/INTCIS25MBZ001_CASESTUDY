
function editMenuItem() {

    var name = document.querySelector("#title").value;
    var price = document.querySelector("#price").value;
    var active = document.querySelector("#inStockYes").checked;
    var dateOfLaunch = new Date(document.querySelector("#dateOfLaunch").value);
    var category = document.querySelector("#category").value;
    var freeDelivery = document.querySelector("#freeDelivery").checked;

    var items = JSON.parse(sessionStorage.menuItems);

    var obj = {
        name,
        price,
        active,
        dateOfLaunch,
        category,
        freeDelivery
    }

    for (var i = 0; i < items.length; i++) {
        if (items[i].name == name) {
            items[i] = obj;
            sessionStorage.setItem("menuItems", JSON.stringify(items));
            return;
        }
    }

    items.push(obj);
    sessionStorage.setItem("menuItems", JSON.stringify(items));
}

function fillName() {
    if (sessionStorage.getItem("name") === null) { return; }
    var name = sessionStorage.name;
    document.querySelector("#title").value = name;
}

fillName();
