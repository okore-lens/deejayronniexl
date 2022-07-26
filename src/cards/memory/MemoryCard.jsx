import React from "react";
import "./MemoryCard.scss";

const MemoryCard = (props) => {
  const randomLength = () => {
    let y = Math.floor(Math.random() * 4 + 1);
    // console.log(y);
    return y;
  };
  const randomWidth = () => {
    let x = Math.floor(Math.random() * 4 + 1);
    // console.log(x);
    return x;
  };
  return (
    <div className="memories">
      <h2>Image Gallery</h2>
      <div className="container">
        <div
          className={`gallery-container w-${randomWidth()} h-${randomLength()}`}
        >
          <div className="gallery-item">
            <div className="image">
              <img src={props.src} alt={props.text} />
            </div>
            <div className="text">{props.text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;
