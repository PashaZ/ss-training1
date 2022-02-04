import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';

export default function ProductDescription(){
    const [product, setProduct] = useState({});
    const {productId} = useParams();

useEffect(()=>{
    async function fetchSubmit(){
                const product =await(await fetch(`http://localhost:8080/api/products/${productId}`)).json();
        // const product = productResponse?.find(product=>productId===product?.id);
        setProduct(product);
        console.log("product", product);
        }
fetchSubmit();
    }, []);
     return(
         <h3 key={product.id}> { `Product ${product.name} price: ${product.price}`}</h3>              
    )}
