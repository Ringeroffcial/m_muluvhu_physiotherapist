import React, { useState, useEffect } from "react";
import logoImage from "../src/assets/Logo.png";
import { FaHome, FaStethoscope, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (linkId, e) => {
    e.preventDefault();
    setActiveLink(linkId);
    setIsMenuOpen(false);

    const element = document.getElementById(linkId);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // 👇 Scroll Observer
  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }

        });
      },
      {
        rootMargin: "-40% 0px -50% 0px"
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };

  }, []);

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <div className="logo-section">
          <a href="#home" className="logo-link" onClick={(e) => handleNavClick("home", e)}>
            <span className="logo-text">Muluvhu Physiotherapist</span>
            <img src={logoImage} alt="Muluvhu Physiotherapy Logo" width="40" height="40" />
          </a>
        </div>

        {/* Mobile Menu */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation */}
        <nav className={isMenuOpen ? "open" : ""}>
          <ul>

            <li>
              <a
                href="#home"
                className={`nav-link ${activeLink === "home" ? "active" : ""}`}
                onClick={(e) => handleNavClick("home", e)}
              >
                <span className="nav-icon"><FaHome /></span>
                Home
              </a>
            </li>

            <li>
              <a
                href="#services"
                className={`nav-link ${activeLink === "services" ? "active" : ""}`}
                onClick={(e) => handleNavClick("services", e)}
              >
                <span className="nav-icon"><FaStethoscope /></span>
                Services
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
                onClick={(e) => handleNavClick("contact", e)}
              >
                <span className="nav-icon"><FaPhoneAlt /></span>
                Contact
              </a>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;