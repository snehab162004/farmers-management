import React,  { useState }from "react";
import "./contact.css"


const Contact = () => {
    //defining the state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        query: ''
      });

      // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form data submitted:', formData);
    setFormData({
      name: '',
      email: '',
      query: ''
    });
  };
    return (
<div>
    <div className="contact-container">
        <h1 className="contact-container-heading">
            Contact Us
        </h1>
        <form onSubmit={handleSubmit}>
      <label className="label-name">
        Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Your FullName.."
          required
        /><br/>
 

      <label>
        Email ID:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Your Email.."
          required
        />
      <br/>

      <label>
        Query:</label>
        <textarea
          name="query"
          value={formData.query}
          onChange={handleChange}
          placeholder="Enter Your Query.."
          required
        />
      <br/>

      <button type="submit">Send</button>
    </form>
  
        
    </div>
    </div>
        )
}

export default Contact;






  

  

  
