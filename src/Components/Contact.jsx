import React from "react";
import { useSelector } from "react-redux";
import scheme from "../assets/pic4.jpg";

function Contact() {
  const lang = useSelector((state) => state.lang.esp);

  return (
    <div className="all">
      <h1>{lang ? <>Contacto</> : <>Contact</>}</h1>
      <figure className="contact-image">
        <img src={scheme} alt="contact-image" />
      </figure>
      <p className="email">
        <i className="contacts">
          <span>Email</span>
          <a href="mailto:dreamerspainting@gmail.com" target="_blank">
            {": "}dreamerspaiting@gmail.com
          </a>
          <br />
          <span>Instagram</span>
          <a href="https://www.instagram.com/dreamer.paintings" target="_blank">
            {": "}dreamer.paintings
          </a>
          <br />
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
