import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      city: response.data.name,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      date: new Date(response.data.main.dt * 1000),
    });
  }

  if (weatherData.ready) {
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
          <p className="text-capitalize">
            <FormattedDate date={weatherData.date} />
            <br />
            {weatherData.description}
          </p>
          <div className="row">
            <div className="col-6 current-weather">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="image"
              />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
            <div className="col-6">
              <ul className="weather-items">
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)} m/s</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "9eff8db5734dedb606ffe59ac255af6c";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
