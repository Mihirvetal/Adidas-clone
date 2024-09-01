var menOriginalsData = [{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/e745acb29cd248e8994a6820a4ac6a29_9366/GAZELLE_BOLD_SHOES_Yellow_IF5937_01_standard.jpg",
    price: "9999.00",
    name: "Superstar Shoes",
    type: "Men originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/e1ba91a12aef486680e5dbf046ac978f_9366/Samba_OG_Shoes_White_IF3814_01_standard.jpg",
    price: "999.00",
    name: "Shoes",
    type: "Men originals",
    new: "3-pack"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/f5fe74e35f2c4107bdffad200179a37d_9366/Gazelle_Shoes_Pink_H01512_01_standard.jpg",
    price: "8999.00",
    name: "Shoes",
    type: "Men Lifestyle",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/0faba7ce543d4efbad3695157ef23b55_9366/GAZELLE_BOLD_SHOES_Blue_IE0430_01_standard.jpg",
    price: "4999.00",
    name: "Shoes",
    type: "Men Lifestyle",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/d62884026e05447ea7e08a9b9fb602b7_9366/Gazelle_Indoor_Shoes_Red_IE2946_01_standard.jpg",
    price: "5999.00",
    name: "Shoes",
    type: "Men Lifestyle",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/340aeb9ac43847fea000a8da0182b561_9366/Gazelle_Shoes_Burgundy_B41645_01_standard.jpg",
    price: "2299.00",
    name: "Shoes",
    type: "Men originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Samba_OG_Shoes_White_B75806_01_standard.jpg",
    price: "3599.00",
    name: "Shoes",
    type: "Men originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/61f87dec481e4512823ea7fb0080ba1a_9366/Gazelle_Shoes_Black_BB5476_01_standard.jpg",
    price: "2900.00",
    name: "Shoes",
    type: "Men originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/4c70105150234ac4b948a8bf01187e0c_9366/Samba_OG_Shoes_Black_B75807_01_standard.jpg",
    price: "2900.00",
    name: "Shoes",
    type: "Men originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/ca2e5777522b4c708f0602d38c6b3cf6_9366/Samba_OG_Shoes_White_IF3813_01_standard.jpg",
    price: "2900.00",
    name: "Shoes",
    type: "Men originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/97f86eede1374615a058a81700a27444_9366/Gazelle_Shoes_Black_CQ2809_01_standard.jpg",
    price: "2900.00",
    name: "Shoes",
    type: "Men originals",
    new: "new"
},

{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/698e41ae0196408eb16aa7fb008046ad_9366/Gazelle_Shoes_Blue_BB5478_01_standard.jpg",
    price: "3900.00",
    name: "Shoes",
    type: "Men originals",
    new: "new"
}
];

var bestOfAdidas = [{
    imgURL: "https://images-cdn.ubuy.co.in/6351b207526e007468441b12-adidas-face-covers-3-pack-wild.jpg",
    price: "999.00",
    name: "Face Cover- Not For Medical Use",
    type: "Original"

},
{
    imgURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c72be5444d74daf94efad1700b8d6e9_9366/AEROREADY_Sereno_Cut_3-Stripes_Slim_Track_Jacket_Blue_H28903_01_laydown.jpg",
    price: "8999.00",
    name: "Adicolor Velour Track Jacket",
    type: "Original"

},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/5457abfb94a8440fa573ad7a008a31f9_9366/Adilette_Lite_Slides_Black_GZ6196.jpg",
    price: "2999.00",
    name: "Adilette Lite Slides",
    type: "Original"

},
{
    imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbwNCuyO3LEDJdXeIII5F0SGpK8CNXi6ZhOw&s",
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



