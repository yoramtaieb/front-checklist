import React from "react";

import "./Lists.scss";

export default function Lists() {
  return (
    <>
      <form className="lists">
        <div className="lists_icon">
          <button>+</button>
        </div>
        <div className="lists_paragraph">
          <input type="text" name="#" id="#" placeholder="Ajouter une liste " />
        </div>
      </form>
    </>
  );
}
