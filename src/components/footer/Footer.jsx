import React from "react";
import "./footer.css";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Devin
      </a>

      <ul>
        <li className="permalinks">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/daprinceee1">
          <BsTwitter />
        </a>
        <a href="https://www.linkedin.com/in/devin-minnis-082a95217/">
          <BsLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Devin Minnis. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
