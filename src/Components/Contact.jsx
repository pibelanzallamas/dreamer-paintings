import React from "react";
import { useSelector } from "react-redux";
import scheme from "../assets/pic4.jpg";

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

      <p className="email">
        <i>
          <span>Email</span>
          <a href="mailto:dreamerspaiting@gmail.com" target="_blank">
            {": "}dreamerspaiting@gmail.com
          </a>
        </i>
      </p>
      <p className="email">
        <i>
          <span>Instagram</span>
          <a href="https://www.instagram.com/dreamer.paintings" target="_blank">
            {": "}dreamer.paintings
          </a>
        </i>
      </p>
      <p className="email">
        <i>
          <span>Twitter</span>
          <a href="https://twitter.com/DreamerPainting" target="_blank">
            {": "}dreamer.paintings
          </a>
        </i>
      </p>
    </div>
  );
}

export default Contact;
