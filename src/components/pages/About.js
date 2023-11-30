import React from 'react';
import '../styles/about.css'; // Import the CSS file for styling

function About() {
  return (
    <div className="about-page">
      <section className="about-section">
        <h1>About Mazingira Smart</h1>
        <p>
          Mazingira Smart stands at the forefront of environmental 
          stewardship and sustainability. Our key thematic areas include 
          afforestation, reafforestation, recycling, and climate-smart agriculture.
        </p>
        <p>
          We believe in the power of community and the importance of 
          socio-economic empowerment, especially for youth and women. 
          Our initiatives aim to provide sustainable livelihoods and 
          promote environmental conservation.
        </p>
      </section>

      <section className="vision-mission">
        <h2>Our Vision and Mission</h2>
        <p>
          Our vision is a world where ecosystems flourish, natural 
          resources are preserved, and every individual is empowered 
          to contribute to a resilient and environmentally conscious society.
        </p>
        <p>
          Our mission is to pioneer innovative solutions for environmental 
          sustainability and foster global collaboration. We are dedicated 
          to addressing the challenges posed by climate change and promoting 
          responsible resource management.
        </p>
      </section>
      
      {/* More sections can be added based on the PDF content */}
    </div>
  );
}

export default About;
