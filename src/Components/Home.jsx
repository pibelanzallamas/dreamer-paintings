import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const theme = useSelector((state) => state.theme.dark);

  return (
    <div className={theme ? "home-oscuro all" : "home-claro all"}>
      <h1>Dreamer Paintings</h1>
      <img src="" alt="" />
      <p className="top">
        Buenos Aire's native resident makes his dreams come true and not ironic
        enough has made himself abeiveloy to make this abstracts paitings that
        resonates in the most peaceful way.
      </p>
    </div>
  );
}

export default Home;
