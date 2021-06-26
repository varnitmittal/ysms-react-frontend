import React from 'react';
import StudTech from '../../../assets/svg/StudTech.svg';
import School from '../../../assets/svg/School.svg';
import Teacher from '../../../assets/svg/Teacher.svg';
import icon9 from '../../../assets/svg/Icon9.svg';
import icon10 from '../../../assets/svg/Icon10.svg';
import icon11 from '../../../assets/svg/Icon11.svg';
import icon12 from '../../../assets/svg/Icon12.svg';
import icon1 from '../../../assets/svg/Icon1.svg';
import icon2 from '../../../assets/svg/Icon2.svg';
import icon3 from '../../../assets/svg/Icon3.svg';
import icon4 from '../../../assets/svg/Icon4.svg';
import icon5 from '../../../assets/svg/Icon5.svg';
import icon6 from '../../../assets/svg/Icon6.svg';
import icon7 from '../../../assets/svg/Icon7.svg';
import icon8 from '../../../assets/svg/Icon8.svg';
import { makeStyles } from '@material-ui/core';
import { Style } from './Styles';

function OneStystem(props) {
  const classes = makeStyles(Style())();

  const school = [
    {
      icon: icon9,
      title: 'Easy Communication',
      description:
        'Enable teacher-student interaction through chat without sharing contacts'
    },
    {
      icon: icon10,
      title: 'Instant Notification',
      description: 'Get that notice float everywhere'
    },
    {
      icon: icon11,
      title: 'Easy Fees Management',
      description:
        'Send reminders, get fees online and check class-wise deposits'
    },
    {
      icon: icon12,
      title: 'No Book Keeping',
      description: 'Hassle-free data entry, reports and analysis'
    }
  ];

  const studentParents = [
    {
      icon: icon1,
      title: 'Get Reminders',
      description: 'Homework, Notices, and more'
    },
    {
      icon: icon2,
      title: 'Know Schedules',
      description: 'Timetables, Examination and more'
    },
    {
      icon: icon3,
      title: 'Check Status',
      description: 'Attendance, Result, Homeworks.'
    },
    {
      icon: icon4,
      title: 'Pay Fees',
      description: 'Pay fees on time & no missing of due date'
    }
  ];

  const teachers = [
    {
      icon: icon5,
      title: 'Detailed Analysis Report',
      description: 'Get History of each Student'
    },
    {
      icon: icon6,
      title: 'Track Easily',
      description: 'Student report anytime, anywhere on tap of a finger'
    },
    {
      icon: icon7,
      title: 'Manage Tasks',
      description: 'Notices, Exams, Results and more'
    },
    {
      icon: icon8,
      title: 'Avoid Mistakes',
      description: 'Auto calculation of Report Cards, Attendance, and more'
    }
  ];
  return (
    <section className={`mx-14`} id='about'>
      <div className={`w-full flex flex-col items-center justify-center mb-24`}>
        <div className={`flex flex-col items-center justify-center`}>
          <div
            className={`${classes.text1} text-center font-extrabold text-4xl`}
          >
            One System, One Dashboard
          </div>
          <div
            className={`${classes.text2} text-center max-w-2xl font-normal text-lg leading-8 mt-5`}
          >
            Yogshem has only system which seamlessly connects students, parents,
            teachers and schools. You can access everything on any device,
            across any system.
          </div>
        </div>
        <div className={`grid grid-cols-3 w-full mt-10`}>
          <div className={`w-full flex flex-column items-start justify-center`}>
            <div className={`flex flex-column items-center justify-center`}>
              <div className={`relative`}>
                <img
                  src={StudTech}
                  alt=''
                  className={`${classes.teacherImage}`}
                />
                <div
                  className={`${classes.text6} absolute bottom-0 right-0 font-bold mb-4 mr-4`}
                >
                  Student/Parents
                </div>
              </div>
              <div className={`${classes.descriptionDiv}`}>
                {studentParents.map((sp, idx) => {
                  return (
                    <div className={`${classes.descriptioninnerDiv}`} key={idx}>
                      <img
                        src={sp.icon}
                        alt=''
                        className={`inline-block  ${classes.descriptionIcon}`}
                      />
                      <div className={`${classes.descriptionText}`}>
                        <div className={`${classes.title} font-bold`}>
                          {sp.title}
                        </div>
                        <div className={`${classes.description}`}>
                          {sp.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={`w-full flex flex-col items-start justify-center`}>
            <div className={`flex flex-column items-center justify-center`}>
              <div className={`relative`}>
                <img
                  src={Teacher}
                  alt=''
                  className={`${classes.teacherImage}`}
                />
                <div
                  className={`${classes.text6} absolute bottom-0 right-0 font-bold mb-4 mr-4`}
                >
                  Teacher
                </div>
              </div>
              <div className={`${classes.descriptionDiv} `}>
                {teachers.map((sp, idx) => {
                  return (
                    <div className={`${classes.descriptioninnerDiv}`} key={idx}>
                      <img
                        src={sp.icon}
                        alt=''
                        className={`inline-block  ${classes.descriptionIcon}`}
                      />
                      <div className={`${classes.descriptionText}`}>
                        <div className={`${classes.title} font-bold`}>
                          {sp.title}
                        </div>
                        <div className={`${classes.description}`}>
                          {sp.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={`w-full flex flex-column items-end justify-center`}>
            <div className={`flex flex-column items-center justify-center`}>
              <div className={`relative`}>
                <img
                  src={School}
                  alt=''
                  className={`${classes.teacherImage}`}
                />
                <div
                  className={`${classes.text6} absolute bottom-0 right-0 font-bold mb-4 mr-4`}
                >
                  School
                </div>
              </div>
              <div className={`${classes.descriptionDiv} `}>
                {school.map((sp, idx) => {
                  return (
                    <div className={`${classes.descriptioninnerDiv}`} key={idx}>
                      <img
                        src={sp.icon}
                        alt=''
                        className={`inline-block ${classes.descriptionIcon}`}
                      />
                      <div className={`${classes.descriptionText}`}>
                        <div className={`${classes.title} font-bold`}>
                          {sp.title}
                        </div>
                        <div className={`${classes.description}`}>
                          {sp.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OneStystem;
