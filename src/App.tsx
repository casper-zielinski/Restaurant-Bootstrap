import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Speisekarte from "./components/Speisekarte";
import TischReservation from "./components/TischReservation";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Speisekarte />
      <TischReservation /> 
    </>
  );
}

export default App;
