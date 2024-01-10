import React, { useState } from "react";
import { useSelector } from "react-redux";
import { pinturas } from "../utils/pinturas";
import Paint from "../commons/Paint";

function Home() {
  const [ampliada, setAmpliada] = useState(false);
  const theme = useSelector((state) => state.theme.dark);

  return (
    <div className={theme ? "home-oscuro all" : "home-claro all"}>
      <h1>Dreamers Paintings</h1>
      <h3 className="top">
        Buenos Aire's native resident makes his dreams come true and not ironic
        enough has made himself abeiveloy to make this abstracts paitings that
        resonates in the most peaceful way.
      </h3>
      <div className="pinturas-div top">
        {pinturas.map((pintura) => (
          <Paint pintura={pintura} />
        ))}
      </div>
      <div className="contact" id="contacto">
        <h1>Contacto</h1>
        <p>Email: dreamerspaiting@gmail.com </p>
        <p>Instagram: dreamers.paiting </p>
      </div>
    </div>
  );
}

export default Home;
