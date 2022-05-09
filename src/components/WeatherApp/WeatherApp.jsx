import React, { useState } from 'react';
import './WeatherApp.css';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';
import Clock from '../Clock/Clock';
import {
   capitalLetter,
   celsiusToFahrenheit,
   fahrenheitToCelsius,
   weather,
} from '../../utils';

function WeatherApp({ data, isDayOrNight }) {
   const [showInfo, setShowInfo] = useState(false);
   const [temperature, setTemperature] = useState({
      temp: data.main.temp,
      isCelsius: true,
   });

   const handleShowInfo = () => setShowInfo(!showInfo);
   const handleTemperatureConvertion = () => {
      if (temperature.isCelsius)
         setTemperature({
            temp: celsiusToFahrenheit({ celsius: temperature.temp }),
            isCelsius: !temperature.isCelsius,
         });
      if (!temperature.isCelsius)
         setTemperature({
            temp: fahrenheitToCelsius({ fahrenheit: temperature.temp }),
            isCelsius: !temperature.isCelsius,
         });
   };
   const handleRefresh = () => window.location.reload();

   return (
      <div className='weather-app'>
         <CardContainer
            className={`temperature-card ${showInfo ? 'open' : ''}`}
         >
            <div
               className='temperature-card-over'
               style={{
                  backgroundImage: `url('${
                     weather.userWeather[data.weather[0].icon].background
                  }')`,
                  color: isDayOrNight === 'day' ? '#000' : '#fff',
               }}
            >
               <Button
                  className='btn btn-round btn-location'
                  handleClick={handleRefresh}
                  /* content={<i className='fa-solid fa-arrows-rotate'></i>} */
                  content={
                     <i
                        id='location-icon'
                        className='fa-solid fa-location-dot'
                     ></i>
                  }
               />
               <Button
                  className={`btn btn-round btn-info ${
                     showInfo ? 'btn-info-open' : ''
                  }`}
                  handleClick={handleShowInfo}
                  content={<i className='fa-solid fa-angles-down'></i>}
               />
               <Button
                  className='btn btn-convertion'
                  handleClick={handleTemperatureConvertion}
                  content={temperature.isCelsius ? '°C To °F' : '°F To °C'}
               />
               {/* <Clock timezone={data.timezone} /> */}
               <h1 className='location'>
                  <span className='location-icon'>
                     <i className='fa-solid fa-location-dot'></i>
                  </span>
                  {data.name},
                  <span className='country'>{data.sys.country}</span>
               </h1>
               <div className='current-weather'>
                  <div className='temp-weather'>
                     <p className='weather-description'>
                        {capitalLetter({ text: data.weather[0].description })}
                     </p>
                     <p className='current-temperature'>
                        {temperature.temp} {temperature.isCelsius ? '°C' : '°F'}
                     </p>
                  </div>
                  <figure className='weather-icon'>
                     <img
                        src={weather.userWeather[data.weather[0].icon].icon}
                        alt={`icon ${data.weather[0].icon}`}
                     />
                  </figure>
               </div>
            </div>
         </CardContainer>
         <CardContainer
            className={`temperature-info-card ${showInfo ? 'open' : ''}`}
         >
            <div className='weather-info'>
               <div className='wind'>
                  <i className='fa-solid fa-wind weather-info-icon'></i>
                  {data.wind.speed} m/s
               </div>
               <div className='cloud'>
                  <i className='fa-solid fa-cloud weather-info-icon'></i>
                  {data.clouds.all} %
               </div>
               <div className='pressure'>
                  <i className='fa-solid fa-temperature-half weather-info-icon'></i>
                  {data.main.pressure} mb
               </div>
               <div className='humidity'>
                  <i className='fa-solid fa-droplet weather-info-icon'></i>
                  {data.main.humidity} %
               </div>
            </div>
         </CardContainer>
      </div>
   );
}

export default WeatherApp;
