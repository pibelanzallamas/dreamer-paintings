import React from "react";
import ModalImage from "react-modal-image";

function Paint({ painting, tiny }) {
  return (
    <div className="painting">
      <ModalImage
        small={tiny}
        hideDownload={true}
        hideZoom={true}
        large={painting}
        alt="Dreamer Paintings"
      />
    </div>
  );
}

export default Paint;
