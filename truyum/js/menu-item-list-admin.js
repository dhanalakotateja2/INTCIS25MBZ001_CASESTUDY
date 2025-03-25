function createMenuItmesAdminTable() {

    var tableBody = document.querySelector("#table-items-body");
    var items = JSON.parse(sessionStorage.menuItems);

    for (var i = 0; i < items.length; i++) {

        var row = document.createElement("tr");

        var name = document.createElement("td");
        name.innerHTML = items[i].name;

        var price = document.createElement("td");
        price.innerHTML = items[i].price;

        var active = document.createElement("td");
        active.innerHTML = items[i].active ? "Yes" : "No";

        var date = document.createElement("td");
        date.innerHTML = items[i].dateOfLaunch.slice(0, 10);

        var category = document.createElement("td");
        category.innerHTML = items[i].category;

        var freeDelivery = document.createElement("td");
        freeDelivery.innerHTML = items[i].freeDelivery ? "Yes" : "No";

        var edit = document.createElement("td");
        var editlink = document.createElement("a");
        editlink.href = "edit-menu-item.html";
        edit.classList.add("edit");
        editlink.innerHTML = "Edit";
        edit.appendChild(editlink);

        row.appendChild(name);
        row.appendChild(price);
        row.appendChild(active);
        row.appendChild(date);
        row.appendChild(category);
        row.appendChild(freeDelivery);
        row.appendChild(edit);

        tableBody.appendChild(row);
    }
}

createMenuItmesAdminTable();

document.querySelectorAll(".edit").forEach(function(element, index) {
    element.addEventListener("click", function() {
        var items = JSON.parse(sessionStorage.menuItems);
        var name = items[index].name;
        sessionStorage.setItem("name", name);
    });
});