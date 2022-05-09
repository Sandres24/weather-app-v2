import React, { useState } from 'react';
import './App.css';
import { useFetch, useLocation } from './hooks';
import { ErrorMessage, SearchBar, Spinner, WeatherApp } from './components';
import {
   dayOrNight,
   getLocationError,
   getUrl,
   getWeatherError,
   weather,
} from './utils';
import config from './config';

function App() {
   const [city, setCity] = useState('');
   const { location, isGettingLocation, error: locationError } = useLocation();
   const url = getUrl({
      latitude: location.latitude,
      longitude: location.longitude,
      city,
      apiKey: config.apiKey,
      units: config.units,
   });
   const { data, isLoading, error: fetchingError } = useFetch(url);
   const isDayOrNight = data
      ? dayOrNight({ code: data.weather[0].icon })
      : null;

   const handleSearchCity = (searchCity) => setCity(searchCity);

   if (isGettingLocation || isLoading) return <Spinner />;

   if (locationError) return <ErrorMessage {...getLocationError()} />;

   return (
      <div
         className='App'
         style={{
            backgroundImage: `url(${weather.userTime[isDayOrNight]})`,
         }}
      >
         <SearchBar
            className='city-search-bar'
            handleSubmit={handleSearchCity}
         />
         {fetchingError && <ErrorMessage {...getWeatherError({ city })} />}
         {data && <WeatherApp data={data} isDayOrNight={isDayOrNight} />}
      </div>
   );
}

export default App;
