"use strict";
//CHECKLIST
// winkelmandje:::
// Plaats in het aside-element op de shoppagina jouw winkelwandje.
// Zorg ervoor dat een gebruiker vanuit deze pagina een product kan toevoegen aan het winkelmandje.
// Als een product meermaals wordt toegevoegd, staat dit maar 1 keer in de lijst en met aanduiding van het aantal.
//
// wishlist:::
// Als je op het wishlist-symbool op jouw webshop klikt, wordt dit
// symbool “gekleurd” zodat het duidelijk is dat het product op de
// verlanglijst staat.
//  Als een gebruiker nog eens op het symbool klikt, gaat het product uit
// de verlanglijst.

// const producten = [{voornaam: "Thomas", achternaam: "Keirsen", totaal: 10}, {voornaam: "Indy", achternaam: "Keirsen", totaal: 20}]
// const totaal = producten.reduce((acc, curr) => acc + curr.totaal, 0);
//
// console.log(totaal);

// const producten = [{voornaam: "Thomas", achternaam: "Keirsen", type: "rode kaars", totaal: 10}, {voornaam: "Indy", achternaam: "Keirsen", type: "rode kaars", totaal: 20}, {voornaam: "Indy", achternaam: "Keirsen", type: "gele kaars", totaal: 20}]
// const iets = producten.reduce((acc, curr) => ({...acc, [curr.type]: (acc[curr.type] ?? 0) + curr.totaal}), {});
//
// console.log(iets);

//TODO productName and productSize/type different element
//TODO remove from cart
//TODO make shopping list sticky
//TODO wishlists
//TODO rename variables
//TODO isolate functions
//TODO read more about event listeners
//TODO design total shopping cart
//TODO add sub total | VAT | price to pay

//thoughts wrapped
//THOUGHTS (bigger picture)
//add remove 1x button
//add dropdown menu for quantity
//add remove item
//sticky shopping list
//complete feedback form
//make product pages for each product
//on product page make button or form for reviews
//make review.html maybe or add some extra stuff that works
// double check feedback form
// check if color palette from dark mode suits the project
//evaluate if existing JS needs to be rewritten
//if needed script for each function or aspect of interactive environment

//THOUGHTS (related to these features)
//make function product only about product
//get values for shopping list in global variables
//make function shopping list only about shopping list
//think of getting the event listeners outside scope products and shopping list, learn the thoughts and process.
//rename variables --> they are not clear at all
//make more and bigger titles to help thought process
//subtotal --> vat on top --> to pay price
// view cart button ?
// checkout button with empty link
//no accent colors for shopping list items --> grey odd - white even
// total/checkout container accent color but gentle
//make the item name in cart list the link to product page

//BRAINSTORM
//product.foreach, only items
//event listener on add to cart
//event listener on remove from cart
//write logics globally, when everything works narrow down within scopes.
//ignore visuals and style until logics work
//fuck webtechnologie
//wishlisted items

/*******************************************
 *         variables and objects           *
 *******************************************/
const products = [
    {
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
]; //12 products

const shoppingCart = [];
const shoppingCartContainer = document.querySelector(".shopping-list-container");
//get the container where all the product-container's should be placed in.
const containerWithAllProducts = document.querySelector(".all-products-container");


/*******************************************
 *               products                  *
 *******************************************/
products.forEach(product => {
    const productContainer = document.createElement("div");
    productContainer.classList.add('product-container');

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add('button-container');

    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add("add-to-cart");
    addToCartButton.textContent = "Toevoegen";

    //first we create the attribute
    const attributeProductContainer = document.createElement("a");
    //then we give it the proper href that's located in the object
    attributeProductContainer.href = product.href;
    //inside this attribute we write the html like we would in html.
    //I chose to make the effort putting it here, since I dislike checking 12 times same code.
    attributeProductContainer.innerHTML =`
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
      </div>`;

    buttonContainer.appendChild(addToCartButton);
    attributeProductContainer.appendChild(buttonContainer);
    productContainer.appendChild(attributeProductContainer);
    containerWithAllProducts.appendChild(productContainer);

    //when pressed, check if item already exists
    //!exist > create item
    //exists > increases quantity
    //after if else call renderShoppingList to update result from if else
    addToCartButton.addEventListener("click", (event) => {
        event.preventDefault(); // stop bubbling --> making stuff not click through

        const itemExists = shoppingCart.find(item => item.productName === product.productName); //bool to check if item is already in the list
        if (!itemExists) {
            shoppingCart.push({
                productName: product.productName,
                quantity: 1,
                price: product.price,
            });

        } else {
            itemExists.quantity += 1;
        }
        renderShoppingCart();

    }); //end of addToCartButton.event listener

}); //end products.forEach


/*******************************************
 *            shopping cart                *
 *******************************************/
function renderShoppingCart() {
    //reset
    shoppingCartContainer.innerHTML = ""; //clear existing items
    let sumShoppingCartItemsPrice = 0; //reset total price for new item

    shoppingCart.forEach(cartItem => {
        const totalPriceCartItem = cartItem.price * cartItem.quantity; //
        sumShoppingCartItemsPrice += totalPriceCartItem;

        //create cartItem
        const shoppingCartItem = document.createElement("div");
        shoppingCartItem.classList.add("shopping-cart-item");
        //add html within the created container
        shoppingCartItem.innerHTML =
            `<h2 class="product-name">${cartItem.productName}</h2>
          <article class="price-quantity">      
            <h3 class="price">€${cartItem.price}</h3>
            <h3 class="quantity">x${cartItem.quantity}</h3>
            <h3 class="total-price">€${totalPriceCartItem.toFixed(2)}</h3>
          </article>          
        `;//TODO change class for article accordingly

        shoppingCartContainer.appendChild(shoppingCartItem);
    }); //end of shoppingCart.forEach

    //TODO add extra container here with sum of all cart items
}



