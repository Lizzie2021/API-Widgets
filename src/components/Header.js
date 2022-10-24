import React from "react";

const Header = ({ path }) => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav">
        <li className="nav-item ps-5">
          <a className={path === "/" ? "nav-link active" : "nav-link"} href="/">
            Random-Quote
          </a>
        </li>
        <li className="nav-item ps-5">
          <a
            className={
              path === "/search-image" ? "nav-link active" : "nav-link"
            }
            href="/search-image"
          >
            Search-Images
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
