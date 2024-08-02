import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLang } from "../state/lang";
import bird from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

function Navbar({ isOpen }) {
  const [esp, setEsp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //cambia de idioma
  function handleLanguage() {
    dispatch(setLang(!esp));
    setEsp(!esp);
  }

  //GO home
  function handleHome() {
    navigate("/");
  }

  function handleKeySpace(event) {
    if (event.key === " ") {
      event.preventDefault();
      navigate("/about");
    }
  }

  return (
    <nav className="nav-oscuro navbar">
      <button onClick={handleHome} className="flags home-button"></button>
      <ul className="links">
        <Link key={2} to="/about" onKeyDown={handleKeySpace}>
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
    </nav>
  );
}

export default Navbar;
