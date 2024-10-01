import React from "react";
import { useSelector } from "react-redux";
import scheme from "../assets/pic1.jpg";

function Schedule() {
  const lang = useSelector((state) => state.lang.esp);

  return (
    <div className="all">
      <h1>{lang ? <>Agenda</> : <>Schedule</>}</h1>
      <figure className="schedule-image">
        <img src={scheme} alt="schedule-image" />
      </figure>
      <p>
        {lang ? (
          <>
            Realizo 5 pinturas al mes; con lo cual estaré publicando más
            pinturas de forma mensual o trimestral.
          </>
        ) : (
          <>
            I create 5 paintings per month; therefore, I will publishing more
            artwork on a monthly or quarterly basis.
          </>
        )}
      </p>
    </div>
  );
}

export default Schedule;
