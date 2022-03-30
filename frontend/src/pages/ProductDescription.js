import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

export default function ProductDescription() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    async function fetchSubmit() {
      const product = await (
        await fetch(`http://localhost:8080/api/products/${productId}`)
      ).json();
      setProduct(product);
    }
    fetchSubmit();
  }, []);
  return (
    <div key={product.id}>
      <Card
        sx={{
          textAlign: "center",
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          "& > :not(style)": {
            m: 1,
            width: "100%",
          },
        }}
      >
        <CardContent key={product.id}>
          <Typography
            variant="h6"
            sx={{
              display: { md: "flex", margin: "10px", textAlign: "center" },
            }}
          >
            {product.name} always fresh in our shop!
          </Typography> 
          <CardMedia
            component="img"
            image={`http://localhost:8080/${product.img}`}
            alt="image of product"
          />
        </CardContent>
      </Card>
    </div>
  );
}
