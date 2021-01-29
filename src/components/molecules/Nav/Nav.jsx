import React from "react";
import { NavLink } from "react-router-dom";

import toggle from "../../../img/togglemoon.svg";

import "./Nav.scss";

export default function Item() {
  return (
    <>
      <nav className="nav">
        <div className="nav_heading">
          <div className="nav_heading_title">
            <NavLink to="/">
              <h1>FORECAST</h1>
            </NavLink>
          </div>
          <div className="nav_heading_burger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="nav_menu">
          <NavLink to="/signin">
            <p class="nav_menu_signin">Connexion</p>
          </NavLink>
          <NavLink to="/signup">
            <p class="nav_menu_signup">Inscription</p>
          </NavLink>
          <img src={toggle} alt="toggle" />
        </div>
      </nav>
    </>
  );
}
