import React from "react";
import {Link} from 'react-router-dom';
import ProductArray from "../mocks/ProductArray";

export default function Product() {
        return (
        <ul>
            {ProductArray.map(product=>
            <li key={product.id}>
                <Link to={`/product/${product.id}`}>
                {product.name}
                </Link>
            </li>)}
        </ul>
    )     
}
   