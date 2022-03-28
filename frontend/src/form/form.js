import React from "react";
import { useForm } from "react-hook-form";
// import useFetch  from "../hooks/useFetch"
import {
  Typography,
  TextField,
  Button,
  Box,
  Modal,
  Container,
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
    return CreateNewProduct(data);
  };
  const CreateNewProduct = (data) => {
    const { name, price, img } = data;
    const product = new FormData();
    product.append("name", name);
    product.append("price", price);
    product.append("img", img[0]);

    const url = "http://localhost:8080/api/products/form";
    const fetchData = {
      method: "POST",
      body: product,
      "Content-Type": "multipart/form-data",
    };
    // useFetch (url, fetchData)
    const request = async () => {
      const res = await fetch(url, fetchData);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Something was wrong");
      } else {
        return alert(data);
      }
    };
    try {
      if (fetchData) {
        request();
      }
    } catch (error) {
      return error.message;
    }
  };
  return (
    <div>
      <Container
        sx={{
          display: "flex",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            display: { xs: "none", md: "flex", margin: "10px" },
          }}
        >
          List of all products
        </Typography>
        <Button
          style={{ width: "200px", margin: "10px", marginLeft: "50%" }}
          type="submit"
          color="primary"
          variant="contained"
          onClick={handleOpen}
        >
          Add product
        </Button>
      </Container>
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
    </div>
  );
}











