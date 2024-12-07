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

export const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      //   console.log(res.data);
      setProducts(res.data);
    });
  }, []);
  console.log(products);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };
  return (
    <div>
      <h1>Home Page...!</h1>
      <Button variant="contained" color="error" onClick={handleLogout}>
        Logout
      </Button>

      {/* {products.map((pro) => {
        return <img src={pro.image} alt="" width={100} />;
      })} */}

      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
          {products.map((product) => (
            <Grid item xs={2} sm={4} md={4} key={product.id}>
              <Item>
                <img
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};
