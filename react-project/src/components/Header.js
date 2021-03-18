import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <a className="logo" href="/" aria-label="site logo">
        <img src="/images/logo.png" alt="logo" width="195" />
      </a>
      <nav>
        <ul>
          <li className="list">
            <Link to="/" className="link">
              home
            </Link>
          </li>
          <li className="list">
            <Link to="/note" className="link">
              note
            </Link>
          </li>
          <li className="list">
            <Link to="/create" className="link">
              create
            </Link>
          </li>
          <li className="list">
            <Link to="/about" className="link">
              about
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
