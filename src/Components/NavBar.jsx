import React from "react";
import logo from "../assets/img/gb-logo.jpg";
import CartWidget from "./CartWidget";

const NavBar = () => (
    <div className="container">
        <ul className="nav d-flex align-items-center">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/"><img src={logo} width="48" alt="logo" /></a>
            </li>
            <li className="nav-item">
                <a className="nav-link link_header" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link link_header" href="/">Contacto</a>
            </li>
            <li className="nav-item">
                <a className="nav-link link_header" href="/">Quienes somos</a>
            </li>
            <button type="button" className="btn btn-outline-secondary">
            <CartWidget /></button>
        </ul>
    </div>

)

export default NavBar;