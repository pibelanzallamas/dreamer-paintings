import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="bottom">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="logo">
        <Link to="/">
          <img src="./logo.jpeg"></img>
        </Link>
      </div>
      <div className="search">
        <a href="#contacto">Contacto</a>
      </div>
    </div>
  );
}

export default Navbar;
