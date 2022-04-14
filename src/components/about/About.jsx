import React from "react";
import "./about.css";
import ME from "../../assets/me-3.JPG";
import { FaAward } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { RiFolderOpenFill } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5 className="center__heading">Get to know Me!</h5>
      <h2 className="center__heading">About Me</h2>

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
            Hello, I'm Devin. I am a Full Stack Web Developer who enjoys
            indulging in the coding lifestyle. Working on bussiness, client, and
            personal projects. when it comes to the Front End of coding. I enjoy
            creating the aesthetic and feel of the website I create. As for the
            Back End seeing how data from databases, API's, and seeds come to
            life to the Front End is also pretty amazing to me. The hobbies I
            enjoy would be watching anime on my off time. I also like to play
            Elden Ring which is my current obsession. More importanly Im a
            family man who loves my siblings, also wanting to give thanks to my
            parents. Thank you for learning more about me!
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
