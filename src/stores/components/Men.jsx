import React from "react";
import { menData } from "../data/men";

const Men = () => {
  const firstFiveMens = menData.slice(0, 5);
  return (
    <><div className="proTitle">
      <h2>Men...</h2>
      <div className="proSection">
        {firstFiveMens.map((m) => {
          return (
            <div className="imgBox">
              <img src={m.image} alt="" className="proImg" />
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Men;
