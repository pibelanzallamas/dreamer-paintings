import Navbar from "./Components/Navbar";
import AppRoutes from "./Components/AppRoutes";
import Hidden from "./Components/Hidden";
import "./Styles/App.css";
import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";

function App() {
  const [hidden, setHidden] = useState(false);

  function handleOpen() {
    setHidden(!hidden);
  }

  return (
    <div>
      <Analytics />
      <Navbar isOpen={handleOpen} />
      {hidden && <Hidden />}
      <AppRoutes />
    </div>
  );
}

export default App;
