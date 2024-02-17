import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        
        <footer>
            <span className="footer-name">
                AgroCulture</span>
            <div className="social-links">
               <a href="#">
                <img src="src/components/Footer/images/instagram.png" alt="" /></a> 
               <a href="#"> 
               <img src="src/components/Footer/images/facebook.png" alt="" /></a> 
               <a href="#"> 
              <img src="src/components/Footer/images/twitter.png" alt="" /></a> 
              <a href="#"> 
              <img src="src/components/Footer/images/youtube.png" alt="" /></a> 
            </div>
        </footer>
    )
}

export default Footer;