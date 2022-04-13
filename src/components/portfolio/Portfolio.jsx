import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/NGF-SS.png";
import IMG2 from "../../assets/food-4.png";
import IMG3 from "../../assets/budget-track.png";
import IMG4 from "../../assets/pizza-hunt.png";
import IMG5 from "../../assets/zoo-keep.png";
import IMG6 from "../../assets/note-t.png";

//  Array data to map through to display portfolio items
const data = [
  {
    id: 1,
    image: IMG1,
    title: "No Gear Fitness",
    github: "https://github.com/Dapr1nc3/workout-app",
    app: "https://young-bastion-49807.herokuapp.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Food 4 Thought",
    github: "https://github.com/Dapr1nc3/Food-App",
    app: " https://immense-shelf-25976.herokuapp.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Budget Tracker",
    github: "https://github.com/Dapr1nc3/budget-tracker",
    app: "https://fast-escarpment-95326.herokuapp.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Pizza Hunt",
    github: "https://github.com/Dapr1nc3/pizza-hunt",
    app: "https://afternoon-badlands-68533.herokuapp.com/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Zoo Keeper",
    github: "https://github.com/Dapr1nc3/zookeepr",
    app: "https://immense-plateau-37153.herokuapp.com/",
  },
  {
    id: 5,
    image: IMG6,
    title: "Note Taker",
    github: "https://github.com/Dapr1nc3/note-taker",
    app: "https://pacific-sea-79634.herokuapp.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="center__heading">My Projects</h5>
      <h2 className="center__heading">Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, app }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={app} className="btn btn-primary" target="_blank">
                  Live App
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
