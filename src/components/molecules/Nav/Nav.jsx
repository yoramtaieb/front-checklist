import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import toggle from "../../../img/togglemoon.svg";

import "./Nav.scss";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const onClick = () => setOpen(!open);

  return (
    <>
      <nav className="nav">
        <div className="nav_heading">
          <div className="nav_heading_title">
            <NavLink to="/">
              <h1>FORECAST</h1>
            </NavLink>
          </div>
          <div
            className={open ? "nav_heading_burger open" : "nav_heading_burger"}
            onClick={onClick}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={open ? "nav_menu active" : "nav_menu"}>
          <NavLink to="/signin">
            <p className="nav_menu_signin">Connexion</p>
          </NavLink>
          <NavLink to="/signup">
            <p className="nav_menu_signup">Inscription</p>
          </NavLink>
          <img src={toggle} alt="toggle" />
        </div>
      </nav>
    </>
  );
}
