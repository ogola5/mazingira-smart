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
            Our goal is to pioneer innovative solutions that combat climate
            change, preserve biodiversity, and promote environment-conscious
            living. We have adopted a holistic approach that defines true
            environmental stewardship which is the restoration of natural
            biodiversity, community engagement, and sustainable development
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
                Mazingira Smart is a non-governmental organization registered
                under Section 10 of the Non-Governmental Organizations
                Coordination Act, 1990. We are based in Nairobi, Kenya. Our goal
                is to pioneer innovative solutions that combat climate change,
                preserve biodiversity, and promote environment-conscious living.
                We have adopted a holistic approach that defines true
                environmental stewardship which is the restoration of natural
                biodiversity, community engagement, and sustainable development{" "}
                <br />
                <br />
                At Mazingira Smart, we embrace diversity by welcoming
                individuals from different backgrounds who provide insight into
                issues relating to their physical, social, and occupational
                environments. We work with public and private institutions and
                organizations, respectively synergizing our efforts to realize
                common goals. In addition, our activities extend to advocacy for
                socio-economic empowerment targeting different communities and
                programs that promote income generation and sustainable
                livelihoods.
                <br />
                <br />
                Indeed, we believe that our collective efforts serve as a beacon
                of hope, illuminating a path toward a world with thriving
                ecosystems. Together, we can make a difference that resonates
                through time.
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
              To contribute towards building a sustainable and flourishing
              ecosystem by preserving natural resources and empowering
              communities.
            </p>
          </div>
          <div className="flex flex-col lg:col-span-6">
            <MdOutlineRocketLaunch size={50} />
            <h2>Mission</h2>
            <p>
              To promote environmental conservation, responsible resource
              management, and empower all individuals for socioeconomic
              advancement through advocacy, education, and impactful
              initiatives.
            </p>
          </div>
        </section>

        {/* More sections can be added based on the PDF content */}
        <section className="team-section">
          <div className="items-center ">
            <h2 className="text-5xl text-center pb-8 font-bold text-secondary">
              Our Core Values
            </h2>
            <article className="flex flex-col lg:grid lg:grid-cols-12 text-center">
              <div className="lg:col-span-6">
                <div className="img-container">
                  <img
                    src="../../../images/integrity.jpg"
                    alt="The team"
                    className="person-img"
                  />
                </div>
                <h4 className="author text-primary">Integrity</h4>
                <p className="info">
                  Commitment to honesty, transparency, and ethical conduct in
                  all our actions, ensuring the utmost trust and credibility in
                  our environmental conservation efforts.
                </p>
              </div>
              <div className="lg:col-span-6">
                <div className="img-container">
                  <img
                    src="../../../images/respect.jpg"
                    alt="The team"
                    className="person-img"
                  />
                </div>
                <h4 className="author text-primary">Respect</h4>
                <p className="info">
                  Honoring the diverse perspectives, cultures, and beliefs of
                  individuals and communities, fostering an inclusive
                  environment where everyone's contributions to environmental
                  conservation are valued and appreciated.
                </p>
              </div>
            </article>
            <article className="flex flex-col lg:grid lg:grid-cols-12 text-center">
              <div className="lg:col-span-6">
                <div className="img-container">
                  <img
                    src="../../../images/team.jpg"
                    alt="The team"
                    className="person-img"
                  />
                </div>
                <h4 className="author text-primary"> Teamwork</h4>
                <p className="info">
                  Collaborative spirit, where individuals work cohesively,
                  leveraging diverse skills and perspectives, to achieve common
                  environmental goals, fostering a stronger, unified impact in
                  conservation efforts.
                </p>
              </div>
              <div className="lg:col-span-6">
                <div className="img-container">
                  <img
                    src="../../../images/lightbulb.jpg"
                    alt="The team"
                    className="person-img"
                  />
                </div>
                <h2 className="author text-primary">Innovation</h2>
                <p className="info">
                  Commitment to continuously exploring inventive solutions and
                  creative approaches, driving the evolution of environmental
                  conservation practices, and ensuring our initiatives remain
                  progressive and impactful.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="vision-mission  ">
          <h2 className="text-center">The Team</h2>
          <div className="flex lg:grid lg:grid-cols-6 text-center mt-8">
            <div className="flex flex-col lg:col-span-1">
              <p className="font-bold">Peter Nderitu</p>
              <p>Chairperson</p>
            </div>
            <div className="flex flex-col lg:col-span-1">
              <p className="font-bold">Gerald Maina</p>
              <p> Secretary </p>
            </div>
            <div className="flex flex-col lg:col-span-1">
              <p className="font-bold">Dr. Paul Muriuki </p>
              <p> Treasurer</p>
            </div>
            <div className="flex flex-col lg:col-span-1">
              <p className="font-bold">Job Gakuya </p>
              <p> Board Member</p>
            </div>
            <div className="flex flex-col lg:col-span-1">
              <p className="font-bold">Mercy Njoroge </p>
              <p> Board Member</p>
            </div>
            <div className="flex flex-col lg:col-span-1">
              <p className="font-bold">Daniel Gathieri </p> <p>Board Member</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
