import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Paintings from "./Paintings";
import Contact from "./Contact";
import Schedule from "./Schedule";
import NotFound from "./NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/paintings" element={<Paintings />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
