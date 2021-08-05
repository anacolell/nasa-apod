import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

export default function NavBar() {
  return (
    <div className="navbar">
      <div class="navbar-title">
        <img src={logo} alt="logo" className="logo" />
        <p>Astronomy Picture of the Day</p>
      </div>
      <div className="navbar-links">
        <p className="navbar-link">See more pictures</p>
        <Link className="navbar-link" to="/">
          Home
        </Link>
      </div>
    </div>
  );
}
