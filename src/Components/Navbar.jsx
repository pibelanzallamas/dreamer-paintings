import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTheme } from "../state/theme";
import { setLang } from "../state/lang";
import logo from "../assets/dp-logo.jpeg";
import sun from "../assets/sun.svg";
import moon from "../assets/half-moon.svg";
import bird from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import britain from "../assets/great-britain.svg";
import spain from "../assets/spain.svg";

function Navbar() {
  const [dark, setDark] = useState(false);
  const [esp, setEsp] = useState(false);
  const dispatch = useDispatch();

  //cambia a modo nocturno
  function handleDarkMode() {
    dispatch(setTheme(!dark));
    setDark(!dark);
  }

  //cambia de idioma
  function handleLanguage() {
    dispatch(setLang(!esp));
    setEsp(!esp);
  }

  return (
    <div className={dark ? "nav-oscuro navbar" : "nav-claro navbar"}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <ul className="titulos">
        {esp ? (
          <>
            <Link to="/">INTRO</Link>
            <Link to="/about">ACERCA</Link>
            <Link to="/paintings">PINTURAS</Link>
            <Link to="schedule">AGENDA</Link>
            <Link to="/contact">CONTACTO</Link>
          </>
        ) : (
          <>
            <Link to="/">INTRO</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/paintings">PAINTINGS</Link>
            <Link to="schedule">SCHEDULE</Link>
            <Link to="/contact">CONTACT</Link>
          </>
        )}
      </ul>

      <div className="botones">
        <div tabIndex="0" onClick={handleDarkMode} className="boton">
          {dark ? (
            <img src={sun} alt="sun-logo" />
          ) : (
            <img src={moon} alt="moon" />
          )}
        </div>

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

        <div tabIndex="0" onClick={handleLanguage} className="banderas">
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
