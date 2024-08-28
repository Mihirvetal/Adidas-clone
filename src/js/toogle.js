document.querySelector(".hamburger").addEventListener("click", myFunction);

function myFunction() {
    document.querySelector(".hamburger").classList.toggle("change")

    document.querySelector(".hamnames").classList.toggle("category")

}




var bestOfAdidas = [{
    imgURL: "https://i.pinimg.com/736x/ba/15/f4/ba15f4b524c2743e962457b4df7b81ea.jpg",
    price: "999.00",
    name: "Face Cover- Not For Medical Use",
    type: "Original"

},
{
    imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsuOne24ZSpD7Du9AbWpvlzBPuvTtJiamvQ&s",
    price: "8999.00",
    name: "Adicolor Velour Track Jacket",
    type: "Original"

},
{
    imgURL: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9ff14b93e7af4aebbc1baaf0010f4fed_9366/FU7592_00_plp_standard.jpg",
    price: "2999.00",
    name: "Adilette Lite Slides",
    type: "Original"

},
{
    imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4LTThvclK6Jl1LCMY9eVYsuKnlM9gVGY9Qw&s",
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
        priceDiv.innerHTML = '<p>' + "Rs. " + element.price + '</p>';
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