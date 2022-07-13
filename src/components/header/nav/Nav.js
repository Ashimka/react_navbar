import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="header__nav nav">
      <nav
        className={isMobile ? "nav-mobile__list" : "nav__list"}
        onClick={() => setIsMobile(false)}>
        <NavLink to="/" className="nav__link">
          Главная
        </NavLink>
        <NavLink to="/skills" className="nav__link">
          Навыки
        </NavLink>
        <NavLink to="/work" className="nav__link">
          Работы
        </NavLink>
        <NavLink to="/contacts" className="nav__link">
          Контакты
        </NavLink>
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
