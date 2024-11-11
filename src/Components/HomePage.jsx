import React, { useEffect, useState } from "react";
import axios from "axios";

export const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      //   console.log(res.data);
      setProducts(res.data);
    });
  }, []);
  console.log(products);
  return (
    <div>
      <h1>Home Page...!</h1>
      {products.map((pro) => {
        return <img src={pro.image} alt="" width={100} />;
      })}
    </div>
  );
};
