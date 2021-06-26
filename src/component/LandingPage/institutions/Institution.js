import React from 'react';
import GoogleLogo from '../../../assets/svg/GoogleLogo.svg';
import MicrosoftLogo from '../../../assets/svg/MicrosoftLogo.svg';
import WalmartLogo from '../../../assets/svg/WalmartLogo.svg';
import Picture from '../../../assets/svg/Picture.svg';
import Picture1 from '../../../assets/svg/Picture1.svg';
import Picture2 from '../../../assets/svg/Picture2.svg';
import { makeStyles } from '@material-ui/core';
import { Style } from './Styles';

function Institution(props) {
  const classes = makeStyles(Style())();

  const reviews = [
    {
      icon: GoogleLogo,
      title: 'Great Product',
      description: `“Yogshem has brought us new opportunities to set up new
          interaction values…”`,
      reviewer: {
        picture: Picture,
        name: 'Jane Cooper',
        designation: 'Principal ( Delhi Public School )'
      }
    },
    {
      icon: MicrosoftLogo,
      title: 'Intuitive Design',
      description: `“Yogshem school software has changed the way we communicate with parents and staff…”`,
      reviewer: {
        picture: Picture1,
        name: 'Jane Cooper',
        designation: 'Principal ( G D Goenka School )'
      }
    },
    {
      icon: WalmartLogo,
      title: 'Mindblowing Service',
      description: `“Yogshem school ERP software has made our day-to-day management so much easier…”`,
      reviewer: {
        picture: Picture2,
        name: 'Jane Cooper',
        designation: 'Principal ( Lancer’s Convent )'
      }
    }
  ];
  return (
    <section className={`${classes.container} px-14 `} id='testimonials'>
      <div className={`w-full py-20`}>
        <div className={`w-full`}>
          <div
            className={`${classes.titleMain} w-full text-center font-extrabold text-4xl`}
          >
            Institutions using “yogshem”
          </div>
          <div className='w-full grid grid-cols-3 mt-10'>
            {reviews.map((r, idx) => {
              return (
                <div
                  className={`w-full flex ${
                    idx !== 0
                      ? idx === reviews.length - 1
                        ? 'justify-end'
                        : 'justify-center'
                      : 'justify-start'
                  }`}
                  key={idx}
                >
                  <div
                    className={`flex flex-col items-center justify-between ${classes.mainDiv}`}
                  >
                    <img
                      src={r.icon}
                      alt=''
                      className={`${classes.brandIcon} block`}
                    />
                    <div
                      className={`${classes.div} p-10 mt-4 flex flex-col items-center justify-center bg-white`}
                    >
                      <div className={`${classes.title} font-bold text-xl`}>
                        {r.title}
                      </div>
                      <div
                        className={`${classes.description} font-normal text-sm mt-2`}
                      >
                        {r.description}
                      </div>
                    </div>
                    <div
                      className={`flex flex-col items-center justify-center mt-5`}
                    >
                      <img
                        src={r.reviewer.picture}
                        alt=''
                        className={`rounded-full`}
                      />
                      <div className={`${classes.name} font-bold text-lg mt-2`}>
                        {r.reviewer.name}
                      </div>
                      <div
                        className={`${classes.designation} font-normal text-sm mt-2`}
                      >
                        {r.reviewer.designation}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Institution;
