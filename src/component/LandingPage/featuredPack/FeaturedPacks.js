import React from 'react';
import timetable from '../../../assets/svg/timetable.svg';
import ReportCard from '../../../assets/svg/ReportCard.svg';
import Examination from '../../../assets/svg/Examination.svg';
import Homework from '../../../assets/svg/Homework.svg';
import Payroll from '../../../assets/svg/Payroll.svg';
import Attendance from '../../../assets/svg/Attendance.svg';
import Fees from '../../../assets/svg/Fees.svg';
import Notice from '../../../assets/svg/Notice.svg';
import Calender from '../../../assets/svg/Calender.svg';
import { makeStyles } from '@material-ui/core';
import { Style } from './Styles';

function FeaturedPacks(props) {
  const classes = makeStyles(Style())();

  const features = [
    {
      icon: timetable,
      title: 'Time table',
      description:
        'Check lesson plans, important files before going to the school, plan things accordingly'
    },
    {
      icon: ReportCard,
      title: 'Report Card',
      description:
        'See complete data of your performance, subject wise, class wise, leaderboard etc'
    },
    {
      icon: Examination,
      title: 'Examination',
      description:
        'View exam schedule, syllabus, result all in one place to avoid any hassle. Mark reminders'
    },
    {
      icon: Homework,
      title: 'Homework',
      description:
        'View, submit and see your homwork results. Check and compare your performance'
    },
    {
      icon: Attendance,
      title: 'Attendance',
      description:
        'View you daily, monthly attendance. Apply for leaves and manage them online'
    },
    {
      icon: Payroll,
      title: 'Payroll',
      description:
        'Get your salary slips, leave management and other HR activities done at one place'
    },
    {
      icon: Notice,
      title: 'Notices',
      description:
        'View notices or any other important event happening in the school. Mark reminders'
    },
    {
      icon: Fees,
      title: 'Fees',
      description:
        'Submit your fees online, get amazing discounts Manage your fee slips too'
    },
    {
      icon: Calender,
      title: 'Calender',
      description:
        'Plan your events using the inbuilt calender feature. Better time management'
    }
  ];
  return (
    <section className={`${classes.container}`} id='features_section'>
      <div
        className={`${classes.mainDiv} flex flex-column items-center justify-between`}
      >
        <div className='flex flex-column items-center justify-center'>
          <div
            className={`${classes.divStart} text-center text-4xl leading-[64px]`}
          >
            We are feature packed!
          </div>
          <div className={`grid grid-cols-3 gap-x-16`}>
            {features.map((f, idx) => {
              return (
                <div
                  className={`${classes.img} mt-20 flex flex-column`}
                  key={idx}
                >
                  <div className={`relative`}>
                    <img
                      src={f.icon}
                      alt=''
                      className={`h-full w-full object-cover`}
                    />
                  </div>
                  <div className={`${classes.cardTitle} text-lg mt-7`}>
                    {f.title}
                  </div>
                  <div className={`mt-4`}>{f.description}</div>
                </div>
              );
            })}
          </div>
          <div className={`${classes.ProductSvg}`}>
            <div
              className={`${classes.svg} rounded-lg flex items-center justify-center py-3 mt-20`}
            >
              <svg
                className={`${classes.svgButton} fill-current inline-block h-4 ml-4`}
                viewBox='0 0 11 16'
              >
                <path
                  d='M1.00027 13.9194V2.08062C1.00027 1.24212 1.97021 0.775946 2.62497 1.29976L10.0242 7.21913C10.5246 7.61946 10.5246 8.38054 10.0242 8.78087L2.62497 14.7002C1.97021 15.2241 1.00027 14.7579 1.00027 13.9194Z'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <button className={`${classes.getProductTitle} text-lg mx-4`}>
                Get Product Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedPacks;
