import "./App.scss";
import "./global.scss";
import Home from "./components/Home";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Library from "./components/Library";
import Account from "./components/Account";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from './themes'

function App(props) {
  const [currentPage, setCurrentPage] = useState(null);

  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeProvider theme={theme !== "dark" ? lightTheme : darkTheme}>
        <GlobalStyles/>
        <div className="App">
          <Menu currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <main className="page-container">
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/library" element={<Library />} />
              <Route
                path="/account"
                element={<Account theme={theme} setTheme={setTheme} />}
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
