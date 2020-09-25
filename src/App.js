import React from "react";
import Random from "./components/Random_V1.js";
import "./App.css";
import Tag from "./components/Tag_V1.js";
import Tag2 from "./components/Tag_V2.js";

function App() {
  return (
    <div className="app">
      <h1>Random GIF Application</h1>
      <div className="main-container">
        <Random />
        <Tag />
        <Tag2 />
      </div>
    </div>
  );
}

export default App;
