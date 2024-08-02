import React from "react";
import { useSelector } from "react-redux";
import wallpaper from "../assets/dp-logo.jpeg";

function Home() {
  const lang = useSelector((state) => state.lang.esp);

  return (
    <div className="all">
      <h1>Dreamer Paintings</h1>
      <figure className="home-image">
        <img src={wallpaper} alt="homeFondo" />
      </figure>
      <p>
        {lang ? (
          <>
            Mi nombre es Fernando, soy artista plástico independiente. Me fui
            profesionalizando haciendo cursos y a través de la
            autoexperimentación.
          </>
        ) : (
          <>
            My name is Fernando. I am an independent plastic artist. I was
            professionalizing by doing courses and through self-experimentation.
          </>
        )}
      </p>
    </div>
  );
}

export default Home;
