import React from "react";
import { useSelector } from "react-redux";
import scheme from "../assets/pic2.jpeg";

function Contact() {
  const theme = useSelector((state) => state.theme.dark);
  const lang = useSelector((state) => state.lang.esp);

  return (
    <div className={theme ? "home-oscuro all" : "home-claro all"}>
      <h1>{lang ? <>Contacto</> : <>Contact</>}</h1>
      <figure className="contact-image top">
        <img src={scheme} alt="" />
      </figure>
      <br />
      <br />
      {/* <p className="top">
        <u>Email</u>
      </p> */}
      <p className="email">
        <i>Email: dreamerspaiting@gmail.com</i>
      </p>
      <p className="email">
        <i>Instagram: dreamer.paintings</i>
      </p>
      <p className="email">
        <a
          href="https://twitter.com/DreamerPainting"
          target="_blank"
          style={{ hover: "red" }}
          // className="boton"
        >
          <i>Twitter: dreamer.paintings</i>
        </a>
      </p>
    </div>
  );
}

export default Contact;
