import React from "react";
import { social } from "../socials";
import "./styles/footer.css"; // Import the CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Mazingira Smart</h3>
          <p>
            Dedicated to pioneering innovative solutions for environmental
            sustainability, Mazingira Smart is a beacon of hope in the fight
            against climate change.
          </p>
        </div>
        <div className="footer-section contact-info">
          <h3>Contact Info</h3>
          <p>
            <strong>Phone:</strong> +254 791 831 939
          </p>
          <p>
            <strong>Email:</strong> mazingirasmart@gmail.com
          </p>
          <p>
            <strong>Address:</strong> Nairobi, Kenya
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
