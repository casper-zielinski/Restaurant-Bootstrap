import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light fw-bold" href="#Haupt-Seite">
          <img
            src="/Restaurant.png"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top mx-2"
          ></img>
          Taverna Luna
        </a>
        <button
          className="navbar-toggler bg-secondary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-secondary"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#Speisekarte-Sektion"
              >
                Speisekarte
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#Tisch-Reservierung"
              >
                Tisch Reservieren
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
