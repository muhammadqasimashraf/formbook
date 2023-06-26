import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navigation.css";
// import { logo } form '../assets/';
import logo from "../../assets/img/logo.svg";
const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="h-100" />

      <div>
        <ul
          className={
            isMobile
              ? "nav-links-mobile h-50 display-4"
              : "nav-links h-100 display-4"
          }
        >
          <Link to="/" className="home">
            <li className="builderbook">Book 1:Builder Book</li>
          </Link>
          <Link to="saasboilerplate" className="saasboilerplate">
            <li className="saasboilerplate">Book 2: SaaS Boilerplate</li>
          </Link>
          <Link to="reviews" className="reviews">
            <li className="reviews">Reviews</li>
          </Link>
          <Link to="login" className="login">
            <li className="login">Login</li>
          </Link>
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
