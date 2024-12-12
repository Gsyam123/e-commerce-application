import React from "react";
import { womanData } from "../data/woman";

const Women = () => {
  const firstFiveWomens = womanData.slice(0, 5);
  return (
    <>
      <div className="proTitle">
        <h2>Women's...</h2>
        <div className="proSection">
          {firstFiveWomens.map((wo) => {
            return (
              <div className="imgBox">
                <img src={wo.image} alt="" className="proImg" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Women;
