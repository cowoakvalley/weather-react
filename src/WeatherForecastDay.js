import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

    let iconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  return (
    <div className="WeatherForecastDay">
      <div className="day">{day()}</div>
      <div>
        <img
          src={iconUrl}
          alt="weather icon"
        />
      </div>
      <div className="temperature-forecast">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>{" "}
        |{" "}
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
