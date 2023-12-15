import React from "react";
import "../styles/about.css"; // Import the CSS file for styling
import { MdLightbulbOutline, MdOutlineRocketLaunch } from "react-icons/md";

function About() {
  return (
    <>
      <div className="inner-hero">
        <img src="./images/back.jpg" alt="grid" className="inner-hero--image" />
        <div className="inner-hero--content">
          <h2>About Us</h2>
          <p>
            Our organization remains at the forefront of environmental
            stewardship and sustainability initiatives. The major thematic areas
            include afforestation, reafforestation, recycling, climate-smart
            agriculture, and advocacy. We understand the correlation between
            these practices and promoting adaptation and mitigation to climate
            change. In addition, we are aware that building resilience by
            utilizing current and indigenous knowledge helps communities cope
            with extreme climatic events. Our activities extend to advocacy for
            socio-economic empowerment targeting the youth and women. We run
            programs that provide a good base for income generation and
            sustainable livelihoods hence addressing drug abuse and poverty.
            Also, we provide them with knowledge transforming them into
            champions of environmental conservation.
          </p>
        </div>
      </div>
      <div className="about-page">
        <section className="history-section">
          <div className="items-center pb-16 lg:grid lg:grid-cols-12">
            <div className="relative flex flex-col pb-16 pl-5 pr-5 lg:pr-0 ml-3 mr-3 lg:col-span-6">
              <h2 className="text-secondary text-[28px] lg:text-subtitle font-bold">
                Our History
              </h2>
              <p className=" font-base leading-8">
                Our organization remains at the forefront of environmental
                stewardship and sustainability initiatives. <br />
                <br />
                The major thematic areas include afforestation, reafforestation,
                recycling, climate-smart agriculture, and advocacy. We
                understand the correlation between these practices and promoting
                adaptation and mitigation to climate change. In addition, we are
                aware that building resilience by utilizing current and
                indigenous knowledge helps communities cope with extreme
                climatic events. <br />
                <br />
                Our activities extend to advocacy for socio-economic empowerment
                targeting the youth and women. We run programs that provide a
                good base for income generation and sustainable livelihoods
                hence addressing drug abuse and poverty. Also, we provide them
                with knowledge transforming them into champions of environmental
                conservation.
              </p>
            </div>
            <div className="relative lg:col-span-6 pl-5 pr-5 ">
              <div class="history-image-bg flex">
                <div class="relative history flex">
                  <img
                    src="../../../images/lightbulb.jpg"
                    alt="mazingira-smart"
                    class="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="vision-mission flex lg:grid lg:grid-cols-12 ">
          <div className="flex flex-col lg:col-span-6">
            <MdLightbulbOutline size={50} />
            <h2>Vision</h2>
            <p>
              We aspire to be part of the movement toward a future where
              ecosystems flourish, natural resources are preserved, and every
              individual, irrespective of gender or age, is empowered to
              actively contribute to a resilient, equitable, and environmentally
              conscious society. We hope to see a world where the relentless
              impacts of climate change are mitigated, where clean and abundant
              resources are accessible to all, and where the beauty of our
              planet is cherished for generations to come. We want to inspire
              and facilitate a sustainable transformation that safeguards the
              Earth's vitality while enhancing the quality of life for all its
              inhabitants..
            </p>
          </div>
          <div className="flex flex-col lg:col-span-6">
            <MdOutlineRocketLaunch size={50} />
            <h2>Mission</h2>
            <p>
              Mazingira Smart is dedicated to pioneering innovative solutions
              and fostering local and global collaboration in the pursuit of
              environmental sustainability. We seek to address the urgent
              challenges posed by climate change, promote responsible resource
              management, and empower all individuals for socioeconomic
              advancement. Through advocacy, education, and impactful
              initiatives, we strive to create a resilient and ecologically
              balanced world, leaving a lasting legacy of environmental
              stewardship that sets a precedent for the global society.
            </p>
          </div>
        </section>

        {/* More sections can be added based on the PDF content */}
        <section className="team-section">
          <div className="items-center ">
            <h2 className="text-5xl text-center pb-8 font-bold text-secondary">
              Meet the Team
            </h2>
            <article className="flex flex-col lg:grid lg:grid-cols-12 text-center">
              <div className="lg:col-span-4">
                <div className="img-container">
                  <img
                    src="../../../images/tetu.jpeg"
                    alt="The team"
                    className="person-img"
                  />
                </div>
                <h4 className="author">Peter Nderitu</h4>
                <p className="job">Chair</p>
                <p className="info">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
                </p>
              </div>
              <div className="lg:col-span-4">
                <div className="img-container">
                  <img
                    src="../../../images/person1.jpg"
                    alt="The team"
                    className="person-img"
                  />
                </div>
                <h4 className="author">Gerald Maina</h4>
                <p className="job">Secretary</p>
                <p className="info">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
                </p>
              </div>
              <div className="lg:col-span-4">
                <div className="img-container">
                  <img
                    src="../../../images/person2.jpg"
                    alt="The team"
                    className="person-img"
                  />
                </div>
                <h4 className="author">Dr. Paul Muriuki</h4>
                <p className="job">Treasurer</p>
                <p className="info">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
                </p>
              </div>
            </article>
            <article className="flex flex-col lg:grid lg:grid-cols-12 text-center">
              <div className="lg:col-span-4">
                <div className="img-container">
                  <img
                    src="../../../images/person1.jpg"
                    alt="The team"
                    className="person-img"
                  />
                </div>
                <h4 className="author"> Job Gakuya</h4>
                <p className="job">Board Member</p>
                <p className="info">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
                </p>
              </div>
              <div className="lg:col-span-4">
                <div className="img-container">
                  <img
                    src="../../../images/person2.jpg"
                    alt="The team"
                    className="person-img"
                  />
                </div>
                <h4 className="author">Mercy Njoroge</h4>
                <p className="job">Board Member</p>
                <p className="info">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
                </p>
              </div>
              <div className="lg:col-span-4">
                <div className="img-container">
                  <img
                    src="../../../images/tetu.jpeg"
                    alt="The team"
                    className="person-img"
                  />
                </div>
                <h4 className="author">Daniel Gathieri</h4>
                <p className="job">Board Member</p>
                <p className="info">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
