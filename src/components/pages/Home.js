import React, { useEffect } from "react";
import Welcome from "./Welcome";
import Hero from "../Hero";
import Goals from "./Goals";
import ProjectCard from "./ProjectCard";
import "../styles/home.css";

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".home-content > *").forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight / 1.5) {
          section.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-container">
      <Hero />
      <div className="home-background-image"></div>
      <div className="home-content">
        <Welcome />
        <Goals />
        <ProjectCard />
      </div>
    </div>
  );
}

export default Home;
