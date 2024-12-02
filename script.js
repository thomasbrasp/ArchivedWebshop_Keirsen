"use strict";

//TODO

/*******************************************
 *         variables and objects           *
 *******************************************/
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

    const isItemInShoppingList = shoppingList.find(item => item.productName === product.productName);

    if (!isItemInShoppingList){

      shoppingList.push({productName: product.productName, quantity: 1, price: product.price})     //puts object into array
    }
    else
    {
      isItemInShoppingList.quantity += 1;
    }


    /*******************************************
     *            shopping list                 *
     *******************************************/
    //clear shopping list before rewriting it
    shoppingListContainer.innerHTML = "";
    let totalPriceList = 0;
    //rebuild shopping list with updated array of items
    shoppingList.forEach(shoppingList => {
      let totalPriceItems = (shoppingList.price * shoppingList.quantity); //calculate object.quantity * object.price
      const shoppingListItem = document.createElement("div");
      shoppingListItem.classList.add("shopping-list-item");

      //BEWARE it's easy to overlook the backticks
      shoppingListItem.innerHTML =
          `<h2 class="product-name">${shoppingList.productName}</h2>
          <article class="price-quantity">         
            <h3 class="price">€${shoppingList.price}</h3>
            <h3 class="quantity">x${shoppingList.quantity}</h3>
<!--            <h3 class="total-price">€${totalPriceItems.toFixed(2)}</h3>-->
<!--            <button class="remove-from-cart">remove</button>-->
          </article>`
      totalPriceList += totalPriceItems; //before loop ends we store the calculated price into the grand total, this way we use the value before it gets reset.
      shoppingListContainer.appendChild(shoppingListItem);
    }); //end of shoppingList.forEach

    //after adding each unique product to shopping list we also add a container with total price
    const shoppingListTotal = document.createElement("div");
    shoppingListTotal.classList.add("shopping-list-total");

    //after creating the container and giving it a class we write the html

    shoppingListTotal.innerHTML =
      `<h2 class="total-price">${totalPriceList.toFixed(2)}</h2>
      `
    shoppingListContainer.appendChild(shoppingListTotal);


  });


  /*******************************************
   *               products                  *
   *******************************************/
  //first we create the attribute
  const linkVariable = document.createElement("a");
  //then we give it the proper href that's located in the object
  linkVariable.href = product.href;
  //inside this attribute we write the html like we would in html.
  //I chose to make the effort putting it here, since i dislike checking 12 times same code.
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
