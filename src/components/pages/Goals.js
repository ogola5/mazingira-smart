import React from 'react';
import '../styles/goals.css'; // Import the CSS file for styling

function Goals() {
  return (
    <div className="goals-page">
      <h1>Our Goals</h1>
      <div className="goal">
        <h2>Afforestation and Reafforestation</h2>
        <p>We aim to plant 5000 trees annually to restore critical ecosystems, encourage biodiversity, and promote economic empowerment through fruit farming and climate-smart agriculture.</p>
      </div>
      <div className="goal">
        <h2>Recycling</h2>
        <p>Spearhead innovative recycling programs in communities, promoting sustainable waste management and encouraging the use of recycled products.</p>
      </div>
      <div className="goal">
        <h2>Advocacy</h2>
        <p>Amplify our climate change advocacy efforts, reaching individuals, communities, and organizations annually through educational campaigns, conferences, and partnerships to drive meaningful policy changes and behavioral shifts.</p>
      </div>
      <div className="goal">
        <h2>Socioeconomic Empowerment</h2>
        <p>Empower youth and women each year through skill-building programs and initiatives that promote environmental entrepreneurship, socioeconomic independence, and leadership in sustainability.</p>
      </div>
      <div className="goal">
        <h2>Adaptation and Mitigation</h2>
        <p>Implement and support local and global projects that focus on climate resilience, adaptation, and mitigation, particularly in vulnerable communities, ensuring they are better prepared to face climate-related challenges.</p>
      </div>
    </div>
  );
}

export default Goals;
