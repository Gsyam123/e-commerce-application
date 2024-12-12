import React from "react";
import { watchData } from "../data/watch";

const Watch = () => {
  const firstFiveWatchs = watchData.slice(0, 5);
  return (
    <><div className="proTitle">
      <h2>Watch's...</h2>
      <div className="proSection">
        {firstFiveWatchs.map((wa) => {
          return (
            <div className="imgBox">
              <img src={wa.image} alt="" className="proImg" />
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Watch;
