import React from "react";
import "./product.css"

export default function Product({ setshowProduct, product }) {
  const handleCancel = () => {
    setshowProduct(false);
  };

  const buyNow = () => {
    alert("Congratulations! You just bought a product")
  }
  return (
    <div className="product">
      <div className="left">
        <img src={product.image} alt="" />
      </div>
      <div className="right">
        <p className="product-name">{product.name}</p>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price}</p>
        <button className="buy-button product-button" onClick={buyNow}>Buy now</button>
        <button className="buy-button product-button" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}
