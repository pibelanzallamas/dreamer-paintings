import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLang } from "../state/lang";
import logo from "../assets/dp-logo.jpeg";
import bird from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

function Navbar({ isOpen }) {
  const [esp, setEsp] = useState(false);
  const dispatch = useDispatch();

  //cambia de idioma
  function handleLanguage() {
    dispatch(setLang(!esp));
    setEsp(!esp);
  }

  return (
    <div className="nav-oscuro navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="titulos">
        <Link key={2} to="/about">
          {esp ? "ACERCA" : "ABOUT"}
        </Link>
        <Link key={3} to="/paintings">
          {esp ? "PINTURAS" : "PAINTINGS"}
        </Link>
        <Link key={4} to="/schedule">
          {esp ? "AGENDA" : "SCHEDULE"}
        </Link>
        <Link key={5} to="/contact">
          {esp ? "CONTACTO" : "CONTACT"}
        </Link>
      </ul>
      <div className="botones">
        <a
          href="https://twitter.com/DreamerPainting"
          target="_blank"
          className="boton"
        >
          <img src={bird}></img>
        </a>
        <a
          href="https://www.instagram.com/dreamer.paintings"
          target="_blank"
          className="boton"
        >
          <img src={instagram}></img>
        </a>
        {esp ? (
          <button className="flags spain" onClick={handleLanguage}></button>
        ) : (
          <button className="flags england" onClick={handleLanguage}></button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
