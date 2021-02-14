import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/darkmode/globalStyles";
import { lightTheme, darkTheme } from "./components/darkmode/Theme";
import { useDarkMode } from "./components/darkmode/useDarkMode";

import Header from "./components/organisms/Header/Header";
import Routes from "./components/Routes";
import Footer from "./components/organisms/Footer/Footer";

import "./App.scss";

function App() {
  const [theme] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <Header />
          <Routes />
          <Footer />
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
