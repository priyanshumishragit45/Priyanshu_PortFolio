import React from "react";
import "./pCard.css";

const ProjectCard = ({ data }) => {
  return (
    <>
      <div className="pCardContainer">
        <div className="pImg">
          <img src={data.Image} alt="" />
        </div>
        <div className="pDes">
          <div>
            <h1>{data.Title}</h1>
            <p>{data.Desc}</p>
            <a target="_blank" href={data.link}> <img style={{height:"50px" }} src="/assets/github.png" alt="" /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
