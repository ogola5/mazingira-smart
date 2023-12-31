import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Since pages are now within the components folder, update the paths
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Goals from "./components/pages/Goals";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import Gallery from "./components/pages/Gallery";
import Blog from "./components/pages/Blog";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/project" element={<Project />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* More routes can be added as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
