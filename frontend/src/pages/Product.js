import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Product() {
  const [productArray, setProductArray] = useState([]);
  useEffect(() => {
    async function fetchSubmit() {
      const productResponse = await (await fetch("http://localhost:8080/api/products")).json();
      setProductArray(productResponse);
    }
    fetchSubmit();
  }, []);
  return (
    <ul>
      {productArray?.map((product) => (
        <li key={product.id}>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
  );
}