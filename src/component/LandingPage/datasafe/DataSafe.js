import React from 'react';
import VoiceCall from '../../../assets/svg/VoiceCall.svg';
import mobCircleCropped from '../../../assets/svg/mobCircleCropped.svg';
import GroupDis from '../../../assets/svg/GroupDis.svg';
import Chat from '../../../assets/svg/Chat.svg';
import User from '../../../assets/svg/User.svg';
import { Style } from './Styles';
import { makeStyles } from '@material-ui/core';

function DataSafe(props) {
  const classes = makeStyles(Style())();

  return (
    <section className={`${classes.section} px-14`}>
      <div
        className={`flex justify-between items-center mt-20 ${classes.mainDiv}`}
      >
        <div className='relative'>
          <img src={mobCircleCropped} alt='' className='-ml-5' />
          <div
            className={`${classes.chatDiv} absolute flex justify-center items-center `}
          >
            <img src={Chat} alt='' className={`${classes.chatIcon}`} />
            <div className={`${classes.chatOverPlatform} font-medium ml-4 `}>
              Chat Over Platform
            </div>
          </div>
          <div
            className={`${classes.voiceCallDiv} absolute flex justify-center items-center -right-40`}
          >
            <img src={VoiceCall} alt='' className={`${classes.chatIcon}`} />
            <div className={`${classes.voiceCall} ml-4 font-medium`}>
              Voice Call Anyone
            </div>
          </div>
          <div
            className={` ${classes.createGroupsDiv} absolute flex justify-center items-center `}
          >
            <img src={GroupDis} alt='' className={`${classes.chatIcon}`} />
            <div className={` ${classes.createGroup} ml-4 font-medium`}>
              Create Groups
            </div>
          </div>
        </div>
        <div
          className={`${classes.rightContainer} flex flex-column justify-center items-start`}
        >
          <div className={`${classes.yourImage}`}>
            <img src={User} alt='' />
          </div>
          <div className={`${classes.yourData} font-extrabold`}>
            Your data is safe!
          </div>
          <div className={`${classes.weCare} mt-2`}>
            We care about your security
          </div>
          <div className={` ${classes.chatInfo}mt-8`}>
            We have an integerated chat system which allows you to commnicate
            with anyone and everyone without even sharing the contact number
          </div>
        </div>
      </div>
    </section>
  );
}
export default DataSafe;
