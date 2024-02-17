import React from "react";
import Products from "./Products";
import "./products.css";
function ProductsCard() {
  return (
    <div className="product-container">
        <div className="image">
       <img
        src="https://wallpapers.com/images/hd/vegetables-pictures-qs8trfk65nvldcyr.jpg"
        className="hero-image"
        alt="veggies-image"
      />
      </div>
      <div className="content">
       <h1 className="title">Our Products</h1>
      

       <div className="product-cards-container">
                    {/* card1 */}
                <div className="product-card1">
                    <Products 
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1231px-Tomato_je.jpg"
                    alt="tomato"
                    title="Tomato"
                    farmerName = "Ravi Gowda"
                    price= "30/kg"
                    btn="Add To Cart"
                    />
                
        </div>
         {/* card 2 */}
         <div className="product-card2">
                    <Products 
                     src="https://images.unsplash.com/photo-1633380110125-f6e685676160?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnJvdHN8ZW58MHx8MHx8fDA%3D"
                    alt="carrot"
                    title="Carrot"
                    farmerName = "Ravi Gowda"
                    price= "25/kg"
                    btn="Add To Cart"
                    />
                
        </div>
         {/* card 3 */}
         <div className="product-card3">
                    <Products 
                     src="data:image/jpeg;base64,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"
                    alt="Onion"
                    title="Onion"
                    farmerName = "Ravi Gowda"
                    price= "20/kg"
                    btn="Add To Cart"
                    />
                
        </div>
         {/* card 4 */}
         <div className="product-card4">
                    <Products 
                     src="data:image/jpeg;base64,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"
                    alt="palak leaves"
                    title="Palak Leaves"
                    farmerName = "Ravi Gowda"
                    price= "15"
                    btn="Add To Cart"
                    />
                
        </div>
         {/* card 5 */}
         <div className="product-card5">
                    <Products 
                     src="data:image/jpeg;base64,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"
                    title="Beans"
                    farmerName = "Ravi Gowda"
                    price= "25kg"
                    btn="Add To Cart"
                    />
                
        </div>
         {/* card 6 */}
         <div className="product-card6">
                    <Products 
                     src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/09/daikon-radish-1296x728-header-1296x728.jpg?w=1155&h=1528"
                    alt="radish"
                    title="Radish"
                    farmerName = "Ravi Gowda"
                    price= "25kg"
                    btn="Add To Cart"
                    />
                
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProductsCard;
