var menuItems = [
    {
        "name": "Sandwich",
        "price": 99,
        "active": true,
        "dateOfLaunch": new Date(2017, 2, 15),
        "category": "Main Course",
        "freeDelivery": true
    },
    {
        "name": "Burger",
        "price": 129,
        "active": true,
        "dateOfLaunch": new Date(2017, 11, 23),
        "category": "Main Course",
        "freeDelivery": false
    },
    {
        "name": "Pizza",
        "price": 149,
        "active": true,
        "dateOfLaunch": new Date(2017, 7, 21),
        "category": "Main Course",
        "freeDelivery": false
    },
    {
        "name": "French Fries",
        "price": 57,
        "active": false,
        "dateOfLaunch": new Date(2017, 6, 2),
        "category": "Starters",
        "freeDelivery": true
    },
    {
        "name": "Chcolate Brownie",
        "price": 32,
        "active": true,
        "dateOfLaunch": new Date(2022, 10, 2),
        "category": "Dessert",
        "freeDelivery": true
    }
];

if (sessionStorage.getItem("menuItems") === null) {
    sessionStorage.setItem("menuItems", JSON.stringify(menuItems));
}