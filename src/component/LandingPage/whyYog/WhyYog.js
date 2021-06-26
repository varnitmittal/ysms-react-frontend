import React from 'react';
import IphoneMockup from '../../../assets/svg/IphoneMockup.svg';
import User from '../../../assets/svg/User.svg';
import SubscriptionModel from '../../../assets/svg/SubscriptionModel.svg';
import PayPerUse from '../../../assets/svg/PayPerUse.svg';
import EasyToUse from '../../../assets/svg/EasyToUse.svg';
import { makeStyles } from '@material-ui/core';
import { Style } from './Styles';

function WhyYog(props) {
  const classes = makeStyles(Style())();

  const yogshemWhy = [
    {
      icon: User,
      title: 'Data security',
      description:
        'Connect & communicate without actually sharing your contact with anyone',
      color: '#ECFDF5'
    },
    {
      icon: SubscriptionModel,
      title: 'Subscription Model',
      description: 'Pay on monthly or cancel anytime!'
    },
    {
      icon: PayPerUse,
      title: 'Pay per use',
      description:
        'Only buy the software for the people who uses it. Flexible pricing model!',
      color: '#EFF6FF'
    },
    {
      icon: EasyToUse,
      title: 'Easy to use',
      description:
        'The software is designed keeping in mind students & teachers. Very easy to use.',
      color: '#F5F3FF'
    }
  ];
  return (
    <section className={`${classes.container} px-14 right-0`}>
      <div>
        <div className={`flex items-center justify-around`}>
          <div className={`w-full`}>
            <div className={`${classes.text1} text-4xl`}>Why Yogshem?</div>
            <div className={`${classes.map} grid grid-cols-2 mt-10 mr-14`}>
              {yogshemWhy.map((y, idx) => {
                return (
                  <div
                    className={`${classes.div1} flex items-center justify-start p-8`}
                    key={idx}
                    style={{ backgroundColor: y.color }}
                  >
                    <img src={y.icon} alt='' className={`${classes.icon}`} />
                    <div
                      className={`flex flex-col justify-center items-start ml-5`}
                    >
                      <div className={`${classes.title} text-lg font-bold`}>
                        {y.title}
                      </div>
                      <div className={`mt-2 ${classes.descriptionText}`}>
                        {y.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <img
              src={IphoneMockup}
              alt=''
              className={`${classes.iphoneMock}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyYog;
