import React, { useEffect, useState } from "react";
import {
  Grid,
  Link,
  Card,
  CardContent,
  CardMedia,
  Container,
  Button,
} from "@mui/material";
// import IconButton from '@mui/material/IconButton';
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import FormOfProduct from "../form/form";
import StatusButton from "../components/statusButton/statusButton";

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
                {/* -------------------------- */}
                <StatusButton ProductStatus={product.statusValue} />
                {/* ---------------------------------------------------------------- */}
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
