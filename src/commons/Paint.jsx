import React from "react";
import ModalImage from "react-modal-image";

function Paint({ pintura, tiny }) {
  return (
    <div className="pintura">
      <ModalImage
        small={tiny}
        hideDownload={true}
        hideZoom={true}
        large={pintura}
        alt="Dreamer Paintings"
      />
    </div>
  );
}

export default Paint;
