import React from "react";
import "../styles/contact.css"; // Import the CSS file for styling

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <section className="contact-details">
        <h2>Get in Touch</h2>
        <p>
          If you have any questions or would like to get involved, please don't
          hesitate to reach out to us.
        </p>
        <ul>
          <li>
            <strong>Phone:</strong> +254 791 831 939
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:mazingirasmart@gmail.com">
              mazingirasmart@gmail.com
            </a>
          </li>
          <li>
            <strong>Address:</strong> Nairobi, Kenya
          </li>
          {/* Add more contact details if necessary */}
        </ul>
      </section>

      {/* Additional sections for contact form or map can be added here */}
    </div>
  );
}

export default Contact;
