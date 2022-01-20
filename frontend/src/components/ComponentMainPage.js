import React from "react";
import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import Nav from './Nav/Nav';
import NotFound from "../pages/NotFound";
import ProductArray from "../pages/Product/ProductArray/ProductArray";
import LinkArray from "./Nav/LinkArray";
import ProductDescription from "../pages/Product/ProductDescription";

export default function ComponentMainPage() {
    return (
        <Router>
            <div>
                <Nav LinkArray={LinkArray} />

                <Routes>

                    <Route exact path="/" element={<Home />} />

                    <Route  path="/about" element={<About />} />

                    <Route  exact path="/product" 
                    element={<Product  products={ProductArray}/>} />

                    <Route  path="/product/:productId" 
                    element={<ProductDescription products={ProductArray}/>}/>

                    <Route   path = "*" element={<NotFound />} />


                </Routes>
            </div >
        </Router >
    )
}
