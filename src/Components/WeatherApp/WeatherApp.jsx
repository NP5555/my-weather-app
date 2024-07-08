import React, { useState } from 'react';
import './WeatherApp.css';
// import Practise from './Practise';
import search_icon from '../Assets/search.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';
import cloud_icon from '../Assets/cloud.png';
import sun_icon from '../Assets/sun.png';


const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);
    const api_key = "17a385a70d3eaf698cf00542b1e7df43";

    const search = async () => {
        const cityInput = document.querySelector('.cityInput').value;
        if (cityInput === "") {
            return;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=Metric&appid=${api_key}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    return (
<>
          
        <div className='container'>
              <div className='weather-image'>
                <img src={cloud_icon} height='140px' alt="" />
            </div>
           <span><h1 className='header'>Check Weather</h1></span> 
            <div className='top-bar'>
                <input type="text" className='cityInput' placeholder='Search' />
                <div className='search_icon' onClick={search}>
                    <img src={search_icon} alt="" />
                </div>
            </div>

          

            {weatherData && (
                <>
                     <div className='weather-image'>
                <img src={sun_icon} height='140px' alt="" />
            </div>
                    <div className="weather-temp bold">{weatherData.main.temp} °C</div>
                    <div className="weather-location">{weatherData.name}</div>
               
                    <div className="data-container">
                        <div className="element text">
                            <img src={humidity_icon} height={80} alt="" className="icon" />
                            <div className="data">
                                <div className="humidity-percent">{weatherData.main.humidity} %</div>
                                <div className="text">Humidity</div>
                            </div>
                        </div>

                        <div className="element">
                            <img src={wind_icon} height={80} alt="" className="icon" />
                            <div className="data">
                                <div className="wind-rate">{weatherData.wind.speed} km/h</div>
                                <div className="text">Wind Speed</div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
        </>
    );
}

export default WeatherApp;
