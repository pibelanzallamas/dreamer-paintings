import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../state/lang";
import bird from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

function Navbar({ isOpen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [esp, setEsp] = useState(useSelector((state) => state.lang.esp));
  console.log(esp);
  function handleLanguage() {
    dispatch(setLang(!esp));
    setEsp(!esp);
  }

  function handleHome() {
    navigate("/");
  }

  return (
    <nav>
      <button onClick={handleHome} className="home-button flags"></button>
      <ul className="links-desktop">
        <Link to="/about">{esp ? "ACERCA" : "ABOUT"}</Link>
        <Link to="/paintings">{esp ? "PINTURAS" : "PAINTINGS"}</Link>
        <Link to="/schedule">{esp ? "AGENDA" : "SCHEDULE"}</Link>
        <Link to="/contact">{esp ? " CONTACTO" : "CONTACT"}</Link>
      </ul>
      <div className="buttons-desktop">
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
          <button className="flags spain" onClick={handleLanguage}></button>
        ) : (
          <button className="flags england" onClick={handleLanguage}></button>
        )}
      </div>
      <button onClick={isOpen} className="hamburger-button flags"></button>
    </nav>
  );
}

export default Navbar;
