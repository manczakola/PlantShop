///// Variables/////

const btnShopping = document.querySelectorAll(".btn-outline-secondary");

// shopping cart variables
const shoppingCartItems = document.querySelector(".shopping-cart-items");
const shoppingCartDropdown = document.querySelector(".shopping-cart");
const dropdownMenu = document.querySelector(".dropdown-menu");
const totalMoney = document.querySelector(".lighter-text");
const badge = document.querySelector(".badge");
const shoppingCartBtn = document.querySelector("#dropdownMenuButton");
const numberOfItems = document.querySelector("number");
let money = [];

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


    addToShoppingCart(e) {
        const shoppingCart = new Object(); //create new object when click on 'add to chart' btn
        shoppingCart.value = parseFloat(productPrice.innerText);
        shoppingCart.name = productName.innerText;
        shoppingCart.img = `images/${productName.innerText.toLowerCase()}1.jpg`;
        // download values of this object

        // add li items on shopping cart
        shoppingCartItems.innerHTML += `
        <li class="clearfix">
        <img src=${shoppingCart.img} />
        <span class="item-name">${shoppingCart.name}</span>
        <span class="item-price">${shoppingCart.value}$</span>
        <span class='cancelItem btn btn-outline'></span>
        </li>
        `;
        window.scrollTo(0, 0);
        document.querySelector('.navbar-toggler').classList.remove('collapsed');
        document.querySelector("#navbarToggler").classList.add('show');
        shoppingCartBtn.classList.add('show');
        shoppingCartBtn.parentNode.children[0].children[0].innerText++; // change number of cart items

        // remove items on x btn

        const cancelItem = document.querySelectorAll("span.cancelItem.btn.btn-outline");

        cancelItem.forEach(btn => btn.addEventListener('click', (e) => {

            let cancelValue = parseFloat(e.target.parentNode.children[2].innerText); // value in $ of cancel item
            e.target.parentNode.remove(); // remove li item
            dropdownMenu.classList.add('show'); // dont hide ul list of shopping cart when remove items
            shoppingCartBtn.parentNode.children[0].children[0].innerText--; // change number of cart items
            money.pop(cancelValue); // remove $$ from money array

            if (money.length > 0) {
                var total = money.reduce(function (a, b) {
                    return a + b;
                });
            };

            if (money.length == 0) {
                totalMoney.innerText = `Total:0$`;
                badge.innerText = `0`;
                dropdownMenu.classList.remove('show'); // when nothing is in the shopping cart, hide ul list
            } else {
                totalMoney.innerText = `Total: ${total}$`;
                badge.innerText = `${money.length}`;
            }
        }));

        dropdownMenu.classList.add('show'); // show ul list of shopping cart when remove the items

        // total money counting when add items to shopping cart

        money.push(shoppingCart.value);

        var total = money.reduce(function (a, b) {
            return a + b;
        });


        totalMoney.innerText = `Total: ${total}$`;
        badge.innerText = `${money.length}`;



    };


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
        console.log(bigImage.src);
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
const bonsai = new Plants('Bonsai', '99,99$', 'images/bonsai3.jpg', 0);
const succulent = new Plants('Succulent', '19,99$', 'images/succulent1.jpg', 1);
const terranium = new Plants('Terranium', '59,99$', 'images/terranium1.jpg', 2);
const cactus = new Plants('Cactus', '29,99$', 'images/cactus1.jpg', 3);

let planties = [bonsai, succulent, terranium, cactus];










///// Event listeners /////

btnShopping.forEach((btn) =>
    btn.addEventListener("click", plants.addToShoppingCart));

// event to change pictures on click in main section    
smallImages.forEach(img => img.addEventListener('click', (e) => {

    const srcOfClickImage = img.children[0].src;

    bigImage.src = srcOfClickImage;
}));

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




