import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../state/lang";
import bird from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

function Hidden({ click }) {
  const [esp, setEsp] = useState(useSelector((state) => state.lang.esp));
  const dispatch = useDispatch();

  //cambia de idioma
  function handleLanguage() {
    dispatch(setLang(!esp));
    setEsp(!esp);
  }

  return (
    <div className="hidden">
      <ul className="links-mobile">
        <Link onClick={click} to="/about">
          {esp ? "ACERCA" : "ABOUT"}
        </Link>
        <Link onClick={click} to="/paintings">
          {esp ? "PINTURAS" : "PAINTINGS"}
        </Link>
        <Link onClick={click} to="/schedule">
          {esp ? "AGENDA" : "SCHEDULE"}
        </Link>
        <Link onClick={click} to="/contact">
          {esp ? "CONTACTO" : "CONTACT"}
        </Link>
        <div className="buttons-mobile">
          <a
            href="https://twitter.com/DreamerPainting"
            target="_blank"
            className="social-button"
            onClick={click}
          >
            <img src={bird}></img>
          </a>
          <a
            href="https://www.instagram.com/dreamer.paintings"
            target="_blank"
            className="social-button"
            onClick={click}
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
      </ul>
    </div>
  );
}

export default Hidden;
