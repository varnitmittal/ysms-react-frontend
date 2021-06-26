import React from 'react';
import Tile from './Tile';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CustomGrid from './CustomGrid';
import noitem from '../../../../assets/img/noitem.svg';

const ClassDetails = () => {
  const items = [
    'LKG',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
    'XI',
    'XII'
  ];
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const tileList = [
    {
      id: 1,
      tileClass: 'admissionTile1',
      tileCount: '112',
      tileText: 'Total',
      tilePercentage: ''
    },
    {
      id: 2,
      tileClass: 'admissionTile2',
      tileCount: '108',
      tileText: 'Present',
      tilePercentage: '79.4%'
    },
    {
      id: 3,
      tileClass: 'admissionTile3',
      tileCount: '04',
      tileText: 'Absent',
      tilePercentage: '19.6%'
    },
    {
      id: 4,
      tileClass: 'admissionTile4',
      tileCount: 'Yesterday',
      tileText: '51% percent',
      tilePercentage: '51'
    }
  ];
  const customGridItems = [
    {
      col1: '#4566',
      col2: '01',
      col3: 'Mr. Siddharth Jain',
      col4: 'XII',
      col5: 'A',
      col6: '24 Oct 2020'
    },
    {
      col1: '#4566',
      col2: '01',
      col3: 'Mr. Siddharth Jain',
      col4: 'XII',
      col5: 'A',
      col6: '24 Oct 2020'
    },
    {
      col1: '#4566',
      col2: '01',
      col3: 'Mr. Siddharth Jain',
      col4: 'XII',
      col5: 'A',
      col6: '24 Oct 2020'
    },
    {
      col1: '#4566',
      col2: '01',
      col3: 'Mr. Siddharth Jain',
      col4: 'XII',
      col5: 'A',
      col6: '24 Oct 2020'
    },
    {
      col1: '#4566',
      col2: '01',
      col3: 'Mr. Siddharth Jain',
      col4: 'XII',
      col5: 'A',
      col6: '24 Oct 2020'
    },
    {
      col1: '#4566',
      col2: '01',
      col3: 'Mr. Siddharth Jain',
      col4: 'XII',
      col5: 'A',
      col6: '24 Oct 2020'
    },
    {
      col1: '#4566',
      col2: '01',
      col3: 'Mr. Siddharth Jain',
      col4: 'XII',
      col5: 'A',
      col6: '24 Oct 2020'
    },
    {
      col1: '#4566',
      col2: '01',
      col3: 'Mr. Siddharth Jain',
      col4: 'XII',
      col5: 'A',
      col6: '24 Oct 2020'
    },
    {
      col1: '#4566',
      col2: '01',
      col3: 'Mr. Siddharth Jain',
      col4: 'XII',
      col5: 'A',
      col6: '24 Oct 2020'
    },
    {
      col1: '#4566',
      col2: '01',
      col3: 'Mr. Siddharth Jain',
      col4: 'XII',
      col5: 'A',
      col6: '24 Oct 2020'
    },
    {
      col1: '#4566',
      col2: '01',
      col3: 'Mr. Siddharth Jain',
      col4: 'XII',
      col5: 'A',
      col6: '24 Oct 2020'
    }
  ];

  let [searchTable, setSearchTable] = React.useState('');
  let searchtableChange = (e) => {
    setSearchTable(e.target.value);
  };

  const [claassValue, setChooseValue] = React.useState('');
  const handleChangeChooseValue = (event) => {
    setChooseValue(event.target.value);
  };
  const [statusValue, setStatusValue] = React.useState('');
  const handleChangeStatusValue = (event) => {
    setStatusValue(event.target.value);
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const filterItems = (presets) => {
    var values = Object.keys(presets).map(function (e) {
      return presets[e];
    });
    return values.filter(function (person) {
      return (
        person.col1
          .toString()
          .toLowerCase()
          .indexOf(searchTable.toString().toLowerCase()) >= 0 ||
        person.col2
          .toString()
          .toLowerCase()
          .indexOf(searchTable.toString().toLowerCase()) >= 0 ||
        person.col3
          .toString()
          .toLowerCase()
          .indexOf(searchTable.toString().toLowerCase()) >= 0 ||
        person.col4.toString().toLowerCase().indexOf(searchTable) >= 0
      );
    });
  };
  return (
    <div style={{ width: '100vw', padding: '30px' }}>
      <div className='fs-16 font-weight-bold mt-5 mb-30 grey2color'>
        Admissions > Class XII A
      </div>
      <div className='d-flex justify-space-between flex-wrap-xs'>
        {tileList.map((tileItem, index) => (
          <Tile
            tileClass={tileItem.tileClass}
            tileCount={tileItem.tileCount}
            tileText={tileItem.tileText}
            tilePercentage={tileItem.tilePercentage}
            lastTile={tileList.length - 1 === index}
          />
        ))}
      </div>
      <div className='fs-20 font-weight-bold mt-5 mb-30'>
        Admissions-Class XII A
      </div>
      <div className='studentAdmissionbg'>
        <div className='p-30 d-flex align-items-center justify-space-between'>
          <TextField
            id='input-with-icon-textfield'
            placeholder='Search student...'
            onChange={searchtableChange}
            className='search-input'
            style={{
              width: 'auto',
              background: '#F8F8F8',
              border: '1px solid #EBEBEB'
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
          <div className='d-flex align-items-center'>
            <Select
              IconComponent={() => <KeyboardArrowDownIcon />}
              id='classlist'
              className='custom-choose-select'
              name='classlist'
              displayEmpty
              value={claassValue}
              onChange={handleChangeChooseValue}
              style={{
                border: '1px solid #EBEBEB',
                background: '#F8F8F8'
              }}
            >
              <MenuItem value={''}>Month</MenuItem>
              {month.map((statusval) => (
                <MenuItem value={statusval}>{statusval}</MenuItem>
              ))}
            </Select>
            <Select
              IconComponent={() => <KeyboardArrowDownIcon />}
              id='classlist'
              className='custom-choose-select ml-30'
              name='classlist'
              displayEmpty
              value={statusValue}
              onChange={handleChangeStatusValue}
              style={{
                border: '1px solid #EBEBEB',
                background: '#F8F8F8'
              }}
            >
              <MenuItem value={''}>To</MenuItem>
              {items.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </div>
          <button
            onClick={handleOpen}
            className='ml-30 fs-18 pb-10 pl-20 pr-20 pt-10 border-0 outline-none hand-cursor newSetupBtn'
            style={{ borderRadius: '15px', marginLeft: '10vw' }}
          >
            Export Data
          </button>
          <button
            className='border-0 pb-10 pl-20 pr-20 pt-10 font-weight-bold AcceptBtn hand-cursor'
            style={{
              color: '#1D4ED8',
              backgroundColor: '#DBEAFE',
              borderRadius: '15px',
              height: '5vh'
            }}
          >
            Email Data
          </button>
        </div>

        <CustomGrid
          customGridItems={filterItems(customGridItems)}
          handleOpen={handleOpen}
          open={open}
        />
        {filterItems(customGridItems).length ? null : (
          <div className='pbt-100 text-center'>
            <img src={noitem} className='m-auto' alt='no item' />
            <button
              onClick={handleOpen}
              className='br-20 mlr-auto mt-20 d-block fs-18 pb-10 pl-20 pr-20 pt-10 border-0 outline-none hand-cursor newSetupBtn'
            >
              + New Student
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassDetails;
