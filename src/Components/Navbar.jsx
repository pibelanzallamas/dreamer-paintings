import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTheme } from "../state/theme";
import logo from "../assets/dp-logo.jpeg";
import sun from "../assets/sun.svg";
import moon from "../assets/half-moon.svg";
import bird from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

function Navbar() {
  const [dark, setDark] = useState(false);
  const dispatch = useDispatch();

  //cambia a modo nocturno
  function handleDarkMode() {
    dispatch(setTheme(!dark));
    setDark(!dark);
  }

  return (
    <div className={dark ? "nav-oscuro navbar" : "nav-claro navbar"}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <ul className="titulos">
        <Link to="/">INTRO</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/paintings">PAINTINGS</Link>
        <Link to="schedule">SCHEDULE</Link>
        <Link to="/contact">CONTACT</Link>
      </ul>

      <div className="botones">
        <div onClick={handleDarkMode} className="themeButtom">
          {dark ? (
            <img src={sun} alt="sun-logo" />
          ) : (
            <img src={moon} alt="moon" />
          )}
        </div>

        <a
          href="https://twitter.com/DreamerPainting"
          target="_blank"
          className="themeButtom"
        >
          <img src={bird}></img>
        </a>

        <a
          href="https://www.instagram.com/dreamer.paintings"
          target="_blank"
          className="themeButtom"
        >
          <img src={instagram}></img>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
