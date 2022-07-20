import "./Footer.scss";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faMixcloud,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        <span className="text-link">Terms and Conditions</span>
        <span className="text-link">Privacy Policy</span>
        <span className="text-link">Contact Us</span>
      </p>
      <hr
        style={{
          height: "2px",
          textAlign: "center",
          width: "75%",
          //   backgroundColor: "white",
          color: "#C71A1A",
          display: "block",
          margin: "auto",
        }}
      />
      <p>
        © 2022 Deejay RonnieXl <span style={{ color: "white" }}>|| </span>All
        Rights Reserved
      </p>
      <div className="media-links">
        <a href="#">
          <FontAwesomeIcon className="icon" icon={faFacebook} />
        </a>
        <a href="#">
          <FontAwesomeIcon className="icon" icon={faTwitter} />
        </a>
        <a href="#">
          <FontAwesomeIcon className="icon" icon={faYoutube} />
        </a>
        <a href="#">
          <FontAwesomeIcon className="icon" icon={faInstagram} />
        </a>
        <a href="#">
          <FontAwesomeIcon className="icon" icon={faMixcloud} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
