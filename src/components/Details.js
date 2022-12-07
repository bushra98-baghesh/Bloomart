import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "./productList/ProductList";

function Details() {
  const api_url = "https://fakestoreapi.com/products";
  const params = useParams();
  const [product, setProduct] = useState({});
  console.log(params);
  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
  }, [params.productId]);
  return (
    <div>
      <ProductList product={product} showButton={false} />
    </div>
  );
}

export default Details;
