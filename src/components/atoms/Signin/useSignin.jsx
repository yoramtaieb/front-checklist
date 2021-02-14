import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import AuthContext from "../../../contexts/auth/Auth";

export default function useSigninForm() {
  let history = useHistory();

  const [connexion, setConnexion] = useState({
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  });

  const handleChange = async (event) => {
    const { name, value } = event.target;
    await setConnexion((connexion) => ({
      ...connexion,
      [name]: value,
    }));
  };

  const { dispatch } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const result = await axios.post(
        `http://localhost:5000/forecast/signin`,
        connexion
      );
      if (result.status === 200) {
        console.log("bien connecté", result.status);
        setConnexion({
          ...connexion,
          isSubmitting: true,
          errorMessage: null,
        });
        history.push("/forecast/lists");
        return dispatch({ type: "SIGNIN", payload: result });
      }
    } catch (error) {
      setConnexion({
        ...connexion,
        isSubmitting: false,
        errorMessage: error.response,
      });
    }
  };

  return {
    handleSubmit,
    handleChange,
    connexion,
  };
}
