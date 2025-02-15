import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">Navbar</span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "",
                  };
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => {
                  return `nav-link ${isActive ? 'active' : ''}`
                }}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/album">
                相簿
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
