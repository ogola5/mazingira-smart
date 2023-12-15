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
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:px-14 my-10">
          <div className="flex flex-col lg:col-span-6 px-14 ">
            <div className="text-black">
              <h2 className="font-bold text-2xl">
                {" "}
                GREEN CENTURY TREE GROWING PROJECT
              </h2>
              <div className="dash mt-4"></div>
            </div>
            <p className="leading-8 text-black ">
              - Planted 500 trees in Heaven’s Eyes Children Center in Nyahururu,
              Laikipia County.
              <br />- Adopted Tumu Tumu and Karima Forests in Nyeri County for
              reforestation and restoration purposes for five years.
            </p>
          </div>
          <div className="flex flex-col lg:col-span-6">
            <img
              src="../../../images/planting.jpeg"
              alt="project"
              className="img-medium mx-auto"
            />
          </div>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-12 px-14 my-10 bg-light">
          <div className="flex flex-col lg:col-span-6 ">
            <img
              src="../../../images/eco.jpg"
              alt="project"
              className="img-medium mx-auto"
            />
          </div>
          <div className="flex flex-col lg:col-span-6 lg:px-14 ">
            <div className="text-black pt-8">
              <h2 className="font-bold text-2xl capitalie">
                {" "}
                ECOEMPOWER INITIATIVE
              </h2>
              <div className="dash mt-4"></div>
            </div>
            <p className="leading-8 text-black ">
              Visited and donated food and sanitary items to Total Rehab Center,
              Kasarani that caters for children suffering from different
              disorders including cerebral palsy.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:px-14 my-10">
          <div className="flex flex-col lg:col-span-6 px-14 ">
            <div className="text-black">
              <h2 className="font-bold text-2xl">
                {" "}
                MAZINGIRA SMART AND INNOVATION CLUBS
              </h2>
              <div className="dash mt-4"></div>
            </div>
            <p className="leading-8 text-black ">
              - Establishing Mazingira Smart Clubs in primary and secondary
              schools in Nairobi, Kiambu, Nyeri and Muranga Counties.
              <br /> - Collaborating with vocational training colleges and
              universities in Nairobi, Nyeri, Kiambu and Muranga counties to
              establish Mazingira Smart Innovation Club (MASIC). The innovations
              clubs promote skills and knowledge acquisition in green technology
              and entrepreneurship.
            </p>
          </div>
          <div className="flex flex-col lg:col-span-6">
            <img
              src="../../../images/lightbulb.jpg"
              alt="project"
              className="img-medium mx-auto"
            />
          </div>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:px-14 my-10 bg-light">
          <div className="flex flex-col lg:col-span-6 ">
            <img
              src="../../../images/tent.jpeg"
              alt="project"
              className="img-medium mx-auto"
            />
          </div>
          <div className="flex flex-col lg:col-span-6 px-14 ">
            <div className="text-black pt-8">
              <h2 className="font-bold text-2xl capitalie">
                {" "}
                TUZISORT KISMART
              </h2>
              <div className="dash mt-4"></div>
            </div>
            <p className="leading-8 text-black ">
              - Working with self-help groups and community based organizations
              in plastic, glass and scrap metal collection and facilitating
              transportation to collection points.
              <br /> - Establishing Mazingira Smart Waste Collection and
              Recycling Centers.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:px-14 my-10">
          <div className="flex flex-col lg:col-span-6 px-14 ">
            <div className="text-black">
              <h2 className="font-bold text-2xl">
                {" "}
                MAZINGIRA SMART RUN AND CHAMPIONS AWARD
              </h2>
              <div className="dash mt-4"></div>
            </div>
            <p className="leading-8 text-black ">
              - Recognizing the best community Mazingira champions in Kenya and
              Mazingira Smart and Innovation clubs.
              <br /> - Organizing and awarding the participants of the annual
              Mazingira Smart RUN.
              <br /> - Supporting local sports teams and events and recognizing
              environmental conscious and active athletes and teams to create
              awareness on environmental sustainability.
            </p>
          </div>
          <div className="flex flex-col lg:col-span-6">
            <img
              src="../../../images/tetu.jpeg"
              alt="project"
              className="img-medium mx-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
