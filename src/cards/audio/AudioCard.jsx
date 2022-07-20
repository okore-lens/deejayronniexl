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
        <FontAwesomeIcon className="icon" icon={faShareAlt} />
        <FontAwesomeIcon className="icon" icon={faDownload} />
        <button>Comment</button>
      </Col>
    </Row>
  );
};

export default AudioCard;
