import React from "react";
import { fridgeData } from "../data/fridge";

const Fridge = () => {
  const firstFiveFridges = fridgeData.slice(0, 5);
  return (
    <><div className="proTitle">
      <h2>Fridges...</h2>
      <div className="proSection">
        {firstFiveFridges.map((f) => {
          return (
            <div className="imgBox">
              <img src={f.image} alt="" className="proImg" />
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Fridge;
