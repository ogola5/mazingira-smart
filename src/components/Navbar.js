import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./navbar.css"; // This line imports the styles for the navbar

function NavBar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src="./images/logo.png" className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            <li>
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/project" className="nav-link">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="nav-link">
                GALLERY
              </Link>
            </li>
            <li>
              <Link to="/blog" className="nav-link">
                BLOG
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                CONTACT
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link nav-donate">
                DONATE
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
