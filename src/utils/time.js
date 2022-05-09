export const getDateZone = ({ timezone }) => {
   if (!timezone) return;
   const date = new Date();
   return date.getTime() + date.getTimezoneOffset() * 60000 + timezone * 1000;
};
