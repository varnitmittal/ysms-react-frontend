import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';

const tile = (props) => {
  const PrettoSlider = withStyles({
    root: {
      color: 'var(--purple)',
      height: 8
    },
    thumb: {
      height: 12,
      width: 12,
      backgroundColor: 'var(--white)',
      border: '2px solid currentColor',
      marginTop: -3,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit'
      }
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)'
    },
    track: {
      height: 8,
      borderRadius: 4
    },
    rail: {
      height: 8,
      borderRadius: 4
    }
  })(Slider);

  return (
    <div
      className={`br-20 mb-30 mr-0-xs d-flex justify-space-between align-items-center w-100per ${
        props.lastTile ? '' : 'mr-50'
      } p-20 tile ${props.tileClass}`}
    >
      {!props.lastTile && (
        <>
          <div className='d-flex flex-column'>
            <span className='d-flex font-weight-bold fs-30 pb-10'>
              {props.tileCount}{' '}
            </span>
            <span className='fs-16'>{props.tileText}</span>
          </div>
          {props.tilePercentage && (
            <span
              className={`${props.tileClass}-button h-17 fs-14 align-items-center br-10 d-flex p-5`}
            >
              {props.tilePercentage}
            </span>
          )}
        </>
      )}
      {props.lastTile && (
        <>
          <div className='d-flex flex-column w-100per'>
            <PrettoSlider
              valueLabelDisplay='auto'
              aria-label='pretto slider'
              value={props.tilePercentage}
            />
            <div className='d-flex justify-space-between'>
              <span className='fs-16'>{props.tileText}</span>
              <span className='fs-16'>{props.tileCount} </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default tile;
