import React from "react";
import "./about.css";
import ME from "../../assets/me-3.JPG";
import { FaAward } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { RiFolderOpenFill } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5 className="getToKnow__me">Get to know Me!</h5>
      <h2 className="getToKnow__me">About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article>
            <article className="about__card">
              <FaUserGraduate className="about__icon" />
              <h5>Education</h5>
              <small>What I Know</small>
            </article>
            <article className="about__card">
              <RiFolderOpenFill className="about__icon" />
              <h5>Projects</h5>
              <small>40+ Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad neque
            quisquam nihil doloremque natus distinctio nulla illum error
            aspernatur voluptatibus excepturi nobis libero obcaecati, quo vitae
            ipsum doloribus possimus beatae.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
