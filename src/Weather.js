import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let [weatherData, setWeatherData] = useState({});
  
  
  const apiKey = "53289dc3449e15019adc28a0b3e155d4";
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.city}&appid=${apiKey}&units=metric`;

  return (
    <div className="Weather">
      <div>
        <form>
          <div className="searchform">
            <div className="search">
              <input
                type="search"
                placeholder="Enter a city..."
                autocomplete="off"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="submit">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-info"
              />
            </div>
          </div>
        </form>
        <div className="headline">
          <h1>{weatherData.city}</h1>
        </div>
        <p>
          Friday 20:32
          <br />
          Sunny
        </p>
        <div className="row">
          <div className="col-6 current-weather">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny"
              className="image"
            />
            <span className="temperature">15</span>
            <span className="unit">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>
          <div className="col-6">
            <ul className="weather-items">
              <li>Humidity: 35%</li>
              <li>Wind: 2 m/s</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
