import React, { useState } from 'react';

import axios from 'axios';

import Weather from '../Weather/Weather';
import Forecast from '../Forcast/Forecast';

import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import './Search.css';

function Search() {
    const [city, setCity] = useState('');
    const [data, setData] = useState([]);
    const [forcast, setForcast] = useState([]);
    const [noData, setNoData] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();

        axios
            .get(
                `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}&days=7`
            )
            .then((res) => {
                console.log('🔥', res.data);

                setData({
                    city: res.data.location.name,
                    region: res.data.location.region,
                    cTemp: res.data.current.temp_f,
                    feelsLike: res.data.current.feelslike_f,
                    wind: res.data.current.wind_mph,
                    text: res.data.current.condition.text,
                    icon: res.data.current.condition.icon,
                    updatedAt: res.data.current.last_updated,
                });
                setForcast(res.data.forecast.forecastday);
            })
            .catch(() => {
                setNoData('City Not Found');
            });

        setCity('');
        setNoData('');
    };

    return (
        <div className="search">
            <div className="search__searchbar">
                <form>
                    <TextField
                        variant="outlined"
                        type="text"
                        placeholder="City..."
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <div className="search__button">
                        {!city ? (
                            <h2>Enter a City or Zip Code</h2>
                        ) : (
                            <Button
                                color="primary"
                                variant="contained"
                                type="submit"
                                onClick={handleSearch}
                            >
                                Search
                            </Button>
                        )}
                        <h1 style={{ color: 'red' }}>{noData}</h1>
                    </div>
                </form>
            </div>
            {!data.city ? (
                ''
            ) : (
                <Weather
                    city={data.city}
                    temp={data.cTemp}
                    feelsLike={data.feelsLike}
                    wind={data.wind}
                    text={data.text}
                    icon={data.icon}
                    updatedAt={data.updatedAt}
                    region={data.region}
                />
            )}
            <div className="forecast">
                {!forcast
                    ? null
                    : forcast.map((day) => (
                          <Forecast
                              key={day.date}
                              date={day.date}
                              text={day.day.condition.text}
                              icon={day.day.condition.icon}
                              rain={day.day.daily_chance_of_rain}
                              maxTemp={day.day.maxtemp_f}
                              minTemp={day.day.mintemp_f}
                          />
                      ))}
            </div>
        </div>
    );
}

export default Search;
