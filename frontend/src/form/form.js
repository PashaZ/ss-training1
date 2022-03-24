import React from "react";
import { useForm } from "react-hook-form";

export default function FormOfProduct() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    return createNewProduct(data);
  };
  const createNewProduct = (data) => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Name of product</span>
        <input defaultValue="Apple" {...register("name")}></input>
      </label>
      <label>
        <span>Price of product</span>
        <input defaultValue="1" {...register("price")}></input>
      </label>
      <label>
        <br />
        <input type="file" {...register("img")}></input>
      </label>
      <button type="submit">Add product</button>
    </form>
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
