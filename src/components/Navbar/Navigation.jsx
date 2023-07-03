import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Builderbook from "../../pages/builderBook/Builderbook";
import SaasBiolerPlate from "../../pages/saasBoilerPlate/SaasBiolerPlate";
import Reviews from "../../pages/reviews/Reviews";
import logo from "../../assets/img/logo.svg";

function Navigation() {
  return (
    <Router>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img class="navbar-brand" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/" exact>
                <a href="#" className="navlink">
                  Book 1: Builder Book
                </a>
              </Nav.Link>
              <Nav.Link as={Link} to="/saasboilerplate">
                <a href="#" className="navlink">
                  Book 2: Saas Boiler Plate
                </a>
              </Nav.Link>
              <Nav.Link as={Link} to="/reviews">
                <a href="#" className="navlink">
                  Reviews
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-3">
        <Routes>
          <Route path="/" element={<Builderbook />} />
          <Route path="saasboilerplate" element={<SaasBiolerPlate />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default Navigation;
