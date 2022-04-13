import React from "react";
import "./navbar.css";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { BsFillFileEarmarkFontFill } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";

const Navbar = () => {
  return (
    <nav>
      <a href="#">
        <FaHome />
      </a>
      <a href="#about">
        <FaUser />
      </a>
      <a href="#experience">
        <BsFillJournalBookmarkFill />
      </a>
      <a href="#portfolio">
        <BsFillFileEarmarkFontFill />
      </a>
      <a href="#contact">
        <IoIosContact />
      </a>
    </nav>
  );
};

export default Navbar;
