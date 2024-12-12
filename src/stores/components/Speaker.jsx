import React from "react";
import { speakerData } from "../data/speaker";

const Speaker = () => {
  const firstFiveSpeakers = speakerData.slice(0, 5);
  return (
    <><div className="proTitle">
      <h2>Speakers...</h2>
      <div className="proSection">
        {firstFiveSpeakers.map((sp) => {
          return (
            <div className="imgBox">
              <img src={sp.image} alt="" className="proImg" />
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Speaker;
