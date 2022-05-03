import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { ProductProvider } from "./components/productProvider/productProvider";

import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'
const client = new ApolloClient({
  uri:'http://localhost:8080/graphql',
  cache: new InMemoryCache()
})

ReactDom.render(
  <React.StrictMode>
    <ProductProvider>

      <ApolloProvider client={client}>
      <App />
      </ApolloProvider>

    </ProductProvider>
  </React.StrictMode>,
  document.querySelector("#root")
);
