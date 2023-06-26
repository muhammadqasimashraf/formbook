import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Builderbook from "./pages/builderBook/Builderbook";
import SaasBiolerPlate from "./pages/saasBoilerPlate/SaasBiolerPlate";
import Reviews from "./pages/reviews/Reviews";
import Navigation from "./components/Navbar/Navigation";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Builderbook />} />
          <Route path="saasboilerplate" element={<SaasBiolerPlate />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
