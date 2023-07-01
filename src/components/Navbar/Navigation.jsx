import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Builderbook from "../../pages/builderBook/Builderbook";
import SaasBiolerPlate from "../../pages/saasBoilerPlate/SaasBiolerPlate";
import Reviews from "../../pages/reviews/Reviews";

function Navigation() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            React Bootstrap Navbar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" exact>
                BuilderBook
              </Nav.Link>
              <Nav.Link as={Link} to="/saasboilerplate">
                SaasBoilerPlate
              </Nav.Link>
              <Nav.Link as={Link} to="/reviews">
                Reviews
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
