import React from "react";
import "./section.css";

 const Section = () => {
    return (
    <div>
      <div className="section-container">
        <h2 className="section-heading">AgroCulture</h2>
        <p className="section-description">Explore the new way of trading..</p></div>
        <div className="section-cards">
          <div className="section-card1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwhLtTPYDGTuvzp66QjLHXR2MmJsP6VwUxxPK0U-N66Zsk98xF35frWy6ouBVnai-dsew&usqp=CAU"
            alt="digitalmarketing-image"
            className="section-image1"
            />
            <h3>Digital Marketing</h3>
            </div>
            {/* card2 */}
            <div className="section-card2">
            <img src="src/components/Section/register.png"
            alt="digitalmarketing-image"
            className="section-image2"
            />
            <h3 className="imag2-description">Register with us</h3>
            </div>
            {/* card3 */}
            <div className="section-card3">
            <img src="src/components/Section/images/help.png"
            alt="digitalmarketing-image"
            className="section-image3"
            />
            <h3 className="image3-description">Help</h3>
            </div>
         </div>
         <hr className="hr-style"></hr>
    </div>
    
        )
}

export default Section;