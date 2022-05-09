import React from 'react';
import './Button.css';

function Button({ className, handleClick, content }) {
   return (
      <button className={className} onClick={handleClick}>
         {content}
      </button>
   );
}

export default Button;
