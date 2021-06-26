import { makeStyles } from '@material-ui/core';
import { Style } from './Styles';

const tile = (props) => {
  const classes = makeStyles(Style())();

  return (
    <div
      className={`br-20 mb-30 mr-0-xs d-flex justify-space-between align-items-center w-100per ${
        props.lastTile ? '' : 'mr-50'
      } p-20 tile ${props.tileClass}`}
    >
      <div className={`d-flex flex-column`}>
        <span className={`${classes.tileCount} d-flex font-weight-bold pb-10`}>
          {props.tileCount}
        </span>
        <span className={`fs-16`}>{props.tileText}</span>
      </div>
      <span
        className={`tile-button h-17 fs-14 align-items-center br-10 d-flex p-5`}
      >
        {props.tilePercentage}
      </span>
    </div>
  );
};

export default tile;
