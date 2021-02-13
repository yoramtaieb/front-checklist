import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../../../contexts/auth/Auth";

export default function useSignup() {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  });

  const handleInputChange = async (event) => {
    event.persist();
    await setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const { dispatch } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const result = await axios.post(
        `http://localhost:5000/forecast/signup`,
        inputs
      );
      if (result.status === 201 || result.status === 400) {
        console.log("bien inscrit", result.status);
        setInputs({
          ...inputs,
          isSubmitting: true,
          errorMessage: null,
        });
        return dispatch({ type: "SIGNUP", payload: result });
      }
    } catch (error) {
      setInputs({
        ...inputs,
        isSubmitting: false,
        errorMessage: error.response,
      });
    }
  };

  console.log(inputs);

  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
}
