import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };
  
  const formStyles = {
    width: '80%',
    height: '70%',
    border: '1px solid rgb(214, 214, 214)',
    padding: '2rem',
    borderRadius: '2rem',
     backgroundColor: "#d6d6d6", 
    color: '#4b3832',
    alignItems: 'center', // Center horizontally
 
  };

  const labelStyles =  {
    color: "#4b3832",
    fontSize: '1.7rem',
    fontFamily: 'Poppins',
    marginRight: '35rem',
    fontWeight: 600,
  };

  const inputTextareaStyles = {
      padding: '1rem 4rem',
      backgroundColor: 'transparent',
      width: '70%',
      borderRadius: '1rem',
      display: 'flex',
      marginLeft: '16rem',
      outline: 'none',
      border: '2px solid #4b3832',
      fontSize: '1.2rem',
    };

    const btnStyles = {
      border: "3px solid #4b3832",
      color: "#4b3832",
      marginTop: "0px",

    }
    
  

  return (
    <div className="container">
      <img
        src="src/components/Hero/farming.jpg"
        className="hero-image"
        alt="farming-image"
      />
      <div className="container-description">
        <h1>Welcome to AgroCulture</h1>
        <p>Your Product Our Market</p>
        <button className="login" onClick={handleLoginForm}>
          {showLoginForm ? "X" : "Login"}
        </button>
        {showLoginForm && (
          <form style={formStyles}>
            <label style={labelStyles}>Email ID:</label>
            <input
            style={inputTextareaStyles}
              type="email"
              name="email"
              placeholder="Enter Your Email.."
              required
            />
            <br />
            <label style={labelStyles}
            >Password:</label>
            <input
            style={inputTextareaStyles}
              type="password"
              name="password"
              placeholder="Enter Your Password.."
              required
            />
            <br />
            <button style={btnStyles} type="submit">Submit</button>
          </form>
        )}

        <button className="register">Register</button>
      </div>
    </div>
  );
};

export default Hero;
