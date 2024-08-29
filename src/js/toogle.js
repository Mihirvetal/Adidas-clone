document.querySelector(".hamburger").addEventListener("click", myFunction);

function myFunction() {
    document.querySelector(".hamburger").classList.toggle("change")

    document.querySelector(".hamnames").classList.toggle("category")

}




var bestOfAdidas = [{
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

var wishlist = JSON.parse(localStorage.getItem("wishlistdb")) || []
var len = wishlist.length;
var cartlist = JSON.parse(localStorage.getItem("cartlistdb")) || []
var le = cartlist.length;

displaybestOfAdidasData(bestOfAdidas);
document.querySelector("#wishlistLen").textContent = len;
document.querySelector("#cartLen").textContent = le;

function displaybestOfAdidasData(arr) {
    arr.map(function (element, index) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        var symDiv = document.createElement("div");
        var cartSymDiv = document.createElement("div");
        var priceDiv = document.createElement("div");
        var name = document.createElement("h6");
        var type = document.createElement("h6");
        symDiv.innerHTML = '<i class="far fa-heart"></i>';
        img.setAttribute("src", element.imgURL);

        var count = 1

        symDiv.addEventListener("click", symbalcolor)
        function symbalcolor() {
            count++
            if (count % 2 == 0) {
                console.log("solid");
                symDiv.innerHTML = '<i class="fas fa-heart"></i>';
                wishlist.push(element);
                localStorage.setItem('wishlistdb', JSON.stringify(wishlist));
                displaybestOfAdidasData(bestOfAdidas);

            }
            else {
                console.log("dull");
                symDiv.innerHTML = '<i class="far fa-heart"></i>';
                symDiv.addEventListener("click", function () {
                    deleteRow(index, count)
                })

            }

        }
        symDiv.setAttribute("class", "wishlistSymbol");
        cartSymDiv.innerHTML = '<i class="fas fa-cart-plus"></i>';
        cartSymDiv.addEventListener("click", function () {
            addtocart(element, cartSymDiv);
        })

        cartSymDiv.setAttribute("class", "cartSym");
        priceDiv.setAttribute("class", "price");
        priceDiv.innerHTML = `<p>Rs.${element.price}</p>`;
        name.textContent = element.name;
        type.textContent = element.type;

        div.append(img, symDiv, cartSymDiv, priceDiv, name, type);
        document.querySelector("#bestOfAdidas").append(div);
    });
}
function deleteRow(index) {
    console.log("delete");
    wishlist.splice(index, 1)
    localStorage.setItem("wishlistdb", JSON.stringify(wishlist));

}
function addtocart(element, cartSymDiv) {
    cartSymDiv.innerHTML = '<i class="fas fa-shopping-bag"></i>';
    cartlist.push(element);
    localStorage.setItem('cartlistdb', JSON.stringify(cartlist));
    displaybestOfAdidasData(bestOfAdidas);
}