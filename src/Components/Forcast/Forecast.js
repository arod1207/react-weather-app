import React from 'react';

import './Forecast.css';

function Forcast({ date, text, icon, rain, maxTemp, minTemp }) {
    console.log('💛', date);
    return (
        <div className="forecast">
            <h1>{date}</h1>
            <h2>{text}</h2>
            {rain}
            {maxTemp}
            {minTemp}
            <img src={icon} alt="" />
        </div>
    );
}

export default Forcast;
