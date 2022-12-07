import React, { useEffect, useState } from "react";
import ProductList from "../productList/ProductList";
import "./ProductPage.css";
import axios from "axios";

function Products() {
  const apiUrl = "https://fakestoreapi.com/products";
  const [products, setProduct] = useState([]);
  const [categories, setCategory] = useState([]);
  const getProductscat = (catName) => {
    axios
      .get(`${apiUrl}/category/${catName}`)

      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  };
  const getProduct = () => {
    axios
      .get(apiUrl)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  };
  const getCategory = () => {
    axios
      .get(`${apiUrl}/categories`)
      .then((res) => setCategory(res.data))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getProduct();
    getCategory();
  }, []);
  return (
    <>
      <div className="container ">
        {/* <div className="our-products-reel d-flex align-items-center uppercase ">
          <div className="reel-item">&nbsp;-- Our Products</div>
          <div className="reel-item">&nbsp;-- Our Products</div>
          <div className="reel-item">&nbsp;-- Our Products</div>
          <div className="reel-item">&nbsp;-- Our Products</div>
          <div className="reel-item">&nbsp;-- Our Products</div>
          <div className="reel-item">&nbsp;-- Our Products</div>
          <div className="reel-item">&nbsp;-- Our Products</div>
          <div className="reel-item">&nbsp;-- Our Products</div>
          <div className="reel-item">&nbsp;-- Our Products</div>
          <div className="reel-item">&nbsp;-- Our Products</div>
        </div> */}
        <button className="btn btn-primary" onClick={() => getProduct()}>
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              key={category}
              className="btn btn-primary"
              onClick={() => getProductscat(category)}
            >
              {category}
            </button>
          );
        })}
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <ProductList product={product}></ProductList>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
