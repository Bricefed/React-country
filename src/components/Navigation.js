import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <>
      <Logo />
      <div className="navigation">
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            end
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>À Propos</li>
          </NavLink>
          <NavLink
            to="/blog"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Blog</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
