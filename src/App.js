import "./App.scss";
import Home from "./components/Home";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Library from "./components/Library";

function App(props) {
  const [currentPage, setCurrentPage] = useState(null);

  return (
    <>
      <div className="App">
        <Menu currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="page-container">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
