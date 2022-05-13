import React from "react";
import Product from "./Product";
import "./Catalogue.css";

function Catalogue({ catalogue }) {
  /* in the render method of this componenet we map through the objects in the catalogue and display each of the them in the DOM. The presentational aspect is handled in the respective Component called Product */
  return (
    <div className="catalogue">
      {catalogue.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
}

export default Catalogue;