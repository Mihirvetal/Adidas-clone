var womenOriginalsData = [{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/29445f39431b4197b864d1600649f6ae_9366/Gazelle_Indoor_Shoes_Pink_IE7002_01_standard.jpg",
    price: "9999.00",
    name: "Superstar Shoes",
    type: "Women originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/b89a77a2bf9a4c7db3fa336fab012ddd_9366/Supernova_Stride_Running_Shoes_Black_IH2909_HM1.jpg",
    price: "999.00",
    name: "Shoes",
    type: "Women originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/7d4da4f2baf2481eb858ad1600f6f407_9366/Ultraboost_5_Shoes_Grey_IH7709_HM1.jpg",
    price: "8999.00",
    name: "Shoes",
    type: "Women originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/4476b3bf351a41dea7672b1c3d1e37cb_9366/Supernova_Rise_Running_Shoes_Green_IE1064_HM1.jpg",
    price: "4999.00",
    name: "Shoes",
    type: "Women originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/1151f8ccf1c4465e95cca7ea464fe6b4_9366/Supernova_Stride_Running_Shoes_White_IE8181_HM1.jpg",
    price: "5999.00",
    name: "Shoes",
    type: "Women originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/e2d18c60898d404bb0d3baf4db16d069_9366/Samba_Golf_Shoes_White_IH5167_01_standard.jpg",
    price: "2299.00",
    name: "Shoes",
    type: "Women originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/205dd7ee954f488485e0b6fd875f3b54_9366/F50_League_Firm-Multi-Ground_Boots_Blue_IE0603_22_model.jpg",
    price: "3599.00",
    name: "Shoes",
    type: "Women originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/491ce1454b7a4d1984dd4c960ea1d14e_9366/Supernova_Rise_Running_Shoes_Black_ID3589_HM1.jpg",
    price: "2900.00",
    name: "Shoes",
    type: "Women originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/c2cb718724e945e6bbc211e01f2e1913_9366/adidas_Switch_Fwd_2_Running_Shoes_Grey_IE5885_01_00_standard.jpg",
    price: "2900.00",
    name: "Shoes",
    type: "Women originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/959252325c3d435285dc96d8c07c9eb3_9366/adidas_Switch_Fwd_2_Running_Shoes_White_ID0533_01_standard.jpg",
    price: "2900.00",
    name: "Shoes",
    type: "Women originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/97f86eede1374615a058a81700a27444_9366/Gazelle_Shoes_Black_CQ2809_01_standard.jpg",
    price: "2900.00",
    name: "Shoes",
    type: "Women originals",
    new: "new"
},

{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/698e41ae0196408eb16aa7fb008046ad_9366/Gazelle_Shoes_Blue_BB5478_01_standard.jpg",
    price: "3900.00",
    name: "Shoes",
    type: "Women originals",
    new: "new"
}
];

var bestOfAdidas = [{
    imgURL: "https://i.pinimg.com/736x/ba/15/f4/ba15f4b524c2743e962457b4df7b81ea.jpg",
    price: "999.00",
    name: "Face Cover- Not For Medical Use",
    type: " Women Original"

},
{
    imgURL: "https://assets.adidas.com/images/w_600,f_auto,q_auto/84ff589e5bcf476eb8feaf0000895fff_9366/Adicolor_Classics_Firebird_Track_Jacket_Burgundy_IB7406.jpg",
    price: "8999.00",
    name: "Adicolor Velour Track Jacket",
    type: "Women Original"

},
{
    imgURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d011cd2402284b34a35dad790091c267_9366/Adilette_Lite_Slides_Pink_GZ6198_01_standard.jpg",
    price: "2999.00",
    name: "Adilette Lite Slides",
    type: "Women Original"

},
{
    imgURL: "https://www.tradeinn.com/f/13785/137858412_5/adidas-originals-face-cover-3-units-face-mask.webp",
    price: "999.00",
    name: "Face Cover- Not For Medical Use",
    type: "Women Original"

}
];
var wishlist = JSON.parse(localStorage.getItem("wishlistdb")) || []
var len = wishlist.length;
var cartlist = JSON.parse(localStorage.getItem("cartlistdb")) || []
var le = cartlist.length;

displayData(womenOriginalsData);
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



