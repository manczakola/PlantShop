import Plants from "./script.js";
import {
    breadcrumb,
    breadcrumbItemActive,
    breadcrumbItem
} from "./script.js";



const navItems = document.querySelectorAll(".nav-item");
const otherPlantsSection = document.querySelector("body > div > div:nth-child(4)");
const mainSection = document.querySelector('.container.product');


const changeMainSectionToProduct = (e) => {
    const productItems = document.querySelectorAll(".product-item");
    const succulent = productItems[0];
    const terranium = productItems[1];
    const bonsai = productItems[2];
    const cactus = productItems[3];

    productItems.forEach(prod => {
       prod.addEventListener('click', (e) => {
           
           const plant = new Object();
           plant.name = e.target.parentNode.children[1].innerText;
           plant.img = e.target.src;
           plant.price = e.target.parentNode.children[2].innerText;
           
           console.log(plant);

           mainSection.innerHTML = `
           <div class="container product">
           <!-- Gallery start -->
             <div class="row">
               <div class="col-md-6">
                 <div class="gallery-images">
                   
                  <div class="slider__handle">
                         <span class="fa fa-chevron-left"></span>
                         <span class="fa fa-chevron-right"></span>
                     </div>
   
                   <div class="big-image">
                     
                     <img class="active" src="${plant.img}"> 
                     
                   </div>  
   
                     
   
                   <div class="row">
                   <ul class="small-images">
                     <li class="image-item col-4">
                       <img src="${plant.img}"></li>
                     <li class="image-item col-4">
                       <img src="images/${(plant.name).toLowerCase()}2.jpg"></li>
                     <li class="image-item col-4">
                       <img src="images/${(plant.name).toLowerCase()}3.jpg"></li>
                   </ul>
                   </div>
                 </div>
               </div>
           <!-- Gallery end -->
           <!-- Product-description start -->
               <div class="col-md-6">
                 <div class="product-description">
   
                   <div class="product-title">
                 <h1>${plant.name}</h1>
                   </div>
   
                   <div class="product-price">
                     <h3 class="lead">${plant.price}</h3>
                   </div>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iure obcaecati natus voluptate non vero molestias, incidunt quo totam eos qui enim alias omnis, eaque aperiam possimus nisi inventore modi.</p>
                 </div>
   
                 <button type="button" class="btn btn-outline-secondary mx-3">
                   Add to cart
                 </button>
               </div>
           <!-- Product-description end -->
             </div>
           </div>
   `;
           
           breadcrumb.innerHTML = ` <li class="breadcrumb-item">Home</li>
           <li class="breadcrumb-item">Plants</a></li>
           <li class="breadcrumb-item active" aria-current="page">${plant.name}</li>`;
           
         
   })


       })

}
const changeMainSectionToPlants = (e) => {

    e.preventDefault();

    
    if (otherPlantsSection != null) {


        mainSection.innerHTML = `
        <header>
        <h2>Plants</h2>
        <h4>All the plants we love...</h4>
        </header>
        
        <div class="container">
        <div class="row">
        
        <div class="product-item col-lg-3 col-md-6" id='succulent'>
        <img src="images/succulent1.jpg" alt=""></a>
        <h5 class='product-title pt-4'>Succulent</h5>
        <p class='price'>19$</p>
        </div>
        
        <div class="product-item col-lg-3 col-md-6" id='terranium'>
        <img src="images/terranium1.jpg" alt=""></a>
        <h5 class='product-title pt-4'>Terranium</h5>
        <p class='price'>59$</p>
        </div>
        
        <div class="product-item col-lg-3 col-md-6" id='bonsai'>
        <img src="images/bonsai1.jpg" alt=""></a>
        <h5 class='product-title pt-4'>Bonsai</h5>
        <p class='price'>99$</p>
        </div>
        
        <div class="product-item col-lg-3 col-md-6" id='cactus'>
        <img src="images/cactus1.jpg" alt=""></a> 
        <h5 class='product-title pt-4'>Cactus</h5>
        <p class='price'>29$</p>
        </div>
        
        </div>
        </div>
        `;
        otherPlantsSection.remove();
       
        breadcrumbItem[1].innerText = 'Plants';
        breadcrumbItem[1].classList.add('active');
        breadcrumbItem[2].remove();


        changeMainSectionToProduct();

    }
}

navItems[0].addEventListener('click', changeMainSectionToPlants);
breadcrumbItem[1].addEventListener('click', changeMainSectionToPlants);
