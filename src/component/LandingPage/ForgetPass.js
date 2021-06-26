import React, { useRef, useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import LogoYogshem from '../../assets/svg/LogoYogshem.svg';

function Modal({ children, open, onClose }) {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  const escFunction = useCallback((event) => {
    // eslint-disable-next-line
    if (event.keyCode === 27) {
      onClose && onClose();
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // eslint-disable-next-line
    document.addEventListener('keydown', escFunction, false);
    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // eslint-disable-next-line
    ref.current = document.querySelector('#overlay');
    if (!ref.current) {
      ref.current = document.createElement('div');
      ref.current.setAttribute('id', 'overlay');
      document.body.appendChild(ref.current);
    }
    setMounted(true);
    // eslint-disable-next-line
  }, []);

  return open && mounted ? createPortal(children, ref.current) : null;
}

export default function ForgetModal({ isOpen, onClose }) {
  const modalContentDiv = useRef();

  const onClickHandler = useCallback((e) => {
    // eslint-disable-next-line
    let isOutside = !modalContentDiv.current.contains(e.target);
    if (isOutside) {
      onClose && onClose();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className='absolute inset-0' onClick={onClickHandler}>
        <div className='bg-[rgba(51,51,51,0.95)] text-white h-full flex justify-center items-center'>
          <div
            className='bg-white rounded-2xl flex flex-col p-12'
            ref={modalContentDiv}
          >
            <div className=''>
              <img
                src={LogoYogshem}
                alt=''
                className='inline-block h-[45px] w-[235px] text-[#0b5ed4] fill-current'
              />
            </div>
            <div className='capitalize font-bold text-lg text-[rgba(51,51,51,1)] mt-12'>
              Reset your Password
            </div>
            <div className='mt-10'>
              <label
                htmlFor='email'
                className='capitalize font-semibold text-base text-[rgba(51,51,51,1)]'
              >
                Enter Email Id
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='enter email adddress'
                className='capitalize text-black mt-3'
              />
            </div>

            <button className='mt-14 bg-[#3158C4] text-white text-lg font-extrabold py-3 px-48 capitalize text-center rounded-full'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
