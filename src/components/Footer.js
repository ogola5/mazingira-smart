import React from "react";
import { social } from "../socials";
import "./styles/footer.css"; // Import the CSS file for styling
import { FaPhone, FaMapMarker } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Mazingira Smart</h3>
          <p>
            We are Dedicated to pioneering innovative solutions for
            environmental sustainability, Mazingira Smart is a beacon of hope in
            the fight against climate change.
            <br />
            We aspire to be part of the movement toward a future where
            ecosystems flourish, natural resources are preserved, and every
            individual, irrespective of gender or age, is empowered to actively
            contribute to a resilient, equitable, and environmentally conscious
            society.
          </p>
        </div>
        <div className="footer-section contact-info">
          <h3>Contact Info</h3>
          <p>
            <FaPhone size={20} />: +254 791 831 939 / +254 725 952 484
          </p>
          <p>
            <MdMail size={20} /> : mazingirasmart@gmail.com
          </p>
          <p>
            <FaMapMarker size={20} /> : Nairobi, Kenya
          </p>
        </div>
        <div className="footer-section social">
          <h3>Connect with Us</h3>
          <ul className="social-icons">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
