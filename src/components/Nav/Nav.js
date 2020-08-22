import React from 'react';

const Nav = () => {
  return (
    <div className="nav">
      <h1 className="nav__name heading-1">Maria Josefson</h1>

      <ul className="nav__list">
        <li>
          <a href="#" className="nav__link">
            Expertise
          </a>
        </li>

        <li>
          <a href="#" className="nav__link">
            Experience
          </a>
        </li>

        <li>
          <a href="#" className="nav__link">
            Publications
          </a>
        </li>

        <li>
          <a href="#" className="nav__link">
            Skills
          </a>
        </li>

        <li>
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>


      </ul>
    </div>
  );
}

export default Nav;