import React from "react";
import { pinturas } from "../utils/pinturas";
import { useSelector } from "react-redux";
import Paint from "../Commons/Paint";

function Paintings() {
  const lang = useSelector((state) => state.lang.esp);

  return (
    <div className="all">
      <h1>{lang ? <>Pinturas</> : <>Paintings</>}</h1>
      <div className="paintings-container">
        {pinturas.map((painting) => (
          <Paint painting={painting.normal} tiny={painting.tiny} />
        ))}
      </div>
    </div>
  );
}

export default Paintings;
