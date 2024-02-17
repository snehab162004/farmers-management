import React from "react";
import "./about-us.css";
import "./AboutCard"
const AboutUs = (props) => {
    return (
        <div className="container">
                <span>{props.name}</span><br></br>
                {props.para}    
        </div>
    )
}

export default AboutUs;