import React from "react";
import "./navbar.css";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { BsFillFileEarmarkFontFill } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FaHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsFillJournalBookmarkFill />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <BsFillFileEarmarkFontFill />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <IoIosContact />
      </a>
    </nav>
  );
};

export default Navbar;
