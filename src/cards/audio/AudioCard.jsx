import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";
import {
  faMusic,
  faPlayCircle,
  faShareAlt,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./AudioCard.scss";
import { Link } from "react-router-dom";

const AudioCard = () => {
  return (
    <Row className="audio-card">
      <Col sm={1}>
        <FontAwesomeIcon className="icon" icon={faMusic} />
      </Col>
      <Col sm={8}>
        <p>Audio Title --&gt; adipiscing elit, sed do eiusmod tempor </p>
      </Col>
      <Col sm={3}>
        <FontAwesomeIcon className="icon" icon={faPlayCircle} />

        <a href="#">
          <FontAwesomeIcon className="icon" icon={faShareAlt} />
        </a>
        <FontAwesomeIcon className="icon" icon={faDownload} />

        <Link to="/contact-us">
          <button>Comment</button>
        </Link>
      </Col>
    </Row>
  );
};

export default AudioCard;
