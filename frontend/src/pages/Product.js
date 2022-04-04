import React, { useEffect, useState } from "react";
import {
  Grid,
  Link,
  Card,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import FormOfProduct from "../form/form";
import MenuButton from "../components/menuButton/MenuButton";

export default function Product() {
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
    <Container>
      <FormOfProduct />
      <Grid container spacing={3}>
        {productArray?.map((product) => (
          <Grid key={product.id} item xs={4} md={2}>
            <Card
              key={product.id}
              sx={{
                border: "3px",
                height: "100%",
                gap: "30px",
              }}
            >
              <CardContent
                align="center"
                sx={{ border: "3px", color: "inherit" }}
                key={product.id}
              >
                <MenuButton Product={product} />
                <CardMedia
                  component="img"
                  sx={{ height: 70, width: 70 }}
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
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
