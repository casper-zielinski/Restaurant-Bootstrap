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
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Jobs
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Über uns
              </a>
              <ul className="dropdown-menu bg-black">
                <li>
                  <a className="dropdown-item text-light GreyHover" href="#">
                    Team
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-light GreyHover" href="#">
                    Bewertungen
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-light GreyHover" href="#">
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
