import React from "react";
import { useSelector } from "react-redux";

function About() {
  const theme = useSelector((state) => state.theme.dark);

  return (
    <div className={theme ? "home-oscuro all" : "home-claro all"}>
      <h1>About</h1>
      <p className="top">
        Realizo mis pinturas a través de la técnica “actinología painting”, cuyo
        resultado son pinturas abstractas. Siempre utilizo tempera sobre papel
        blanco; y solo 4 colores: negro, azul, rojo, verde. No utilizo
        inteligencia artificial. El tamaño real de todas las pinturas es de A4:
        30 cms alto x 20 cms ancho.
      </p>
    </div>
  );
}

export default About;
