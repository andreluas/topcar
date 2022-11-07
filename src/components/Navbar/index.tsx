import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/js/src/collapse.js';
import './styles.scss';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <Link to="/" className="nav-logo-text">
        <h4>Carros Top</h4>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#topcar-navbar"
        aria-controls="topcar-navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="topcar-navbar">
        <ul className="navbar-nav offset-md-2 main-menu">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/">CATÁLOGO</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
