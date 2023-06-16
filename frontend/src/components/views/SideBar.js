import React from "react";
import '../css/sidebar.css';
import offerImage from '../images/offer.png';
import mobileImage from '../images/mobile.png';
import electronicImage from '../images/electronics.png';
import gamingImage from '../images/gaming.png';
import kitchenImage from '../images/kitchen.png';
const SideBar = () => {

  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <nav
            id="sidebarMenu"
            class="col-md-3 col-lg-2 bg-body-tertiary sidebar"
          >
            <div class="position-sticky pt-3 sidebar-sticky ">
              <ul class="nav flex-column">

                <li class="topcategories"> <p class="fs-6 fw-bold">TOP CATEGORIES</p></li>
                <li class="topcategories"><a href="#"><img class="categoryImage" src={offerImage} alt="image"/>All Offers</a></li>
                <li class="topcategories"><a href="#"><img class="categoryImage" src={mobileImage} alt="image"/>Mobile & Tablets </a></li>
                <li class="topcategories"><a href="#"><img class="categoryImage" src={electronicImage} alt="image"/>Electronics </a></li>
                <li class="topcategories"><a href="#"><img class="categoryImage" src={gamingImage} alt="image"/>Computers & Gaming </a></li>
                <li class="topcategories"><a href="#"><img class="categoryImage" src={kitchenImage} alt="image"/>Home & Kitchen </a></li>

                <li> <p class="fs-6 fw-bold">MORE CATEGORIES</p></li>
                <li class="mb-1"><a href="#">Men's Fashion</a></li>
                <li class="mb-1"><a href="#">Women's Fashion </a></li>
                <li class="mb-1"><a href="#">Toys, Kids Fashion & more </a></li>
                <li class="mb-1"><a href="#">Beauty, Health & Daily Needs </a></li>
                <li class="mb-1"><a href="#">Sport, Fitness & Outdoor </a></li>
                <li class="mb-1"><a href="#">Car & Motorbike </a></li>
                <li class="mb-1"><a href="#">Hobbies </a></li>
                <li class="mb-1"><a href="#">Books, Media & Music </a></li>
                <li class="allCategories mb-3"><a href="#">See All Categories </a></li>

                <li> <p class="fs-6 fw-bold">TRENDING SEARCHES</p></li>
                <li class="mb-1"><a href="#"><i class="fa-solid fa-magnifying-glass me-2" style= {{ color: "#a7acb4" }}></i>Bluetooth Headphone</a></li>
                <li class="mb-1"><a href="#"><i class="fa-solid fa-magnifying-glass me-2" style= {{ color: "#a7acb4" }}></i>Tshirt </a></li>

              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default SideBar
