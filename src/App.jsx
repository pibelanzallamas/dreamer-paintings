import Navbar from "./Components/Navbar";
import AppRoutes from "./Components/AppRoutes";
import "./styles/App.css";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div>
      <Analytics />
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
