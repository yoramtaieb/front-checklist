import React from "react";

import "./Footer.scss";

import Logo from "../../../img/svgr/Logo";
import SocialNetwork from "../../../img/svgr/SocialNetwork";

export default function Item() {
  return (
    <>
      <footer className="footer">
        <div className="footer_heading">
          <div className="footer_heading_logo">
            <Logo />
          </div>
          <div className="footer_heading_paragraph">
            <p>© 2021 Forecast, all rights reserved</p>
          </div>
        </div>
        <div className="footer_links">
          <div className="footer_links_infos">
            <p className="footer_links_infos_contact">contact@forecast.co</p>
            <p className="footer_links_infos_confidentiality">
              Politique de confidentialité
            </p>
            <p>CGU & Mentions légales</p>
          </div>
          <div className="footer_links_socialNetwork">
            <SocialNetwork />
          </div>
        </div>
      </footer>
    </>
  );
}
