import fetchErrorIcon from '../assets/icons/error-fetch.png';
import locationErrorIcon from '../assets/icons/error-location.png';

export const getLocationError = () => ({
   className: 'location-error',
   message:
      'It seems like We had a problem getting your ubication, check the permissions in your browser...',
   icon: locationErrorIcon,
});

export const getWeatherError = ({ city }) => ({
   className: 'weather-error',
   message: `City not found with "${city}" name`,
   icon: fetchErrorIcon,
});
