import notification from '../../assets/img/notification.svg';
import customer from '../../assets/img/customer.svg';
import { RiArrowDownSLine } from 'react-icons/ri';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { Style } from './Styles';
import { useState } from 'react';
import { Avatar } from '@material-ui/core';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import LockIcon from '@material-ui/icons/Lock';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Header = (props) => {
  const classes = makeStyles(Style())();
  const [logout, setLogout] = useState(false);
  const styles = {
    largeIcon: {
      width: 60,
      height: 60
    }
  };

  function openMenu() {
    document
      .getElementById('yogsham-nav-panel')
      .classList.add('show-yogsham-nav-panel');
  }

  function logOut() {
    localStorage.removeItem('yogshemIdToken');
    localStorage.removeItem('yogshemAccessToken');
    localStorage.removeItem('yogshemRefreshToken');
    sessionStorage.removeItem('accessToken');
    window.location.href = '/';
  }

  return (
    <header className='justify-space-around-xs flex-wrap-sm bs-border-box d-flex w-100per bg-white pl-20 pr-20 justify-space-between align-items-center h-130'>
      <div className='hide-on-desktop'>
        <MenuIcon
          onClick={openMenu}
          display={{ xs: 'block', sm: 'none' }}
          className='hand-cursor yogshem-menu-icon'
        ></MenuIcon>
      </div>
      <div className='align-items-center d-flex header-section1'>
        {/* <button className='bs-border-box br-20 font-family-SF fs-18 lh-21 font-weight-bold font-style-normal border-blue w-177 h-50 header-button'>
          + New Student
        </button>
        <button className='bs-border-box br-20 font-family-SF fs-18 lh-21 font-weight-bold font-style-normal border-blue w-177 h-50 header-button ml-30'>
          + New Teacher
        </button> */}
      </div>
      <div className='align-items-center d-flex'>
        <div className='align-items-center d-flex'>
          <img src={notification} className='mr-20' alt='notification' />
          {logout ? (
            <div
              className='fs-18 d-flex  border-grey br-20 pl-20 pr-20'
              style={{
                height: '32vh',
                marginTop: '25vh',
                flexDirection: 'column',
                backgroundColor: 'white',
                zIndex: 1,
                width: '18vw'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: 10,
                  marginBottom: 10
                }}
              >
                <img
                  src={customer}
                  className='mr-8'
                  alt='customer'
                  style={{ height: '4vh', width: '2vw' }}
                />
                <div
                  style={{
                    height: '4vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  {'Hi, Siddharth Jain'}
                </div>
                <RiArrowDownSLine
                  style={{
                    color: 'black',
                    fontSize: 30,
                    cursor: 'pointer',
                    height: '4vh',
                    marginLeft: 7
                  }}
                  onClick={() => setLogout(false)}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: '1vh',
                  height: '4vh'
                }}
              >
                <Avatar
                  style={{
                    height: '3.8vh',
                    width: '1.9vw',
                    backgroundColor: 'black'
                  }}
                  alt='customer'
                />
                <div
                  style={{
                    height: '4vh',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignContent: 'center',
                    alignItems: 'center',
                    width: '15vw',
                    marginLeft: '1vw'
                  }}
                >
                  {'View Profile'}
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: '1vh',
                  height: '4vh'
                }}
              >
                <AccountBalanceWalletIcon
                  style={{ height: '4vh', width: '2vw' }}
                  alt='customer'
                />
                <div
                  style={{
                    height: '4vh',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignContent: 'center',
                    alignItems: 'center',
                    width: '15vw',
                    marginLeft: '1vw'
                  }}
                >
                  {'Transactions'}
                </div>
              </div>
              {/* <div
                style={{
                  border: '0.5px solid lightgray',
                  width: '15vw',
                }}
              ></div> */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: '1.5vh',
                  height: '4vh'
                }}
              >
                <LockIcon
                  style={{ height: '4vh', width: '2vw' }}
                  alt='customer'
                />
                <div
                  style={{
                    height: '4vh',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignContent: 'center',
                    alignItems: 'center',
                    width: '15vw',
                    marginLeft: '1vw'
                  }}
                >
                  {'Change Password'}
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: '1vh',
                  height: '4vh'
                }}
              >
                <div
                  style={{
                    height: '3.5vh',
                    width: '1.8vw',
                    backgroundColor: 'red',
                    border: '1px solid',
                    fontSize: 20,
                    display: 'flex',
                    justifyContent: 'center',
                    borderRadius: 20,
                    color: 'white',
                    alignItems: 'center',
                    alignContent: 'center',
                    border: '1px solid red'
                  }}
                  alt='customer'
                >
                  X
                </div>
                <div
                  style={{
                    height: '4vh',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignContent: 'center',
                    alignItems: 'center',
                    width: '10vw',
                    marginLeft: '1vw',
                    color: 'red'
                  }}
                >
                  {'Unsubscribe'}
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: '4vh'
                }}
                onClick={() => logOut()}
              >
                <ExitToAppIcon
                  style={{
                    height: '4vh',
                    width: '2vw',
                    transform: ' rotate(180deg)'
                  }}
                  alt='customer'
                />
                <div
                  style={{
                    height: '4vh',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignContent: 'center',
                    alignItems: 'center',
                    width: '15vw',
                    marginLeft: '1vw',
                    cursor: 'pointer'
                  }}
                >
                  {'Logout'}
                </div>
              </div>
            </div>
          ) : (
            <div
              className='fs-18 align-items-center d-flex  border-grey br-20 pt-10 pb-10 pl-20 pr-20'
              style={{
                width: '18vw'
              }}
            >
              <img src={customer} className='mr-8' alt='customer' />
              <p>{'Hi, Siddharth Jain'}</p>
              <RiArrowDownSLine
                style={{
                  color: 'black',
                  fontSize: 30,
                  cursor: 'pointer',
                  marginLeft: 10
                }}
                onClick={() => setLogout(true)}
              />
            </div>
          )}
        </div>
        <Link to='/newcustomer' className='d-flex align-items-center'>
          <button className='bs-border-box br-20 font-family-SF fs-18 lh-21 font-weight-bold hand-cursor font-style-normal border-blue w-177 h-50 header-button ml-30'>
            + New Customer
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
