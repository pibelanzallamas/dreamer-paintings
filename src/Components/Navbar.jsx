import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTheme } from "../state/theme";
import { alerts } from "../utils/alerts";
import sun from "../assets/sun.svg";
import moon from "../assets/half-moon.svg";
import bird from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import logo from "../assets/dp-logo.jpeg";

function Navbar() {
  const [dark, setDark] = useState(false);
  const dispatch = useDispatch();

  function handleClick() {
    alerts("hhh", "gooo", "success");
  }

  function handleDarkMode() {
    dispatch(setTheme(!dark));
    setDark(!dark);
  }

  return (
    <div className={dark ? "nav-oscuro navbar" : "nav-claro navbar"}>
      <div className="logo-principal">
        <img src={logo} className="themeButtom logo"></img>
      </div>

      <h3>INTRO</h3>
      <h3>ABOUT</h3>
      <h3>PAINTINGS</h3>
      <h3>CONTACT</h3>

      <div className="logos">
        <div onClick={handleDarkMode} className="themeButtom">
          {dark ? (
            <img src={sun} alt="sun-logo" />
          ) : (
            <img src={moon} alt="moon" />
          )}
        </div>

        <a
          href="https://www.instagram.com/dreamer.paintings?igsh=MXE4ZWw1eDFneXluaQ%3D%3D&utm_source=qr"
          target="_blank"
        >
          <img src={bird} className="themeButtom"></img>
        </a>

        <a href="" target="_blank">
          <img src={instagram} className="themeButtom"></img>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
