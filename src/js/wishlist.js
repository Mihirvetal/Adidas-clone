var wishlist = JSON.parse(localStorage.getItem("wishlistdb")) || [];
var len = wishlist.length;
var cartlist = JSON.parse(localStorage.getItem("cartlistdb")) || [];
var le = cartlist.length;

displaywishlist(wishlist);
document.querySelector("#wishlistLen").textContent = len;
document.querySelector("#myWishLen").textContent = len;
document.querySelector("#cartLen").textContent = le;

function displaywishlist(wishlist) {
    // Clear the current wishlist display
    document.querySelector("#womenOriginals").innerHTML = "";

    wishlist.forEach(function (element, index) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        var symDiv = document.createElement("div");
        var cartSymDiv = document.createElement("div");
        var priceDiv = document.createElement("div");
        var name = document.createElement("h6");
        var type = document.createElement("h6");

        // Set the heart icon based on wishlist status
        var isWishlisted = wishlist.some(function (item) {
            return item.name === element.name && item.type === element.type; // Check by unique properties
        });

        // Update the heart icon appearance
        symDiv.innerHTML = isWishlisted ? '<i class="fas fa-heart" style="color: darkred;"></i>' : '<i class="fas fa-heart"></i>';
        img.setAttribute("src", element.imgURL);

        // Add click event to toggle wishlist status
        symDiv.addEventListener("click", function () {
            toggleWishlist(element);
        });

        symDiv.setAttribute("class", "wishlistSymbol");
        cartSymDiv.innerHTML = '<i class="fas fa-cart-plus"></i>';
        cartSymDiv.addEventListener("click", function () {
            addtocart(element, cartSymDiv);
        });

        cartSymDiv.setAttribute("class", "cartSym");
        priceDiv.setAttribute("class", "price");
        priceDiv.innerHTML = `<p>Rs.${element.price}</p>`;
        name.textContent = element.name;
        type.textContent = element.type;
        div.append(img, symDiv, cartSymDiv, priceDiv, name, type);
        document.querySelector("#womenOriginals").append(div);
    });
}

function toggleWishlist(product) {
    // Check if the product is already in the wishlist
    var existingIndex = wishlist.findIndex(function (item) {
        return item.name === product.name && item.type === product.type; // Assuming unique by name and type
    });

    if (existingIndex !== -1) {
        // Product is already in the wishlist, so remove it
        wishlist.splice(existingIndex, 1);
        localStorage.setItem("wishlistdb", JSON.stringify(wishlist));
    } else {
        // Product is not in the wishlist, so add it
        wishlist.push(product);
        localStorage.setItem("wishlistdb", JSON.stringify(wishlist));
    }

    // Update wishlist count
    var len = wishlist.length;
    document.querySelector("#wishlistLen").textContent = len;
    document.querySelector("#myWishLen").textContent = len;

    // Update the UI
    displaywishlist(wishlist);
}

// Function to initialize icons based on the current wishlist state
function initializeIcons() {
    var allProducts = document.querySelectorAll(".wishlistSymbol");
    allProducts.forEach(function (symDiv) {
        var productName = symDiv.closest("div").querySelector("h6").textContent; // Assuming name is a unique identifier
        var isWishlisted = wishlist.some(function (item) {
            return item.name === productName;
        });

        if (isWishlisted) {
            symDiv.innerHTML = '<i class="fas fa-heart" style="color: darkred;"></i>';
        } else {
            symDiv.innerHTML = '<i class="fas fa-heart"></i>';
        }
    });
}

// Initialize icons on page load
initializeIcons();
