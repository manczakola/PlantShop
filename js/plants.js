import Plants from "./script.js";
import {
    breadcrumb,
    breadcrumbItem,
} from "./script.js";




const navItems = document.querySelectorAll(".nav-item");
const otherPlantsSection = document.querySelector(".other-plants")
const mainSection = document.querySelector('.container.product');
const plants = new Plants();

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

            const mainSection = document.querySelector('.container.product');
            mainSection.innerHTML = `
            <div class="container product">
            <!-- Gallery start -->
            <div class="row">
            <div class="col-md-6">
            <div class="gallery-images">
            
            <div class="slider">
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
            // change breadcrumb
            breadcrumb.innerHTML = ` <li class="breadcrumb-item">Home</li>
            <li class="breadcrumb-item">Plants</li>
            <li class="breadcrumb-item active" aria-current="page">${plant.name}</li>`;

            otherPlantsSection.innerHTML = `<div class="container other-plants">
            <div class="row">
            <h2 class='py-5'>Other plants</h2>
            <div class="product-footer-item col-md-4" id='succulent'>
            <img src="images/succulent1.jpg" alt="">
            <h5 class='product-footer-title pt-4'>Succulent</h5>
            <p class='price'>19$</p>
            </div>

            <div class="product-footer-item col-md-4" id='terranium'>
            <img src="images/terranium1.jpg" alt="">
            <h5 class='product-footer-title pt-4'>Terranium</h5>
            <p class='price'>59$</p>
            </div>

            <div class="product-footer-item col-md-4" id='cactus'>
            <img src="images/cactus1.jpg" alt="">
            <h5 class='product-footer-title pt-4'>Cactus</h5>
            <p class='price'>29$</p>
            </div>

            </div>
            </div>`;
            // change breadcrumb
            const newBreadcrumbItem = document.querySelectorAll('.breadcrumb-item');
            newBreadcrumbItem[1].addEventListener('click', (e) => {
                changeMainSectionToPlants(e);
            });


            // add to shoppingCart

            const newBtnShopping = document.querySelectorAll('.btn-outline-secondary');

            newBtnShopping.forEach((btn) =>
                btn.addEventListener("click", plants.addToShoppingCart));



            //change image on smallImages

            const newSmallImages = document.querySelectorAll('.small-images');


            newSmallImages.forEach(img => img.addEventListener('click', (e) => {

                const srcOfClickImage = e.target.src;
                const bigImage = img.parentNode.parentNode.children[1].children[0];

                bigImage.src = srcOfClickImage;
            }));


            // change image on footer images
            const productFooterItems = document.querySelectorAll('.product-footer-item');

            const bonsai = new Plants('Bonsai', '99$', 'images/bonsai3.jpg', 0);
            const succulent = new Plants('Succulent', '19$', 'images/succulent1.jpg', 1);
            const terranium = new Plants('Terranium', '59$', 'images/terranium1.jpg', 2);
            const cactus = new Plants('Cactus', '29$', 'images/cactus1.jpg', 3);

            let planties = [bonsai, succulent, terranium, cactus]


            const succulentBox = productFooterItems[0];
            const succulentImage = succulentBox.children[0];
            const succulentTitle = succulentBox.children[1];

            const terraniumBox = productFooterItems[1];
            const terraniumImage = terraniumBox.children[0];
            const terraniumTitle = terraniumBox.children[1];

            const cactusBox = productFooterItems[2];
            const cactusImage = cactusBox.children[0];
            const cactusTitle = cactusBox.children[1];



            succulentImage.addEventListener('click', succulent.footerImages);
            cactusImage.addEventListener('click', cactus.footerImages);
            terraniumImage.addEventListener('click', terranium.footerImages);

            /// On touchable devices ///
            succulentTitle.addEventListener('touchstart', succulent.footerImages);
            cactusTitle.addEventListener('touchstart', cactus.footerImages);
            terraniumTitle.addEventListener('touchstart', terranium.footerImages);

            // change the bigImage

            const newPrevious = document.querySelector('.fa-chevron-left');
            const newNext = document.querySelector('.fa-chevron-right');

            newPrevious.addEventListener('click', (e) => {
                plants.previousPhoto(e);;
            });

            newNext.addEventListener('click', (e) => {
                plants.nextPhoto(e);
            });

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
        otherPlantsSection.innerHTML = '';


        breadcrumb.innerHTML = ` <li class="breadcrumb-item">Home</li>
        <li class="breadcrumb-item">Plants</li>
        `;

        changeMainSectionToProduct();

    }


}

navItems[0].addEventListener('click', changeMainSectionToPlants);
breadcrumbItem[1].addEventListener('click', changeMainSectionToPlants);

navItems[0].addEventListener('touchstart', changeMainSectionToPlants);
breadcrumbItem[1].addEventListener('touchstart', changeMainSectionToPlants);

export {
    changeMainSectionToPlants,
    changeMainSectionToProduct
}