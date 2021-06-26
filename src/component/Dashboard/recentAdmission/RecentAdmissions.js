import React from 'react';
import customer from '../../../assets/img/customer.svg';
import { makeStyles } from '@material-ui/core';
import { Style } from './Styles';

const RecentAdmissions = (props) => {
  const classes = makeStyles(Style())();

  return (
    <div className={`align-items-center d-flex mb-30`}>
      <img src={customer} className={`${classes.img} mr-15`} alt='customer' />
      <div className={`d-flex flex-column`}>
        <span className={`${classes.name} font-weight-bold`}>{props.name}</span>
        <span className={`${classes.admissionClass}`}>
          {props.admissionClass}
        </span>
      </div>
    </div>
  );
};

export default RecentAdmissions;
