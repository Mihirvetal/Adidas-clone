// Initialize wishlist and cartlist from localStorage
var wishlist = JSON.parse(localStorage.getItem("wishlistdb")) || [];
var cartlist = JSON.parse(localStorage.getItem("cartlistdb")) || [];
var len = wishlist.length;
var le = cartlist.length;

displaycart(cartlist); // Call displaycart to render products
document.querySelector("#wishlistLen").textContent = len;
document.querySelector("#cartLen").textContent = le;
document.querySelector(".card_len").textContent = le;

function displaycart(arr) {
    const container = document.querySelector("#mycarddata");
    if (!container) {
        console.error("#mycarddata element not found!");
        return;
    }
    
    container.innerHTML = ""; // Clear the existing content
    total = 0;

    arr.forEach(function (element, index) {
        if (element.price === "Sold out") return;

        total += Number(element.price);

        var maindiv = document.createElement("div");
        maindiv.setAttribute("id", "prod");

        var div_img = document.createElement("div");
        div_img.setAttribute("id", "fir");

        var img = document.createElement("img");
        img.setAttribute("src", element.imgURL);

        var div_cont_main = document.createElement("div");
        div_cont_main.setAttribute("id", "sec");

        var div_cont = document.createElement("div");
        div_cont.setAttribute("id", "sec1");

        var p1 = document.createElement("p");
        p1.textContent = element.name;

        var p2 = document.createElement("p");
        p2.textContent = element.type;

        var div_prices = document.createElement("div");
        div_prices.setAttribute("id", "sec2");

        var span = document.createElement("span");
        span.setAttribute("class", "close");
        span.innerHTML = '<i class="fas fa-times"></i>';
        span.addEventListener("click", function () {
            deleteRow(index);
        });

        var p3 = document.createElement("p");
        p3.textContent = "Rs. " + element.price;

        var symDiv = document.createElement("div");
        symDiv.setAttribute("class", "wishlistsymbal");
        symDiv.innerHTML = '<i class="far fa-heart"></i>';
        symDiv.addEventListener("click", function () {
            wishlist.push(element);
            localStorage.setItem('wishlistdb', JSON.stringify(wishlist));
            deleteRow(index); // Remove from cart and add to wishlist
            displaycart(cartlist); // Refresh cart display
        });

        div_img.append(img);
        div_cont.append(p1, p2, symDiv);
        div_prices.append(p3, span);
        div_cont_main.append(div_cont, div_prices);
        maindiv.append(div_img, div_cont_main);
        container.append(maindiv);
    });

    document.querySelector(".mytotal").textContent = total;
    document.querySelector("#check_len").textContent = arr.length;
    document.querySelector("#checktotal").textContent = total;
    document.querySelector("#check_total_amt").textContent = total;
}

function deleteRow(index) {
    console.log("Deleting row at index:", index);
    cartlist.splice(index, 1);
    localStorage.setItem("cartlistdb", JSON.stringify(cartlist));
    
    // Update the number of items in the cart
    var newLength = cartlist.length;
    document.querySelector("#cartLen").textContent = newLength;
    document.querySelector(".card_len").textContent = newLength;
    
    displaycart(cartlist); // Refresh cart display
}

// Debugging: Log the initial cart list
console.log("Initial cartlist:", cartlist);
