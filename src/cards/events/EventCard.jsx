import React from "react";
import image from "../../assets/images/home-background.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapMarker,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./EventCard.scss";

const EventCard = (props) => {
  return (
    <div className="event-card">
      <h5>{props.name}</h5>
      <div className="contents">
        <div className="image">
          <img src={image} alt="DeejayRonnieXL image" />
        </div>
        <div className="events-details">
          <div className="detail">
            <FontAwesomeIcon className="icon" icon={faClock} />
            <p>{props.time}</p>
          </div>
          <div className="detail">
            <FontAwesomeIcon className="icon" icon={faMapMarker} />
            <p>{props.location}</p>
          </div>
          <div className="detail">
            <FontAwesomeIcon className="icon" icon={faShareAlt} />
            <p>Share Event</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
