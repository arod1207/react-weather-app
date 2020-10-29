import React from 'react';

import './Weather.css';

function Weather({ city, temp, feels_like, wind, weather, description, icon }) {
    return (
        <div className="weather">
            <div className="weather__city">{city}</div>
            <div className="weather__city">Currently: °{temp}</div>
            <div className="weather__city">Feels Like °{feels_like}</div>
            <div className="weather__city">Wind {wind}mph</div>
            <div className="weather__city">{weather}</div>
            <div className="weather__city">{description}</div>
            <div className="weather__city">
                <img
                    src={`http://openweathermap.org/img/wn/${icon}.png`}
                    alt=""
                />
            </div>
        </div>
    );
}

export default Weather;
