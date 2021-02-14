import React from "react";
import { NavLink } from "react-router-dom";

import useSignin from "./useSignin";

import "./Signin.scss";

export default function Signin() {
  const { connexion, handleChange, handleSubmit } = useSignin();

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
          <form onSubmit={handleSubmit} className="signin_container_form">
            <div className="signin_container_form_input">
              <label htmlFor="#">EMAIL</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={connexion.email}
                placeholder="Entrez votre email"
              />
            </div>
            <div className="signin_container_form_input">
              <label htmlFor="#">MOT DE PASSE</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={connexion.password}
                placeholder="Entrez votre mot de passe"
              />
            </div>
            {connexion.errorMessage && (
              <div className="error">
                <span className="message">
                  {connexion.errorMessage.data.description}
                </span>
              </div>
            )}
            <div className="signin_container_form_button">
              <button disabled={connexion.isSubmitting} type="submit">
                SE CONNECTER
              </button>
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
