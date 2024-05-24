import Navbar from "./components/Navbar";
import AppRoutes from "./components/AppRoutes";
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
