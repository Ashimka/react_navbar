import React from "react";
import "./header.css";
import Nav from "../nav/Nav";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrap">
          <div className="header__logo">
            <img
              src={require("./images/www.png")}
              alt="logo"
              className="header-img"
            />
            <span className="header-logo-text">logo</span>
          </div>
          <Nav />
          <div className="header__contacts contact">
            <a
              href="https://wa.me/79649552284"
              target="_blank"
              rel="noreferrer"
              className="contact__link">
              <img
                src={require("./images/whatsapp.png")}
                alt="whatsapp"
                className="contacts__img"
              />
            </a>
            <a
              href="https://github.com/Ashimka"
              target="_blank"
              rel="noreferrer"
              className="contact__link">
              <img
                src={require("./images/github.png")}
                alt="github"
                className="contacts__img"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
