import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTheme } from "../state/theme";
import { alerts } from "../utils/alerts";
import sun from "../assets/sun.svg";
import moon from "../assets/half-moon.svg";

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
      <div className="bottom">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="logo">
        <Link to="/" onClick={handleClick}>
          <img src="./logo.jpeg"></img>
        </Link>
      </div>
      <div onClick={handleDarkMode} className="themeButtom">
        {dark ? (
          <img src={sun} alt="sun-logo" />
        ) : (
          <img src={moon} alt="moon" />
        )}
      </div>
      <div className="sobreMI"></div>
      <div className="search">
        <a href="#contacto">Contacto</a>
      </div>
    </div>
  );
}

export default Navbar;
