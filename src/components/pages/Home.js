import React, { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import About from './About';
import Contact from './Contact';
import Goals from './Goals';
import Project from './Project';
import '../styles/home.css';


function Home() {
    useEffect(() => {
        const handleScroll = () => {
          document.querySelectorAll('.home-content > *').forEach((section) => {
            if (section.getBoundingClientRect().top < window.innerHeight / 1.5) {
              section.classList.add('visible');
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Run on initial load
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <div className="home-container">
      <Header />
      <div className="home-background-image">
        <img src="/images/back.jpg" alt="Background" />
      </div>
      <div className="home-content">
        <About />
        <Goals />
        <Project />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
