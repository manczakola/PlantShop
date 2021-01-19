///// Variables/////
const btnShopping = document.querySelectorAll(".btn-outline-secondary");
const shoppingCartItems = document.querySelector(".shopping-cart-items");
const shoppingCartDropdown = document.querySelector(".shopping-cart");
const dropdownMenu = document.querySelector(".dropdown-menu");
const totalMoney = document.querySelector(".lighter-text");
const badge = document.querySelector(".badge");
const shoppingCartBtn = document.querySelector("#dropdownMenuButton");
const numberOfItems = document.querySelector("number");
const bigImage = document.querySelector("div.big-image > img");
const smallImages = document.querySelectorAll('.image-item');
let money = [];


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


///// Event listeners /////

// event to change pictures on click
smallImages.forEach(img => img.addEventListener('click', (e) => {

    const srcOfClickImage = img.children[0].src;

    bigImage.src = srcOfClickImage;
}));

// document.querySelector('.navbar-toggler').addEventListener("touchstart", () => { document.querySelector('.navbar-toggler').classList.toggle('collapsed')
// })