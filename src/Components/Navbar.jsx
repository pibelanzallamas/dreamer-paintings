import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLang } from "../state/lang";
import logo from "../assets/dp-logo.jpeg";
import bird from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import britain from "../assets/great-britain.svg";
import spain from "../assets/spain.svg";

function Navbar({ isOpen }) {
  const [esp, setEsp] = useState(false);
  const dispatch = useDispatch();

  //cambia de idioma
  function handleLanguage() {
    dispatch(setLang(!esp));
    setEsp(!esp);
  }

  return (
    <div className={"nav-oscuro navbar"}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="titulos">
        {esp ? (
          <>
            <Link key={1} to="/">
              INTRO
            </Link>
            <Link key={2} to="/about">
              ACERCA
            </Link>
            <Link key={3} to="/paintings">
              PINTURAS
            </Link>
            <Link key={4} to="/schedule">
              AGENDA
            </Link>
            <Link key={5} to="/contact">
              CONTACTO
            </Link>
          </>
        ) : (
          <>
            <Link key={1} to="/">
              INTRO
            </Link>
            <Link key={2} to="/about">
              ABOUT
            </Link>
            <Link key={3} to="/paintings">
              PAINTINGS
            </Link>
            <Link key={4} to="/schedule">
              SCHEDULE
            </Link>
            <Link key={5} to="/contact">
              CONTACT
            </Link>
          </>
        )}
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
        <div onClick={handleLanguage} className="banderas">
          {esp ? (
            <img src={britain} alt="britain" />
          ) : (
            <img src={spain} alt="spain" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
