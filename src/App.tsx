import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reservation from "./pages/Reservation";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/reservieren" element={<Reservation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
