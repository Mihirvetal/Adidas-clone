// Handle hamburger menu click event
document.querySelector(".hamburger").addEventListener("click", myFunction);

function myFunction() {
    document.querySelector(".hamburger").classList.toggle("change");
    document.querySelector(".hamnames").classList.toggle("category");
}

// Sample data for products
var bestOfAdidas = [
    {
        imgURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8a56ed09b3114fbc9d53af81015162bd_9366/Face_Cover_Black_HT5742_21_model.jpg",
        price: "999.00",
        name: "Face Cover- Not For Medical Use",
        type: "Original"
    },
    {
        imgURL: "https://viaductclothing.co.uk/cdn/shop/files/adidas_Originals_Adicolor_Velour_Firebird_Track_Jacket_-_Black_-_ViaductClothing_-_-_-235269_1600x.jpg?v=1717037301",
        price: "8999.00",
        name: "Adicolor Velour Track Jacket",
        type: "Original"
    },
    {
        imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/ba2804e6fd694ee298c5a36800b29a52_9366/ADILETTE_SLIDES_Blue_288022_02_standard_hover.jpg",
        price: "2999.00",
        name: "Adilette Lite Slides",
        type: "Original"
    },
    {
        imgURL: "https://m.media-amazon.com/images/I/41SWL6vIXUL._AC_UY350_.jpg",
        price: "999.00",
        name: "Face Cover- Not For Medical Use",
        type: "Original"
    }
];

// Initialize wishlist and cartlist from localStorage
var wishlist = JSON.parse(localStorage.getItem("wishlistdb")) || [];
var cartlist = JSON.parse(localStorage.getItem("cartlistdb")) || [];

// Update UI with wishlist and cart counts
document.querySelector("#wishlistLen").textContent = wishlist.length;
document.querySelector("#cartLen").textContent = cartlist.length;

// Display product data
if (document.querySelector("#bestOfAdidas")) {
    displaybestOfAdidasData(bestOfAdidas);
}

function displaybestOfAdidasData(arr) {
    const container = document.querySelector("#bestOfAdidas");
    if (!container) {
        console.error("Element with id 'bestOfAdidas' not found.");
        return;
    }

    container.innerHTML = ''; // Clear existing content

    arr.forEach(function (element, index) {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const symDiv = document.createElement("div");
        const cartSymDiv = document.createElement("div");
        const priceDiv = document.createElement("div");
        const name = document.createElement("h6");
        const type = document.createElement("h6");

        symDiv.innerHTML = '<i class="far fa-heart"></i>';
        img.setAttribute("src", element.imgURL);
        symDiv.classList.add("wishlistSymbol");
        cartSymDiv.classList.add("cartSym");
        priceDiv.classList.add("price");

        // Toggle wishlist item
        symDiv.addEventListener("click", function() {
            if (symDiv.innerHTML.includes('far')) {
                symDiv.innerHTML = '<i class="fas fa-heart"></i>';
                if (!wishlist.some(item => item.imgURL === element.imgURL)) {
                    wishlist.push(element);
                    localStorage.setItem('wishlistdb', JSON.stringify(wishlist));
                }
            } else {
                symDiv.innerHTML = '<i class="far fa-heart"></i>';
                wishlist = wishlist.filter(item => item.imgURL !== element.imgURL);
                localStorage.setItem('wishlistdb', JSON.stringify(wishlist));
            }
            displaybestOfAdidasData(bestOfAdidas); // Refresh the display
        });

        // Add to cart
        cartSymDiv.innerHTML = '<i class="fas fa-cart-plus"></i>';
        cartSymDiv.addEventListener("click", function () {
            addtocart(element);
        });

        priceDiv.innerHTML = `<p>Rs.${element.price}</p>`;
        name.textContent = element.name;
        type.textContent = element.type;

        div.append(img, symDiv, cartSymDiv, priceDiv, name, type);
        container.append(div);
    });
}

function addtocart(element) {
    if (!cartlist.some(item => item.imgURL === element.imgURL)) {
        cartlist.push(element);
        localStorage.setItem('cartlistdb', JSON.stringify(cartlist));
        document.querySelector("#cartLen").textContent = cartlist.length; // Update cart count
    }
}

function deleteRow(element) {
    wishlist = wishlist.filter(item => item.imgURL !== element.imgURL);
    localStorage.setItem("wishlistdb", JSON.stringify(wishlist));
    displaybestOfAdidasData(bestOfAdidas); // Refresh the display
}
