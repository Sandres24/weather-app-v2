export const getUrl = ({ latitude, longitude, city, apiKey, units }) => {
   if (!latitude || !longitude) return null;
   if (city.trim())
      return `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${apiKey}&units=${units}`;
   if (latitude && longitude)
      return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
};
