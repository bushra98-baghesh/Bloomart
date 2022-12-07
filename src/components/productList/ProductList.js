import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";
function ProductList(props) {
  const { product, showButton } = props;
  return (
    <>
      <div class="card ">
        <img src={product.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{product.title}</h5>
          <p class="card-text">{product.description}</p>
          {showButton ?? (
            <Link to={`/products/${product.id}`} class="btn btn-primary">
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductList;
