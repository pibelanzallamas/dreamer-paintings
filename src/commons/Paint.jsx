import React, { useState } from "react";

function Paint({ src, alt }) {
  const [ampliada, setAmpliada] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={ampliada ? "imagen-ampliada" : "imagen-normal"}
      onClick={() => {
        setAmpliada(!ampliada);
      }}
    />
  );
}

export default Paint;
