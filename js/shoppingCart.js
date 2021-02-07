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

displayShoppingCart();