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
const productFooterItems = document.querySelectorAll('.product-footer-item');


const succulentBox = productFooterItems[0];
const succulentImage = succulentBox.children[0];
const succulentTitle = succulentBox.children[1];

const cactusBox = productFooterItems[1];
const cactusImage = cactusBox.children[0];
const cactusTitle = cactusBox.children[1];


const terraniumBox = productFooterItems[2];
const terraniumImage = terraniumBox.children[0];
const terraniumTitle = terraniumBox.children[1];



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

        const cancelItem = document.querySelectorAll('.cancelItem'); document.getElementById("dropdownMenuButton").classList.add('show')
        document.querySelector(".dropdown-menu").classList.add('show');
        cancelItem.forEach(btn => btn.addEventListener('click', plants.removeOnBtn));
    
    }


    // remove items on 'trash' btn
    removeOnBtn(e) {

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
    }
    /// function changing the image product
    changeImage = (e) => {

        window.scrollTo(0, 0);

        const mainProduct = new Object(); //generate new object
        mainProduct.img = e.target.parentNode.children[0].src;
        mainProduct.name = e.target.parentNode.children[1].innerText;
        mainProduct.price = e.target.parentNode.children[2].innerText;


        bigImage.src = `images/${(mainProduct.name).toLowerCase()}1.jpg`; // change the big image

        let i = 0;
        smallImages.forEach(img => {
            i++;
            img.children[0].src = `images/${(mainProduct.name).toLowerCase()}${i}.jpg`;
        }); // change the small images
        productName.textContent = mainProduct.name; //change name of product
        productPrice.textContent = mainProduct.price; // change price of product

        breadcrumbItemActive.textContent = mainProduct.name; // change the breadcrumb 

    }
    /// the same function like changeImage but on touchable devices

    changeImageOfTouch = (e) => {
        window.scrollTo(0, 0);
        const mainProduct = new Object();
        mainProduct.img = e.touches[0].target.src;
        mainProduct.name = e.touches[0].target.parentNode.children[1].innerText;
        mainProduct.price = e.touches[0].target.parentNode.children[2].innerText;

        bigImage.src = `images/${(mainProduct.name).toLowerCase()}1.jpg`;
        let i = 0;
        smallImages.forEach(img => {
            i++;
            img.children[0].src = `images/${(mainProduct.name).toLowerCase()}${i}.jpg`;
        });
        productName.textContent = mainProduct.name;
        productPrice.textContent = mainProduct.price;
    }


    /// Function change the other plants in footer

    footerImages = (e) => {

        plants.changeImage(e)

        setTimeout(() => {
            let nameTarget = this.name;

            function checkWord(namePlant) {
                if (typeof namePlant == 'object') {
                    return namePlant.name == nameTarget
                } else {
                    return namePlant == nameTarget
                }

            }

            let indexPlanties = planties.findIndex(checkWord);

            planties.splice(indexPlanties, 1);

            for (let j = 0; j < planties.length; j++) {
                const pfi = productFooterItems[j];
                pfi.children[0].src = planties[j].img;
                pfi.children[1].innerText = planties[j].name;
                pfi.children[2].innerText = planties[j].price;

            }

        }, 1000);

        planties = [bonsai, succulent, terranium, cactus];
    };



    nextPhoto = (e) => {


        let imageName = productName.textContent.toLowerCase();

        if (bigImage.src.match(`images/${imageName}1.jpg`)) {
            bigImage.src = `images/${imageName}2.jpg`;
        } else if (bigImage.src.match(`images/${imageName}2.jpg`)) {
            bigImage.src = `images/${imageName}3.jpg`;
        } else {
            bigImage.src = `images/${imageName}1.jpg`;
        }
    }

    previousPhoto = (e) => {


        let imageName = productName.textContent.toLowerCase();

        if (bigImage.src.match(`images/${imageName}1.jpg`)) {
            bigImage.src = `images/${imageName}3.jpg`;
        } else if (bigImage.src.match(`images/${imageName}2.jpg`)) {
            bigImage.src = `images/${imageName}1.jpg`;
        } else {
            bigImage.src = `images/${imageName}2.jpg`;
        }
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




// Change image listeners // 
succulentImage.addEventListener('click', succulent.footerImages);
cactusImage.addEventListener('click', cactus.footerImages);
terraniumImage.addEventListener('click', terranium.footerImages);

next.addEventListener('click', plants.nextPhoto);
previous.addEventListener('click', plants.previousPhoto);

/// On touchable devices ///
succulentTitle.addEventListener('touchstart', succulent.footerImages);
cactusTitle.addEventListener('touchstart', cactus.footerImages);
terraniumTitle.addEventListener('touchstart', terranium.footerImages);