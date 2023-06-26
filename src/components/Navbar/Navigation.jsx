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
            <li className="builderbook">
              {" "}
              <a href="#">Book 1:Builder Book</a>{" "}
            </li>
          </Link>
          <Link to="saasboilerplate" className="saasboilerplate">
            <li className="saasboilerplate">
              <a href="#"> Book 2: SaaS Boilerplate</a>
            </li>
          </Link>
          <Link to="reviews" className="reviews">
            <li className="reviews">
              <a href="#">Reviews</a>
            </li>
          </Link>
          <Link to="login" className="login">
            <li className="login">
              <a href="#">Login</a>
            </li>
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
