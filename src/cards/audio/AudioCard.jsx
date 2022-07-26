import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";
import {
  faMusic,
  faPlayCircle,
  faPauseCircle,
  faShareAlt,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { React, useState, useEffect } from "react";
import "./AudioCard.scss";
import { Link } from "react-router-dom";
// import url from "../../assets/audios/dancehall.mp3";

const AudioCard = (props) => {
  const useAudio = (url) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
      playing ? audio.play() : audio.pause();
    }, [playing, audio]);

    useEffect(() => {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    }, [audio]);

    return [playing, toggle];
  };

  const [playing, toggle] = useAudio(props.url);

  return (
    <Row className="audio-card">
      <Col sm={1}>
        <FontAwesomeIcon className="icon" icon={faMusic} />
      </Col>
      <Col sm={8}>
        <p>{props.title}</p>
      </Col>
      <Col sm={3}>
        <FontAwesomeIcon
          className="icon play"
          onClick={toggle}
          icon={playing ? faPauseCircle : faPlayCircle}
        />

        <a href={props.link} download>
          <FontAwesomeIcon className="icon" icon={faShareAlt} />
        </a>
        <a>
          <FontAwesomeIcon className="icon" icon={faDownload} />
        </a>

        <Link to="/contact-us">
          <button>Comment</button>
        </Link>
      </Col>
    </Row>
  );
};

export default AudioCard;

/* import React, { useState, useEffect } from "react";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Player; */
