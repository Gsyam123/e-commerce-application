import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StyledFormGroup = styled(FormGroup)({
  width: "30%",
  margin: "auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  boxShadow: "0px 0px 8px rgba(0,0,0,0.5)",
});
export const Registration = () => {
  const [users, setUsers] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    let newUsers = { ...users };
    newUsers[e.target.name] = e.target.value;
    setUsers(newUsers);
  };
  const handleRegister = () => {
    if (users.password !== users.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    axios
      .get("http://localhost:3001/myUsers?email=" + users.email)
      .then((res) => {
        if (res.data.length > 0) {
          alert("User with this email already exists.");
        } else {
          axios.post("http://localhost:3001/myUsers", users).then((res) => {
            // console.log(res.data);
            setUsers(res.data);
            alert("Registration successful!");
            navigate("/");
          });
          // setTimeout(() => {
          //   navigate("/");
          // }, [500]);
        }
      });
  };
  return (
    <div>
      <h1>Registration page...</h1>
      <StyledFormGroup>
        <FormControl>
          <InputLabel>Full Name</InputLabel>
          <Input
            name="fullName"
            value={users.fullName}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </FormControl>
        <br />
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            name="email"
            value={users.email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </FormControl>
        <br />
        <FormControl>
          <InputLabel>Password</InputLabel>
          <Input
            name="password"
            value={users.password}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </FormControl>
        <br />
        <FormControl>
          <InputLabel>Confirm-Password</InputLabel>
          <Input
            name="confirmPassword"
            value={users.confirmPassword}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </FormControl>
        <br />
        <FormControl>
          <InputLabel>Mobile</InputLabel>
          <Input
            name="mobile"
            value={users.mobile}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </FormControl>
        <br />
        <FormControl>
          <InputLabel>Address</InputLabel>
          <Input
            name="address"
            value={users.address}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </FormControl>
        <br />
        <Button variant="contained" color="success" onClick={handleRegister}>
          Register
        </Button>
      </StyledFormGroup>
    </div>
  );
};
