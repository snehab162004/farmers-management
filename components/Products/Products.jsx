import React from "react";
import "./ProductsCard"
function Products(props) {
  return (
    <div className="product-container">
        <img src={props.src} 
        alt={props.alt}
        className="veg-img"/>
    <div className="product-desc">
      <h3>{props.title}</h3>
      {/* <h3>Farmer name : {props.farmerName}</h3> */}
      <h3>Cost - ${props.price}</h3>
      <button>{props.btn}</button>
      </div>
    </div>
  );
}

export default Products;
