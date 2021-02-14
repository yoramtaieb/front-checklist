import React from "react";

import useSignup from "./useSignup";

import "./Signup.scss";

export default function Signup() {
  const { inputs, handleInputChange, handleSubmit } = useSignup();

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
          <form
            noValidate
            onSubmit={handleSubmit}
            className="signup_container_form"
          >
            <div className="signup_container_form_input">
              <label htmlFor="firstName">PRÉNOM</label>
              <input
                type="text"
                name="firstName"
                onChange={handleInputChange}
                value={inputs.firstName}
                placeholder="Entrez un prénom"
              />
            </div>
            <div className="signup_container_form_input">
              <label htmlFor="lastName">NOM</label>
              <input
                type="text"
                name="lastName"
                onChange={handleInputChange}
                value={inputs.lastName}
                placeholder="Entrez un nom"
              />
            </div>
            <div className="signup_container_form_input">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                name="email"
                onChange={handleInputChange}
                value={inputs.email}
                placeholder="Entrez un email"
              />
            </div>
            <div className="signup_container_form_input">
              <label htmlFor="password">MOT DE PASSE</label>
              <input
                type="password"
                name="password"
                onChange={handleInputChange}
                value={inputs.password}
                placeholder="Entrez un mot de passe"
              />
            </div>
            {inputs.errorMessage && (
              <div className="error">
                <span className="message">
                  {inputs.errorMessage.data.errors[0].message}
                </span>
              </div>
            )}
            <div className="signup_container_form_button">
              <button type="submit">S'INSCRIRE</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
