import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-dark">
      <div className="container-fluid">
        {isMainPage ? (
          <a className="navbar-brand text-light fw-bold" href="#Haupt-Seite">
            <img
              src="/Restaurant.png"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top mx-2"
            />
            Taverna Luna
          </a>
        ) : (
          <Link className="navbar-brand text-light fw-bold" to="/">
            <img
              src="/Restaurant.png"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top mx-2"
            />
            Taverna Luna
          </Link>
        )}
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
              {isMainPage ? (
                <a
                  className="nav-link active text-light"
                  href="#Speisekarte-Sektion"
                >
                  Speisekarte
                </a>
              ) : (
                <Link className="nav-link active text-light" to="/">
                  Speisekarte
                </Link>
              )}
            </li>
            <li className="nav-item">
              {isMainPage ? (
                <a
                  className="nav-link active text-light"
                  href="#Tisch-Reservierung"
                >
                  Tisch Reservieren
                </a>
              ) : (
                <Link className="nav-link active text-light" to="/">
                  Tisch Reservieren
                </Link>
              )}
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to={"/reservationen"}
              >
                Reservationen
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
