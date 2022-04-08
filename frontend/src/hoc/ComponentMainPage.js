import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Nav from "../components/Nav/Nav";
import NotFound from "../pages/NotFound";
import LinkArray from "../mocks/LinkArray";
import Product from "../pages/Product";

export default function ComponentMainPage() {
  return (
    <Router>
      <div>
        <Nav LinkArray={LinkArray} />

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route exact path="/products" element={<Products />} />

          <Route path="/product/:productId" element={<Product />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
