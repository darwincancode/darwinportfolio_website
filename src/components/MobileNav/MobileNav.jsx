import React from "react";
import "./MobileNav.css";
import logo from "../../assets/images/logowhite.png";
const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src={logo} alt="logo-portfolio" />
          <ul>
            <li>
              <a href="#darwin" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="#darwin" className="menu-item">
                Skills
              </a>
            </li>
            <li>
              <a href="#darwin" className="menu-item">
                Work Experience
              </a>
            </li>
            <li>
              <a href="#darwin" className="menu-item">
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
