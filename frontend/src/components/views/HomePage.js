import React from 'react'
import Header from './Header';
import Footer from './Footer';
import '../css/homepage.css';
import Image1 from '../images/Image1.jpg';
import Image2 from '../images/Image2.jpg';
import Image3 from '../images/Image3.jpg';
import Location from '../images/location.png';
import arrow from '../images/arrow.png';
import product1 from '../images/product1.jpg';
import product2 from '../images/product2.jpg';
import product3 from '../images/product3.jpg';
import product4 from '../images/product4.jpg';
import product5 from '../images/product5.jpg';
import SideBar from '../views/SideBar';

const HomePage = () => {

  const productContainers = [...document.querySelectorAll('.product-container')];
  const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
  const preBtn = [...document.querySelectorAll('.pre-btn')];

  productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

  return (
    <div>
      <Header />
      <div >
      <SideBar/>
    <div class="homeArea">
    <div class="upperArea">

      {/* ---------------Carousel Area ------------------ */}

      <div id="carouselExampleControls" class="carousel slide carousel-fade carousel-area" data-bs-ride="carousel">
            <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={Image1}  class="d-block w-100 carosolImg" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={Image2} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={Image3} class="d-block w-100" alt="..."/>
                  </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>

        </div>

        {/* ---------------Carousel Area ------------------ */}

        {/* ---------------Delivery Pincode Area ------------------ */}

        <div class="card" style={{ width: "16rem" }}>
            <img src={Location} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h6 class="card-title">Your Dilivery Pincode</h6>
              <p class="card-text">Enter Your pincode to check <br></br>availability and tester delivery options</p>
              <div class="input-group mb-2">
                <input type="text" class="form-control" placeholder="Enter pincode" aria-label="Username"/>
              </div>
              <button class="btn btn-dark px-5 mt-1" style={{ fontSize: "12px" }}>SUBMIT</button>
              <button class="btn btn-light mx-2" style={{ fontSize: "12px" }}>NEXT</button>   
            </div>
        </div>

          {/* ---------------Delivery Pincode Area ------------------ */}
          
      </div>

      {/* ---------------Option Bar------------------ */}

            <div class="navbar navbar-expand-lg bg-light optionBar">
              <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <a class="nav-link ms-5" href="#">Snapdeal</a>
                    <a class="nav-link ms-5" href="#">Download Our App</a>
                    <a class="nav-link ms-5" href="#">Bed Linon</a>
                    <a class="nav-link ms-5" href="#">Blankets & Quilts</a>
                    <a class="nav-link ms-5" href="#">Dining & Serving</a>
                  </div>
                </div>
              </div>
            </div> 

      {/* ---------------Option Bar------------- */} 

      {/* ---------------Trending Product Section------------------ */}

      <h5 class="product-category">TRENDING PRODUCTS</h5>

      <section class="product"> 
        <button class="pre-btn"><img src={arrow} alt=""/></button>
        <button class="nxt-btn"><img src={arrow}  alt=""/></button>
        <div class="product-container">
            <div class="product-card">
                <div class="product-image">
                    <img src={product1} class="product-thumb" alt=""/>
                </div>
                <div class="product-info">
                    <p class="product-short-description">simply dummy text of the printing and typesetting industry.</p>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <div>
                    <span class="actual-price">RS 499</span><span class="price">Rs 125</span>
                    <button type="button" class="btn btn-outline-danger offerbtn">75% OFF</button>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img src={product2} class="product-thumb" alt=""/>
                </div>
                <div class="product-info">
                    <p class="product-short-description">simply dummy text of the printing and typesetting industry.</p>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <div>
                    <span class="actual-price">RS 499</span><span class="price">Rs 125</span>
                    <button type="button" class="btn btn-outline-danger offerbtn">75% OFF</button>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img src={product3} class="product-thumb" alt=""/>
                </div>
                <div class="product-info">
                    <p class="product-short-description">simply dummy text of the printing and typesetting industry.</p>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <div>
                    <span class="actual-price">RS 499</span><span class="price">Rs 125</span>
                    <button type="button" class="btn btn-outline-danger offerbtn">75% OFF</button>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img src={product4} class="product-thumb" alt=""/>
                </div>
                <div class="product-info">
                    <p class="product-short-description">simply dummy text of the printing and typesetting industry.</p>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <div>
                    <span class="actual-price">RS 499</span><span class="price">Rs 125</span>
                    <button type="button" class="btn btn-outline-danger offerbtn">75% OFF</button>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img src={product5} class="product-thumb" alt=""/>
                </div>
                <div class="product-info">
                    <p class="product-short-description">simply dummy text of the printing and typesetting industry.</p>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <i class="fa-sharp fa-solid fa-star" style= {{ color: "#f0d000" }}></i>
                    <div>
                    <span class="actual-price">RS 499</span><span class="price">Rs 125</span>
                    <button type="button" class="btn btn-outline-danger offerbtn">75% OFF</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

            </div>
            </div>
      <Footer />

    </div>  
  )
}


export default HomePage