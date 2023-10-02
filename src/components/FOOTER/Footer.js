import React from "react";
import { Link } from "react-scroll";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <p>Darshan Heble</p>
      <p>2023 © Copyrights</p>
      <p className="p">
        <Link className="social-icons" href="" title="Github">
          <FontAwesomeIcon icon={faGithub} title="github" className="fa" />
        </Link>
        <Link className="social-icons" href="" title="Instagram">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            title="Instagram"
            className="fa"
          />
        </Link>
        <Link className="social-icons" href="" title="Discord">
          <FontAwesomeIcon icon={faDiscord} title="Linkedin" className="fa" />
        </Link>
        <Link className="social-icons" href="" title="Linkedin">
          <FontAwesomeIcon icon={faInstagram} title="Linkedin" className="fa" />
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
