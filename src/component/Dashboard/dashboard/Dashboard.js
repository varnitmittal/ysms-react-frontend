import Tile from '../tile/Tile';
import React from 'react';
import RecentAdmissions from '../recentAdmission/RecentAdmissions';
import Notices from '../notices/Notices';
import CustomChart from '../CustomChart';
import SelectableCalendarMonth from '../selectableCalender/SelectableCalendarMonth';
import SimpleTabs from '../SimpleTabs';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Style } from './Styles';
// import '../../../indexdashboard.css';
import { makeStyles } from '@material-ui/core';

const Dashboard = (props) => {
  const classes = makeStyles(Style())();
  const items = ['Last 4 months', 'Last 8 months'];
  const tileList = [
    {
      id: 1,
      tileClass: 'tile1',
      tileCount: '40,10,200',
      tileText: 'Total earnings',
      tilePercentage: '+19.4%'
    },
    {
      id: 2,
      tileClass: 'tile2',
      tileCount: '50,600',
      tileText: 'Total Students',
      tilePercentage: '+12.4%'
    },
    {
      id: 3,
      tileClass: 'tile3',
      tileCount: '346',
      tileText: 'Total Teachers',
      tilePercentage: '+10.4%'
    }
  ];

  const admissionList = [
    {
      id: 1,
      name: 'Priyam Kumar',
      admissionClass: 'Class X'
    },
    {
      id: 2,
      name: 'Ashley Carlos',
      admissionClass: 'Class XI'
    },
    {
      id: 3,
      name: 'Ravikant Iyer',
      admissionClass: 'Class XII'
    },
    {
      id: 4,
      name: 'Carlos Warner',
      admissionClass: 'Class XII'
    },
    {
      id: 5,
      name: 'Priyam Kumar',
      admissionClass: 'Class XII'
    }
  ];

  const noticeList = [
    {
      id: 1,
      name: 'Pandemic rules and guidelines..',
      time: '20 Oct, 2020 | 8:30 PM'
    },
    {
      id: 2,
      name: 'Pandemic rules and guidelines..',
      time: '20 Oct, 2020 | 8:30 PM'
    },
    {
      id: 3,
      name: 'Pandemic rules and guidelines..',
      time: '20 Oct, 2020 | 8:30 PM'
    },
    {
      id: 4,
      name: 'Pandemic rules and guidelines..',
      time: '20 Oct, 2020 | 8:30 PM'
    },
    {
      id: 5,
      name: 'Pandemic rules and guidelines..',
      time: '20 Oct, 2020 | 8:30 PM'
    }
  ];
  const [role, setRole] = React.useState('');
  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <>
      <div className='App d-flex'>
        <div className={`${classes.mainDiv} d-flex flex-column `}>
          {/* <Header /> */}
          <div className={`${classes.div1} p-20 overflow-x-hidden`}>
            <div className={`${classes.div2} d-flex justify-space-between`}>
              {tileList.map((tileItem, index) => (
                <Tile
                  key={tileItem.id}
                  tileClass={tileItem.tileClass}
                  tileCount={tileItem.tileCount}
                  tileText={tileItem.tileText}
                  tilePercentage={tileItem.tilePercentage}
                  lastTile={tileList.length - 1 === index}
                />
              ))}
            </div>
            <div className={`${classes.div3} d-flex flex-wrap-x`}>
              <div
                className={`${classes.innerDiv1} bg-white br-20 d-flex flex-column flex2`}
              >
                <div
                  className={`${classes.innerDiv2} font-weight-bold d-flex justify-space-between`}
                >
                  <div className={`blackcolor`}>Fee collection & Expenses</div>
                  <div className={`bluecolor custom-select`}>
                    <Select
                      IconComponent={() => (
                        <KeyboardArrowDownIcon className={`ddArrow`} />
                      )}
                      id='userRole'
                      name='userrole'
                      displayEmpty
                      value={role}
                      onChange={handleChange}
                    >
                      <MenuItem value={''}>Select Duration</MenuItem>
                      {items.map((item, index) => (
                        <MenuItem key={index} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                </div>
                <CustomChart />
              </div>
              <div
                className={`${classes.calender} bg-white br-20 d-flex flex-column p-20 pb-0`}
              >
                <SelectableCalendarMonth />
              </div>
            </div>
            <div className={`d-flex w-100per flex-wrap-md`}>
              <div
                className={`${classes.text1} flex1 bg-white br-20 d-flex flex-column p-20 pb-0 mr-50 mr-0-md`}
              >
                <div className={`font-weight-bold mb-30`}>
                  Today’s Attendance
                </div>
                <SimpleTabs />
              </div>
              <div
                className={`${classes.text2} flex1 bg-white br-20 d-flex flex-column p-20 pb-0 mb-30 mr-50 mr-0-xs flex-auto-xs`}
              >
                <div className={`font-weight-bold fs-18 mb-30`}>
                  Recent admissions
                </div>
                {admissionList.map((admissionItem, index) => (
                  <RecentAdmissions
                    name={admissionItem.name}
                    admissionClass={admissionItem.admissionClass}
                  />
                ))}
              </div>
              <div
                className={`${classes.notices} bg-white br-20 d-flex flex-column p-20 pb-0 mb-30 w-100per-xs`}
              >
                <div
                  className={`${classes.noticesDiv} font-weight-bold fs-18 mb-30 d-flex justify-space-between`}
                >
                  <div className='blackcolor'>Notices</div>
                  <Link to='/' className='redcolor'>
                    see all
                  </Link>
                </div>
                {noticeList.map((noticeItem, index) => (
                  <Notices name={noticeItem.name} time={noticeItem.time} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
