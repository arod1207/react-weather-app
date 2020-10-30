import React from 'react';

import './Weather.css';

function Weather({ city, temp, feels_like, wind, weather, description, icon }) {
    return (
        <div className="weather">
            <div className="weather__city option">{city}</div>
            <div className="weather__temp option">Currently: °{temp}</div>
            <div className="weather__feelsLike option">
                Feels Like: °{feels_like}
            </div>
            <div className="weather__wind option">Wind: {wind} mph</div>
            <div className="weather__weather option">{weather}</div>
            <div className="weather__desc option">{description}</div>
            <div className="weather__image option">
                <img
                    src={`http://openweathermap.org/img/wn/${icon}.png`}
                    alt=""
                />
            </div>
        </div>
    );
}

export default Weather;
