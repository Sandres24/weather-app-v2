import React from 'react';
import './ErrorMessage.css';

function ErrorMessage({ className, message, icon }) {
   return (
      <div className={`error-message ${className}`}>
         <figure>
            <img src={icon} alt='error icon' />
         </figure>
         <p className='error-text'>{message}</p>
      </div>
   );
}

export default ErrorMessage;
