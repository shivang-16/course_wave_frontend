import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signin.scss";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div id="signin_page">
      <div className="signin-box">
        <h2>Welcome back</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Enter you email" required />
          <input type="password" placeholder="Enter you password" required />
          <input type="checkbox" id="" />
          <input type="submit" id="" value="Login" />
          <p>
            Didn't have account? <Link to="/register">SignUp</Link>
          </p>
        </form>
        <form>
          <input type="text" placeholder="Login with google" />
          <input type="text" placeholder="Login with github" />
        </form>
      </div>
    </div>
  );
};

export default Login;
