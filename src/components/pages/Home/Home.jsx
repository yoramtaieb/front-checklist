import React from "react";

import "./Home.scss";
import imgHome from "../../../img/img-home.svg";

export default function Item() {
  return (
    <>
      <div className="home">
        <div className="home_title">
          <h2>
            Avec Forecast, les équipes peuvent collaborer davantage et accomplir
            toujours plus de choses.
          </h2>
        </div>
        <div className="home_paragraph">
          <h3>
            Les tableaux, listes et cartes de Forecast permettent aux équipes
            d'organiser les projets et de définir leur ordre de priorité de
            façon amusante, souple et enrichissante.
          </h3>
        </div>
        <img src={imgHome} alt="img-home" />
      </div>
    </>
  );
}
