import React from "react";
import { useSelector } from "react-redux";
import { pinturas } from "../utils/pinturas";
import Paint from "../commons/Paint";

function Paintings() {
  const theme = useSelector((state) => state.theme.dark);

  return (
    <div className={theme ? "home-oscuro all" : "home-claro all"}>
      <h1>Paintings</h1>
      <div className="container top">
        {pinturas.map((pintura) => (
          <Paint pintura={pintura} />
        ))}
      </div>
    </div>
  );
}

export default Paintings;
