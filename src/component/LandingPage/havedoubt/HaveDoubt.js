import React from 'react';
import ring from '../../../assets/svg/ring.svg';
import { makeStyles } from '@material-ui/core';
import { Style } from './Styles';

function HaveDoubt(props) {
  const classes = makeStyles(Style())();

  return (
    <section className={`mx-14`}>
      <div>
        <div className={`flex justify-between my-12`}>
          <div>
            <div className={`${classes.text1} font-extrabold`}>
              Have any doubts?
            </div>
            <div className={`${classes.text2} font-normal mt-2`}>
              Don’t worry we will be happy to help :)
            </div>
          </div>

          <div className={`flex`}>
            <div
              className={`flex items-center justify-between ${classes.contact}`}
            >
              <img src={ring} alt='' className={`${classes.phoneIcon}`} />
              <div className={`flex flex-col items-center justify-center ml-7`}>
                <div
                  className={`${classes.phone1} text-[#FC5C67] text-2xl font-bold`}
                >
                  07737168283
                </div>
                <div className={`${classes.text3} font-medium text-lg`}>
                  For Schools and Staff
                </div>
              </div>
            </div>
            <div
              className={`flex items-center justify-between ml-20 ${classes.contact}`}
            >
              <img src={ring} alt='' className={`${classes.phoneIcon}`} />
              <div className={`flex flex-col items-center justify-center ml-7`}>
                <div
                  className={`${classes.phone1} text-[#FC5C67] text-2xl font-bold`}
                >
                  07737168284
                </div>
                <div className={`${classes.text4} font-medium text-lg`}>
                  For Students & Teachers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HaveDoubt;
