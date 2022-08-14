import "./App.css";
import React from "react";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Copenhagen"/>
        <footer>
          <a
            href="https://github.com/cowoakvalley/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source coded
          </a>{" "}
          by cowoakvalley
        </footer>
      </div>
    </div>
  );
}
