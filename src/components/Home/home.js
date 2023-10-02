import React from "react";
import "./home.css";
import { Link } from "react-scroll";
import darshan from "../../assets/Darshan.png";

function Home() {
  return (
    <div className="home" id="home">
      <div className="home-info hiddenX">
        <div className="head">
          <h5 className="hey">Hey,</h5>
          <h2 className="myname">
            I'am <span>Darshan Heble</span>
          </h2>
          <div className="wrapper">
            {/* <div className="static-txt">Iam a </div> */}
            <div className="dynamic-txt">
              <p>
                <span>Programmer</span>
              </p>
              <p>
                <span>Web Developer</span>
              </p>
              <p>
                <span>Web Designer</span>
              </p>
              <p>
                <span>Explorer</span>
              </p>
            </div>
          </div>
        </div>
        <p>
          Iam a programming entusiast and a web Developer, who is willing for
          good opportunity....!
          <br />
          As a Bachelor of Computer Applications (BCA) student, I am passionate
          about all things of technology and constantly seeking to expand my
          knowledge in this ever-evolving field. I am a highly motivated and
          detail-oriented individual, with a ability to work both independently
          and as part of a team. I thrive in fast-paced environments and am
          always looking for ways to improve my skills.
        </p>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          className="btn home-btn"
        >
          Contact Me <i className="fa fa-paper-plane"></i>
        </Link>
      </div>
      <div className="home-img hiddenY">
        <div className="imgbackground">
          {/* <i class="fa fa-solid fa-code"></i>
                    <i class="fa fa-solid fa-pencil"></i>
                    <i class="fa fa-solid fa-magnifying-glass"></i>
                    <i class="fa fa-solid fa-terminal"></i>
                    <i class="fa fa-solid fa-code-branch"></i> */}
          <img className="img" src={darshan} alt="Darshan" />
        </div>
      </div>
    </div>
  );
}

export default Home;
