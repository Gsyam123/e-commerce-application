import React from "react";
import { acData } from "../data/ac";

const Ac = () => {
  const firstFiveAcs = acData.slice(0, 5);
  return (
    <>
      <div className="proTitle">
        <h2>Ac's...</h2>
        <div className="proSection">
          {firstFiveAcs.map((a) => {
            return (
              <div className="imgBox">
                <img src={a.image} alt="" className="proImg" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Ac;
