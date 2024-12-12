import React from "react";
import { mobileData } from "../data/mobiles";
const Mobiles = () => {
  // console.log(mobileData.map((i) => i.image));

  const firstFiveImages = mobileData.slice(0, 5);

  return (
    <><div className="proTitle">
      <h2>Mobiles...</h2>
      <div className="proSection">
        {firstFiveImages.map((mob, i) => {
          return (
            <div key={i} className="imgBox">
              <img src={mob.image} alt="" className="proImg" />
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Mobiles;
