import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div id="signin_page">
      <div className="signin-box">
        <h2>Welcome to CourseWave</h2>
        <form>
          <input type="text" placeholder="Enter you name" />
          <input type="email" placeholder="Enter you email" />
          <input type="password" placeholder="Enter you password" />
          <input type="checkbox" id="" />
          <input type="submit" id="" value="Signup" />
          <p>
            Already have account? <Link to="/login">Login</Link>
          </p>
        </form>
        <form>
          <input type="text" placeholder="Signup with google" />
          <input type="text" placeholder="Signup with github" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
