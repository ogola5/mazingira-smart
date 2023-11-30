import React from 'react';
import '../styles/project.css'; // Import the CSS file for styling

function Projects() {
  return (
    <div className="projects-page">
      <h1>Our Projects</h1>
      
      <section className="project">
        <h2>Tree Planting at In Heaven’s Eyes Children's Center - Nyahururu</h2>
        <p>In partnership with the Royal Lance Charity Foundation, we engaged in planting 400 trees, focusing on enhancing the local ecosystem and providing environmental education.</p>
      </section>

      <section className="project">
        <h2>Tree Planting during Tetu Constituency Environmental Day</h2>
        <p>This event was a significant step towards afforestation, contributing to the larger goal of planting 5000 trees annually to promote biodiversity and economic empowerment through agriculture.</p>
      </section>
      
      {/* Additional project sections can be added here based on the PDF content */}
    </div>
  );
}

export default Projects;
