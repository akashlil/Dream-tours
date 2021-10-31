import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../context/useAuth";
import "./Header.css";
const Header = () => {
  const logo = `https://i.ibb.co/Zg5Z5fT/dream.png`;

  const { user, logOut } = useAuth();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light sticky-top py-3"
      style={{ "background-color": "#198754" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" />
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link nav-text-color" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link nav-text-color " to="/myoder">
                My Order
              </Link>
            </li>

            {/* <li className="nav-item">
                <Link className="nav-link" to="/addservices">
                  Add service and register list
                </Link>
              </li> */}

            {user.email && (
              <li className="nav-item">
                <Link className="nav-link nav-text-color " to="/addservices">
                  Admin
                </Link>
              </li>
            )}

            {user.email ? (
              <li className="nav-item">
                <p className="nav-link m-0">
                  <span className="fw-bolder mx-2"> {user.displayName} </span>
                  <button onClick={logOut} className="btn btn-sm btn-danger">
                    <i class="fas fa-sign-out-alt ms-2"></i>
                  </button>
                </p>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <button className="btn btn-sm btn-success">
                    <i class="fas fa-sign-in-alt ms-2"></i>
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
