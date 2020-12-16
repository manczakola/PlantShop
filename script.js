// Variables
const btnShopping = document.querySelectorAll(".btn-outline-secondary");
const shoppingCartItems = document.querySelector(".shopping-cart-items");
const shoppingCartDropdown = document.querySelector(".shopping-cart");
const totalMoney = document.querySelector(".lighter-text");
const badge = document.querySelector(".badge");
const shoppingCartBtn = document.querySelector("#dropdownMenuButton");
const numberOfItems = document.querySelector("number");
const bigImage = document.querySelector("div.big-image > img");
const smallImages = document.querySelectorAll('.image-item');

console.log(smallImages);

smallImages.forEach(img => img.addEventListener('click', (e) => {
    
    const srcOfClickImage = img.children[0].src;
    console.log(bigImage);
    bigImage.src = srcOfClickImage;
}))
let money = [];

// Functions
btnShopping.forEach((btn) =>
    btn.addEventListener("click", (e) => {
        const shoppingCart = new Object();
        shoppingCart.value = parseFloat(
            e.target.parentNode.children[0].children[1].innerText
        );
        console.log(shoppingCart);
        shoppingCart.name = e.target.parentNode.children[0].children[0].children[0].innerText;
        shoppingCart.img = e.target.parentNode.parentNode.children[0].children[0].children[0].children[0].src;

        console.log(e.target.parentNode.parentNode.children[0].children[0].children[0].children[0].src);


        shoppingCartItems.innerHTML += `
          <li class="clearfix">
            <img src=${shoppingCart.img} />
            <span class="item-name">${shoppingCart.name}</span>
            <span class="item-price">${shoppingCart.value}$</span>
          </li>
          `;

        shoppingCartBtn.parentNode.children[0].children[0].innerText++; // items of cart

        money.push(shoppingCart.value);
        console.log(badge);

        var total = money.reduce(function (a, b) {
            return a + b;
        });
        console.log(total);

        totalMoney.innerText = `Total: ${total}$`;
        badge.innerText = `${money.length}`;
    }))

// document.querySelector('.navbar-toggler').addEventListener("touchstart", () => { document.querySelector('.navbar-toggler').classList.toggle('collapsed')
// })


const changeImage = (e) => {
    
};

