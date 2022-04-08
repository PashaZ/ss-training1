import React from "react";
import { useForm } from "react-hook-form";

import {
  Typography,
  TextField,
  Button,
  Box,
  Modal,
  Container,
  Toolbar,
} from "@mui/material";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const textStyle = {
  width: "200px",
  margin: "10px",
};
export default function FormOfProduct() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    return CreateProduct(data);
  };
  const CreateProduct = (data) => {
    const statusValue = "active";
    const { name, price, img } = data;
    const product = new FormData();
    product.append("name", name);
    product.append("price", price);
    product.append("img", img[0]);
    product.append("statusValue", statusValue);

    const url = "http://localhost:8080/api/products/form";
    const fetchData = {
      method: "POST",
      body: product,
      "Content-Type": "multipart/form-data",
    };
    const sendProduct = async () => {
      const response = await fetch(url, fetchData);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something was wrong");
      } else {
        return alert(data);
      }
    };
    try {
      if (fetchData) {
        sendProduct();
      }
    } catch (error) {
      return error.message;
    }
  };
  return (
    <Container style={{ width: "100%", maxWidth: "100%", display: "grid" }}>
      <Toolbar sx={{ marginY: "20px" }}>
        <Typography variant="h6" sx={{ ml: "40%" }}>
          List of all products
        </Typography>

        <Button
          sx={{ width: "180px", ml: "25%" }}
          type="submit"
          color="primary"
          variant="contained"
          onClick={handleOpen}
        >
          Add product
        </Button>
      </Toolbar>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              sx={textStyle}
              type="text"
              label="Name of product"
              variant="outlined"
              {...register("name")}
            />
            <br />
            <TextField
              sx={textStyle}
              type="text"
              label="Price of product"
              variant="outlined"
              {...register("price")}
            />
            <br />
            <Button
              sx={textStyle}
              variant="outlined"
              component="label"
              color="primary"
            >
              Upload a file
              <input type="file" hidden {...register("img")}></input>
            </Button>

            <br />
            <Button
              sx={textStyle}
              type="submit"
              color="primary"
              variant="contained"
            >
              Sent product
            </Button>
          </form>
        </Box>
      </Modal>
    </Container>
  );
}
