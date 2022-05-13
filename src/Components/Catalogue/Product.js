import React from "react";
import "./Product.css";

function Product({ product }) {
  // We destructure the product prop to grab the individual properties
  const { id, name, description, image, price, sizes } = product;

  return (
    <div className="card shadow-sm col-3">
      <img
        src={image}
        alt={`Product No. ${id}`}
        className="bd-placeholder-img img-fluid img-thumbnail card-img-top"
      />
      <h2>{name}</h2>
      <div>
        <p>{description}</p>
        <div className="priceWrapper">
          <span>{price}</span>
          <span>Sizes: {sizes}</span>
        </div>
      </div>
    </div>
  );
}

export default Product;