import axios from 'axios';
import { useEffect, useState } from 'react';

function useFetch(url) {
   const [data, setData] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(false);

   useEffect(() => {
      if (!url) return;

      setIsLoading(true);

      axios
         .get(url)
         .then((res) => {
            setData(res.data);
            setError(false);
         })
         .catch((error) => {
            console.error(error.message);
            setError(true);
            setData(null);
         })
         .finally(() => setIsLoading(false));
   }, [url]);

   return {
      data,
      isLoading,
      error,
   };
}

export default useFetch;
