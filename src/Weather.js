import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
  };
  return (
    <div className="Weather">
      <div className="container">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autocomplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Friday 20:32</li>
          <li></li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <div className="d-flex weather-temperature">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt="sunny"
                  className="float-left"
                />
                <div className="float-left">
                  <strong>15</strong>
                  <span className="units">
                    <a href="/">°C </a> |<a href="/">°F</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: 35%</li>
              <li>Wind: 2 m/s</li>
            </ul>
          </div>
        </div>
      </div>
      <p>
        <small>
          <a
            href="https://github.com/cowoakvalley/vanilla-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source coded
          </a>
          by cowoakvalley
        </small>
      </p>
    </div>
  );
}
