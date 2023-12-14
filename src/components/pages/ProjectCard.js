import React from "react";
import "../styles/project.css"; // Import the CSS file for styling

function projectCard() {
  return (
    <section>
      <h3 class="text-center text-[28px] leading-10 lg:text-subtitle text-#0A033C font-bold">
        Our projects
      </h3>
      <br />
      <div className="section-center">
        <article class="menu-item">
          <img src="/images/moriah.jpg" alt="tree planting" class="img" />
          <div class="item-info">
            <header>
              <h5>Tree Planting at In Heaven’s Eyes Children's Center</h5>
              <span class="item-price">Nyahururu</span>
            </header>
            <p class="item-text">
              In partnership with the Royal Lance Charity Foundation, we engaged
              in planting 400 trees, focusing on enhancing the local ecosystem
              and providing environmental education.
            </p>
          </div>
        </article>
        <article class="menu-item">
          <img
            src="/images/tetu.jpeg"
            alt="tetu enviromental day"
            class="img"
          />
          <div class="item-info">
            <header>
              <h5>Tree Planting during Tetu Constituency Environmental Day</h5>
              <span class="item-price">Tetu</span>
            </header>
            <p class="item-text">
              This event was a significant step towards afforestation,
              contributing to the larger goal of planting 5000 trees annually to
              promote biodiversity and economic empowerment through agriculture.
            </p>
          </div>
        </article>
        <article class="menu-item">
          <img src="/images/moriah.jpg" alt="tree planting" class="img" />
          <div class="item-info">
            <header>
              <h5>Tree Planting at In Heaven’s Eyes Children's Center</h5>
              <span class="item-price">Nyahururu</span>
            </header>
            <p class="item-text">
              In partnership with the Royal Lance Charity Foundation, we engaged
              in planting 400 trees, focusing on enhancing the local ecosystem
              and providing environmental education.
            </p>
          </div>
        </article>
        <article class="menu-item">
          <img
            src="/images/tetu.jpeg"
            alt="tetu enviromental day"
            class="img"
          />
          <div class="item-info">
            <header>
              <h5>Tree Planting during Tetu Constituency Environmental Day</h5>
              <span class="item-price">Tetu</span>
            </header>
            <p class="item-text">
              This event was a significant step towards afforestation,
              contributing to the larger goal of planting 5000 trees annually to
              promote biodiversity and economic empowerment through agriculture.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default projectCard;
