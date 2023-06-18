import React from 'react'
import user from '../images/user.png';
import '../css/header.css';

const Header = () => {

  return (
    <div>
        <nav className="navbar-expand-lg navbarHeader">
            <div className="container-fluid">
               
                <div className="navbar-collapse listArea " id="navbarSupportedContent">
                <div class="d-flex justify-content-start searchArea ">
                    <form class="d-flex" role="search">
                        <input class="form-control" type="search" placeholder="Search Products & Brands" aria-label="Search"/>
                        <button type="submit"><i class="fa-solid fa-magnifying-glass mx-2" style= {{ color: "#ffffff" }}></i>Search</button>
                    </form>
                </div>

                    <div class="rightsideArea">
                        <div class="rightside ml-auto">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="rightoption">
                            <a className="nav-link active" href="/" >Cart <i class="fa-solid fa-cart-shopping ms-1"></i> </a>
                            </li>
                            <li className="rightoption ps-5">
                            <a className="nav-link active" href="/" >Sign In</a>
                            </li>
                            <li className="px-4 mt-1">
                            <a className="" href="#"><img class="userimg" src={user} alt="User"/></a>
                            </li>
                        </ul>
                        </div>
                    </div>                 
                


                </div>
            </div>
            </nav>
    </div>
  )
}


export default Header