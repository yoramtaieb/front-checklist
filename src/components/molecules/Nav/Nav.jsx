import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Toggle from "../../darkmode/Toggle";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../darkmode/globalStyles";
import { lightTheme, darkTheme } from "../../darkmode/Theme";
import { useDarkMode } from "../../darkmode/useDarkMode";

import "./Nav.scss";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const onClick = () => setOpen(!open);

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

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
          <NavLink to="/">
            <p className="nav_menu_signin">Connexion</p>
          </NavLink>
          <NavLink to="/forecast/signup">
            <p className="nav_menu_signup">Inscription</p>
          </NavLink>
          <div className="nav_menu_img">
            <ThemeProvider theme={themeMode}>
              <GlobalStyles />
              <Toggle theme={theme} toggleTheme={themeToggler} />
            </ThemeProvider>
          </div>
        </div>
      </nav>
    </>
  );
}
