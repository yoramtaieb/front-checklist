import React from "react";

import "./Signup.scss";

export default function Signup() {
  return (
    <>
      <div className="signup">
        <div className="signup_heading">
          <div className="signup_heading_title">
            <h2>INSCRIPTION</h2>
          </div>
          <div className="signup_heading_paragraph">
            <p>Inscrivez-vous pour pouvoir organiser vos tâches !</p>
          </div>
        </div>
        <div className="signup_container">
          <form action="#" className="signup_container_form">
            <div className="signup_container_form_input">
              <label htmlFor="#">NOM</label>
              <input type="text" name="#" id="#" placeholder="Entrez un nom" />
            </div>
            <div className="signup_container_form_input">
              <label htmlFor="#">PRÉNOM</label>
              <input
                type="text"
                name="#"
                id="#"
                placeholder="Entrez un prénom"
              />
            </div>
            <div className="signup_container_form_input">
              <label htmlFor="#">EMAIL</label>
              <input
                type="email"
                name="#"
                id="#"
                placeholder="Entrez un email"
              />
            </div>
            <div className="signup_container_form_input">
              <label htmlFor="#">MOT DE PASSE</label>
              <input
                type="password"
                name="#"
                id="#"
                placeholder="Entrez un mot de passe"
              />
            </div>
            <div className="signup_container_form_button">
              <button>S'INSCRIRE</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
