import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import AllLists from "./AllLists/AllLists";

import "./Lists.scss";

export default function Lists() {
  const history = useHistory();

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user");

  const initialState = {
    userId,
    name: "",
  };

  const [inputs, setInputs] = useState(initialState);

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      const result = await axios({
        method: "post",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        url: "http://localhost:5000/forecast/list",
        data: inputs,
      });
      if (result.status === 201) {
        setInputs({
          ...inputs,
          isSubmitting: true,
          errorMessage: null,
        });
        history.push("/forecast/lists");
      }
    } catch (error) {
      setInputs({
        ...inputs,
        isSubmitting: false,
        errorMessage: error.response,
      });
    }
  };

  return (
    <>
      <div className="global">
        <form className="lists" onSubmit={handleFormSubmit}>
          <div className="lists_icon">
            <button
              disabled={inputs.isSubmitting}
              onClick={() => window.location.reload(false)}
            >
              +
            </button>
          </div>
          <div className="lists_paragraph">
            <input
              type="text"
              name="name"
              id="name"
              value={inputs.name}
              onChange={handleInputChange}
              placeholder="Ajouter une liste"
            />
          </div>
        </form>
        <div>
          <AllLists />
        </div>
      </div>
    </>
  );
}
