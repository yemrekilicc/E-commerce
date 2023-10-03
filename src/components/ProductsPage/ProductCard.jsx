import React from "react";
import "./ProductCard.css";

function ProductCard({src, name, price, size}) {
  return (
      <div className="product-card">
        <div className="product-img">
          <img src={src} alt="shoe" />
        </div>
        <div className="product-detail">
          <div className="name-price">
            <h6>{name}</h6>
            <p>{price}</p>
          </div>
          <p>Size:{size}</p>
        </div>
      </div>
  );
}

export default ProductCard;
