import "./App.css";

import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Services
import LawnCare from "./pages/services/LawnCare";
import LandscapeDesign from "./pages/services/landscapeDesign";
import HardscapingOutdoorConstruction from "./pages/services/HardscapingOutdoorConstruction";
import PropertyCleanup from "./pages/services/PropertyCleanup";

// Areas
import Bremerton from "./pages/Areas/Bremerton";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/"        element={<Home />} />
        <Route path="/about"   element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* ================= SERVICES ================= */}
        <Route path="/services/lawn-care"        element={<LawnCare />} />
        <Route path="/services/landscape-design" element={<LandscapeDesign />} />
        <Route path="/services/hardscaping"      element={<HardscapingOutdoorConstruction />} />
        <Route path="/services/property-cleanup" element={<PropertyCleanup />} />

        {/* ================= AREAS ================= */}
        <Route path="/areas/bremerton" element={<Bremerton />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;