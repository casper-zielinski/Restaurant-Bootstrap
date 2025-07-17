import "../index.css";

function Hero() {
  return (
    <section
      id="Haupt-Seite"
      className="hero-section d-flex align-items-center justify-content-center text-white position-relative"
    >
      <div className="container text-center">
        <h1 className="manufacturing-consent Hero-Text fw-bold mb-4">Weltküche</h1>
        <p className="lead fs-3 mb-5">
          Entdecken Sie Geschmäcker aus aller Welt unter einem Dach
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a
            href="#Speisekarte-Sektion"
            className="btn btn-outline-light btn-lg px-5 py-3"
          >
            Speisekarte ansehen
          </a>
          <a href="#Tisch-Reservierung" className="btn btn-outline-light btn-lg px-5 py-3">
            Tisch reservieren
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
