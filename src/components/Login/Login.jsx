import React from "react";
import "./style.scss";
import OutlinedButtons from "../joshicomponents/ButtonJo";

const Login = () => {
  return (
    <>
      <div className="login">
        <input
          className="login-input"
          type="text"
          required
          autoComplete="off"
        ></input>
        <label className="login-label">
          <span className="login-content">Name</span>
        </label>
      </div>
      <div className="login">
        <input
          className="login-input"
          type="text"
          required
          autoComplete="off"
        ></input>
        <label className="login-label">
          <span className="login-content">Password</span>
        </label>
      </div>
      <OutlinedButtons />
      {/* <button type="submit" variant="outlined" color="primary">
        Submit
      </button> */}
    </>
  );
};

export default Login;
