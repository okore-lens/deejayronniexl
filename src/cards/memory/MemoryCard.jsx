import React from "react";

import "./MemoryCard.scss";

const MemoryCard = (props) => {
  return (
    <div className="memory">
      <img
        src={props.src}
        className={`image ${
          props.nameClass === "portrait" ? "portrait" : "landscape"
        }`}
      />
    </div>
  );
};

export default MemoryCard;
