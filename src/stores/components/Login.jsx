import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "../stores/styles/Login.css";
import "../styles/Login.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Stack } from "@mui/material";
import { FormControl, FormGroup, Input, InputLabel } from "@mui/material";
import axios from "axios";

export const Login = () => {
  const [loginFields, setLoginFields] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    let newLoginFields = { ...loginFields };
    newLoginFields[e.target.name] = e.target.value;
    setLoginFields(newLoginFields);
  };
  const handleLogin = () => {
    axios
      .get("http://localhost:3001/myUsers?email=" + loginFields.email)
      .then((res) => {
        if (res.data.length > 0) {
          const user = res.data[0];
          if (user.password === loginFields.password) {
            localStorage.setItem("isAuthenticated", true);
            navigate("/home");
          } else {
            alert("Incorrect password. Please try again.");
          }
        } else {
          alert("User not found. Please register.");
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        alert("An error occurred. Please try again.");
      });
  };
  return (
    <div className="main">
      <div className="form-section">
        <div>
          <Card
            sx={{
              width: 300,
              padding: 2,
              margin: "100px 250px",
            }}
          >
            <CardContent>
              <h3>Welcome back...!!!</h3>
              <br />
              <FormGroup>
                <FormControl>
                  <InputLabel>Email</InputLabel>
                  <Input
                    name="email"
                    value={loginFields.email}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
                <br />
                <FormControl>
                  <InputLabel>Password</InputLabel>
                  <Input
                    name="password"
                    value={loginFields.password}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
                <br />
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleLogin}
                >
                  Log-In
                </Button>
              </FormGroup>

              <Stack direction={"row"}>
                <p>I don't have an account?</p>
                <Link style={{ paddingTop: "17px" }} to={"/registration"}>
                  {" "}
                  Register
                </Link>
              </Stack>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="logo-section">
        <img
          src="https://static.vecteezy.com/system/resources/previews/012/335/181/non_2x/mobile-shopping-concept-a-man-and-a-woman-buy-things-in-the-online-store-through-a-big-smartphone-e-commerce-and-online-shopping-illustration-in-flat-style-vector.jpg"
          width={"100%"}
          height={"100%"}
          alt=""
        />
      </div>
    </div>
  );
};
