import { React, useState } from "react";

import "./Navbar.css";
import logowhite from "../assets/images/logowhite.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MobileNav from "./MobileNav/MobileNav";
const Navbar = () => {
  const scrollToSection = (event, id) => {
    event.preventDefault();

    const targetSection = document.getElementById(id);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img src={logowhite} alt="logo-portfolio" className="logo" />

          <ul>
            <li onClick={(e) => scrollToSection(e, "hero")}>
              <a href="#hero" className="menu-item">
                Home
              </a>
            </li>
            <li onClick={(e) => scrollToSection(e, "skills")}>
              <a href="#skills" className="menu-item">
                Skills
              </a>
            </li>
            <li onClick={(e) => scrollToSection(e, "workexperiences")}>
              <a href="#workexperiences" className="menu-item">
                Work Experience
              </a>
            </li>
            <li onClick={(e) => scrollToSection(e, "contactme")}>
              <a href="#contactme" className="menu-item">
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            {openMenu ? (
              <CloseIcon className="menu-btn-menu" />
            ) : (
              <MenuIcon className="menu-btn-menu" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
