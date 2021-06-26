import React from 'react';
import instagram from '../../../assets/svg/instagram.svg';
import facebook from '../../../assets/svg/facebook.svg';
import linkedin from '../../../assets/svg/linkedin.svg';
import twitter from '../../../assets/svg/twitter.svg';
import { makeStyles } from '@material-ui/core';
import { Style } from './Styles';

function Footer(props) {
  const classes = makeStyles(Style())();

  return (
    <section>
      <div className={`${classes.container} px-14`}>
        <div className={` ${classes.navFooter} grid grid-cols-3 text-white`}>
          <div className={`flex items-center justify-between h-full`}>
            <a className={`${classes.aboutText}`} href='#about'>
              About Yogshem
            </a>
            <a className={`${classes.text}`} href='#features_section'>
              Features
            </a>
            <a className={`${classes.text}`} href='#testimonials'>
              Testimonials
            </a>
            <a className={` ${classes.text}`} href='#pricing'>
              Pricing
            </a>
          </div>
          <a
            href='/'
            className={`${classes.mainTitle} flex items-center justify-center leading-10`}
          >
            Yogshem
          </a>
          <div className='flex items-center justify-end h-full'>
            <img
              src={facebook}
              alt=''
              className={`${classes.social} fill-current rounded-full object-contain`}
            />
            <img
              src={twitter}
              alt=''
              className={`${classes.social} fill-current rounded-full object-contain`}
            />
            <img
              src={linkedin}
              alt=''
              className={`${classes.social} fill-current rounded-full object-contain`}
            />
            <img
              src={instagram}
              alt=''
              className={`${classes.social} fill-current rounded-full object-contain`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
