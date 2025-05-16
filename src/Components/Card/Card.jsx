import React from "react";
import "./Card.css";

const Card = ({data}) => {
  return (
    <>
      <div className="cardContainer">
        <div className="cardImg">
          <img src={data.Image} alt="" />
        </div>
        <div className="cardTitle">{data.Title}</div>
      </div>
    </>
  );
};

export default Card;
