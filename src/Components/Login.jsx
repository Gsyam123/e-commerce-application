import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [loginFields, setLoginFields] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    let newLoginFields = { ...loginFields };
    newLoginFields[e.target.name] = e.target.value;
    setLoginFields(newLoginFields);
  };
  const handleLogin = () => {
    console.log(loginFields);
    navigate("/home");
  };
  return (
    <div>
      <h1>Welcome To Login Page...!</h1>
      <form
        action=""
        style={{
          border: "1px solid black",
          width: "210px",
          height: "150px",
          margin: "0 auto",
        }}
      >
        <label htmlFor="">Email :</label>
        <input
          type="email"
          name="email"
          placeholder="Please Enter Email"
          value={loginFields.email}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label htmlFor="">Password :</label>
        <input
          type="password"
          name="password"
          placeholder="Please Enter Password"
          value={loginFields.password}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <button>Register</button>
        <button onClick={handleLogin} type="button">
          Login
        </button>
      </form>
    </div>
  );
};
