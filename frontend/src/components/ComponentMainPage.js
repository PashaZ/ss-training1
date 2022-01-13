import React from "react";
import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import Nav from './Nav/Nav';


export default function ComponentMainPage() {
    return (
        <Router>
            <div>
                <Nav />

                <Routes>

                    <Route exact path="/" element={<Home />} />

                    <Route exact path="/about" element={<About />} />

                    <Route exact path="/product" element={<Product />} />

                </Routes>
            </div >
        </Router >
    )
}
