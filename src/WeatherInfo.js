import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="headline">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row mt 3">
        <div className="col-6 current-weather">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="image"
          />
          <WeatherTemperature celsius={props.data.temperature} />
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
