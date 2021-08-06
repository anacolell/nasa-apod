import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

export default function NavBar() {
  const [show, setShow] = useState(true);

  const controlNavbar = () => {
    if (window.scrollY > 20) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div className={`navbar ${show && "nav-opaque"}`}>
      <div className="navbar-title">
        <img src={logo} alt="logo" className="logo" />
        <p>Astronomy Picture of the Day</p>
      </div>
      <div className="navbar-links">
        <Link className="navbar-link" to="/">
          Home
        </Link>
      </div>
    </div>
  );
}
