import React from "react";
import "../styles/project.css"; // Import the CSS file for styling

function Projects() {
  return (
    <>
      <div className="inner-hero">
        <img
          src="./images/lightbulb.jpg"
          alt="grid"
          className="inner-hero--image"
        />
        <div className="inner-hero--content pb-10 mb-8 ">
          <h2 className="mt-8">Our Projects</h2>
          <p className="pb-10">
            Our organization remains at the forefront of environmental
            stewardship and sustainability initiatives. The major thematic areas
            include afforestation, reafforestation, recycling, climate-smart
            agriculture, and advocacy. We understand the correlation between
            these practices and promoting adaptation and mitigation to climate
            change.
          </p>
        </div>
      </div>
      <section className="">
        <div className="flex flex-col lg:grid lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-6 text-center text-primary pb-16 ">
            <h5>Tree Planting at In Heaven’s Eyes Children's Center</h5>
            <span>Nyahururu</span>
            <p>
              In partnership with the Royal Lance Charity Foundation, we engaged
              in planting 400 trees, focusing on enhancing the local ecosystem
              and providing environmental education.
            </p>
          </div>
          <div className="flex bg-primary flex-col lg:col-span-6 text-center text-white pb-16">
            <h5>Tree Planting at In Heaven’s Eyes Children's Center</h5>
            <span>Nyahururu</span>
            <p>
              In partnership with the Royal Lance Charity Foundation, we engaged
              in planting 400 trees, focusing on enhancing the local ecosystem
              and providing environmental education.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-12">
          <div className="flex  flex-col bg-primary flex-col lg:col-span-6 text-center text-white pb-16">
            <h5>Tree Planting at In Heaven’s Eyes Children's Center</h5>
            <span>Nyahururu</span>
            <p>
              In partnership with the Royal Lance Charity Foundation, we engaged
              in planting 400 trees, focusing on enhancing the local ecosystem
              and providing environmental education.
            </p>
          </div>
          <div className="flex flex-col lg:col-span-6 text-center text-primary pb-16">
            <h5>Tree Planting at In Heaven’s Eyes Children's Center</h5>
            <span>Nyahururu</span>
            <p>
              In partnership with the Royal Lance Charity Foundation, we engaged
              in planting 400 trees, focusing on enhancing the local ecosystem
              and providing environmental education.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
