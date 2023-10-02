import React from "react";
import "./Project.css";
import myportfolio from "../../assets/Darshan-Heble-Portfolio.png";
import shoemart from "../../assets/Ecommerce-Shoe-Website.png";
import reactportfolio from "../../assets/reactportfolio.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faMagnifyingGlass,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

function Project() {
  return (
    <div className="projects" id="projects">
      <div className="head projects-head hiddenX">
        <h1>Projects</h1>
        <span className="underline contact-underline">&nbsp;</span>
      </div>
      <div className="projects_container">
        <div className="project project1">
          <img
            src={myportfolio}
            alt="myportfolio"
            className="project_img project_img1"
          />
          <div className="project_info">
            <h4 className="project_title">First Portfolio</h4>
            <h4 className="read_more">Read More</h4>
          </div>
          <div className="image_website_icons">
            <FontAwesomeIcon className="fa_imgage" icon={faImage} />
            <FontAwesomeIcon
              className="fa_arrow_square"
              icon={faArrowUpRightFromSquare}
            />
          </div>
        </div>
        <div className="project project2">
          <img
            src={shoemart}
            alt="shoemart"
            className="project_img project_img2"
          />
          <div className="project_info">
            <h4 className="project_title">Shoe Mart</h4>
            <h4 className="read_more">Read More</h4>
          </div>
          <div className="image_website_icons">
            <FontAwesomeIcon className="fa_imgage" icon={faImage} />
            <FontAwesomeIcon
              className="fa_arrow_square"
              icon={faArrowUpRightFromSquare}
            />
          </div>
        </div>
        <div className="project project3">
          <img
            src={reactportfolio}
            alt="reactportfolio"
            className="project_img project_img3"
          />
          <div className="project_info">
            <h4 className="project_title">React Portfolio</h4>
            <h4 className="read_more">Read More</h4>
          </div>
          <div className="image_website_icons">
            <FontAwesomeIcon className="fa_imgage" icon={faImage} />
            <FontAwesomeIcon
              className="fa_arrow_square"
              icon={faArrowUpRightFromSquare}
            />
          </div>
        </div>
        {/* <div className="project project4">
          <div className="project_info">
            <h4 className="project_title"></h4>
            <h4 className="read_more">Read More</h4>
          </div>
        </div>
        <div className="project project5">
          <div className="project_info">
            <h4 className="project_title"></h4>
            <h4 className="read_more">Read More</h4>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Project;
