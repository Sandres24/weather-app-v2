import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { getDateZone } from '../../utils';
import './Clock.css';

function Clock({ timezone }) {
   const [date, setDate] = useState(getDateZone({ timezone }));

   const auxDate = new Date(date);

   useEffect(() => {
      let timer = null;

      timer = setTimeout(() => {
         setDate((prevDate) => prevDate + 1000);
      }, 1000);

      return () => clearTimeout(timer);
   }, [date]);

   return (
      <div className='clock'>
         <h2 className='week-day'>{moment(auxDate).format('dddd')}</h2>
         <div className='timer'>
            <p className='hours-minutes'>{moment(auxDate).format('LTS')}</p>
         </div>
         <p className='date'>{moment(auxDate).format('ll')}</p>
      </div>
   );
}

export default Clock;
