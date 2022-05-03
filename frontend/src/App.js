import React, { useEffect, useState } from "react";
import ComponentMainPage from "./hoc/ComponentMainPage";

import {useQuery} from "@apollo/client"
import {GET_ALL} from "./query/product"
 
function App() {
  const[products, setProducts]=useState([])
// -----------------------------------------------------------------
  const {data, loading, error} = useQuery(GET_ALL)
  console.log("data-", data)
 useEffect(()=>{
   if(!loading){
    setProducts(data.getAll)
   }
if(loading){
  return <h1>Loading...</h1>
}
 }, [data])
// --------------------------------------------------------------
  return (
    <div>
          <div>
      <ComponentMainPage />
    </div>
    <div>
      {products.map((product)=>
       <div key={product.id}>{product.id}{product.name}{product.price}</div> 
      )}
    </div>
    </div>

  );
}
export default App;
