import React, { useContext, useEffect, useReducer } from "react";
import {
  Grid,
  Link,
  Card,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import FormOfProduct from "../form/form";
import ChangeStatusProduct from "../components/changeStatusProduct/ChangeStatusProduct";
import FilterProducts from "../components/filterProducts/FilterProducts";
import { ProductContext } from "../productsContext";
import { getProducts } from "../api";

export default function Products() {
  const { productsAction, productArray } = useContext(ProductContext);

  useEffect(() => {
    getProducts().then((productsResponse) => {
      productsAction(productsResponse);
    });
  }, []);

  return (
    <Container>
      <FormOfProduct />

      <FilterProducts />

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
                <ChangeStatusProduct Product={product} />
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
