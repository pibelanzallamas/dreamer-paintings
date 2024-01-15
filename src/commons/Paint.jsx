import React, { useState } from "react";

function Paint({ pintura }) {
  const [ampliada, setAmpliada] = useState(false);

  return (
    <div className="pintura">
      <img
        src={pintura}
        alt="pintura"
        className={
          ampliada ? "pinturas imagen-ampliada" : "imagen-normal pinturas"
        }
      ></img>
    </div>
  );
}

export default Paint;
