import dayBackground from '../assets/images/day-background.jpg';
import nightBackground from '../assets/images/night-background.jpg';
import skyDayBackground from '../assets/images/sky-day.jpg';
import skyNightBackground from '../assets/images/sky-night.jpg';
import clearSkyDayIcon from '../assets/icons/01d.png';
import clearSkyNightIcon from '../assets/icons/01n.png';
import cloudsDayBackground from '../assets/images/clouds-day.jpg';
import cloudsNightBackground from '../assets/images/clouds-night.jpg';
import fewCloudsDayIcon from '../assets/icons/02d.png';
import fewCloudsNightIcon from '../assets/icons/02n.png';
import scatteredCloudsDayIcon from '../assets/icons/03d.png';
import scatteredCloudsNightIcon from '../assets/icons/03n.png';
import brokenCloudsDayIcon from '../assets/icons/04d.png';
import brokenCloudsNightIcon from '../assets/icons/04n.png';
import rainDayBackground from '../assets/images/rain-day.gif';
import rainNightBackground from '../assets/images/rain-night.gif';
import showerRainDayIcon from '../assets/icons/09d.png';
import showerRainNightIcon from '../assets/icons/09n.png';
import rainDayIcon from '../assets/icons/10d.png';
import rainNightIcon from '../assets/icons/10n.png';
import thunderstormDayBackground from '../assets/images/thunderstorm-day.jpg';
import thunderstormNightBackground from '../assets/images/thunderstorm-night.jpg';
import thunderstormDayIcon from '../assets/icons/11d.png';
import thunderstormNightIcon from '../assets/icons/11n.png';
import snowDayBackground from '../assets/images/snow-day.jpg';
import snowNightBackground from '../assets/images/snow-night.jpg';
import snowDayIcon from '../assets/icons/13d.png';
import snowNightIcon from '../assets/icons/13n.png';
import mistDayBackground from '../assets/images/mist-day.png';
import mistNightBackground from '../assets/images/mist-night.png';
import mistDayIcon from '../assets/icons/50d.png';
import mistNightIcon from '../assets/icons/50n.png';

export const dayOrNight = ({ code }) => {
   if (!code) return;
   if (/d/.test(code)) return 'day';
   if (/n/.test(code)) return 'night';
};

export const weather = {
   userTime: {
      day: dayBackground,
      night: nightBackground,
   },
   userWeather: {
      '01d': {
         background: skyDayBackground,
         icon: clearSkyDayIcon,
      },
      '01n': {
         background: skyNightBackground,
         icon: clearSkyNightIcon,
      },
      '02d': {
         background: cloudsDayBackground,
         icon: fewCloudsDayIcon,
      },
      '02n': {
         background: cloudsNightBackground,
         icon: fewCloudsNightIcon,
      },
      '03d': {
         background: cloudsDayBackground,
         icon: scatteredCloudsDayIcon,
      },
      '03n': {
         background: cloudsNightBackground,
         icon: scatteredCloudsNightIcon,
      },
      '04d': {
         background: cloudsDayBackground,
         icon: brokenCloudsDayIcon,
      },
      '04n': {
         background: cloudsNightBackground,
         icon: brokenCloudsNightIcon,
      },
      '09d': {
         background: rainDayBackground,
         icon: showerRainDayIcon,
      },
      '09n': {
         background: rainNightBackground,
         icon: showerRainNightIcon,
      },
      '10d': {
         background: rainDayBackground,
         icon: rainDayIcon,
      },
      '10n': {
         background: rainNightBackground,
         icon: rainNightIcon,
      },
      '11d': {
         background: thunderstormDayBackground,
         icon: thunderstormDayIcon,
      },
      '11n': {
         background: thunderstormNightBackground,
         icon: thunderstormNightIcon,
      },
      '13d': {
         background: snowDayBackground,
         icon: snowDayIcon,
      },
      '13n': {
         background: snowNightBackground,
         icon: snowNightIcon,
      },
      '50d': {
         background: mistDayBackground,
         icon: mistDayIcon,
      },
      '50n': {
         background: mistNightBackground,
         icon: mistNightIcon,
      },
   },
};
