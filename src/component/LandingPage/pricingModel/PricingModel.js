import React, { useState } from 'react';
import Yearly from '../../../assets/svg/Yearly.svg';
import Monthly from '../../../assets/svg/Monthly.svg';
import { makeStyles } from '@material-ui/core';
import { Style } from './Styles';

function PricingModel(props) {
  const classes = makeStyles(Style())();

  const [pricingToggle, setPricingToggle] = useState(false);
  const handleToggle = () => {
    if (pricingToggle === false) {
      setPricingToggle(true);
    } else if (pricingToggle === true) {
      setPricingToggle(false);
    }
  };
  return (
    <section className={`mx-14`} id='pricing'>
      <div className={`my-24`}>
        <div className={`${classes.text1}`}>Pricing Model</div>
        <div className={`${classes.text2} grid grid-cols-3 `}>
          <div className='flex flex-col items-center justify-center'>
            <div className={`${classes.text3} font-normal mt-8`}>
              We have a very flexible payment model. School can choose either to
              pay for the students or the students can pay on their own through
              their app
            </div>
            <div className={`${classes.text4}`}>
              <button className={`${classes.text5} py-2 px-4 border mt-8`}>
                How It Works?
              </button>
            </div>
          </div>

          <div
            className={`flex flex-column justify-center items-center`}
            style={{ marginTop: '-20%' }}
          >
            <div className={`flex`} style={{ marginRight: '3%' }}>
              <div
                className={
                  pricingToggle
                    ? `${classes.schoolPays1} ml-5  text-lg`
                    : `${classes.schoolPays2} ml-5  text-lg font-bold`
                }
              >
                School pays
              </div>
              <label
                htmlFor='toggle'
                className={`flex items-center cursor-pointer ml-5`}
              >
                <div className='relative'>
                  <input
                    type='checkbox'
                    id='toggle'
                    className={`${classes.srOnly}`}
                    onClick={() => handleToggle()}
                  />
                  <div
                    className={`${classes.srOnly1} block rounded-full`}
                  ></div>
                  {pricingToggle ? (
                    <div
                      className={`${classes.srOnly0} absolute bg-white rounded-full transition`}
                    ></div>
                  ) : (
                    <div
                      className={`${classes.srOnly2} absolute bg-white rounded-full transition`}
                    ></div>
                  )}
                </div>
              </label>
              <div
                className={
                  pricingToggle
                    ? `${classes.studentPays1} ml-5 font-bold text-lg capitalize`
                    : `${classes.studentPays2} ml-5 text-lg capitalize`
                }
              >
                Student pays
              </div>
            </div>
            {pricingToggle ? (
              <div className={`${classes.model} text-xl mt-14`}>
                Recharge Model
              </div>
            ) : (
              <div className={`${classes.model} text-xl mt-14 `}>
                Subscription Model
              </div>
            )}
            {pricingToggle ? (
              <div className={`${classes.rechargeModelText} mt-3`}>
                <div className={`${classes.pricing} text- lg mt-3`}>
                  Price per year: INR 120.00
                </div>
                <div className={`${classes.pricing} text- lg mt-3`}>
                  Total Users: 1
                </div>
                <div className={`${classes.pricing} text- lg mt-3`}>
                  Amount to pay: INR 1200.00 (per year)
                </div>
              </div>
            ) : (
              <div className={`${classes.rechargeModelText} mt-3`}>
                <div className={`${classes.pricing} text- lg mt-3`}>
                  Price per user: INR 9.00
                </div>
                <div className={`${classes.pricing} text- lg mt-3`}>
                  Total Users: 100
                </div>
                <div className={`${classes.pricing} text- lg mt-3`}>
                  Price to pay: INR 900.00 (per month)
                </div>
              </div>
            )}
          </div>
          {pricingToggle ? (
            <img src={Yearly} alt='' className={`${classes.yearlyPricing}`} />
          ) : (
            <img src={Monthly} alt='' className={`${classes.monthlyPricing}`} />
          )}
        </div>
      </div>
    </section>
  );
}

export default PricingModel;
