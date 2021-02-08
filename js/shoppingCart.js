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

displayShoppingCart();