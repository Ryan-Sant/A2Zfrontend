import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../media/AtoZ_logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setServiceOpen(false);
  };

  return (
    <header className="mainHeader">
      <div className="headerContainer">

        <div className="headerLogo">
          <Link to="/"><img src={logo} alt="A to Z Landscaping" /></Link>
        </div>

        <div className="mobileButton" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={menuOpen ? "headerMenu active" : "headerMenu"}>

          <Link to="/" onClick={closeAll}>Home</Link>
          <Link to="/about" onClick={closeAll}>About Us</Link>

          <div
            className={serviceOpen ? "servicesDropdown open" : "servicesDropdown"}
            onClick={() => setServiceOpen(!serviceOpen)}
          >
            <div className="serviceTitle">Services <span>▾</span></div>
            <div className="dropdownMenu">

              <Link to="/services/lawn-care" onClick={closeAll}>
                Lawn Care & Maintenance
              </Link>

              <Link to="/services/landscape-design" onClick={closeAll}>
                Landscaping & Design
              </Link>

              <Link to="/services/hardscaping" onClick={closeAll}>
                Hardscaping & Outdoor Construction
              </Link>

              <Link to="/services/property-cleanup" onClick={closeAll}>
                Property Cleanup Services
              </Link>

            </div>
          </div>

          <Link to="/contact" onClick={closeAll}>Contact</Link>

        </nav>
      </div>
    </header>
  );
}