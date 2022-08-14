import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="headline">
        <h1>{props.data.city}</h1>
      </div>
      <p className="text-capitalize">
        <FormattedDate date={props.data.date} />
        <br />
        {props.data.description}
      </p>
      <div className="row">
        <div className="col-6 current-weather">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="image"
          />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">
            <a href="/">°C</a> | <a href="/">°F</a>
          </span>
        </div>
        <div className="col-6">
          <ul className="weather-items">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
