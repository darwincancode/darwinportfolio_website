import React from "react";
import "./Hero.css";
import react from "../../assets/images/react.PNG";
import darwinhero from "../../assets/images/darwinhero.jpg";

import html from "../../assets/images/html.PNG";

import css from "../../assets/images/css.PNG";
import javascript from "../../assets/images/javascript.PNG";

function Hero() {
  return (
    <section className="hero-container" id="hero">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas Into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div className="hero-img2">
          <div className="tech-icon">
            <img
              className="darwin-skills-logo"
              src={react}
              alt="imageportfolio"
            />
          </div>
          <img
            className="darwin-cartoon"
            src={darwinhero}
            alt="imageportfolio"
          />
        </div>
        <div>
          <div className="tech-icon">
            <img
              className="darwin-skills-logo"
              src={html}
              alt="imageportfolio"
            />
          </div>
          <div className="tech-icon">
            <img
              className="darwin-skills-logo"
              src={css}
              alt="imageportfolio"
            />
          </div>
          <div className="tech-icon">
            <img
              className="darwin-skills-logo"
              src={javascript}
              alt="imageportfolio"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
