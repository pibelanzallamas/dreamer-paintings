import React, { useState } from "react";
import painting1 from "../assets/1.jpeg";
import painting2 from "../assets/2.jpeg";
import painting3 from "../assets/3.jpeg";
import painting4 from "../assets/4.jpeg";
import painting5 from "../assets/5.jpeg";
import { useSelector } from "react-redux";

function Home() {
  const paintings = [painting1, painting2, painting3, painting4, painting5];
  const [ampliada, setAmpliada] = useState(false);
  const theme = useSelector((state) => state.theme.dark);

  return (
    <div className={theme ? "home-oscuro" : "home-claro"}>
      <h1>Dreamers Paintings</h1>
      <h2>
        Buenos Aire's native resident makes his dreams come true and not ironic
        enough has made himself abeiveloy to make this abstracts paitings that
        resonates with you in the most peaceful ways.
      </h2>

      <div className="contact" id="contacto">
        <h1>Contacto</h1>
        <p>Email: dreamerspaiting@gmail.com </p>
        <p>Instagram: dreamers.paiting </p>
      </div>
    </div>
  );
}

export default Home;
