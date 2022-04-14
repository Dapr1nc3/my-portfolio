import React from "react";
import "./services.css";
import { BsBookmarkCheckFill } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5 className="center__heading">What I Can Offer?</h5>
      <h2 className="center__heading">Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsBookmarkCheckFill className="service__list-icon" />
              <p>Prototyping, wireframing, user flows, mockups.</p>
            </li>
            <li>
              <BsBookmarkCheckFill className="service__list-icon" />
              <p>Application development.</p>
            </li>
            <li>
              <BsBookmarkCheckFill className="service__list-icon" />
              <p>Visual design and design software.</p>
            </li>
            <li>
              <BsBookmarkCheckFill className="service__list-icon" />
              <p>Understanding of color theory to convey mood for web app.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsBookmarkCheckFill className="service__list-icon" />
              <p>Implementing M.E.R.N stack to build web applications.</p>
            </li>
            <li>
              <BsBookmarkCheckFill className="service__list-icon" />
              <p>Use Database systems to manage Back End data.</p>
            </li>
            <li>
              <BsBookmarkCheckFill className="service__list-icon" />
              <p>
                Refactor and reconstruct coding components to optimize code.
              </p>
            </li>
            <li>
              <BsBookmarkCheckFill className="service__list-icon" />
              <p>Object-oriented Analysis and Design.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Developer</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsBookmarkCheckFill className="service__list-icon" />
              <p>Gather information, writes, organizes, and edits content.</p>
            </li>
            <li>
              <BsBookmarkCheckFill className="service__list-icon" />
              <p>
                Maintenance, and improvement of web application, including
                website content.
              </p>
            </li>
            <li>
              <BsBookmarkCheckFill className="service__list-icon" />
              <p>
                Experienced with multiple content softwares Photoshop, Adobe,
                and Figma.
              </p>
            </li>
            <li>
              <BsBookmarkCheckFill className="service__list-icon" />
              <p>
                Creating unique, simple-to-understand, and user-friendly
                content.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT DEVELOPER */}
      </div>
    </section>
  );
};

export default Services;
