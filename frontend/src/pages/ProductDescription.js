import React from "react";
import {useParams} from 'react-router-dom';
import ProductArray from "../mocks/ProductArray";

export default function ProductDescription(){
    const {productId} = useParams();
    const product = ProductArray.find(product=>productId===product.id);

    return(
         <h3 key={product.id}> { `Product ${product.name} price: ${product.price}`}</h3>              
    );
}  
