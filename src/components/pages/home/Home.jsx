import React from "react";
import "./Home.scss";
import image from "../../../assets/images/img.jpg";
import Container from "react-bootstrap/esm/Container";

const Home = () => {
  const myStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div className="home">
      {/* Image Area --> Should cover at least 0.75 of the initial viewheight of the browser */}
      <div style={myStyle} className="image"></div>
      {/* Engagement Area --> Has two areas the projects slide(covers at least 0.75 width of the section) and the feed section(where Twitter/Instagram Engagements are shown)*/}

      <Container className="home-tile">Container</Container>

      {/* About Section --> A card that has a picture,text and social media links */}
    </div>
  );
};

export default Home;
