import React from "react";
import "../styles/contact.css"; // Import the CSS file for styling
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

function Contact() {
  return (
    <>
      <div className="inner-hero">
        <img src="./images/back.jpg" alt="grid" className="inner-hero--image" />
      </div>
      <div className="contact-page">
        <h2 className="text-3xl font-bold text-secondary pb-6">CONTACT US </h2>
        <div className="items-center pb-16 lg:grid lg:grid-cols-12">
          <div className="relative flex flex-col  pl-5 pr-5 lg:pr-0 ml-3 mr-3 lg:col-span-6">
            <p className=" font-base leading-8 text-primary">
              Thank you for visiting our website!! Hope that you will stand with
              us as we plant seeds of hope and preserve the trees of life.
              <br />
              <br />
              We hope that the information that you found on this website was
              resourceful.Feel free to visit us anytime, we are more than
              welcome to speak to you over a coffee, or some food.
              <br />
              <br />
              Our organization remains at the forefront of environmental
              stewardship and sustainability initiatives.
            </p>
          </div>
          <div className="relative lg:col-span-6 pl-5 pr-5 ">
            <img
              src="../../../images/sample map.jpg"
              alt="mazingira-smart"
              class="object-cover w-full h-full"
            />
          </div>
        </div>

        <section className="contact-details ">
          <h2 className="text-2xl font-bold text-center">Connect With us</h2>
          <p className="text-center text-primary">
            If you have any questions or would like to get involved, please
            don't hesitate to reach out to us.
          </p>
          <div className="flex flex-col lg:grid lg:grid-cols-12 pt-7 text-primary">
            <div className="lg:col-span-4 mx-auto">
              <span className="text-center ">
                <FiMapPin size={80} />
                Nairobi, Kenya
              </span>
            </div>
            <div className="lg:col-span-4 mx-auto">
              <span className="text-center">
                <FiPhone size={80} />
                +254 791 831 939 / +254 725 952 484
              </span>
            </div>
            <div className="lg:col-span-4 mx -auto">
              <span className="text-center">
                <FiMail size={80} />
                mazingirasmart@gmail.com
              </span>
            </div>
          </div>
        </section>

        {/* Additional sections for contact form or map can be added here */}
      </div>
    </>
  );
}

export default Contact;
