import React from 'react';
import googlePlay from '../../../assets/svg/googlePlay.svg';
import appStore from '../../../assets/svg/appStore.svg';
import PhoneMockup from '../../../assets/svg/PhoneMockup.svg';
import { makeStyles } from '@material-ui/core';
import { Style } from './Styles';

function DownloadApp(props) {
  const classes = makeStyles(Style())();

  return (
    <section className={`${classes.section} px-14`}>
      <div>
        <div className='pt-20'>
          <div className='flex justify-between items-center'>
            <div className='flex'>
              <img src={PhoneMockup} alt='' className={`${classes.img}`} />
              <div>
                <div className={`${classes.downloadDiv} leading-[64px]`}>
                  Download the app now!
                </div>
                <div className={`${classes.downloadInfoDiv} leading-8`}>
                  Download the mobile app to get the seamless experience of
                  student and teacher management on the go
                </div>
              </div>
            </div>
            <div className={`${classes.appStore}`}>
              <div>
                <img
                  src={googlePlay}
                  alt=''
                  className={`${classes.googplePlayIcon}`}
                />
              </div>
              <div>
                <img
                  src={appStore}
                  alt=''
                  className={`${classes.appStoreIcon}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
