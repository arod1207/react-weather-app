import React from 'react';
import moment from 'moment';

import './Weather.css';

function Weather({
    city,
    temp,
    feelsLike,
    wind,
    text,
    icon,
    region,
    updatedAt,
}) {
    return (
        <div className="weather">
            <div className="weather__city option">
                <h3>
                    {city} {region}
                </h3>
            </div>
            <div className="weather__temp option">
                Currently: °{temp.toFixed()}
            </div>
            <div className="weather__feelsLike option">
                Feels Like: °{feelsLike.toFixed()}
            </div>
            <div className="weather__wind option">Wind: {wind} mph</div>
            <div className="weather__weather option">{text}</div>
            <div className="weather__image option">
                <img src={icon} alt="" />
            </div>
            <div className="weather__updatedAt">
                Last Updated{' '}
                {moment(updatedAt).format('MMMM Do YYYY, h:mm:ss a')}
            </div>
        </div>
    );
}

export default Weather;
