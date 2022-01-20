import React from "react";
import {useParams} from 'react-router-dom';

export default function ProductDescription({products}){
    const {productId} = useParams();
   
    return(
     <div>
         {products.map(product=><h3 key={product.id}>
            {productId===product.id ? `Product ${product.name} price: ${product.price}`: null}</h3>)}
     </div>   
    )
}
