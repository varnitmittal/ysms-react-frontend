import React from 'react';
import notices2 from '../../../assets/img/notices2.svg';
import { makeStyles } from '@material-ui/core';
import { Style } from './Styles';

const Notices = (props) => {
  const classes = makeStyles(Style())();

  return (
    <div className={`items-center d-flex mb-30`}>
      <img src={notices2} className={`mr-15 h-21`} alt='notices' />
      <div className={`d-flex flex-column`}>
        <span className={`${classes.name} font-weight-bold`}>{props.name}</span>
        <span className={`${classes.time} pt-5`}>{props.time}</span>
      </div>
    </div>
  );
};

export default Notices;
