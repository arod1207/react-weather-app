import React from 'react';

import moment from 'moment';

import './Forecast.css';

function Forcast({ date, text, icon, rain, maxTemp, minTemp }) {
    console.log('💛', date);

    return (
        <div className="forecast">
            <div className="forecast__box">
                <div className="forecast__date">
                    <h2>{moment(date).format('MMMM Do')}</h2>
                </div>
                <div className="forecast__icon">
                    <img src={icon} alt="" />
                </div>
                <div className="forecast__text forecast__options">
                    <h2>{text}</h2>
                </div>
                <div className="forecast_temp forecast__options">
                    <h3>
                        Low {minTemp.toFixed()} High {maxTemp.toFixed()}
                    </h3>
                </div>
                <div className="forecast__rain forecast__options">
                    <h3>Chance of rain {rain}%</h3>
                </div>
            </div>
        </div>
    );
}

export default Forcast;
