import React from "react";
import "./Works.css";
import WorkList from "./WorkList.json";
import Card from "../Card/Card";

function Works() {
  return (
    <>
     <div id="works" style={{paddingBottom:"30px"}} >
     <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <h1
          style={{
            textAlign: "center",
            fontSize: "3rem",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {" "}
          <span
            style={{
              display: "inline-block",
              width: "100px",
              backgroundColor: "red",
              borderBottom: "5px solid #f5a45d",
            }}
          ></span>{" "}
          My Skills{" "}
          <span
            style={{
              display: "inline-block",
              width: "100px",
              backgroundColor: "red",
              borderTop: "5px solid #f5a45d",
            }}
          ></span>{" "}
        </h1>
      </div>
      <div className="skillsCardContainer">
        {WorkList.map((work) => {
          return <Card data={work} />;
        })}
      </div>
     </div>
    </>
  );
}

export default Works;
