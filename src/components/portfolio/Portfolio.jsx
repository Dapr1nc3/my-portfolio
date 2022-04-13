import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/NGF-SS.png";
import IMG2 from "../../assets/food-4.png";
import IMG3 from "../../assets/NGF-SS.png";
import IMG4 from "../../assets/NGF-SS.png";
import IMG5 from "../../assets/NGF-SS.png";
import IMG6 from "../../assets/NGF-SS.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio title</h3>
          <a href="https://github.com" className="btn" target="_blank">
            GitHub
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live App
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
