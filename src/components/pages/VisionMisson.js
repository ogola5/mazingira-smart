import React from 'react';
import '../styles/visionmission.css'; // Import the CSS file for styling

function VisionMission() {
  return (
    <div className="vision-mission-page">
      <section className="vision-section">
        <h1>Our Vision</h1>
        <p>
          We aspire to be part of the movement toward a future where ecosystems flourish, natural
          resources are preserved, and every individual, irrespective of gender or age, is empowered to
          actively contribute to a resilient, equitable, and environmentally conscious society.
        </p>
      </section>

      <section className="mission-section">
        <h1>Our Mission</h1>
        <p>
          Mazingira Smart is dedicated to pioneering innovative solutions and fostering local and global
          collaboration in the pursuit of environmental sustainability. We seek to address the urgent
          challenges posed by climate change, promote responsible resource management, and empower 
          all individuals for socioeconomic advancement.
        </p>
      </section>
    </div>
  );
}

export default VisionMission;
