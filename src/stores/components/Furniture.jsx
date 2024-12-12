import React from "react";
import { furnitureData } from "../data/furniture";
const Furniture = () => {
  const firstFiveFurnitures = furnitureData.slice(0, 5);

  return (
    <><div className="proTitle">
      <h2>Furnitures...</h2>
      <div className="proSection">
        {firstFiveFurnitures.map((fur) => {
          return (
            <div className="imgBox">
              <img src={fur.image} alt="" className="proImg" />
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Furniture;
