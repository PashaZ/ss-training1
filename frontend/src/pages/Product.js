// import React from "react";
// import {Link} from 'react-router-dom';
// import ProductArray from "../mocks/ProductArray";

// export default function Product() {
//         return (
//         <ul>
//             {ProductArray.map(product=>
//             <li key={product.id}>
//                 <Link to={`/product/${product.id}`}>
//                 {product.name}
//                 </Link>
//             </li>)}
//         </ul>
//     )     
// }


import React from "react";
import {Link} from 'react-router-dom';
// import ProductArray from "../mocks/ProductArray";

function fetchSubmit() {
    return fetch("http://localhost:8080/api/users")
    .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      }
    )
  }

fetchSubmit()
.then((productArray)=>Product(productArray))
.catch((error)=>console.log(error));

export default function Product(productArray) {
    console.log("масив", productArray);

    // const data = Array.from(productArray);
    // console.log("data", data);
    
           return (
        <ul>
            {productArray.map((product)=>
            <li key={product.id}>
                <Link to={`/product/${product.id}`}>
                {product.name}
                </Link>
            </li>)}
        </ul>
    )     
}
   