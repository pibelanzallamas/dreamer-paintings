import React from "react";
import ModalImage from "react-modal-image";

function Paint({ pintura }) {
  return (
    <div className="pintura">
      <ModalImage
        small={pintura}
        hideDownload={true}
        hideZoom={true}
        large={pintura}
        alt="Dreamer Paintings"
      />
    </div>
  );
}

export default Paint;
