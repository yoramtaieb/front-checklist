import React, { useReducer, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/darkmode/globalStyles";
import { lightTheme, darkTheme } from "./components/darkmode/Theme";
import { useDarkMode } from "./components/darkmode/useDarkMode";

import Header from "./components/organisms/Header/Header";
import Routes from "./components/Routes";
import Footer from "./components/organisms/Footer/Footer";

import AuthContext from "./contexts/auth/Auth";
import AuthReducer from "./contexts/auth/AuthReducer";
import ListsContext from "./contexts/lists/Lists";

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

  const [lists, setLists] = useState([]);
  const listsValue = {
    lists,
    setLists,
  };

  const [theme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <Router>
      <AuthContext.Provider value={authValue}>
        <ListsContext.Provider value={listsValue}>
          <ThemeProvider theme={themeMode}>
            <>
              <GlobalStyles />
              <Header />
              <Routes />
              <Footer />
            </>
          </ThemeProvider>
        </ListsContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
