import { ProductContext } from "../../productsContext";
import { productReducer } from "../../store/productReducer/productReducer";
import { useReducer } from "react";

export const ProductProvider = ({ children }) => {
  const [productArray, dispatch] = useReducer(productReducer, []);

  const productsAction = (products) => {
    dispatch({ type: "withoutFilter", payload: products });
  };
  const filterProductsAction = (products) => {
    dispatch({ type: "filter", payload: products });
  };

  return (
    <ProductContext.Provider
      value={{ productsAction, filterProductsAction, productArray }}
    >
      {children}
    </ProductContext.Provider>
  );
};
