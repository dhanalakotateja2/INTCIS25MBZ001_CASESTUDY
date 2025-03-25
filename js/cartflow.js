function cartFlow(){
    if (sessionStorage.getItem("cart") === null) {
        window.location.href = "cart-empty.html";
    } else {
        window.location.href = "cart.html" ;
   }
}