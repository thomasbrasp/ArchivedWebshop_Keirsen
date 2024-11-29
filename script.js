"use strict";

const products = [
  {
    productId: 1,
    productName: "Cuban Tobacco - 30cl",
    price: 11.11,
    imgSrcMain: "images/Products/IMG_2398.JPG",
    imgSrcHover: "images/Products/IMG_2400.JPG",
    imgAlt: "Cuban Tobacco",
    href: "CubanTobacco.html",
    description: "Een luxe geur van rijke tabak en traditie. Perfect voor een warme, verfijnde sfeer."
  },
  {
    productName: "Sandalwood - 30cl",
    price: 22.22,
    imgSrcMain: "images/Products/IMG_2401.JPG",
    imgSrcHover: "images/Products/IMG_2405.JPG",
    imgAlt: "Sandalwood",
    href: "Sandalwood.html",
    description: "Een warme, houtachtige geur die sereniteit brengt. Ideaal voor een rustgevende ambiance."
  },
  {
    productName: "Lemongrass - 40cl",
    price: 33.33,
    imgSrcMain: "images/Products/IMG_2402.JPG",
    imgSrcHover: "images/Products/IMG_2404.JPG",
    imgAlt: "Lemongrass",
    href: "Lemongrass.html",
    description: "Een frisse, citrusachtige geur die energie geeft. Perfect om elke ruimte op te frissen."
  },
  {
    productName: "Clean Cotton - 30cl",
    price: 44.44,
    imgSrcMain: "images/Products/IMG_2387.JPG",
    imgSrcHover: "images/Products/IMG_2416.JPG",
    imgAlt: "Clean Cotton",
    href: "CleanCotton.html",
    description: "Een frisse geur van schoon linnen. Brengt een gevoel van puurheid en kalmte."
  },
  {
    productName: "Lavender - 50cl",
    price: 55.55,
    imgSrcMain: "images/Products/IMG_2425.JPG",
    imgSrcHover: "images/Products/IMG_2428.JPG",
    imgAlt: "Lavender",
    href: "Lavender.html",
    description: "Een klassieke bloemengeur die ontspanning biedt. Ideaal voor rust en zelfzorg."
  },
  {
    productName: "Vanilla Bean - 35cl",
    price: 66.66,
    imgSrcMain: "images/Products/IMG_2458.JPG",
    imgSrcHover: "images/Products/IMG_2462.JPG",
    imgAlt: "Vanilla Bean",
    href: "VanillaBean.html",
    description: "Een warme, romige geur die comfort brengt. Perfect voor een gezellige sfeer."
  },
  {
    productName: "Ocean Breeze - 40cl",
    price: 77.77,
    imgSrcMain: "images/Products/IMG_2457.JPG",
    imgSrcHover: "images/Products/IMG_2461.JPG",
    imgAlt: "Ocean Breeze",
    href: "OceanBreeze.html",
    description: "De frisse geur van de zee in huis. Ideaal voor een kalme, ontspannende ambiance."
  },
  {
    productName: "Cedar Wood - 45cl",
    price: 88.88,
    imgSrcMain: "images/Products/IMG_2407.JPG",
    imgSrcHover: "images/Products/IMG_2415.JPG",
    imgAlt: "Cedar Wood",
    href: "CedarWood.html",
    description: "Een rijke, aardse geur met houtachtige tonen. Perfect om rust en comfort te brengen."
  },
  {
    productName: "Eucalyptus Mint - 30cl",
    price: 99.99,
    imgSrcMain: "images/Products/IMG_2426.JPG",
    imgSrcHover: "images/Products/IMG_2427.JPG",
    imgAlt: "Eucalyptus Mint",
    href: "EucalyptusMint.html",
    description: "Een frisse mix van munt en eucalyptus. Zuivert de lucht en ontspant de zintuigen."
  },
  {
    productName: "Pine Forest - 40cl",
    price: 100.00,
    imgSrcMain: "images/Products/IMG_2401.JPG",
    imgSrcHover: "images/Products/IMG_2405.JPG",
    imgAlt: "Pine Forest",
    href: "PineForest.html",
    description: "De geur van een serene dennenbos. Ideaal voor een winterse, gezellige ambiance."
  },
  {
    productName: "Midnight Jasmine - 35cl",
    price: 49.99,
    imgSrcMain: "images/Products/IMG_2401.JPG",
    imgSrcHover: "images/Products/IMG_2405.JPG",
    imgAlt: "Midnight Jasmine",
    href: "MidnightJasmine.html",
    description: "Een bloemige geur met hints van oranjebloesem. Zorgt voor een romantische sfeer."
  },
  {
    productName: "Cinnamon Spice - 30cl",
    price: 39.99,
    imgSrcMain: "images/Products/IMG_2401.JPG",
    imgSrcHover: "images/Products/IMG_2405.JPG",
    imgAlt: "Cinnamon Spice",
    href: "CinnamonSpice.html",
    description: "Warme tonen van kaneel en kruiden. Perfect voor gezellige en feestelijke momenten."
  }
];
const shoppingList = [];

const shoppingListContainer = document.querySelector(".shopping-list-container");


//get the container where all the product-container's should be placed in.
const allProductsContainer = document.querySelector(".all-products-container");
console.log("hihi")
products.forEach(product => {
  const productContainer = document.createElement("div");
  productContainer.classList.add('product-container');

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add('button-container');

  const addToCardButton = document.createElement("button");
  addToCardButton.classList.add("add-to-cart");
  addToCardButton.textContent = "addtocard";
  addToCardButton.addEventListener("click", (event) => {
    // stop bubbling --> making stuff not click through
    event.preventDefault();
    shoppingList.push({productName: product.productName, quantity: 1, price: product.price})

    // dit moet hier uit
    // dit moet hier uit
    const shoppingListItem = document.createElement("div");
    shoppingListItem.classList.add("shopping-list-item")
    shoppingListItem.innerHTML =
      `
          <h2 class="product-name">${shoppingList.productName}</h2>
          <h3 class="price">€${shoppingList.price}</h3>     
    `
    shoppingListContainer.appendChild(shoppingListItem)
    //dit moet hier uit
    //dit moet hier uit
    console.log("hihi")});





  const linkVariable = document.createElement("a");
  linkVariable.href = product.href;
  linkVariable.innerHTML =
    `
      <div class="img-container">
        <img alt="${product.imgAlt}" class="product-image-main" src="${product.imgSrcMain}"/>
        <img alt="${product.imgAlt}" class="product-image-hover" src="${product.imgSrcHover}"/>
        <div class="product-info">
          <h2 class="product-name">${product.productName}</h2>
          <h3 class="price">€${product.price}</h3>
          <p>
            ${product.description}
          </p>
        </div>
      </div>
    `;

  buttonContainer.appendChild(addToCardButton);
  linkVariable.appendChild(buttonContainer);
  productContainer.appendChild(linkVariable);
  allProductsContainer.appendChild(productContainer);



});


// let shoppingCartButton = document.querySelector('#shopping-cart-button');
// let products = document.querySelectorAll(".product-container h3")
// console.log(products[0]);
// let counter = 0;
//
// function addOnClick() {
//   counter += 1;
// }
//
// shoppingCartButton.addEventListener("click", addOnClick)
//
// // shoppingCartButton.addEventListener("click", "function");
// // function has to be replaced with a function u want the eventlistener to work with

