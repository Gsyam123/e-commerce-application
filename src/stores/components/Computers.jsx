import React from "react";
import { computerData } from "../data/computers";
const Computers = () => {
  const firstFiveComputers = computerData.slice(0, 5);
  return (
    <><div className="proTitle">
      <h2>Computers...</h2>
      <div className="proSection">
        {firstFiveComputers.map((cum) => {
          return (
            <div className="imgBox">
              <img src={cum.image} alt="" className="proImg" />
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Computers;
