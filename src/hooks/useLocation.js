import { useEffect, useState } from 'react';

function useLocation() {
   const [location, setLocation] = useState({});
   const [isGettingLocation, setIsGettingLocation] = useState(false);
   const [error, setError] = useState(false);

   useEffect(() => {
      if (!navigator.geolocation) {
         setError(true);
      } else {
         setIsGettingLocation(true);

         const onSuccess = (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
            setIsGettingLocation(false);
         };
         const onError = () => {
            setError(true);
            setIsGettingLocation(false);
         };

         navigator.geolocation.getCurrentPosition(onSuccess, onError);
      }
   }, []);

   return { location, isGettingLocation, error };
}

export default useLocation;
