import React from "react";
import { Navbar } from "../components/Navbar";
import Products from "../components/Products";
import Ac from "../components/Ac";
import Books from "../components/Books";
import Fridge from "../components/Fridge";
import Men from "../components/Men";
import Furniture from "../components/Furniture";
import Kitchen from "../components/Kitchen";
import Speaker from "../components/Speaker";
import Tv from "../components/Tv";
import Watch from "../components/Watch";
import Women from "../components/Women";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Products />
      <Ac />
      <Books />
      <Fridge />
      <Men />
      <Furniture />
      <Kitchen />
      <Speaker />
      <Tv />
      <Watch />
      <Women />
    </div>
  );
};

export default LandingPage;
