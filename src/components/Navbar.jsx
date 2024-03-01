import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <div className="pt-3" style={{ height: "116px" }}>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link
              to="/"
              className="navbar-brand text-white underline"
              style={{ fontWeight: "bolder" }}
            >
              sb.
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav " style={{ marginLeft: "auto" }}>
                <li className="nav-item ">
                  <Link
                    to="/about"
                    className="nav-link text-white"
                    aria-current="page"
                  >
                    About
                  </Link>
                </li>
                {/* 
                <li className="nav-item">
                  <Link
                    to={"/contact"}
                    className="nav-link text-white"
                    aria-current="page"
                  >
                    Contact
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
