import React from 'react';
import Tile from './Tile';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import CustomGrid from './CustomGrid';
import noitem from '../../../assets/img/noitem.svg';
import { Link } from 'react-router-dom';

const StudentAdmissions = () => {
  const tileList = [
    {
      id: 1,
      tileClass: 'admissionTile1',
      tileCount: '1120',
      tileText: 'Total',
      tileClassSection: ''
    },
    {
      id: 2,
      tileClass: 'admissionTile2',
      tileCount: '45',
      tileText: 'Most Filled',
      tileClassSection: 'XII'
    },
    {
      id: 3,
      tileClass: 'admissionTile3',
      tileCount: '30',
      tileText: 'Least Filled',
      tileClassSection: 'X'
    },
    {
      id: 4,
      tileClass: 'admissionTile4',
      tileCount: '540',
      tileText: 'New admissions',
      tileClassSection: ''
    }
  ];
  const customGridItems = [
    {
      col1: 'XII',
      col2: 'XII-A',
      col3: 'Mr. Siddharth Jain',
      col4: 40,
      col5: ['L.K.G-A', 'L.K.G-A', 'L.K.G-A'],
      col6: ['Mr. Siddharth Jain', 'Mr.Siddharth Jain', 'Mr.Siddharth Jain'],
      col7: [40, 38, 40]
    },
    {
      col1: 'XII',
      col2: 'XII-A',
      col3: 'Mr. Siddharth Jain',
      col4: 40,
      col5: ['L.K.G-A', 'L.K.G-A', 'L.K.G-A'],
      col6: ['Mr. Siddharth Jain', 'Mr.Siddharth Jain', 'Mr.Siddharth Jain'],
      col7: [40, 38, 40]
    },
    {
      col1: 'XII',
      col2: 'XII-A',
      col3: 'Mr. Siddharth Jain',
      col4: 40,
      col5: ['L.K.G-A', 'L.K.G-A', 'L.K.G-A'],
      col6: ['Mr. Siddharth Jain', 'Mr.Siddharth Jain', 'Mr.Siddharth Jain'],
      col7: [40, 38, 40]
    },
    {
      col1: 'XII',
      col2: 'XII-A',
      col3: 'Mr. Siddharth Jain',
      col4: 40,
      col5: ['L.K.G-A', 'L.K.G-A', 'L.K.G-A'],
      col6: ['Mr. Siddharth Jain', 'Mr.Siddharth Jain', 'Mr.Siddharth Jain'],
      col7: [40, 38, 40]
    },
    {
      col1: 'XII',
      col2: 'XII-A',
      col3: 'Mr. Siddharth Jain',
      col4: 40,
      col5: ['L.K.G-A', 'L.K.G-A', 'L.K.G-A'],
      col6: ['Mr. Siddharth Jain', 'Mr.Siddharth Jain', 'Mr.Siddharth Jain'],
      col7: [40, 38, 40]
    },
    {
      col1: 'XII',
      col2: 'XII-A',
      col3: 'Mr. Siddharth Jain',
      col4: 40,
      col5: ['L.K.G-A', 'L.K.G-A', 'L.K.G-A'],
      col6: ['Mr. Siddharth Jain', 'Mr.Siddharth Jain', 'Mr.Siddharth Jain'],
      col7: [40, 38, 40]
    },
    {
      col1: 'XII',
      col2: 'XII-A',
      col3: 'Mr. Siddharth Jain',
      col4: 40,
      col5: ['L.K.G-A', 'L.K.G-A', 'L.K.G-A'],
      col6: ['Mr. Siddharth Jain', 'Mr.Siddharth Jain', 'Mr.Siddharth Jain'],
      col7: [40, 38, 40]
    },
    {
      col1: 'XII',
      col2: 'XII-A',
      col3: 'Mr. Siddharth Jain',
      col4: 40,
      col5: ['L.K.G-A', 'L.K.G-A', 'L.K.G-A'],
      col6: ['Mr. Siddharth Jain', 'Mr.Siddharth Jain', 'Mr.Siddharth Jain'],
      col7: [40, 38, 40]
    },
    {
      col1: 'XII',
      col2: 'XII-A',
      col3: 'Mr. Siddharth Jain',
      col4: 40,
      col5: ['L.K.G-A', 'L.K.G-A', 'L.K.G-A'],
      col6: ['Mr. Siddharth Jain', 'Mr.Siddharth Jain', 'Mr.Siddharth Jain'],
      col7: [40, 38, 40]
    },
    {
      col1: 'XII',
      col2: 'XII-A',
      col3: 'Mr. Siddharth Jain',
      col4: 40,
      col5: ['L.K.G-A', 'L.K.G-A', 'L.K.G-A'],
      col6: ['Mr. Siddharth Jain', 'Mr.Siddharth Jain', 'Mr.Siddharth Jain'],
      col7: [40, 38, 40]
    },
    {
      col1: 'XII',
      col2: 'XII-A',
      col3: 'Mr. Siddharth Jain',
      col4: 40,
      col5: ['L.K.G-A', 'L.K.G-A', 'L.K.G-A'],
      col6: ['Mr. Siddharth Jain', 'Mr.Siddharth Jain', 'Mr.Siddharth Jain'],
      col7: [40, 38, 40]
    },
    {
      col1: 'XII',
      col2: 'XII-A',
      col3: 'Mr. Siddharth Jain',
      col4: 40,
      col5: ['L.K.G-A', 'L.K.G-A', 'L.K.G-A'],
      col6: ['Mr. Siddharth Jain', 'Mr.Siddharth Jain', 'Mr.Siddharth Jain'],
      col7: [40, 38, 40]
    }
  ];

  let [searchTable, setSearchTable] = React.useState('');
  let searchtableChange = (e) => {
    setSearchTable(e.target.value);
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
    <>
      <div className='App d-flex'>
        <div className='d-flex flex-column w-100per bs-border-box'>
          <div className='p-20 main-scroll-height overflow-y-auto overflow-x-hidden'>
            <div className='fs-20 font-weight-bold mt-5 mb-30'>Admissions</div>
            <div className='d-flex justify-space-between flex-wrap-xs'>
              {tileList.map((tileItem, index) => (
                <Tile
                  tileClass={tileItem.tileClass}
                  tileCount={tileItem.tileCount}
                  tileText={tileItem.tileText}
                  tileClassSection={tileItem.tileClassSection}
                  lastTile={tileList.length - 1 === index}
                />
              ))}
            </div>
            <div className='studentAdmissionbg'>
              <div className='p-30 d-flex align-items-center justify-space-between'>
                <div style = {{border:'1px solid #EBEBEB', borderRadius: '30px', background: '#F8F8F8'}}>
                  <TextField
                    id='input-with-icon-textfield'
                    placeholder='Search classes...'
                    onChange={searchtableChange}
                    className='search-input'
                    disableUnderline={true}
                    style={{
                      background: 'transparent', 
                      border: 'none',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center' 
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <SearchIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                </div>
                <div className='d-flex align-items-center'>
                  {filterItems(customGridItems).length ? (
                    <Link
                      to='/studentregistration'
                      className='br-20 ml-30 fs-18 pb-10 pl-20 pr-20 pt-10 border-0 outline-none hand-cursor newSetupBtn'
                    >
                      + New Student
                    </Link>
                  ) : null}
                </div>
              </div>

              <CustomGrid
                customGridItems={filterItems(customGridItems)}
                handleOpen={handleOpen}
                open={open}
              />
              {filterItems(customGridItems).length ? null : (
                <div className='pbt-100 text-center'>
                  <img src={noitem} className='m-auto' alt='no item' />
                  <Link
                    to='/studentregistration'
                    className='br-20 mlr-auto mt-20 d-block fs-18 pb-10 pl-20 pr-20 pt-10 border-0 outline-none hand-cursor newSetupBtn'
                  >
                    + New Student
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentAdmissions;
