import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLang } from "../state/lang";
import bird from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

function Hidden() {
  const [esp, setEsp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //cambia de idioma
  function handleLanguage() {
    dispatch(setLang(!esp));
    setEsp(!esp);
  }

  return (
    <div className="hidden">
      <ul className="links-mobile">
        <Link to="/about">{esp ? "ACERCA" : "ABOUT"}</Link>
        <Link to="/paintings">{esp ? "PINTURAS" : "PAINTINGS"}</Link>
        <Link to="/schedule">{esp ? "AGENDA" : "SCHEDULE"}</Link>
        <Link to="/contact">{esp ? "CONTACTO" : "CONTACT"}</Link>
      </ul>
      <div className="buttons-mobile">
        <a
          href="https://twitter.com/DreamerPainting"
          target="_blank"
          className="social-button"
        >
          <img src={bird}></img>
        </a>
        <a
          href="https://www.instagram.com/dreamer.paintings"
          target="_blank"
          className="social-button"
        >
          <img src={instagram}></img>
        </a>
        {esp ? (
          <button
            className="flags flag-button spain"
            onClick={handleLanguage}
          ></button>
        ) : (
          <button
            className="flags flag-button england"
            onClick={handleLanguage}
          ></button>
        )}
      </div>
    </div>
  );
}

export default Hidden;
