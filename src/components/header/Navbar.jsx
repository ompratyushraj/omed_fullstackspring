import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import OMEDLogoLight from "../../assets/images/OMED_Logos/Omed_Logo_Light.png";
import OMEDLogoDark from "../../assets/images/OMED_Logos/Omed_Logo_Dark.png";

function Navbar({ mode, toggleMode }) {
  const logoSrc = mode === "light" ? OMEDLogoLight : OMEDLogoDark;
  const textClass = mode === "light" ? "dark" : "light";

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid" style={{ height: "50px" }}>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse px-5" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
            <li className="nav-item">
              <Link className="nav-link fs-1 fw-bold" to="/">
                <img
                  className="mb-2"
                  src={logoSrc}
                  alt="OMED Logo"
                  style={{ height: "50px" }}
                />
              </Link>
            </li>
          </ul>

          <div className="d-flex justify-content-center align-items-center px-2">
            <li className="nav-item dropdown list-unstyled">
              <a
                className={`nav-link dropdown-toggle text-${textClass} my-2 pe-2`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                {["Action", "Another action", "Something else here"].map((item, index) => (
                  <li key={index}>
                    <a className="dropdown-item" href="#">
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </ul>
            </li>

            <input
              className="form-control me-2 mx-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <SearchIcon />
            </button>

            <li className="nav-item dropdown list-unstyled">
              <a
                className={`nav-link dropdown-toggle text-${textClass} ps-3`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Location
              </a>
              <ul className="dropdown-menu">
                {["Patna", "Noida", "Delhi"].map((location, index) => (
                  <li key={index}>
                    <a className="dropdown-item" href="#">
                      {location}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </div>

          {["Wishlist", "Cart", "Account"].map((item, index) => (
            <a
              key={index}
              className={`text-${textClass} nav-link mx-2`}
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              {item}
            </a>
          ))}

          <div className={`form-check form-switch text-${textClass} mx-2 pe-3`}>
            <input
              className="form-check-input"
              onClick={toggleMode}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label fw-bold" htmlFor="flexSwitchCheckDefault"></label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Prop Types for Navbar
Navbar.propTypes = {
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

export default Navbar;
