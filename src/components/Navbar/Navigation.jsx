import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Builderbook from "../../pages/builderBook/Builderbook";
import SaasBiolerPlate from "../../pages/saasBoilerPlate/SaasBiolerPlate";
import Reviews from "../../pages/reviews/Reviews";
import logo from "../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className="navbar-brand" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/" exact>
              <a href="#" className="navlink">
                Book 1: Builder Book
              </a>
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/saasboilerplate"
              activeClassName="active"
            >
              <a href="#" className="navlink">
                Book 2: Saas Boiler Plate
              </a>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/reviews" activeClassName="active">
              <a href="#" className="navlink">
                Reviews
              </a>
            </Nav.Link>
            <Nav.Link as={Link} to="/reviews">
              <button
                type="button"
                className="navlink border-light text-white btn shadow-none ml-3"
              >
                <span className="p-3">Login</span>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
