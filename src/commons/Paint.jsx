import React, { useState } from "react";

function Paint({ pintura }) {
  const [ampliada, setAmpliada] = useState(false);

  function handleClick() {
    setAmpliada(!ampliada);
  }

  return (
    <div className="pintura-div center" onClick={handleClick}>
      <img
        src={pintura}
        alt="pintura"
        className={
          ampliada ? "imagen-ampliada pinturas" : "imagen-normal pinturas"
        }
      ></img>
    </div>
  );
}

export default Paint;
