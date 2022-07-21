import React from "react";
import "./Home.scss";
import image from "../../../assets/images/img.jpg";
import image2 from "../../../assets/images/home-background.png";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faMixcloud,
} from "@fortawesome/free-brands-svg-icons";

import { Timeline, Tweet } from "react-twitter-widgets";

const Home = () => {
  const myStyle = {
    backgroundImage: `url(${image})`,
  };

  const ButtonHandler = () => {
    console.log("Clicked");
    return <a href="https://www.mixcloud.com/ronnie-griffins/"></a>;
  };

  return (
    <div className="home">
      {/* Image Area --> Should cover at least 0.75 of the initial viewheight of the browser */}
      <div style={myStyle} className="image"></div>
      {/* Engagement Area --> Has two areas the projects slide(covers at least 0.75 width of the section) and the feed section(where Twitter/Instagram Engagements are shown)*/}
      <Row className="home-tile">
        <Col sm={7} className="carousel">
          <h4>Project Titles</h4>
          <p>Project Title</p>
          <div className="project-slide">
            <FontAwesomeIcon className="icon" icon={faAngleLeft} />
            <div style={myStyle} className="img-place"></div>
            <FontAwesomeIcon className="icon" icon={faAngleRight} />
          </div>
          <button onClick={ButtonHandler}>
            <FontAwesomeIcon className="icon" icon={faMusic} />
            Listen
          </button>
        </Col>
        <Col sm={4} className="feed">
          <h4>Feed</h4>
          Tweets
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "_okorelens",
            }}
            options={{
              height: "500px",
              theme: "dark",
            }}
          />
        </Col>
      </Row>
      {/* About Section --> A card that has a picture,text and social media links */}
      <div className="about">
        <Row>
          <Col>
            <h5>About Ronnie</h5>
            <div className="image">
              <img src={image2} alt="DeejayRonnieXL image" />
            </div>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna ali.orem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna ali. orem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna ali.orem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna ali et,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna ali Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
                consectetur adipiscixng elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna ali.orem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna ali
              </p>
            </div>
            <div className="media-links">
              <a href="#">
                <FontAwesomeIcon className="icon" icon={faFacebook} />
              </a>
              <a href="https://twitter.com/deejayronnieXL" target="_blank">
                <FontAwesomeIcon className="icon" icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon className="icon" icon={faYoutube} />
              </a>
              <a
                href="https://www.instagram.com/deejayronnie_xl/"
                target="_blank"
              >
                <FontAwesomeIcon className="icon" icon={faInstagram} />
              </a>
              <a
                href="https://www.mixcloud.com/ronnie-griffins/"
                target="_blank"
              >
                <FontAwesomeIcon className="icon" icon={faMixcloud} />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
