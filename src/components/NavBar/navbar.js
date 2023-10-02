// import React, { useState } from "react";
import "./navbar.css";
// import logo from '../../assets/logo.png'
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseCrack,
  faUserTag,
  faStarHalfStroke,
  faDiagramProject,
  faGraduationCap,
  faMessage,
  faMoon,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navLogo">
        {/* <img className='imglogo' src={logo} alt="logo" /> */}
        <h1 className="Textlogo">Darshan Heble</h1>
      </div>
      <div className="wraper">
        <Link
          activeClass="active"
          to="home"
          offset={-20}
          spy={true}
          smooth={true}
          // duration={900}
          className="button b1"
        >
          <div className="icon icon1">
            <FontAwesomeIcon icon={faHouseCrack} />
          </div>
          <div className="tooltip t1">Home</div>
        </Link>

        <Link
          activeClass="active"
          to="about"
          offset={-20}
          spy={true}
          smooth={true}
          className="button b2"
        >
          <div className="icon icon2">
            <FontAwesomeIcon icon={faUserTag} />
          </div>
          <div className="tooltip t2 ">About</div>
        </Link>

        <Link
          activeClass="active"
          to="skills"
          offset={-20}
          spy={true}
          smooth={true}
          className="button b3"
        >
          <div className="icon icon3">
            <FontAwesomeIcon icon={faStarHalfStroke} />
          </div>
          <div className="tooltip t3 ">Skills</div>
        </Link>

        <Link
          activeClass="active"
          to="projects"
          offset={-20}
          spy={true}
          smooth={true}
          className="button b4"
        >
          <div className="icon icon4">
            <FontAwesomeIcon icon={faDiagramProject} />
          </div>
          <div className="tooltip t4">Projects</div>
        </Link>

        {/* <Link
          activeClass="active"
          to="education"
          offset={-20}
          spy={true}
          smooth={true}
          className="button b5"
        >
          <div className="icon icon5">
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
          <div className="tooltip t5 ">Education</div>
        </Link> */}

        <Link
          activeClass="active"
          to="contact"
          offset={-20}
          spy={true}
          smooth={true}
          className="button b6"
        >
          <div className="icon icon6">
            <FontAwesomeIcon icon={faMessage} />
          </div>
          <div className="tooltip t6">Contact</div>
        </Link>
      </div>
      <div className="moonbar">
        <span className="span1 moon">
          <FontAwesomeIcon
            className="fa-moon"
            title="dark mode"
            icon={faMoon}
          />
        </span>

        {/* <span className="span1 bar">
          <FontAwesomeIcon
            className="fa-bar"
            title="Main Menu"
            icon={faEllipsisVertical}
          />
        </span> */}
      </div>

      {/* mobile menu  */}
      <div className="mobilemenu">
        <span className="span1 bar">
          <FontAwesomeIcon
            className="fa-bar"
            title="Main Menu"
            icon={faEllipsisVertical}
          />
        </span>
        <div className="mobilewrapper">
          <Link
            activeClass="active"
            to="home"
            offset={-20}
            spy={true}
            smooth={true}
            // duration={900}
            className="button b1"
          >
            <div className="icon icon1">
              <FontAwesomeIcon icon={faHouseCrack} />
            </div>
            <div className="tooltip t1">Home</div>
          </Link>

          <Link
            activeClass="active"
            to="about"
            offset={-20}
            spy={true}
            smooth={true}
            className="button b2"
          >
            <div className="icon icon2">
              <FontAwesomeIcon icon={faUserTag} />
            </div>
            <div className="tooltip t2 ">About</div>
          </Link>

          <Link
            activeClass="active"
            to="skills"
            offset={-20}
            spy={true}
            smooth={true}
            className="button b3"
          >
            <div className="icon icon3">
              <FontAwesomeIcon icon={faStarHalfStroke} />
            </div>
            <div className="tooltip t3 ">Skills</div>
          </Link>

          <Link
            activeClass="active"
            to="projects"
            offset={-20}
            spy={true}
            smooth={true}
            className="button b4"
          >
            <div className="icon icon4">
              <FontAwesomeIcon icon={faDiagramProject} />
            </div>
            <div className="tooltip t4">Projects</div>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            offset={-20}
            spy={true}
            smooth={true}
            className="button b6"
          >
            <div className="icon icon6">
              <FontAwesomeIcon icon={faMessage} />
            </div>
            <div className="tooltip t6">Contact</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
