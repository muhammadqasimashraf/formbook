import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Builderbook from "./pages/builderBook/Builderbook";
import SaasBiolerPlate from "./pages/saasBoilerPlate/SaasBiolerPlate";
import Reviews from "./pages/reviews/Reviews";
import Navigation from "./components/Navbar/Navigation";
import Login from "./pages/login/Login";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Container fluid className="mt-3">
          <Routes>
            <Route exact path="/" element={<Builderbook />} />
            <Route path="/saasboilerplate" element={<SaasBiolerPlate />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
