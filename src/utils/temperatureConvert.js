export const celsiusToFahrenheit = ({ celsius }) => {
   if (!celsius) return;
   return Number((celsius * (9 / 5) + 32).toFixed(2));
};

export const fahrenheitToCelsius = ({ fahrenheit }) => {
   if (!fahrenheit) return;
   return Number(((fahrenheit - 32) * (5 / 9)).toFixed(2));
};
