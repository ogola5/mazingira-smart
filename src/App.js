import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

// Since pages are now within the components folder, update the paths
import Home from "./components/pages/Home";
import About from "./components/pages/About";
//import VisionMission from './components/pages/VisionMission';
import Goals from "./components/pages/Goals";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Navbar /> NavBar included here */}
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/vision-mission" element={<VisionMission />} /> */}
          <Route path="/goals" element={<Goals />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          {/* More routes can be added as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
