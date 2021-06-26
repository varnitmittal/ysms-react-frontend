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

const SetupExamination = () => {
  const items = [
    'Quarter 1',
    'Quarter 2',
    'Quarter 3',
    'Half-Yearly 1',
    'Half-Yearly 2',
    'Half-Yearly 3'
  ];
   const subjects = [
    'English',
    'Maths',
    'French',
    'Sanskrit',
    'Science',
  ];
  const customGridItems = [
    {
      col1: 'a',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'b',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'c',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'd',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'e',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'f',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'g',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'h',
      col2: 'Mr. aiddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'I',
      col2: 'Mr. Siddharth Jain',
      col3: 4,
      col4: ''
    },
    {
      col1: 'j',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'k',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'l',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'm',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'n',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'I',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
    },
    {
      col1: 'z',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: ''
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
        person.col4.toString().toLowerCase().indexOf(searchTable) >= 0
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
            placeholder='Search Classes...'
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
          <Select
            IconComponent={() => <KeyboardArrowDownIcon />}
            id='classlist'
            className='custom-choose-select mr-20'
            name='classlist'
            displayEmpty
            value={claassValue}
            onChange={handleChangeChooseValue}
             style={{
                    width: 'auto',
                    background: '#F8F8F8',
                    border: '1px solid #EBEBEB'
                  }}
          >
            <MenuItem value={''}>Choose term</MenuItem>
            {items.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
          <Select
            IconComponent={() => <KeyboardArrowDownIcon />}
            id='classlist'
            className='custom-choose-select'
            name='classlist'
            displayEmpty
            value={claassValue}
            onChange={handleChangeChooseValue}
             style={{
                    width: 'auto',
                    background: '#F8F8F8',
                    border: '1px solid #EBEBEB'
                  }}
          >
            <MenuItem value={''}>Choose subject</MenuItem>
            {subjects.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
          <button
            onClick={handleOpen}
            className='br-20 ml-30 fs-18 pb-10 pl-20 pr-20 pt-10 border-0 outline-none hand-cursor newSetupBtn'
          >
            + New Exam
          </button>
          {filterItems(customGridItems).length ? (
            <button
              onClick={handleOpen2}
              className='br-20 ml-30 fs-18 pb-10 pl-20 pr-20 pt-10 border-0 outline-none hand-cursor newSetupBtn'
            >
              + Add term
            </button>
          ) : null}
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
        <div className='bg-grey br-20 d-flex p-30 flex-column' style={{background: 'rgba(248, 248, 248, 1)'}}>
          <h2 className='fs-20 d-flex w-100per font-weight-bold mb-30'>
            Create New Examination
          </h2>
          <form>
            <div className='d-flex flex-wrap maxw-1070'>
              <div className='d-flex flex-column mb-50 mw-240 mr-20'>
                <label className='fs-16 font-weight-bold mb-10'>Term</label>
                <Select
                  IconComponent={() => <KeyboardArrowDownIcon />}
                  id='classlist'
                  className='custom-choose-select custom-white-select mw-240'
                  name='classlist'
                  displayEmpty
                  value={claassValue}
                  onChange={handleChangeChooseValue}
                  style={{
                    border: 'none'
                  }}
                >
                  <MenuItem value={''}>Choose Term</MenuItem>
                  {items.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </div>
              <div className='d-flex flex-column mb-50 mw-240 mr-20'>
                <label className='fs-16 font-weight-bold mb-10'>
                  Subject name
                </label>
                <Select
                  IconComponent={() => <KeyboardArrowDownIcon />}
                  id='classlist'
                  className='custom-choose-select custom-white-select mw-240'
                  name='classlist'
                  displayEmpty
                  value={claassValue}
                  onChange={handleChangeChooseValue}
                  style={{
                    border: 'none'
                  }}
                >
                  <MenuItem value={''}>Select subject name </MenuItem>
                  {items.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </div>
              <div className='d-flex flex-column mb-50 mw-240 mr-20'>
                <label className='fs-16 font-weight-bold mb-10'>
                  Subject Teacher name
                </label>
                <Select
                  IconComponent={() => <KeyboardArrowDownIcon />}
                  id='classlist'
                  className='custom-choose-select custom-white-select mw-240'
                  name='classlist'
                  displayEmpty
                  value={claassValue}
                  onChange={handleChangeChooseValue}
                  style={{
                    border: 'none'
                  }}
                >
                  <MenuItem value={''}>Select subject teacher </MenuItem>
                  {items.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </div>
              <div className='d-flex flex-column mb-50 mw-240 mr-20'>
                <label className='fs-16 font-weight-bold mb-10'>
                  Total Marks
                </label>
                <TextField
                  placeholder='Enter total marks'
                  className='search-input custom-white-input mw-240'
                  style={{
                    border: 'none'
                  }}
                />
              </div>
              <div className='d-flex flex-column mb-50 mw-240 mr-20'>
                <label className='fs-16 font-weight-bold mb-10'>
                  Passing Marks
                </label>
                <TextField
                  placeholder='Enter passing marks'
                  className='search-input custom-white-input mw-240'
                  style={{
                    border: 'none'
                  }}
                />
              </div>
              <div className='d-flex flex-column mb-50 mw-240 mr-20'>
                <label className='fs-16 font-weight-bold mb-10'>
                  Examination Date
                </label>
                <TextField
                  placeholder='Enter Date'
                  className='search-input custom-white-input mw-240'
                  style={{
                    border: 'none'
                  }}
                />
              </div>
              <div className='d-flex flex-column mb-50 mw-240 mr-20'>
                <label className='fs-16 font-weight-bold mb-10'>
                  Examination Time
                </label>
                <TextField
                  placeholder='Enter Time'
                  className='search-input custom-white-input mw-240'
                  style={{
                    border: 'none'
                  }}
                />
              </div>
              <div className='d-flex flex-column mb-50 mw-510 mr-20'>
                <label className='fs-16 font-weight-bold mb-10'>
                  Syllabus (optional)
                </label>
                <TextField
                  placeholder='Enter Syllabus'
                  className='search-input custom-white-input mw-510'
                  style={{
                    border: 'none'
                  }}
                />
              </div>
            </div>

            <div className='d-flex justify-flex-end'>
              <button
                onClick={handleClose}
                className='border-0 br-20 pb-10 pl-20 pr-20 pt-10 addclass hand-cursor'
                style={{
                  background: 'rgba(153, 153, 153, 1)',
                  color: '#FFFFFF'
                }}
              >
                Save Details
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
        <div className='bg-grey br-20 d-flex p-30 flex-column' style={{background: 'rgba(248, 248, 248, 1)'}}>
          <form>
            <div className='d-flex align-items-center pb-20 mb-20 w-100per'>
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
                {count < 10 ? '0' + count : count}
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
                        defaultValue= "none"
                        value={state.values[index]}
                        onChange={handleSelectChange.bind(this, index)}
                        style={{
                          border: 'none'
                        }}
                      >
                        <MenuItem value="none" disabled>Choose Term</MenuItem>
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

export default SetupExamination;
