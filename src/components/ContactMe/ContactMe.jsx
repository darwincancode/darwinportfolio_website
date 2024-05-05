import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";
const EmailIcon = require("../../assets/images/email-icon.png");
const GitHubIcon = require("../../assets/images/github-icon.png");
const ContactMe = () => {
  return (
    <section className="contact-container" id="contactme">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl={EmailIcon}
            text="darwindivinopiodos@gmail.com"
          />
          <ContactInfoCard
            iconUrl={GitHubIcon}
            text="https://github.com/darwindivinopiodos"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
