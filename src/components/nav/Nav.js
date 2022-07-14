import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getTopNav } from "../../data/navbars";

function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    setNavItems(getTopNav());
  }, []);

  return (
    <div className="header__nav nav">
      <nav className="nav__top">
        <ul
          className={isMobile ? "nav-mobile__list" : "nav__list"}
          onClick={() => setIsMobile(false)}>
          {navItems.map((item) => (
            <li key={item.id} className="nav__item">
              <NavLink to={item.link} className="nav__link">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="nav__burger-menu"
        onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </div>
  );
}

export default Nav;
