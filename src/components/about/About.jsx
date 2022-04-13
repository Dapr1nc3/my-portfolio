import React from "react";
import "./about.css";
import ME from "../../assets/me-3.JPG";
import { FaAward } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { RiFolderOpenFill } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know Me!</h5>
      <h2>About Me</h2>

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
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaUserGraduate className="about__icon" />
              <h5>Education</h5>
              <small>What I Know</small>
            </article>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiFolderOpenFill className="about__icon" />
              <h5>Projects</h5>
              <small>40+ Projects</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
