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
      <Navigation />
    </div>
  );
}

export default App;
