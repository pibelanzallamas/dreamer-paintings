import React from "react";
import { useSelector } from "react-redux";

function NotFound() {
  const theme = useSelector((state) => state.theme.dark);
  const lang = useSelector((state) => state.lang.esp);

  return (
    <div className={theme ? "home-oscuro all" : "home-claro all"}>
      <h2>
        {lang ? (
          <>Lo siento, la dirección no fue encontrada.</>
        ) : (
          <>Sorry, the address was not found.</>
        )}
      </h2>
    </div>
  );
}

export default NotFound;
