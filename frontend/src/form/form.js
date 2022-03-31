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
    return CreateNewProduct(data);
  };
  const CreateNewProduct = (data) => {
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

// import React, { useState } from 'react'

// export default function FormOfProduct() {
//     const [name, setName] = useState('')
//     const [price, setPrice] = useState('')
//     const [img, setFile] = useState(null)

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         createNewProduct()
//     }

//     const selectFile = (event) => {
//         setFile(event.target.files[0])
//     }
//     const nameChange = (event) => {
//         setName(event.target.value)
//     }
//     const priceChange = (event) => {
//         setPrice(event.target.value)
//     }
//     const createNewProduct = () => {
//         const product = new FormData()
//         product.append('name', name)
//         product.append('price', price)
//         product.append('img', img)

//         const url = 'http://localhost:8080/api/products/form'
//         const fetchData = {
//             method: 'POST',
//             body: product,
//             'Content-Type': 'multipart/form-data',
//         }

//         const request = async () => {
//             const res = await fetch(url, fetchData)
//             const data = await res.json()
//             if (!res.ok) {
//                 throw new Error(data.message || 'Something was wrong')
//             }
//             return alert(data)
//         }
//         try {
//             if (fetchData) {
//                 request()
//             }
//         } catch (error) {
//             return error.message
//         }
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 <span>Name of product</span>
//                 <input type="text" value={name} onChange={nameChange}></input>
//             </label>
//             <label>
//                 <span>Price of product</span>
//                 <input value={price} type="text" onChange={priceChange}></input>
//             </label>
//             <label>
//                 <br />
//                 <input type="file" onChange={selectFile}></input>
//             </label>
//             <button type="submit">Add product</button>
//         </form>
//     )
// }
// -------------------------------------------------------------------------------------------------------------
// import React, { useState} from 'react';
// // import { v4 as uuidv4 } from 'uuid';
// import axios from 'axios';

// export default function FormOfProduct() {
//     const [product, setProduct] = useState({
//         name: '',
//         price: ''
//     });
//     ////////////////////////////////////
//     // const [file, setFile] = useState(null)
//     // const selectFile = async (event) =>{
//     //     const files = event.target.files
//     //     setFile(files[0]);
//     //     const formData = new FormData()
//     //     formData.append('img', files[0])
//     //     // formData.append()
//     //     const url = 'http://localhost:8080/api/products/form' ;

//     //     fetch(url,{ method: 'POST', body:formData })
//     // .then(res=>res.json())
//     // .then(data=>{
//     //     console.log(data);
//     // })
//     // .catch((error)=>{console.log(error)})
//     // }

//  //////////////////////////////////////
//     const handleChange = (event) => {
//         const { name, value} = event.target
//         setProduct({ ...product, [name]: value })
//     }
//     const handleSubmit = (event) => {
//         if (product.name === '' || !product.price) {
//             alert('Write all fields!')
//        } else
//        {
//             event.preventDefault();
//         createNewProduct();
//  }
//     };

//     const createNewProduct = async () => {
//         const url = 'http://localhost:8080/api/products/form' ;
//         const fetchData = {
//             method: 'POST',
//             body: JSON.stringify(product),
//             headers: {
//                 'Content-Type': 'application/json'
//               },
//         };
//             const request = async () => {
//             const res = await fetch(url, fetchData);
//             const data = await res.json();
//             if (!res.ok) {
//                 throw new Error(data.message || "Something was wrong")
//             }
//               return alert(data)
//             };

//         try {
//             if (product) {
//                 request();
//             }
//         }
//         catch (error) {
//              return error.message
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 <span>Name of product</span>
//                 <input
//                     type="text"
//                     name="name"
//                     onChange={handleChange}
//                 ></input>
//             </label>
//             <label>
//                 <span>Price of product</span>
//                 <input
//                 type="text"
//                 name="price"
//                 onChange={handleChange}></input>
//             </label>
//             {/* ///////////////////// */}
//             {/* <label>
//                 <br/>
//                 <input  type="file"
//                 name="img"
//                 onChange={selectFile}></input>
//             </label> */}
//            {/* ///////////////////// */}
//             <button type="submit">Add product</button>
//         </form>
//     )
// }
// ----------------------------------------------------------------------------------------------------------
