import React from "react";
import "./navbar.css"
import {Link} from "react-router-dom";


const Navbar = () => {
    
    return (
        <nav className="nav-container">
          <h2 className="nav-logo">Agro 
          <span>Culture</span></h2>
          <ul className="nav-list-items">
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                <Link to="/mycart">MyCart</Link>
                    </li>
                <li>
                <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                <Link to="/register">Register</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar;