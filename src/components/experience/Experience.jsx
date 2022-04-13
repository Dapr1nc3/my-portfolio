import React from "react";
import "./experience.css";
import { MdFactCheck } from "react-icons/md";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Are My Skills?</h5>
      <h2>Skills Listed</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__bullets">
              <MdFactCheck />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__bullets">
              <MdFactCheck />
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__bullets">
              <MdFactCheck />
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__bullets">
              <MdFactCheck />
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__bullets">
              <MdFactCheck />
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__bullets">
              <MdFactCheck />
              <h4>JQuery</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND DEVELOPMENT */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__bullets">
              <MdFactCheck />
              <h4>Node.js</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__bullets">
              <MdFactCheck />
              <h4>Insomnia</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__bullets">
              <MdFactCheck />
              <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__bullets">
              <MdFactCheck />
              <h4>MySQL</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
