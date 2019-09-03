import React from 'react';

import './selectDateTime.css';
import { CalendarComponent } from './Calendar';

export const SelectDateTime = ({chosenPackage}) => {
  // const [startDate, setStartDate] = React.useState(
  //   setHours(setMinutes(new Date(), 30), 16)
  // );

  return (
    <div>
      <div>
        <h3 className="selectDateTimeTitle">Расписание</h3>
      </div>
      <CalendarComponent />
    </div>
  );
};