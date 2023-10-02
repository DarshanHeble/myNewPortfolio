import React from "react";
import "./about.css";
import { Link } from "react-scroll";
import cv from "../../assets/DH Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faCircleDown,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedinIn,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-head head hiddenX">
        <h1>About Me</h1>
        <span className="underline">&nbsp;</span>
      </div>
      <div className="about-info">
        <div className="about-images hiddenX">
          <div className="about-image">
            <h1 className="numberOfProjects">5</h1>
            <div className="PlusContainer">
              <span>
                <b>+</b>
              </span>
              <span>Projects</span>
            </div>
          </div>
        </div>
        <div className="about-para hiddenY">
          <p className="p">
            I am a highly motivated and detail-oriented individual, with a
            ability to work both independently and as part of a team. I thrive
            in fast-paced environments and I'am always looking for ways to
            improve my skills. <br />
            With a focus on innovation and problem-solving, I am eager to pursue
            opportunities in the tech industry where I can apply my skills and
            continue to grow as a professional. If you're looking for a driven
            and dedicated team member who is passionate about technology, I
            would love to connect and explore potential opportunities.
          </p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faGithub} className="fa" />
            <FontAwesomeIcon icon={faLinkedinIn} className="fa" />
            <FontAwesomeIcon icon={faDiscord} className="fa" />
            <FontAwesomeIcon icon={faInstagram} className="fa" />
          </div>
          <Link id="dow-cv" download={cv} className="btn about-btn">
            Download CV&nbsp;
            {/* <FontAwesomeIcon icon={faFileArrowDown} /> */}
            {/* <FontAwesomeIcon icon={faDownload} /> */}
            <FontAwesomeIcon icon={faCircleDown} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
// <span className="about-para-extra">
//     <span className="box">
//         <ul>
//             <li>Name : Darshan Heble</li>
//             <li> DOB : 29/04/2003</li>
//             <li>Age : 20</li>
//             <li>Degree : BCA</li>
//         </ul>
//     </span>
//     <span className="box">
//         <ul>
//             <li>Phone No : +91 9071671877</li>
//             <li> City : Bhatkal</li>
//             <li>Language : English,Hindi,Kannada</li>
//             <li>Email : darshanheble@gmail.com</li>
//         </ul>
//     </span>
// </span>
