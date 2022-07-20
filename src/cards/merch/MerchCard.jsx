import React from "react";
import "./MerchCard.scss";

import image from "../../assets/images/home-background.png";

const MerchCard = () => {
  return (
    <div className="merch-card">
      {/* Title */}
      <div className="title">
        <h4>Title</h4>
      </div>
      {/* Image */}
      <div className="image">
        <img src={image} alt="Merchandise Image" />
      </div>
      {/* Price */}
      <div className="price">
        <p> Kshs. 1000</p>
      </div>
    </div>
  );
};

export default MerchCard;
