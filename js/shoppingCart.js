<<<<<<< HEAD
const shoppingCart = document.querySelector(".big-shopping-cart")

const localStorageShoppingCart = JSON.parse(localStorage.getItem('item'));

let money = [];
const displayShoppingCart = () => {

    const ol = document.createElement('ol');
  shoppingCart.appendChild(ol);
    
 
    
    localStorageShoppingCart.forEach(element => {  const li = document.createElement('li'); 
    ol.appendChild(li);
    li.innerHTML = `<img class='big-shopping-cart-img' src='${element.img}'/> <span class='big-shopping-cart-name'>${element.name}</span> <span class='big-shopping-cart-price'>${element.value}$</span>`;
 
   
        money.push(element.value);

   

    });
   
    let total = money.reduce(function (a, b) {
        return a + b;
    });


    document.querySelector('.big-shopping-cart-total').innerText = `Total: ${total}$`;
}

xt = `Total: ${total}$`;
}

=======
const shoppingCart = document.querySelector("body > div.main-section > div")

const localStorageShoppingCart = JSON.parse(localStorage.getItem('item'));
console.log(localStorageShoppingCart);

const displayShoppingCart = () => {

    const ol = document.createElement('ol');
  shoppingCart.appendChild(ol);
    
 
    
    localStorageShoppingCart.forEach(element => {  const li = document.createElement('li'); 
    ol.appendChild(li);
    li.innerHTML = `<img class='shopping-cart-img' src='${element.img}'/> <span class='name'>${element.name}</span> <span>${element.value}$</span>`;
    console.log(element);
   

   

});
}

>>>>>>> 8e55715494e2e2abb83567de1da7700c940a4289
displayShoppingCart();