import React, { useCallback, useState } from 'react';
import LoginModal from '../Modal';
import LogoYogshem from '../../../assets/svg/LogoYogshem.svg';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import { Style } from './Styles';

function Header(props) {
  const classes = makeStyles(Style())();
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const { isAuth, user } = useSelector((state) => state.Auth);
  const [credentialsModal, setCredentialsModal] = useState(true);

  const openSignInModal = useCallback((e) => {
    e && e.preventDefault();
    setIsOpenLoginModal(true);
    setCredentialsModal(true);
  }, []);
  const HeaderNavLink = [
    {
      'about yogshem': '#about'
    },
    {
      features: '#features_section'
    },
    { testimonials: '#testimonials' },
    { pricing: '#pricing' }
  ];
  return (
    <nav className={`${classes.container}  flex justify-between items-center`}>
      <LoginModal
        isOpen={isOpenLoginModal}
        onClose={() => setIsOpenLoginModal(false)}
        credentialsModal={credentialsModal}
        setCredentialsModal={setCredentialsModal}
      />
      <div className={`ml-10`}>
        <img
          src={LogoYogshem}
          alt=''
          className={`${classes.img} inline-block fill-current`}
        />
      </div>
      <div className='flex justify-center items-center'>
        {HeaderNavLink.map((item) => (
          <a
            className={`${classes.a} capitalize cursor-pointer`}
            href={Object.values(item)}
          >
            {Object.keys(item)}
          </a>
        ))}
        {!isAuth && (
          <button className={`${classes.nonAuthButton} `}>
            Start Free Trial
          </button>
        )}
        {isAuth ? (
          <div className={`${classes.authButton}`}>{user && user.name[0]}</div>
        ) : (
          <button
            className={`${classes.signinButton}`}
            onClick={openSignInModal}
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
}
export default Header;
