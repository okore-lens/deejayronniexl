import React from "react";
import { Row, Col } from "react-bootstrap";

const VideoCard = () => {
  return (
    <Row>
      <h5>Video Title ---&gt; adipiscing elit, sed do eiusmod tempor </h5>
      <Col sm={7}>
        <div className="youtube"></div>
      </Col>
      <Col sm={1}>
        <button>Comment</button>
      </Col>
      <Col sm={3}>
        <div className="comments">
          Lens ---&gt;Messsage To Be Portrayed Here
        </div>
      </Col>
    </Row>
  );
};

export default VideoCard;
