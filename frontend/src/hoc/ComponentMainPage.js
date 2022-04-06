import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import Nav from "../components/Nav/Nav";
import NotFound from "../pages/notFound";
import LinkArray from "../mocks/LinkArray";
import Products from "../pages/ProductDescription";

export default function ComponentMainPage() {
  return (
    <Router>
      <div>
        <Nav LinkArray={LinkArray} />

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route exact path="/products" element={<Product />} />

          <Route path="/product/:productId" element={<Products />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
