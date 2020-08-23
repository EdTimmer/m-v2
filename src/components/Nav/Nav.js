import React from 'react';

import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
// import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <h1 className="nav__name heading-1">Maria Josefson</h1>

      <ul className="nav__list">
        <li>
          <BrowserRouter>
            <Link smooth to="/#skills" className="nav__link">
              Skills
            </Link>
          </BrowserRouter>
        </li>

        <li>
          <BrowserRouter>
            <Link smooth to="/#experience" className="nav__link">
              Experience
            </Link>
          </BrowserRouter>
        </li>

        <li>
          <BrowserRouter>
            <Link smooth to="/#publications" className="nav__link">
              Academic Publications
            </Link>
          </BrowserRouter>
        </li>

        <li>
          <BrowserRouter>
            <Link smooth to="/#education" className="nav__link">
              Education
            </Link>
          </BrowserRouter>
        </li>
      </ul>
    </div>
  );
}

export default Nav;