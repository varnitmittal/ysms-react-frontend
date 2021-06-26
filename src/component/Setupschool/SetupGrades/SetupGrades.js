import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CustomGrid from './CustomGrid';
import noitem from '../../../assets/img/noitem.svg';
import Modal from '@material-ui/core/Modal';

const SetupGrades = () => {
  const items = [
    'Quarter 1',
    'Quarter 2',
    'Quarter 3',
    'Half-Yearly 1',
    'Half-Yearly 2',
    'Half-Yearly 3'
  ];
  const customGridItems = [
    {
      col1: '01',
      col2: 'A',
      col3: 34,
      col4: '100'
    },
    {
      col1: '02',
      col2: 'A+',
      col3: 34,
      col4: '90'
    },
    {
      col1: '03',
      col2: 'B',
      col3: 34,
      col4: '80'
    },
    {
      col1: '04',
      col2: 'B+',
      col3: 34,
      col4: '10'
    },
    {
      col1: '05',
      col2: 'B',
      col3: 34,
      col4: '10'
    },
    {
      col1: '06',
      col2: 'C+',
      col3: 34,
      col4: '10'
    },
    {
      col1: '07',
      col2: 'C',
      col3: 34,
      col4: '10'
    },
    {
      col1: '08',
      col2: 'D+',
      col3: 34,
      col4: '10'
    },
    {
      col1: '09',
      col2: 'D',
      col3: 4,
      col4: '10'
    },
    {
      col1: '10',
      col2: 'E+',
      col3: 14,
      col4: '10'
    },
    {
      col1: '11',
      col2: 'E',
      col3: 29,
      col4: '10'
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

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [open2, setOpen2] = React.useState(false);

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const [count, setCount] = React.useState(1);
  const decrementCount = () => {
    if (count > 1) setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
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
        // person.col4.toString().toLowerCase().indexOf(searchTable) >= 0
        person.col4
          .toString()
          .toLowerCase()
          .indexOf(searchTable.toString().toLowerCase()) >= 0
      );
    });
  };
  const [state, setState] = React.useState({ values: [] });

  const handleSelectChange = (i, e) => {
    setState({
      values: { ...state.values, [i]: e.target.value }
    });
  };
  return (
    <>
      <div className='p-30 d-flex align-items-center justify-space-between'>
        <div style = {{border:'1px solid #EBEBEB', borderRadius: '30px', background: '#F8F8F8'}}>
          <TextField
            id='input-with-icon-textfield'
            placeholder='Search grades...' 
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
          <button
            onClick={handleOpen}
            className='br-20 ml-30 fs-18 pb-10 pl-20 pr-20 pt-10 border-0 outline-none hand-cursor newSetupBtn'
          >
            Edit grades
          </button>
        </div>
      </div>

      <CustomGrid
        customGridItems={filterItems(customGridItems)}
        handleOpen={handleOpen}
      />
      {filterItems(customGridItems).length ? null : (
        <div className='pbt-100 text-center'>
          <img src={noitem} className='m-auto' alt='no item' />
          <button
            onClick={handleOpen}
            className='br-20 mlr-auto mt-20 d-block fs-18 pb-10 pl-20 pr-20 pt-10 border-0 outline-none hand-cursor newSetupBtn'
          >
            + New Exam
          </button>
        </div>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        className='d-flex align-items-center justify-center'
      >
        <div
          className='bg-grey br-20 d-flex p-30 flex-column'
          style={{
            width: '70vw',
            height: '70vh',
            background: 'rgba(248, 248, 248, 1)'
          }}
        >
          <form>
            <div
              className='d-flex align-items-center border-bottom-grey2 pb-20 mb-20 w-100per'
              style={{ borderBottom: '1px solid var(--grey)' }}
            >
              <h2 className='fs-20 d-flex w-100per font-weight-bold'>
                Setup Grades
              </h2>
              <label className='fs-16 font-weight-bold mr-20 ml-50 text-nowrap'>
                Number of grades
              </label>
              <div
                className='d-flex flex1 justify-space-between w-177 fs-16 bg-white mw-287 h-42 border-grey2 br-20 p-10 align-items-center font-weight-bold'
                style={{
                  width: 'auto',
                  border: '1px solid #EBEBEB'
                }}
              >
                <div
                  onClick={decrementCount}
                  className='hand-cursor outline-none'
                >
                  <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                    -
                  </span>
                </div>
                {count < 10 ? '0' + (count - 1) : count}
                <div
                  onClick={incrementCount}
                  className='hand-cursor outline-none'
                >
                  <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                    +
                  </span>
                </div>
              </div>
            </div>
            <div
              className='d-flex mb-20 border-bottom-grey2'
              style={{ borderBottom: '1px solid var(--grey)' }}
            >
              <div className='d-flex flex-column mr-50'>
                <label className='grey2color fs-14 w-100per d-flex mb-20'>
                  Enter grades details
                </label>
                <div className='d-flex flex-column mb-30'>
                  <div
                    className='overflow-y-auto overflow-x-hidden maxh-400'
                    style={{
                      width: '65vw',
                      padding: '2vw',
                      height: '35vh'
                    }}
                  >
                    <div
                      className='d-flex flex-wrap w-700 justify-space-between'
                      style={{ width: '100%', marginLeft: '-18px' }}
                    >
                      {[...Array(9 + count)].map((a, index) => (
                        <div
                          className='d-flex flex-column mb-50'
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '30vw'
                          }}
                        >
                          <div className='d-flex flex-column mr-20'>
                            <label className='grey2color fs-14 w-100per d-flex mb-20'>
                              GRADE {index + 1}
                            </label>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '30vw'
                              }}
                            >
                              <div>
                                <label className='fs-16 font-weight-bold mb-10'>
                                  Grade Name
                                </label>
                                <TextField
                                  placeholder='Enter grade name'
                                  className='search-input custom-white-input'
                                  style={{
                                    width: 'auto',
                                    marginTop: '1vh',
                                    marginRight: '1vw',
                                    background: '#FFFFFF',
                                    border: '1px solid #EBEBEB'
                                  }}
                                />
                              </div>
                              <div>
                                <label className='fs-16 font-weight-bold mb-10'>
                                  Starting Value
                                </label>
                                <TextField
                                  placeholder='Enter value'
                                  className='search-input custom-white-input'
                                  style={{
                                    width: 'auto',
                                    background: '#FFFFFF',
                                    marginTop: '1vh',
                                    marginRight: '1vw',
                                    border: '1px solid #EBEBEB'
                                  }}
                                />
                              </div>
                              <div>
                                <label className='fs-16 font-weight-bold mb-10'>
                                  Ending Value
                                </label>
                                <TextField
                                  placeholder='Enter value'
                                  className='search-input custom-white-input'
                                  style={{
                                    width: 'auto',
                                    background: '#FFFFFF',
                                    marginTop: '1vh',
                                    marginRight: '1vw',
                                    border: '1px solid #EBEBEB'
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex justify-space-between'>
              <div className='font-weight-bold fs-16 d-flex flex-column'>
                IMPORTANT NOTE:
                <span className='redcolor mt-5'>
                  Don't worry you can always come backa and edit this field.
                </span>
              </div>
              <button
                onClick={handleClose}
                className='border-0 br-20 pb-10 pl-20 pr-20 pt-10 addclass hand-cursor'
                style={{ color: 'white' }}
              >
                Continue to save details
              </button>
            </div>
          </form>
        </div>
      </Modal>

      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        className='d-flex align-items-center justify-center'
      >
        <div className='bg-grey br-20 d-flex p-30 flex-column'>
          <form>
            <div
              className='d-flex align-items-center border-bottom-grey2 pb-20 mb-20 w-100per'
              style={{ borderBottom: '1px solid var(--grey)' }}
            >
              <h2 className='fs-20 d-flex w-100per font-weight-bold'>
                Create Terms
              </h2>
              <label className='fs-16 font-weight-bold mr-20 ml-50 text-nowrap'>
                Number of fields
              </label>
              <div className='d-flex flex1 justify-space-between w-177 fs-16 bg-white mw-287 h-42 border-grey2 br-20 p-10 align-items-center font-weight-bold'>
                <div
                  onClick={decrementCount}
                  className='hand-cursor outline-none'
                >
                  <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                    -
                  </span>
                </div>
                {10}
                {/* {count < 10 ? '0' + count : count} */}
                <div
                  onClick={incrementCount}
                  className='hand-cursor outline-none'
                >
                  <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                    +
                  </span>
                </div>
              </div>
            </div>
            <div className='d-flex flex-column mb-30'>
              <div className='overflow-y-auto overflow-x-hidden maxh-400'>
                <div className='d-flex flex-wrap w-700 justify-space-between'>
                  {[...Array(count)].map((a, index) => (
                    <div className='d-flex flex-column mb-50'>
                      <label className='grey2color fs-14 w-100per d-flex mb-20'>
                        TERM {index + 1}
                      </label>
                      <label className='fs-16 font-weight-bold mb-10'>
                        Term Name
                      </label>
                      <Select
                        IconComponent={() => <KeyboardArrowDownIcon />}
                        className='custom-choose-select custom-white-select'
                        name={state.values[index]}
                        displayEmpty
                        value={state.values[index]}
                        onChange={handleSelectChange.bind(this, index)}
                      >
                        <MenuItem value={''}>Choose Term</MenuItem>
                        {items.map((item) => (
                          <MenuItem value={item}>{item}</MenuItem>
                        ))}
                      </Select>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='d-flex justify-flex-end'>
              <button
                onClick={handleClose2}
                className='border-0 br-20 pb-10 pl-20 pr-20 pt-10 bg-blue whitecolor hand-cursor'
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default SetupGrades;
