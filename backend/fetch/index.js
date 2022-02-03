// import React from "react";
// import {Link} from 'react-router-dom';

// function fetchSubmit() {
//     return fetch("http://localhost:8080/api/users")
//     .then((response) => {
//         if (!response.ok) {
//           throw new Error(response.status);
//         }
//         return response.json();
//       }
//     )
//   }
// // 
// fetchSubmit()
// .then((productArray)=>Product(productArray))
// .catch((error)=>console.log(error));

// export default function Product(productArray) {
   
//            return (
//         <ul>
//             {productArray.map((product)=>
//             <li key={product.id}>
//                 <Link to={`/product/${product.id}`}>
//                 {product.name}
//                 </Link>
//             </li>)}
//         </ul>
//     )     
// }
