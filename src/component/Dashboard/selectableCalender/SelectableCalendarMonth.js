import React, { useState } from 'react';
import { CalendarMonth } from '@patternfly/react-core';
import { makeStyles } from '@material-ui/core';
import { Style } from './Styles';

let SelectableCalendarMonth = (props) => {
  const classes = makeStyles(Style())();

  const [date, setDate] = useState(new Date(2020, 10, 24));
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  return (
    <React.Fragment>
      <CalendarMonth
        className='custom-calendar'
        weekStart='6'
        date={date}
        onChange={setDate}
      />

      <div
        className={`br-20 d-flex justify-space-between align-items-center w-100per p-20 mb-30 tile tile3 calenderTile`}
      >
        <div className={`d-flex flex-column`}>
          <span className={`d-flex font-weight-bold fs-18 pb-10`}>
            Meeting with physics teacher
          </span>
          <span className={`fs-14`}>
            {date.getDate()} {months[date.getMonth()]}, {date.getFullYear()} |
            8:30PM
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SelectableCalendarMonth;
