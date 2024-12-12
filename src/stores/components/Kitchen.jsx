import React from "react";
import { kitchenData } from "../data/kitchen";

const Kitchen = () => {
  const firstFiveKichens = kitchenData.slice(0, 5);
  return (
    <><div className="proTitle">
      <h2>Kichen...</h2>
      <div className="proSection">
        {firstFiveKichens.map((kic) => {
          return (
            <div className="imgBox">
              <img src={kic.image} alt="" className="proImg" />
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Kitchen;
