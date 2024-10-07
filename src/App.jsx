import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./Components/Navbar";
import AppRoutes from "./Components/AppRoutes";
import Hidden from "./Components/Hidden";
import "./Styles/App.css";

function App() {
  const [hidden, setHidden] = useState(false);

  function handleOpen() {
    setHidden(!hidden);
  }

  return (
    <div>
      <Analytics />
      <Navbar isOpen={handleOpen} />
      {hidden && <Hidden click={handleOpen} />}
      <AppRoutes />
    </div>
  );
}

export default App;
