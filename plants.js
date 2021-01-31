///// Variables/////

const btnShopping = document.querySelectorAll(".btn-outline-secondary");
const hamburgerMenuBtn = document.querySelector("body > div > nav.navbar.navbar-expand-lg.navbar-light > div > button");
// shopping cart variables
const shoppingCartItems = document.querySelector(".shopping-cart-items");
const shoppingCartDropdown = document.querySelector(".shopping-cart");
const dropdownMenu = document.querySelector(".dropdown-menu");
const totalMoney = document.querySelector(".lighter-text");
const badgeInShoppingCart = document.querySelector(".badge");
const shoppingCartBtn = document.querySelector("#dropdownMenuButton");
shoppingCartBtn.style.boxShadow = 'none';
const numberOfItems = document.querySelector(".number");
let money = [];
let badge = 0;
const items = JSON.parse(localStorage.getItem('item')) || [];
const itemsLength = items.length;


/// images variables
const bigImage = document.querySelector("div.big-image > img");
const smallImages = document.querySelectorAll('.image-item');
const previous = document.querySelector('.fa-chevron-left');
const next = document.querySelector('.fa-chevron-right');



const succulentBox = document.querySelectorAll('#succulent');
const succulentImage = document.querySelectorAll('#succulent')[0].children[0];
const succulentTitle = document.querySelectorAll('#succulent')[0].children[1];

const cactusBox = document.querySelectorAll('#cactus');
const cactusImage = document.querySelectorAll('#cactus')[0].children[0];
const cactusTitle = document.querySelectorAll('#cactus')[0].children[1];


const terraniumBox = document.querySelectorAll('#terranium');
const terraniumImage = document.querySelectorAll('#terranium')[0].children[0];
const terraniumTitle = document.querySelectorAll('#terranium')[0].children[1];

const productFooterItems = document.querySelectorAll('.product-footer-item')

/// Product description variables ///
const productName = document.querySelector('.product-title h1');
const productPrice = document.querySelector('.product-price h3');
const productDescriptionParagraph = document.querySelector('.product-description p');

// Breadcrumb variables
const breadcrumb = document.querySelectorAll('.breadcrumb');
const breadcrumbItem = document.querySelector('.breadcrumb-item');
const breadcrumbItemActive = document.querySelector('.breadcrumb-item.active');






class Plants {
    constructor(name, price, img, index) {
        this.name = name;
        this.price = price;
        this.img = img;
        this.index = index;
    }

    ///// Functions/////
    addtoLocalStorage() {
        const localStorageShoppingCart = JSON.parse(localStorage.getItem('item'));



        if (localStorageShoppingCart) {
            for (let i = 0; i < localStorageShoppingCart.length; i++) {

                shoppingCartItems.innerHTML +=
                    `
                <li class="clearfix">
                <img src=${localStorageShoppingCart[i].img} />
                <span class="item-name">${localStorageShoppingCart[i].name}</span>
                <span class="item-price">${localStorageShoppingCart[i].value}$</span>
                <span class='cancelItem btn btn-outline'></span>
                </li>
                `;

                money.push(localStorageShoppingCart[i].value);
                badge++;

                let total = money.reduce(function (a, b) {
                    return a + b;
                });


                totalMoney.innerText = `Total: ${total}$`;
                badgeInShoppingCart.innerText = badge;
                numberOfItems.innerText = badge;


            };
        } else {
            return
        }

    }


    addToShoppingCart(e) {

        const shoppingCart = new Object(); //create new object when click on 'add to chart' btn
        shoppingCart.value = parseInt(productPrice.innerText);
        shoppingCart.name = productName.innerText;
        shoppingCart.img = `images/${productName.innerText.toLowerCase()}1.jpg`;
        // download values of this object


        // create object in local storage
        localStorage.setItem('item', JSON.stringify(shoppingCart));
        var parsItem = JSON.parse(localStorage.getItem('item'));

        // push object to array

        if (items) {
            items.push(parsItem);
        } else {
            return items;
        }

        // set array of objects to local storage
        localStorage.setItem('item', JSON.stringify(items));

        // call function of add parsItem to shopping cart
        plants.listOfObject(items, shoppingCartItems);

        shoppingCartBtn.parentNode.children[0].children[0].innerText++; // change number of cart items


        // total money counting when add items to shopping cart

        money.push(shoppingCart.value);

        var total = money.reduce(function (a, b) {
            return a + b;
        });


        totalMoney.innerText = `Total: ${total}$`;
        badgeInShoppingCart.innerText = `${money.length}`;

        plants.removeFromShoppingCart(e)
    };

    // add li items on shopping cart

    listOfObject(arr = [], objectList) {
        objectList.innerHTML = arr.map((plate, i) => {
            return `
            <li class="clearfix">
            <img src=${items[i].img} />
            <span class="item-name">${items[i].name}</span>
            <span class="item-price">${items[i].value}$</span>
            <span class='cancelItem btn btn-outline'></span>
            </li>
            `
        }).join('')
    }

    removeFromShoppingCart(e) {

        const cancelItem = document.querySelectorAll('.cancelItem');





        // remove items on 'trash' btn

        cancelItem.forEach(btn => btn.addEventListener('click', (e) => {

        // dont hide ul list of shopping cart when remove items
        document.getElementById("dropdownMenuButton").classList.add('show')
        document.querySelector(".dropdown-menu").classList.add('show');
            // value in $ of cancel item
            let cancelValue = parseFloat(e.target.parentNode.children[2].innerText);

            e.target.parentNode.remove(); // remove li item
            items.pop(e.target.parentNode) //remove item from items array
            localStorage.setItem('item', JSON.stringify(items)); // update localStorage


            // change number of cart items
            shoppingCartBtn.parentNode.children[0].children[0].innerText--;

            money.pop(cancelValue); // remove $$ from money array

            if (money.length > 0) {
                var total = money.reduce(function (a, b) {
                    return a + b;
                });
            };

            if (money.length == 0) {
                totalMoney.innerText = `Total:0$`;
                badgeInShoppingCart.innerText = `0`;
                dropdownMenu.classList.remove('show'); // when nothing is in the shopping cart, hide ul list
            } else {
                totalMoney.innerText = `Total: ${total}$`;
                badgeInShoppingCart.innerText--;
            }
        }));


    }



     
  





}
const plants = new Plants();
const bonsai = new Plants('Bonsai', '99$', 'images/bonsai3.jpg', 0);
const succulent = new Plants('Succulent', '19$', 'images/succulent1.jpg', 1);
const terranium = new Plants('Terranium', '59$', 'images/terranium1.jpg', 2);
const cactus = new Plants('Cactus', '29$', 'images/cactus1.jpg', 3);

let planties = [bonsai, succulent, terranium, cactus];










///// Event listeners /////
document.addEventListener('DOMContentLoaded', plants.addtoLocalStorage);
document.addEventListener('DOMContentLoaded', plants.removeFromShoppingCart);


btnShopping.forEach((btn) =>
    btn.addEventListener("click", plants.addToShoppingCart));

// event to change pictures on click in main section    
smallImages.forEach(img => img.addEventListener('click', (e) => {
    const srcOfClickImage = img.children[0].src;
    bigImage.src = srcOfClickImage;
}));

hamburgerMenuBtn.addEventListener('click', () => {
    document.querySelector("#navbarToggler > div > ul").classList.toggle('active')
})

