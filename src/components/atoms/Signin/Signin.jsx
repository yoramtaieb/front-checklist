import React from "react";
import { NavLink } from "react-router-dom";

import "./Signin.scss";

export default function Signin() {
  return (
    <>
      <div className="signin">
        <div className="signin_heading">
          <div className="signin_heading_title">
            <h2>CONNEXION</h2>
          </div>
          <div className="signin_heading_paragraph">
            <p>Connectez-vous pour accéder à toutes vos checklists !</p>
          </div>
        </div>
        <div className="signin_container">
          <form action="#" className="signin_container_form">
            <div className="signin_container_form_input">
              <label htmlFor="#">EMAIL</label>
              <input
                type="email"
                name="#"
                id="#"
                placeholder="Entrez votre email"
              />
            </div>
            <div className="signin_container_form_input">
              <label htmlFor="#">MOT DE PASSE</label>
              <input
                type="password"
                name="#"
                id="#"
                placeholder="Entrez votre mot de passe"
              />
            </div>
            <div className="signin_container_form_button">
              <button>SE CONNECTER</button>
            </div>
          </form>
          <div className="signin_container_hr">
            <hr />
          </div>
          <div className="signin_container_signup">
            <div className="signin_container_signup_title">
              <h3>Toujours pas de compte ? Inscrivez-vous gratuitement !</h3>
            </div>
            <div className="signin_container_signup_button">
              <NavLink to="/forecast/signup">
                <button>S'INSCRIRE</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
