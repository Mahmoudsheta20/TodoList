import "./App.css";
import React, { useState } from "react";
import { List, NavBar } from "./components/index";

function App() {
  const [Theme, setTheme] = useState("Dark");

  return (
    <>
      <NavBar Theme={Theme} setTheme={setTheme} />
      <div className={`App ${Theme === "Dark" ? "Dark" : "Light"}`}>
        <List Theme={Theme} />
      </div>
    </>
  );
}

export default App;
