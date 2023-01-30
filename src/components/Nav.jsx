import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Nav() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Brand Logo.
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${
            isNavCollapsed ? "collapse justify-content-end" : ""
          } navbar-collapse + "collapse navbar-collapse" id="navbarSupportedContent"`}
        >
          <div className="d-flex navbar-nav">
            <div className="nav-item">
              <CustomLink
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                Home
              </CustomLink>
            </div>
            <div className="nav-item">
              <CustomLink className="nav-link" to="/about">
                About
              </CustomLink>
            </div>
            <div className="nav-item">
              <CustomLink className="nav-link" to="/contact">
                Contact
              </CustomLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
