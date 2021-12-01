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
import { lightTheme, darkTheme, GlobalStyles } from "./themes";

function App(props) {
  const [currentPage, setCurrentPage] = useState(null);

  // Settings
  const [theme, setTheme] = useState("light");

  const [showReligiousVerse, setShowReligiousVerse] = useState(true);

  const newDate = new Date();
  let time = newDate.getHours();

  const greetingLogic = () => {
    if (time < 12) {
      return "Good Morning";
    } else if (time > 12 && time < 5) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  const [greeting, setGreeting] = useState(greetingLogic);

  return (
    <>
      <ThemeProvider theme={theme !== "dark" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className="App">
          <Menu currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <main className="page-container">
            <Header greeting={greeting} />

            <Routes>
              <Route
                path="/"
                element={<Home showReligiousVerse={showReligiousVerse} />}
              />
              <Route path="/library" element={<Library />} />
              <Route
                path="/account"
                element={
                  <Account
                    theme={theme}
                    setTheme={setTheme}
                    showReligiousVerse={showReligiousVerse}
                    setShowReligiousVerse={setShowReligiousVerse}
                  />
                }
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
