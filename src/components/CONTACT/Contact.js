import React, { useState } from "react";
import "./Contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faArrowsRotate,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [callHovered, callIsHovered] = useState(false);
  const [whatsappHovered, whatsappIsHovered] = useState(false);
  const [mailHovered, mailIsHovered] = useState(false);

  const callMouseEnter = () => {
    callIsHovered(true);
  };
  const whatsappMouseEnter = () => {
    whatsappIsHovered(true);
  };
  const mailMouseEnter = () => {
    mailIsHovered(true);
  };

  const callMouseLeave = () => {
    callIsHovered(false);
  };
  const whatsappMouseLeave = () => {
    whatsappIsHovered(false);
  };
  const mailMouseLeave = () => {
    mailIsHovered(false);
  };

  return (
    <div className="Contact" id="contact">
      <div className="head contact-head hiddenX">
        <h1>Contact Me</h1>
        <span className="underline contact-underline">&nbsp;</span>
      </div>
      <div className="contact-info hidden">
        <div className="othercontact hiddenX">
          <div className="box call">
            <FontAwesomeIcon
              className={`fa ${callHovered ? "fa-bounce" : ""}`}
              icon={faPhone}
              onMouseEnter={callMouseEnter}
              onMouseLeave={callMouseLeave}
            />
            <div className="contactbox">
              <h2 className="h2">Call Me</h2>
              <p className="p">+91 9071671877</p>
            </div>
          </div>

          <div className="box whatsapp">
            <FontAwesomeIcon
              className={`fa ${whatsappHovered ? "fa-bounce" : ""}`}
              icon={faWhatsapp}
              onMouseEnter={whatsappMouseEnter}
              onMouseLeave={whatsappMouseLeave}
            />
            <div className="contactbox">
              <h2 className="h2">Whatsapp</h2>
              <p className="p">+91 9071671877</p>
            </div>
          </div>

          <div className="box email">
            <FontAwesomeIcon
              className={`fa ${mailHovered ? "fa-bounce" : ""}`}
              icon={faEnvelope}
              onMouseEnter={mailMouseEnter}
              onMouseLeave={mailMouseLeave}
            />
            <div className="contactbox">
              <h2 className="h2">Email</h2>
              <p className="p">darshanheble@gmail.com</p>
            </div>
          </div>
        </div>
        <form name="form" className="send-message hiddenY" action="">
          <div className="name-email">
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
            />
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <input
            className="input"
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
          />
          <textarea
            className="input"
            id="textarea"
            name="discription"
            cols="30"
            rows="10"
            placeholder="Discription"
          ></textarea>
          <div className="submit-reset-buttons">
            <button
              id="sub"
              type="submit"
              className="btn formbtn formSubmit-btn"
            >
              Send&nbsp;
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
            <button id="sub" type="reset" className="btn formbtn formReset-btn">
              Reset&nbsp;
              <FontAwesomeIcon icon={faArrowsRotate} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
