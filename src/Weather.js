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
            <div>
              <input
                type="search"
                placeholder="Enter a city..."
                autocomplete="off"
              />
            </div>
            <div>
              <input type="submit" value="Search" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Friday 20:32</li>
          <li></li>
        </ul>
        <div>
          <div>
            <div>
              <div>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt="sunny"
                />
                <div>
                  <strong>15</strong>
                  <span>
                    <a href="/">°C </a> |<a href="/">°F</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul className="weatherItems">
              <li>Humidity: 35%</li>
              <li>Wind: 2 m/s</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
