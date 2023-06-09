import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navber navbar-expend-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <i className="bi bi-airplane-engines me-2"></i>
          Fun Vacation
        </NavLink>

        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collpase"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collpase navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink to="/Orders"> Order Now</NavLink>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink to="/Vacations"> Vacations</NavLink>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink to="/Orders"> Order Now</NavLink>
          </ul>
        </div>

        <ul className="navbar-nav flex-row">
          <li className="nav-item me-3">
            <NavLink to="/" className="nav-link">
              sign up
            </NavLink>
          </li>
          <li className="nav-item me-3">
            <NavLink to="/" className="nav-link">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
