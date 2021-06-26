import React, { useState } from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';
import LogoYogshem from '../../../assets/svg/LogoYogshem.svg';
import { useForm } from 'react-hook-form';
import { demoPost } from '../../../store/actions';
import { popMessage } from '../../../Utils';
import { Style } from './Styles';

function GetDemo(props) {
  const classes = makeStyles(Style())();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    if (!loading) {
      setLoading(true);
      const res = await demoPost(data);
      if (res.msg) {
        popMessage(res.msg, { type: 'info' });
        reset();
      }
      setLoading(false);
    }
  };

  return (
    <section className='mx-14'>
      <div>
        <div className='my-20'>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col justify around items-start'>
              <img
                src={LogoYogshem}
                alt=''
                className={`${classes.img} inline-block fill-current`}
              />
              <div className={` ${classes.text1} font-normal mt-8`}>
                Learn how Yogshem can revolutionize the way your deliver
                education, improve stakeholder collaboration & improve decision
                making
              </div>
              <div className={`flex justify-between mt-10`}>
                <div>
                  <div className={`${classes.text2}`}>50+</div>
                  <div className={`${classes.text3} font-medium mt-1`}>
                    Modules
                  </div>
                </div>
                <div className='ml-14'>
                  <div className={`${classes.text2}`}>350+</div>
                  <div className={`${classes.text3} font-medium mt-1`}>
                    Institutes
                  </div>
                </div>
                <div className='ml-14'>
                  <div className={`${classes.text2}`}>1M+</div>
                  <div className={`${classes.text3} font-medium mt-1`}>
                    Users
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col items-start justify-center'
              >
                <input
                  type='text'
                  className={`${classes.input} block font-medium text-base`}
                  placeholder='FullName'
                  name='full_name'
                  {...register('full_name', { required: true })}
                />
                <span className='error'>
                  {errors.full_name ? 'Required field' : ''}
                </span>
                <div className='flex mt-4'>
                  <div>
                    <input
                      type='text'
                      className={`${classes.input} block font-medium text-base`}
                      placeholder='Contact Number'
                      {...register('phone_number', {
                        required: true,
                        minLength: 10,
                        maxLength: 10
                      })}
                    />
                    <span className='error'>
                      {errors.phone_number ? 'Invalid phone number' : ''}
                    </span>
                  </div>
                  <div className='ml-3'>
                    <input
                      type='text'
                      className={`${classes.input} block font-medium text-base`}
                      placeholder='Your Email address'
                      {...register('email', {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                      })}
                    />
                    <span className='error'>
                      {errors.email ? 'Invalid email' : ''}
                    </span>
                  </div>
                </div>
                <input
                  type='text'
                  className={`${classes.input} block font-medium text-base mt-4`}
                  placeholder='School Name'
                  {...register('school_title', { required: true })}
                />
                <span className='error'>
                  {errors.school_title ? 'Required field' : ''}
                </span>
                <div className='flex mt-4'>
                  <div>
                    <input
                      type='text'
                      className={`${classes.input} block font-medium text-base`}
                      placeholder='No of Students'
                      {...register('total_student_count', { required: true })}
                    />
                    <span className='error'>
                      {errors.total_student_count ? 'Required field' : ''}
                    </span>
                  </div>
                  <div className='ml-3'>
                    <input
                      type='text'
                      className={`${classes.input} block font-medium text-base`}
                      placeholder='Area Pincode'
                      {...register('area_pincode', {
                        required: true,
                        minLength: 6,
                        maxLength: 6
                      })}
                    />
                    <span className='error'>
                      {errors.area_pincode ? 'Invalid pincode' : ''}
                    </span>
                  </div>
                </div>
                <div
                  className={`${classes.loader} rounded-lg flex items-center justify-center py-3 mt-6`}
                >
                  {loading ? (
                    <CircularProgress color='#fff' />
                  ) : (
                    <svg
                      className={`${classes.svg} fill-current inline-block h-4 ml-4 text-white`}
                      viewBox='0 0 11 16'
                    >
                      <path
                        d='M1.00027 13.9194V2.08062C1.00027 1.24212 1.97021 0.775946 2.62497 1.29976L10.0242 7.21913C10.5246 7.61946 10.5246 8.38054 10.0242 8.78087L2.62497 14.7002C1.97021 15.2241 1.00027 14.7579 1.00027 13.9194Z'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  )}
                  <button
                    disabled={loading}
                    type='submit'
                    className={`text-white text-base mx-4 font-medium`}
                  >
                    Get Product Demo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetDemo;
