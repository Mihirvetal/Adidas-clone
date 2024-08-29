var menOriginalsData = [{
    imgURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/22bc0722000d47f8a1e9b47ef1a29569_9366/Kaptir_3.0_Shoes_Green_ID7476_02_standard_hover.jpg",
    price: "9999.00",
    name: "Superstar Shoes",
    type: "Men originals",
    new: "new"
},
{
    imgURL: "https://static.qns.digital/img/p/2/5/7/0/6/8/3/2570683-full_product.jpg",
    price: "999.00",
    name: "Face Cover- Not For Medical Use",
    type: "Men originals",
    new: "3-pack"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/84ff589e5bcf476eb8feaf0000895fff_9366/Adicolor_Classics_Firebird_Track_Jacket_Burgundy_IB7406.jpg",
    price: "8999.00",
    name: "Adicolor Velour Track Jacket",
    type: "Men Lifestyle",
    new: "new"
},
{
    imgURL: "https://i.ebayimg.com/images/g/q70AAOSwJlllcOPG/s-l400.png",
    price: "4999.00",
    name: "Jeremy Scott Tee",
    type: "Men Lifestyle",
    new: "new"
},
{
    imgURL: "https://www.sneakersnstuff.com/images/319064/h53371-6.jpg",
    price: "5999.00",
    name: "Jeremy Scott Tee",
    type: "Men Lifestyle",
    new: "new"
},
{
    imgURL: "https://www.sneakersnstuff.com/images/319061/h53371-10.jpg",
    price: "2299.00",
    name: "Tee",
    type: "Men originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/0f8ccddbc11845d5bf81afc700fc6d35_9366/Island_Club_Adilette_22_Slides_Grey_HP6522_HM1.jpg",
    price: "3599.00",
    name: "Adilette Slides",
    type: "Men originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b477ac866dfd48ceafcbaaf0010f5b2b_9366/Adilette_Lite_Slides_Red_FU8296_01_standard.jpg",
    price: "2900.00",
    name: "Adilette Lite Slides",
    type: "Men originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/a64c9a11a1714455bebaad6500ac65f2_9366/Adilette_Shower_Slides_Red_GZ5923_01_standard.jpg",
    price: "2900.00",
    name: "Adilette Lite Slides",
    type: "Men originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/ba2804e6fd694ee298c5a36800b29a52_9366/ADILETTE_SLIDES_Blue_288022_02_standard_hover.jpg",
    price: "2900.00",
    name: "Adilette Lite Slides",
    type: "Men originals",
    new: "new"
},
{
    imgURL: "https://images.jdmagicbox.com/quickquotes/images_main/adidas-mens-originals-adilette-slides-active-orange-core-black-164870231-wn1rp.jpg",
    price: "2900.00",
    name: "Adilette Lite Slides",
    type: "Men originals",
    new: "new"
},

{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/af8da9ee10f34c2e8514ad7a008a1340_9366/Adilette_Lite_Slides_Black_GZ6196_01_standard.jpg",
    price: "3900.00",
    name: "Adilette Lite Slides",
    type: "Men originals",
    new: "new"
}
];

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

displayData(menOriginalsData);
document.querySelector("#wishlistLen").textContent = len;
document.querySelector("#cartLen").textContent = le;



function displayData(arr) {
    arr.map(function (element, index) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        var symDiv = document.createElement("div");
        var cartSymDiv = document.createElement("div");
        var priceDiv = document.createElement("div");
        var name = document.createElement("h6");
        var type = document.createElement("h6");
        var neworNot = document.createElement("h6");

        img.setAttribute("src", element.imgURL);
        symDiv.innerHTML = '<i class="far fa-heart ">';




        symDiv.setAttribute("class", "wishlistSymbol");


        var count = 1

        symDiv.addEventListener("click", symbalcolor)
        function symbalcolor() {
            count++
            if (count % 2 == 0) {
                console.log("solid");
                symDiv.innerHTML = '<i class="fas fa-heart"></i>';
                wishlist.push(element);
                localStorage.setItem('wishlistdb', JSON.stringify(wishlist));

            }
            else {
                console.log("dull");
                symDiv.innerHTML = '<i class="far fa-heart"></i>';
                symDiv.addEventListener("click", function () {
                    deleteRow(index, count)
                })

            }

        }
        cartSymDiv.innerHTML = '<i class="fas fa-cart-plus"></i>';
        cartSymDiv.setAttribute("class", "cartSym");
        cartSymDiv.addEventListener("click", function () {
            addtocart(element, cartSymDiv);
        })

        if (element.price == "Sold out") {
            priceDiv.innerHTML = `<p>${element.price}</p>`;
        } else if (element.price != "") {
            priceDiv.innerHTML = `<p>Rs.${element.price}</p>`;
        }

        priceDiv.setAttribute("class", "price1");
        name.textContent = element.name;
        type.textContent = element.type;
        neworNot.textContent = element.new;

        div.append(img, symDiv, cartSymDiv, priceDiv, name, type, neworNot);
        document.querySelector("#menOriginals").append(div);
    });
}
displaybestOfAdidasData(bestOfAdidas);

function displaybestOfAdidasData(arr) {
    arr.map(function (element, index) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        var symDiv = document.createElement("div");
        var cartSymDiv = document.createElement("div");
        var priceDiv = document.createElement("div");
        var name = document.createElement("h6");
        var type = document.createElement("h6");

        img.setAttribute("src", element.imgURL);
        symDiv.innerHTML = '<i class="far fa-heart ">';
        var count = 1

        symDiv.addEventListener("click", symbalcolor)
        function symbalcolor() {
            count++
            if (count % 2 == 0) {
                console.log("solid");
                symDiv.innerHTML = '<i class="fas fa-heart"></i>';
                wishlist.push(element);
                localStorage.setItem('wishlistdb', JSON.stringify(wishlist));

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
        cartSymDiv.setAttribute("class", "cartSym");
        cartSymDiv.addEventListener("click", function () {
            addtocart(element, cartSymDiv);
        })

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

}



