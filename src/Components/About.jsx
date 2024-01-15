import React from "react";
import { useSelector } from "react-redux";
import aboutImage from "../assets/dp-profile.jpeg";

function About() {
  const theme = useSelector((state) => state.theme.dark);

  return (
    <div className={theme ? "home-oscuro all" : "home-claro all"}>
      <h1>About</h1>
      <div className="contact-image">
        <img src={aboutImage} className="top" alt="" />
      </div>
      <p className="top">
        {/* Realizo mis pinturas a través de la técnica “actinología painting”, cuyo
        resultado son pinturas abstractas. Siempre utilizo tempera sobre papel
        blanco; y solo 4 colores: negro, azul, rojo, verde. No utilizo
        inteligencia artificial. El tamaño real de todas las pinturas es de A4:
        30 cms alto x 20 cms ancho. */}
        I make my paintings through the “actinology painting” technique, whose
        The result is abstract paintings. I always use tempera on paper white;
        and only 4 colors: black, blue, red, green. I do not use artificial
        intelligence. The actual size of all paintings is A4: 30 cm high x 20 cm
        wide.
      </p>
    </div>
  );
}

export default About;
