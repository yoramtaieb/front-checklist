import React, { useReducer } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/organisms/Header/Header";
import Routes from "./components/Routes";
import Footer from "./components/organisms/Footer/Footer";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/darkmode/globalStyles";
import { lightTheme, darkTheme } from "./components/darkmode/Theme";
import { useDarkMode } from "./components/darkmode/useDarkMode";

import AuthContext from "./contexts/auth/Auth";
import AuthReducer from "./contexts/auth/AuthReducer";
// import UserContext from "./contexts/user/UserContext";

import "./App.scss";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

function App() {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const authValue = {
    state,
    dispatch,
  };

  // const [user, setUser] = useState([]);
  // const userValue = {
  //   user,
  //   setUser,
  // };

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const token = localStorage.getItem("token");

  //     if (token) {
  //       const result = await axios(`http://localhost:5000/leboncoin/user/me`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setUser(result.data);
  //       dispatch({
  //         type: "LOAD_USER",
  //         payload: result.data,
  //       });
  //     }
  //   };
  //   fetchUser();
  // }, []);

  const [theme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <Router>
      <AuthContext.Provider value={authValue}>
        <ThemeProvider theme={themeMode}>
          <>
            <GlobalStyles />
            <Header />
            <Routes />
            <Footer />
          </>
        </ThemeProvider>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
