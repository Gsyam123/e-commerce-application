import React from "react";
import { tvData } from "../data/tv";

const Tv = () => {
  const firstFiveTvs = tvData.slice(0, 5);
  return (
    <>
      <div className="proTitle">
        <h2>Tv's...</h2>
        <div className="proSection">
          {firstFiveTvs.map((t) => {
            return (
              <div className="imgBox">
                <img src={t.image} className="proImg" alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tv;
