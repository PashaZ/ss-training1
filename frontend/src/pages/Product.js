import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Link, Card, CardContent, CardMedia } from "@mui/material";

export default function ProductDescription() {
  const [productArray, setProductArray] = useState([]);
  useEffect(() => {
    async function fetchSubmit() {
      const productResponse = await (
        await fetch("http://localhost:8080/api/products")
      ).json();
      setProductArray(productResponse);
    }
    fetchSubmit();
  }, []);

  return (
    <Card
      sx={{
        // color: "grey",
        textAlign: "center",
        display: "flex",
        flexWrap: "wrap",
        gap: "30px",
        "& > :not(style)": {
          m: 1,
          width: 70,
        },
      }}
    >
      {productArray?.map((product) => (
        <CardContent key={product.id}>
          <CardMedia
            component="img"
            height="70"
            image={`http://localhost:8080/${product.img}`}
            alt="image of product"
          />

          <Link
            href={`/product/${product.id}`}
            color="inherit"
            underline="none"
            gutterBottom
          >
            {product.name}
          </Link>
        </CardContent>
      ))}
    </Card>
  );
}
