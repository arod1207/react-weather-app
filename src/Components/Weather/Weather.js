import React from 'react';

import './Weather.css';

function Weather({ city, temp, feelsLike, wind, text, icon, updatedAt }) {
    return (
        <div className="weather">
            <div className="weather__city option">{city}</div>
            <div className="weather__temp option">Currently: °{temp}</div>
            <div className="weather__feelsLike option">
                Feels Like: °{feelsLike}
            </div>
            <div className="weather__wind option">Wind: {wind} mph</div>
            <div className="weather__weather option">{text}</div>
            <div className="weather__image option">
                <img src={icon} alt="" />
            </div>
            <div className="weather__updatedAt">{updatedAt}</div>
        </div>
    );
}

export default Weather;
