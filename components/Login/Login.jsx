// import React,  { useState } from "react";
import React from 'react'
const Login = ({onClose}) => {
    const styles = {
      backgroundColor: black,
      color: white
    };
    return (
<div>
    <div className="contact-container">
        <h1 className="contact-container-heading">
            Login Page
        </h1>
        <form style={styles}>
      
 

      <label>
        Email ID:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email.."
          required
        />
      <br/>
      <label className="label-name">
        Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password.."
          required
        /><br/>
      

      <button onClick={onClose}>Close</button>
    </form>
  
        
    </div>
    </div>
        )
}

export default Login;






  

  

  
