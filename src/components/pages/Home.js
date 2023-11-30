import React from 'react';
import Navbar from '../Navbar'; // Import NavBar
import Header from '../Header';
import Footer from '../Footer';
// Import any other components that are specific to the Home page
// import './Home.css'; // Uncomment and use if you have specific Home page styling

function Home() {
  return (
    <div className="home-container">
      {/* <Navbar />  */}
      <Header />
       {/* Include the NavBar component */}
      {/* Banner or welcome message component */}
      {/* Summarized sections or components for About, Goals, Projects, and VisionMission */}
      {/* Each section should have a "Read More" link or button that navigates to the respective page */}
      {/* Any other content specific to the Home page */}
      <Footer />
    </div>
  );
}

export default Home;



