import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurger = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav>
        <Link to="/">
          <h1>CourseWave</h1>
        </Link>
        <div className="nav-button">
          <Link to="/dashboard">
            <button className="signup">Dashboard</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>

        <div className="burger" onClick={handleBurger}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="slidedown nav-button">
          <Link to="/dashboard">
            <button className="signup">Dashboard</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
