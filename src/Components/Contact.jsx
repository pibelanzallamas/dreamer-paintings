import React from "react";
import { useSelector } from "react-redux";

function Contact() {
  const theme = useSelector((state) => state.theme.dark);
  const lang = useSelector((state) => state.lang.esp);

  return (
    <div className={theme ? "home-oscuro all" : "home-claro all"}>
      <h1>{lang ? <>Contacto</> : <>Contact</>}</h1>
      <p className="top">
        <u>Email</u>
      </p>
      <i className="email">
        <p>dreamerspaiting@gmail.com</p>
      </i>
    </div>
  );
}

export default Contact;
