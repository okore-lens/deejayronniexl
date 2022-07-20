import React from "react";

import MerchCard from "../../../cards/merch/MerchCard";

import "./Merch.scss";

const Merch = () => {
  return (
    <div className="merch">
      <h2> MERCHANDISE</h2>
      <div className="merch-items">
        <MerchCard />
        <MerchCard />
        <MerchCard />
        <MerchCard />
        <MerchCard />
        <MerchCard />
      </div>
    </div>
  );
};

export default Merch;
