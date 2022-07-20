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

// import Container from "react-bootstrap/esm/Container";

const Home = () => {
  const myStyle = {
    backgroundImage: `url(${image})`,
  };
  const myStyle2 = {
    backgroundImage: `url(${image})`,
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
            <div style={myStyle2} className="img-place"></div>
            <FontAwesomeIcon className="icon" icon={faAngleRight} />
          </div>
          <button>
            <FontAwesomeIcon className="icon" icon={faMusic} />
            Listen
          </button>
        </Col>
        <Col sm={4} className="feed">
          <h4>Feed</h4>
          <div className="tweets">Tweets</div>
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
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna ali.orem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna ali
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
