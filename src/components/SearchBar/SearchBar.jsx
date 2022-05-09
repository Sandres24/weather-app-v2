import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ className, handleSubmit }) {
   const [city, setCity] = useState('');

   const onChange = (e) => setCity(e.target.value);

   return (
      <div className={`search-bar ${className}`}>
         <form
            onSubmit={(e) => {
               e.preventDefault();
               handleSubmit(city);
            }}
         >
            <input
               type='text'
               placeholder='Type the city name...'
               autoComplete='off'
               value={city}
               onChange={onChange}
            />
            <button type='submit' className='btn-search-city'>
               <i className='fa-solid fa-magnifying-glass'></i>
            </button>
         </form>
      </div>
   );
}

export default SearchBar;
