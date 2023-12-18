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
          <img src="/images/plant.jpg" alt="tree planting" class="img" />
          <div class="item-info">
            <header className="text-primary">
              <h5>Tree Planting at In Heaven’s Eyes Children's Center</h5>
              <span class="item-price">Nyahururu</span>
            </header>
            <p class="item-text text-black">
              In partnership with the Royal Lance Charity Foundation, we engaged
              in planting 400 trees, focusing on enhancing the local ecosystem
              and providing environmental education.
            </p>
          </div>
        </article>
        <article class="menu-item">
          <img
            src="/images/empower.jpeg"
            alt="tetu enviromental day"
            class="img"
          />
          <div class="item-info">
            <header className="text-primary">
              <h5>Nyeri Town Clean Up Day</h5>
              <span class="item-price"></span>
            </header>
            <p class="item-text text-black">
              This event was held during The Nyeri Town Clean Up Day in
              conjunction with the County Goverment of Nyeri and the Nyeri
              Diaspora Leadership Academy NDLA.
            </p>
          </div>
        </article>
        <article class="menu-item">
          <img src="/images/eco.jpeg" alt="tree planting" class="img" />
          <div class="item-info">
            <header className="text-primary">
              <h5>EcoEmpower Initiative | Total Rehab Center,</h5>
              <span class="item-price "> Kasarani</span>
            </header>
            <p class="item-text text-black">
              Visited and donated food and sanitary items to Total Rehab Center,
              Kasarani that caters for children suffering from different
              disorders including cerebral palsy.
            </p>
          </div>
        </article>
        <article class="menu-item">
          <img
            src="/images/tent.jpeg"
            alt="tetu enviromental day"
            class="img"
          />
          <div class="item-info">
            <header className="text-primary ">
              <h5>Tuzisort Kismart</h5>
              <span class="item-price"></span>
            </header>
            <p class="item-text text-black">
              Working with self-help groups and community based organizations in
              plastic, glass and scrap metal collection and facilitating
              transportation to collection points.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default projectCard;
