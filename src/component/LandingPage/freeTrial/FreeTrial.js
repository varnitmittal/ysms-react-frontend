import React from 'react';
import phoneMac from '../../../assets/svg/phoneMac.svg';
import { makeStyles } from '@material-ui/core';
import { Style } from './Styles';

function FreeTrial(props) {
  const classes = makeStyles(Style())();

  return (
    <section className={` ${classes.container} flex justify-between`}>
      <div
        className={` ${classes.innerDiv} flex flex-col items-start justify-center pl-14`}
      >
        <div className={` ${classes.text1} text-4xl capitalize`}>
          seemless connection between every school member
        </div>
        <div className={` ${classes.text2} font-normal text-xl mt-10`}>
          Yogshem is a school management system helping you to save time by
          enabling transparency between every school member all from a single
          app.
        </div>
        <div className={` ${classes.text3} mt-10 flex`}>
          <button
            className={` ${classes.freeTrialButton} inline-block text-xl py-4 px-7 rounded-lg`}
          >
            Start free trial
          </button>
          <div
            className={` ${classes.svgDiv} ml-10 rounded-lg border-2 flex items-center justify-center`}
          >
            <svg
              className={` ${classes.svgBox} fill-current inline-block h-4 ml-4`}
              viewBox='0 0 11 16'
            >
              <path
                d='M1.00027 13.9194V2.08062C1.00027 1.24212 1.97021 0.775946 2.62497 1.29976L10.0242 7.21913C10.5246 7.61946 10.5246 8.38054 10.0242 8.78087L2.62497 14.7002C1.97021 15.2241 1.00027 14.7579 1.00027 13.9194Z'
                fill='#3158C4'
                stroke='#3158C4'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <button
              className={`${classes.buttonText} text-xl mx-4 font-semibold`}
            >
              Get Product Demo
            </button>
          </div>
        </div>
      </div>
      <div
        className={` ${classes.img} relative inline-block h-full overflow-hidden`}
      >
        <img
          src={phoneMac}
          alt=''
          className={`absolute left-0 top-0 bottom-0 inline-block h-full w-full ml-24`}
        />
      </div>
    </section>
  );
}

export default FreeTrial;
