import React from 'react'
import '../css/header.css';

const Header = () => {

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar" style={{ width:"100%" }}>
            <div className="container-fluid">
               
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                   
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/TravelerHome">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#aboutus">About Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#contactus">Contact Us</a>
                    </li>

                    <div class="rightside">
                    <li className="nav-item">
                    <a className="nav-link active"href="/travelerprofile">Profile</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="/" >Sign Out</a>
                    </li>
                    </div>                 
                </ul>


                </div>
            </div>
            </nav>

    </div>
  )
}


export default Header