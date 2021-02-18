import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import ListsContext from "../../../contexts/lists/Lists";

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

  const context = useContext(ListsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("http://localhost:5000/forecast/list/all");
        context.setLists(result.data);
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
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
      {context.lists.map((list) => (
        <div key={list.id} className="container_list">
          <p>{list.name}</p>
          <p>
            <svg
              id="Layer_1"
              enableBackground="new 0 0 512 512"
              height="25"
              viewBox="0 0 512 512"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  fill="#f7f7eb"
                  d="m424 64h-88v-16c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v16h-88c-22.091 0-40 17.909-40 40v32c0 8.837 7.163 16 16 16h384c8.837 0 16-7.163 16-16v-32c0-22.091-17.909-40-40-40zm-216-16c0-8.82 7.18-16 16-16h64c8.82 0 16 7.18 16 16v16h-96z"
                />
                <path
                  fill="#f7f7eb"
                  d="m78.364 184c-2.855 0-5.13 2.386-4.994 5.238l13.2 277.042c1.22 25.64 22.28 45.72 47.94 45.72h242.98c25.66 0 46.72-20.08 47.94-45.72l13.2-277.042c.136-2.852-2.139-5.238-4.994-5.238zm241.636 40c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16z"
                />
              </g>
            </svg>
          </p>
        </div>
      ))}
    </>
  );
}
