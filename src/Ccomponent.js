import React, { Component } from "react";
import {
    BrowserRouter as Router, Route, Routes, Link
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Product";

export default class Ccomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/product'>Product</Link>
                            </li>
                        </ul>
                    </nav >
                    <Routes>

                        <Route exact path="/" element={<Home />} />

                        <Route exact path="/About" element={<About />} />

                        <Route exact path="/Product" element={<Product />} />

                    </Routes>
                </div >
            </Router >
        )
    }
}