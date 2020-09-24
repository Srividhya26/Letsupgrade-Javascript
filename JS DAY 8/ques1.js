let products = [
    {
        id : 1,
        name : "Black dial smart watch",
        color : "Black and White",
        price : 1500,
        image : "product1.jpg",
        description : "Black stylish watch for women"

    },
    {
        id : 2,
        name : "Blue dial stylish watch",
        color : "Blue and Silver",
        price : 1600,
        image : "product2.jpg",
        description : "Blue stylish watch for women"
    },
    {
        id : 3,
        name : "Round dial watch",
        color : "Black",
        price : 2000,
        image : "product7.jpg",
        description : "Stylish watch for men"
    },
    {
        id : 4,
        name : "Black dial watch",
        color : "Black",
        price : 1000,
        image : "product4.jpg",
        description : "Blue luxury watches for men"
    },
    {
        id : 5,
        name : "Brown stylish watch",
        color : "Brown",
        price : 2500,
        image : "product5.jpg",
        description : "Brown stylish watch with date and time for men"

    },
    {
        id : 6,
        name : "Black luxury watch",
        color : "Black",
        price : 2500,
        image : "product6.jpg",
        description : "Waterproof consistency watch for women"
    },
    {
        id : 7,
        name : "Brown normal watch",
        color : "Brown",
        price : 900,
        image : "product3.jpg",
        description : "Normal watches for men"
    },
    {
        id : 8,
        name : "Silver watch",
        color : "Silver",
        price : 2300,
        image : "product8.jpg",
        description : "Super branded womens watch"

    },
    {
        id : 9,
        name : "Golden watch",
        color : "Gold",
        price : 2590,
        image : "product9.jpg",
        description : "Gold coated watch for women"
    },
    {
        id : 10,
        name : "Black watch",
        color : "Black",
        price : 3000,
        image : "product10.jpg",
        description : "Black stylish watch for men"
    },
    {
        id : 11,
        name : "Round dial watch",
        color : "Grey",
        price : 1900,
        image : "product11.jpg",
        description : "Super stylish watch for men"
    },
    {
        id : 12,
        name : "Black stone watch",
        color : "Black",
        price : 800,
        image : "product12.jpg",
        description : "Black fashion watch for women"
    }
];

cart = [];

function displayProducts(productsData , who = "productwrapper"){
    let productstr = "" ;
    productsData .forEach(function(product,index){
        if(who == "productwrapper"){
            productstr += 
            `<div class = "product">
                <div class = "image">
                    <img src = "productimages/${product.image}" width = "100%"/>
                </div>
                <h3> ${product.name} </h3>
                <p> Color : ${product.color} </p>
                <p> Price : ${product.price} </p>
                <p> ${product.description} </p>
                <p>
                    <button onclick = "addToCart(${product.id})"> Add to cart </button>
                </p>
            </div>`;
        }
        else if (who == "cart") {
            productstr += ` <div class="product">
              <div class="prodimg">
                <img src="productimages/${product.image}" width="100%" />
              </div>
              <h3>${product.name}</h3>
              <p>Price : ${product.price}$</p>
              <p>Color : ${product.color}</p>
              <p>${product.description}</p>
              <p>
                <button onclick="removeFromCart(${product.id})">Remove from Cart</button>
              </p>
            </div>`;
          }
    });
    document.getElementById(who).innerHTML = productstr ;
}

displayProducts(products);

function getProductByID(productArray, id){
    return productArray.find(function (product) {
        return product.id == id;
      });
    }

function addToCart(id){
    let pro = getProductByID(products,id);
    let existing = cart.find(item => item.id === pro.id);  
    if(existing){
        alert("Item is already in the Cart");
    }
    else{
        cart.push(pro);
        displayProducts(cart,"cart");
        count = cart.length;
        document.getElementsByClassName("count")[0].innerHTML = count;
    }
}

function filterProduct(filteredProducts){
    let minimumPrice = document.getElementById("minp");
    let maximumPrice = document.getElementById("maxp");
    filteredProducts = products.filter(function(product) {
        product.price >= minimumPrice && product.price <= maximumPrice
});

displayProducts(filteredProducts);

}


function removeFromCart(id) {
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });

    cart.splice(index, 1);
    displayProducts(cart, "cart");
  }




