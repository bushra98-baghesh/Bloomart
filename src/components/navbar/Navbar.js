import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container px-0">
          <Link className="navbar-brand pt-0    " to="/">
            <motion.img src={Logo} alt="" className="logo me-5" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <motion.div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className=" navbar-nav ms-auto mb-2 pb-4 mb-lg-0 fs-6 fw-bold text-uppercase text-grey-600   ">
              <li className="nav-item pe-4">
                <Link className="link-nav nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
