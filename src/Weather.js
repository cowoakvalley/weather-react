import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
  };
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
          <h1>London</h1>
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
