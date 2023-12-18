import React from "react";
import "../styles/welcome.css"; // Import the CSS file for styling
import MasonryImageList from "./MasonryImageList";

const Gallery = () => {
  return (
    <>
      <div className="inner-hero">
        <img
          src="./images/lightbulb.jpg"
          alt="grid"
          className="inner-hero--image"
        />
        <div className="inner-hero--content pb-10 mb-8 ">
          <h2>Our Gallery</h2>
          <p>
            Our organization remains at the forefront of environmental
            stewardship and sustainability initiatives. The major thematic areas
            include afforestation, reafforestation, recycling, climate-smart
            agriculture, and advocacy. We understand the correlation between
            these practices and promoting adaptation and mitigation to climate
            change.
          </p>
        </div>
      </div>
      <section>
        <MasonryImageList />
      </section>
    </>
  );
};

export default Gallery;
