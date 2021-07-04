import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10
  };

  return (
    <div className="Weather">
      <div className="weather-app">
        <form className="mb-3">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-controle"
                autoComplete="off"
              />
            </div>

            <div className="col-2">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
            <div className="col-4">
              <button type="button" className="btn btn-success">
                Current Location
              </button>
            </div>
          </div>
        </form>
        <div className="overview">
          <h1> {weatherData.city} </h1>
          <ul>
            <li> {weatherData.date} </li>
            <li> {weatherData.description} </li>
          </ul>
        </div>
        <div className="clearfix weather-temperature">
          <p>
            <span className="house" />

            <span className="cheese" />

            <span id="description" />

            <div>
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                id="icon"
                className="float-left"
              />

              <div className="float-left" id="temperature">
                <strong> {weatherData.temperature} </strong>
                <span className="units">
                  <a href="/" className="degrees active" id="celsius-link">
                    °C
                  </a>{" "}
                  |
                  <a href="/" className="degrees active" id="fahrenheit-link">
                    °F
                  </a>
                </span>
              </div>

              <span className="weather fi">Wind: {weatherData.wind} km/h</span>
              <br />
              <span className="weather fu">
                Humidity: {weatherData.humidity} %
              </span>
            </div>
          </p>
        </div>
        <div className="weather-forecast" id="forecast"></div>
        <a href="https://github.com/clarark/weather-app">
          Open-source code 
        </a>
        by Clara Redshaw
        </div>
    </div>
  );
}
