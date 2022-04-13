import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { ProductProvider } from "./components/productProvider/productProvider";

ReactDom.render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>,
  document.querySelector("#root")
);
