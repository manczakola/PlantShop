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

const succulentBox = document.querySelectorAll('#succulent');
const succulentImage = document.querySelectorAll('#succulent')[0].children[0];

const cactusBox = document.querySelectorAll('#cactus');
const cactusImage = document.querySelectorAll('#cactus')[0].children[0];


const terraniumBox = document.querySelectorAll('#terranium');
const terraniumImage = document.querySelectorAll('#terranium')[0].children[0];

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
    constructor(name, price, img) {
        this.name = name;
        this.price = price;
        this.img = img;
    }
}
const bonsai = new Plants('Bonsai', '99,99$', 'images/bonsai2.jpg');
const succulent = new Plants('Succulent', '19,99$', 'images/succulent1.jpg');
const terranium = new Plants('Terranium', '59,99$', 'images/terranium1.jpg');
const cactus = new Plants('Cactus', '29,99$', 'images/cactus1.jpg');

///// Functions/////

btnShopping.forEach((btn) =>
    btn.addEventListener("click", (e) => {
        const shoppingCart = new Object(); //create new object when click on 'add to chart' btn
        shoppingCart.value = parseFloat(e.target.parentNode.children[0].children[1].innerText);
        shoppingCart.name = e.target.parentNode.children[0].children[0].children[0].innerText;
        shoppingCart.img = e.target.parentNode.parentNode.children[0].children[0].children[0].children[0].src;
        // download values of this object

        // add li items on shopping cart
        shoppingCartItems.innerHTML += `
          <li class="clearfix">
            <img src=${shoppingCart.img} />
            <span class="item-name">${shoppingCart.name}</span>
            <span class="item-price">${shoppingCart.value}$</span>
            <span class='cancelItem btn btn-outline'>X</span>
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



    }));


/// function changing the image product
const changeImage = (e) => {

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

const changeImageOfTouch = (e) => {
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



const footerImages = (e) => {
    let i = Math.floor(Math.random() * 3);
    let j = Math.floor(Math.random() * 4);
    let plants = [bonsai, cactus, terranium, succulent];
    console.log(i, plants[j]);
    let plant = plants[j];
    console.log(plant);
    console.log(productFooterItems);
    productFooterItems[i].children[0].src = plant.img;
    productFooterItems[i].children[1].innerText = plant.name;
    productFooterItems[i].children[2].innerText = plant.price;
};


///// Event listeners /////

// event to change pictures on click in main 
smallImages.forEach(img => img.addEventListener('click', (e) => {

    const srcOfClickImage = img.children[0].src;

    bigImage.src = srcOfClickImage;
}));

// Change image listeners
succulentImage.addEventListener('click', changeImage);
succulentImage.addEventListener('click', footerImages);

cactusImage.addEventListener('click', changeImage);
cactusImage.addEventListener('click', footerImages);

terraniumImage.addEventListener('click', changeImage);
terraniumImage.addEventListener('click', footerImages);

/// On touchable devices
succulentImage.addEventListener('touchstart', changeImage);
succulentImage.addEventListener('touchstart', footerImages);

cactusImage.addEventListener('touchstart', changeImage);
cactusImage.addEventListener('touchstart', footerImages);

terraniumImage.addEventListener('touchstart', changeImage);
terraniumImage.addEventListener('touchstart', footerImages);