import{changeMainSectionToPlants, changeMainSectionToProduct}
 from './plants.js'

const logo = document.querySelector(".navbar-brand");
const mainSection = document.querySelector(".container.product");
const otherPlantsSection = document.querySelector(".other-plants");
const breadcrumb = document.querySelector(".breadcrumb");
const buttonPlants = document.querySelector("body > div.jumbotron.text-light > div > button");
const aboutNavItem = document.querySelector("#navbarToggler > div > ul > li:nth-child(2) > a")



const changeToHomePage = (e) => {

    breadcrumb.innerHTML = `  <!-- Breadcrumb start -->
    <div class="container col-md-12">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">Home</li>
        </ol>
      </nav>
    
        <!-- Breadcrumb end -->
    `
    mainSection.innerHTML = `      
    <!-- Main section start -->
<div class='container product'>
        <div class='row py-5'>

        <h2 class='py-5 text-center'>What are you looking for? </h2>

        <div class="image-item col-md-4" id='plants'>
         
       <img src="./images/pexels-maddog-4150893.jpg" alt=""> 
         <h5 class='title pt-4 text-center'>Plants to buy</h5>
        </div>

        
        <div class="image-item col-md-4" id='about'>
            
            <img src="./images/pexels-cottonbro-4505161.jpg" alt="">
            <h5 class='title pt-4 text-center'>About plants</h5>
           </div>

           
        <div class="image-item col-md-4" id= 'contact'>
            
            <img src="./images/pexels-chepté-cormani-1416530.jpg" alt="">
            <h5 class='title pt-4 text-center'>Contact</h5>
           </div>

    </div>
  <!-- Main section end -->
`;
    
    otherPlantsSection.innerHTML = '';


    const plants = document.querySelector("#plants");
  plants.addEventListener('click', (e) => {
      
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

    breadcrumb.innerHTML = ` <li class="breadcrumb-item">Home</li>
        <li class="breadcrumb-item">Plants</li>
        `;
    changeMainSectionToProduct()

  });

  
const about = document.querySelector("#about");


  const changeToAbout = (e) => {
    e.preventDefault();

  let i = Math.floor(Math.random() * 3)+1;

  breadcrumb.innerHTML = `  <!-- Breadcrumb start -->
  <div class="container col-md-12">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">Home</li>
        <li class="breadcrumb-item active" aria-current="page">About</li>
      </ol>
    </nav>
  
      <!-- Breadcrumb end -->
  `
  mainSection.innerHTML = `      
  <!-- Main section start -->
<div class='container product'>
      <div class='row py-5'>

        <h2 class='py-5 text-center'>What you should know about our plants ?</h2>

  
        <p class='lead text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae debitis saepe vel ea, est ipsa quibusdam delectus necessitatibus facere aspernatur illum aliquam accusamus ut quis enim repellat architecto! Explicabo, placeat! </p> 
        <p class='lead text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae debitis saepe vel ea, est ipsa quibusdam delectus necessitatibus facere aspernatur illum aliquam accusamus ut quis enim repellat architecto! Explicabo, placeat! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae debitis saepe vel ea, est ipsa quibusdam delectus necessitatibus facere aspernatur illum aliquam accusamus ut quis enim repellat architecto! Explicabo, placeat!  </p> 

      </div>

       <div class='row py-5'>  
       <video width="100px" autoplay>
       <source src="images/video${i}.mp4">
       </video>

      </div>

  </div>
<!-- Main section end -->
`;
  
  otherPlantsSection.innerHTML = '';

  const homeBreadcrumb = document.querySelector("body > div:nth-child(3) > nav > ol > div > nav > ol > li:nth-child(1)")

    homeBreadcrumb.addEventListener('click', changeToHomePage);
    homeBreadcrumb.addEventListener('touchstart', changeToHomePage);
  }
  buttonPlants.addEventListener('click', changeMainSectionToPlants);
  buttonPlants.addEventListener('touchstart', changeMainSectionToPlants);

  about.addEventListener('click', changeToAbout);
  about.addEventListener('touchstart', changeToAbout);
  aboutNavItem.addEventListener('click', changeToAbout);
  aboutNavItem.addEventListener('touchstart', changeToAbout);

}


logo.addEventListener('click', changeToHomePage);
logo.addEventListener('touchstart', changeToHomePage);
buttonPlants.addEventListener('click', changeMainSectionToPlants);
buttonPlants.addEventListener('touchstart', changeMainSectionToPlants);




export {otherPlantsSection, breadcrumb, mainSection}
