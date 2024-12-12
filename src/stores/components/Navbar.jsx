import React, { useEffect, useState } from "react";
import axios from "axios";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export const Navbar = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   axios.get("https://fakestoreapi.com/products").then((res) => {
  //     //   console.log(res.data);
  //     setProducts(res.data);
  //   });
  // }, []);
  // console.log(products);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };
  return (
    <>
      <div className="navSection">
        {/* <Button variant="contained" color="error" onClick={handleLogout}>
         Logout //{" "}
      </Button> */}
        <div className="title">
          <h2>E-Commerce</h2>
        </div>
        <div className="search">
          <input type="search" placeholder="Search..." />
        </div>
        <div className="cart">Cart</div>
      </div>
    
      
      <div className="nav2">

      </div>
    </>
  );
};
