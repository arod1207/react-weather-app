import React, { useState } from 'react';
import { Howl, Howler } from 'howler';

import axios from 'axios';

import Weather from '../Weather/Weather';

import Sound from '../Audio/Sound.mp4';

import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import './Search.css';

function Search() {
    const [city, setCity] = useState('');
    const [data, setData] = useState([]);

    const sound = new Howl({
        src: [Sound],
    });

    const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    const handleSearch = (e) => {
        e.preventDefault();

        sound.play();

        Howler.volume(0.5);

        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${WEATHER_API_KEY}`
            )
            .then((res) => {
                console.log('🔥', res.data);
                setData({
                    city: res.data.name,
                    temp: res.data.main.temp,
                    feels_like: res.data.main.feels_like,
                    wind: res.data.wind.speed,
                    weather: res.data.weather[0].main,
                    description: res.data.weather[0].description,
                    icon: res.data.weather[0].icon,
                });
                setCity('');
            });
    };

    return (
        <div className="search">
            <div className="search__searchbar">
                <form>
                    <TextField
                        variant="outlined"
                        type="text"
                        placeholder="Enter City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <div className="search__button">
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                            onClick={handleSearch}
                        >
                            Search
                        </Button>
                    </div>
                </form>
            </div>
            {!data.city ? null : (
                <Weather
                    city={data.city}
                    temp={data.temp}
                    feels_like={data.feels_like}
                    wind={data.wind}
                    weather={data.weather}
                    description={data.description}
                    icon={data.icon}
                />
            )}

            {data.temp < 60 ? <h1>It's fucking cold</h1> : null}
        </div>
    );
}

export default Search;
