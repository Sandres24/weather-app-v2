import React from 'react';
import './CardContainer.css';

function CardContainer({ children, className }) {
   return <div className={`card ${className}`}>{children}</div>;
}

export default CardContainer;
