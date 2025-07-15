import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top border-bottom bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#Haupt-Seite">
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
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#Speisekarte-Sektion"
              >
                Speisekarte
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#Reservation-Sektion"
              >
                Tisch Reservieren
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Jobs
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Über uns
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Team
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Bewertungen
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    News
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
