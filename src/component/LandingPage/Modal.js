import React, { useState, useCallback, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import ForgetModal from './ForgetPass';

import '../../assets/css/output.css';
import LogoYogshem from '../../assets/svg/LogoYogshem.svg';
import { loginUser } from '../../store/actions/LoginActions';
import { useDispatch } from 'react-redux';
import { CircularProgress, Dialog } from '@material-ui/core';
import { validateEmail } from '../../Utils';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

function LoginModal({
  isOpen,
  onClose,
  history,
  credentialsModal,
  setCredentialsModal
}) {
  const [isOpenForgetModal, setIsOpenForgetModal] = useState(false);

  const openForgetModal = useCallback((e) => {
    e && e.preventDefault();
    setIsOpenForgetModal(true);
    setCredentialsModal(false);
  }, []);

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, [isOpen]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    if (formValidate()) {
      setError(null);
      setLoading(true);
      let body = { email, password };
      const res = await dispatch(loginUser(body, setError));
      if (res) {
        setLoading(false);
        onClose();
        const fallback = sessionStorage.fallback;
        history.push(fallback ? fallback : '/');
      } else {
        setLoading(false);
      }
    }
  };

  const formValidate = () => {
    if (!email || !validateEmail(email)) {
      alert('Enter valid email');
      return false;
    }
    if (!password) {
      alert('Enter password');
      return false;
    }
    return true;
  };

  const handleClose = () => {
    setCredentialsModal(true);
  };

  return (
    <>
      <ForgetModal
        isOpen={isOpenForgetModal}
        onClose={() => setIsOpenForgetModal(false)}
      />
      <Dialog open={credentialsModal && isOpen} onClose={onClose}>
        <div className='inset-0'>
          <div className='bg-[rgba(51,51,51,0.95)] text-white h-full flex justify-center items-center'>
            <div className='bg-white flex flex-col p-12'>
              <div className=''>
                <img
                  src={LogoYogshem}
                  alt=''
                  className='inline-block h-[45px] w-[235px] text-[#0b5ed4] fill-current'
                />
              </div>
              <div className='capitalize font-bold text-lg text-[rgba(51,51,51,1)] mt-12'>
                sign in to yogshem
              </div>
              <div className='mt-8'>
                <label
                  htmlFor='email'
                  className='capitalize font-semibold text-base text-[rgba(51,51,51,1)]'
                >
                  Email Address
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter Email Address'
                  // onChange={(e) => setEmail(e.target.value)}
                  className='text-black mt-3'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ color: 'rgba(51, 51, 51, 1)' }}
                />
              </div>
              <div
                className='mt-8'
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <label
                  htmlFor='email'
                  className='capitalize font-semibold text-base text-[rgba(51,51,51,1)]'
                >
                  Password
                </label>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <input
                    type={values.showPassword ? 'text' : 'password'}
                    name='password'
                    id='password'
                    placeholder='enter password'
                    // onChange={(e) => setPassword(e.target.value)}
                    className='capitalize text-black mt-3'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      borderRadius: '10px',
                      height: '5.2vh',
                      marginTop: '1.5vh',
                      position: 'relative',
                      width: '28vw'
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: '1.5vh',
                      marginLeft: '45vh',
                      position: 'absolute',
                      height: '4vh'
                    }}
                  >
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </div>
                </div>
              </div>

              <div className='flex justify-between items-center w-full mt-5'>
                <button
                  className='font-normal text-sm text-[#666666]'
                  onClick={openForgetModal}
                  style={{ outline: 'none' }}
                >
                  forgot password
                </button>
                {/* <div className="font-normal text-sm text-[#666666]">
                reset now
              </div> */}
              </div>
              <div className='mt-4'>
                <br />
                {error && <p className='capitalize text-black mt-3'>{error}</p>}
              </div>
              <button
                className='mt-10 bg-[#3158C4] text-white text-lg font-extrabold py-3 px-48 capitalize text-center rounded-full'
                value={loading ? 'Loading...' : 'LoginModal'}
                disabled={loading}
                onClick={handleLogin}
              >
                {loading ? <CircularProgress color='#fff' /> : 'sign in'}
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default withRouter(LoginModal);
