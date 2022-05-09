export const capitalLetter = ({ text }) => {
   if (!text) return;
   return text.charAt(0).toUpperCase() + text.substring(1);
};
