import React, { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CustomGrid from './CustomGrid';
import noitem from '../../../assets/img/noitem.svg';
import Modal from '@material-ui/core/Modal';
import Switch from '@material-ui/core/Switch';
import { BiRupee } from 'react-icons/bi';
import ViewSlips from './ViewSlips';

const SetupFees = () => {
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
      col1: 'a',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: '',
      col5: ''
    },
    {
      col1: 'b',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: '',
      col5: ''
    },
    {
      col1: 'c',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: '',
      col5: ''
    },
    {
      col1: 'd',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: '',
      col5: ''
    },
    {
      col1: 'e',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: '',
      col5: ''
    },
    {
      col1: 'f',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: '',
      col5: ''
    },
    {
      col1: 'g',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: '',
      col5: ''
    },
    {
      col1: 'h',
      col2: 'Mr. aiddharth Jain',
      col3: 34,
      col4: '',
      col5: ''
    },
    {
      col1: 'I',
      col2: 'Mr. Siddharth Jain',
      col3: 4,
      col4: '',
      col5: ''
    },
    {
      col1: 'j',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: '',
      col5: ''
    },
    {
      col1: 'k',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: '',
      col5: ''
    },
    {
      col1: 'l',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: '',
      col5: ''
    },
    {
      col1: 'm',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: '',
      col5: ''
    },
    {
      col1: 'n',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: '',
      col5: ''
    },
    {
      col1: 'I',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: '',
      col5: ''
    },
    {
      col1: 'z',
      col2: 'Mr. Siddharth Jain',
      col3: 34,
      col4: '',
      col5: ''
    }
  ];

  let [searchTable, setSearchTable] = useState('');
  const [viewSlip, setViewSlip] = useState(false);
  const handleViewSlips = () => {
    setViewSlip(true);
  };
  let searchtableChange = (e) => {
    setSearchTable(e.target.value);
  };

  const [claassValue, setChooseValue] = useState('');
  const handleChangeChooseValue = (event) => {
    setChooseValue(event.target.value);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [count, setCount] = useState(1);
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
  const [checked, setChecked] = useState(false);

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };
  const [canEdit, setCanEdit] = useState(true);

  const handleCanEdit = (event) => {
    setCanEdit(event.target.checked);
  };
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <>
      {viewSlip ? (
        <ViewSlips viewSlip={viewSlip} setViewSlip={setViewSlip} />
      ) : (
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
          </div>

          <CustomGrid
            customGridItems={filterItems(customGridItems)}
            handleOpen={handleOpen}
            viewSlip={viewSlip}
            setViewSlip={setViewSlip}
            handleViewSlips={handleViewSlips}
          />
          {filterItems(customGridItems).length ? null : (
            <div className='pbt-100 text-center'>
              <img src={noitem} className='m-auto' alt='no item' />
              <button
                onClick={handleOpen}
                className='br-20 mlr-auto mt-20 d-block fs-18 pb-10 pl-20 pr-20 pt-10 border-0 outline-none hand-cursor newSetupBtn'
              >
                + Setup Fees
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
              className='bg-grey br-20 overflow-hidden'
              style={{ background: '#F8F8F8' }}
            >
              <div className='overflow-y-auto overflow-x-hidden maxh-80vh d-flex p-30 flex-column'>
                <h2 className='fs-20 d-flex w-100per font-weight-bold mb-30'>
                  Setup Fees Details
                </h2>
                <form>
                  <div className='d-flex align-items-center justify-space-between mb-20 w-100per'>
                    {[...Array(count)].map((a, index) => (
                      <div className='d-flex flex-column'>
                        <label className='fs-16 font-weight-bold mr-20 mb-10'>
                          Term
                        </label>
                        <Select
                          IconComponent={() => <KeyboardArrowDownIcon />}
                          id='classlist'
                          className='custom-choose-select custom-white-select'
                          name='classlist'
                          displayEmpty
                          defaultValue='none'
                          //value={state.values[index]}
                          //onChange={handleSelectChange.bind(this, index)}
                          style={{
                            width: 'auto',
                            background: '#FFFFFF',
                            border: '1px solid #EBEBEB'
                          }}
                        >
                          <MenuItem value='none' disabled>
                            Choose Term
                          </MenuItem>
                          {items.map((item) => (
                            <MenuItem value={item} enabled>
                              {item}
                            </MenuItem>
                          ))}
                        </Select>
                      </div>
                    ))}
                    <div className='d-flex flex-column ml-50 mr-50'>
                      <label className='fs-16 font-weight-bold mr-20 mb-10'>
                        Duration
                      </label>
                      <div>
                        <Select
                          IconComponent={() => <KeyboardArrowDownIcon />}
                          id='classlist'
                          className='custom-choose-select custom-white-select mr-20'
                          name='classlist'
                          displayEmpty
                          value={claassValue}
                          onChange={handleChangeChooseValue}
                          style={{
                            width: 'auto',
                            border: '1px solid #EBEBEB'
                          }}
                        >
                          <MenuItem value={''}>From</MenuItem>
                          {items.map((item) => (
                            <MenuItem value={item}>{item}</MenuItem>
                          ))}
                        </Select>
                        <Select
                          IconComponent={() => <KeyboardArrowDownIcon />}
                          id='classlist'
                          className='custom-choose-select custom-white-select'
                          name='classlist'
                          displayEmpty
                          value={claassValue}
                          onChange={handleChangeChooseValue}
                          style={{
                            width: 'auto',
                            border: '1px solid #EBEBEB'
                          }}
                        >
                          <MenuItem value={''}>To</MenuItem>
                          {items.map((item) => (
                            <MenuItem value={item}>{item}</MenuItem>
                          ))}
                        </Select>
                      </div>
                    </div>
                    <div className='d-flex flex-column'>
                      <label className='fs-16 font-weight-bold mr-20 mb-10'>
                        Number of fields
                      </label>
                      <div
                        className='d-flex flex1 justify-space-between w-177 fs-16 bg-white h-42 border-grey2 br-20 p-10 align-items-center font-weight-bold'
                        style={{
                          width: 'auto',
                          border: '1px solid #EBEBEB'
                        }}
                      >
                        <div
                          // onClick={decrementCount}
                          className='hand-cursor outline-none'
                          onClick={handleCanEdit}
                        >
                          <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                            -
                          </span>
                        </div>
                        {count < 10 ? '0' + count : count}
                        <div
                          // onClick={incrementCount}
                          className='hand-cursor outline-none'
                          onClick={handleCanEdit}
                        >
                          <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {canEdit && (
                    <span>
                      <div className='d-flex fs-14 justify-center pt-40 pb-40'>
                        THIS IS HOW YOUR FINAL FEE SLIPS WILL LOOK
                      </div>
                      <div className='d-flex justify-center pb-40'>
                        <div
                          className='d-inline-flex w-400 mr-50 bg-light-blue2 br-20 flex-column p-30 blackcolor'
                          style={{ background: 'rgba(49, 88, 196, 0.05)' }}
                        >
                          <h2 className='font-weight-bold fs-18 justify-center d-flex pb-20'>
                            Quaterly
                          </h2>
                          <div className='d-flex justify-space-between fs-16 pb-10'>
                            <span>Examination fees </span>
                            <span
                              className='d-flex'
                              style={{ color: 'rgba(49, 88, 196, 1)' }}
                            >
                              <BiRupee /> 15,495
                            </span>
                          </div>
                          <div className='d-flex justify-space-between fs-16 pb-10'>
                            <span>Library fees</span>
                            <span
                              className='d-flex'
                              style={{ color: 'rgba(49, 88, 196, 1)' }}
                            >
                              <BiRupee /> 1,500
                            </span>
                          </div>
                          <div className='d-flex justify-space-between fs-16 pb-10'>
                            <span>Insurance</span>
                            <span
                              className='d-flex'
                              style={{ color: 'rgba(49, 88, 196, 1)' }}
                            >
                              <BiRupee /> 1,500
                            </span>
                          </div>
                          <div className='d-flex justify-space-between fs-16 pb-10'>
                            <span>Sport</span>
                            <span
                              className='d-flex'
                              style={{ color: 'rgba(49, 88, 196, 1)' }}
                            >
                              <BiRupee /> 1,500
                            </span>
                          </div>
                          <div className='d-flex justify-space-between fs-16 pb-10'>
                            <span>Transport</span>
                            <span
                              className='d-flex'
                              style={{ color: 'rgba(49, 88, 196, 1)' }}
                            >
                              <BiRupee /> 1,500
                            </span>
                          </div>
                          <div className='d-flex justify-space-between fs-16 pb-10'>
                            <span>Medical</span>
                            <span
                              className='d-flex'
                              style={{ color: 'rgba(49, 88, 196, 1)' }}
                            >
                              <BiRupee /> 1,500
                            </span>
                          </div>
                          <div className='d-flex justify-space-between fs-16 pb-40'>
                            <span>Extra fees (Trip and outdoors)</span>
                            <span
                              className='d-flex'
                              style={{ color: 'rgba(49, 88, 196, 1)' }}
                            >
                              <BiRupee /> 1,500
                            </span>
                          </div>
                          <div className='d-flex fs-14 pt-20 pb-10 grey2color'>
                            DISCOUNT COUPON
                          </div>
                          <div className='d-flex justify-space-between align-items-center'>
                            <div
                              className='br-20 d-inline-flex fs-14 p-10 border-dashed-blue lightBluecolor'
                              style={{ color: 'rgba(49, 88, 196, 1)' }}
                            >
                              OLYMO1000
                            </div>
                            <Switch
                              defaultChecked
                              checked={state.checkedA}
                              onChange={handleChange}
                              name='checkedA'
                              color='default'
                              inputProps={{
                                'aria-label': 'checkbox with default color'
                              }}
                            />
                          </div>
                          <div className='font-weight-bold fs-18 d-flex pt-20 pb-10'>
                            <BiRupee /> 1,000 OFF
                          </div>
                          <div className='d-flex fs-14 pb-40 grey2color'>
                            Science Olympiad Scholarship Discount
                          </div>
                          <div className='d-flex align-items-center'>
                            <div
                              className='fs-16 font-weight-bold mr-15 lightBluecolor'
                              style={{ color: 'rgba(49, 88, 196, 1)' }}
                            >
                              Delete Permanently
                            </div>
                            <button
                              onClick={handleCanEdit}
                              className='border-0 br-20 pb-10 pl-20 pr-20 pt-10 font-weight-bold editBtn hand-cursor'
                              style={{
                                background: 'rgba(49, 88, 196, 1)',
                                color: '#FFFFFF'
                              }}
                            >
                              Edit Fee Slip
                            </button>
                          </div>
                        </div>
                        <div
                          className='d-inline-flex w-400 bg-light-blue2 br-20 flex-column p-30 blackcolor'
                          style={{ background: 'rgba(49, 88, 196, 0.05)' }}
                        >
                          <h2 className='font-weight-bold fs-18 justify-center d-flex pb-20'>
                            Half-Yearly
                          </h2>
                          <div className='d-flex justify-space-between fs-16 pb-10'>
                            <span>Examination fees </span>
                            <span
                              className='d-flex'
                              style={{ color: 'rgba(49, 88, 196, 1)' }}
                            >
                              <BiRupee /> 15,495
                            </span>
                          </div>
                          <div className='d-flex justify-space-between fs-16 pb-10'>
                            <span>Library fees</span>
                            <span
                              className='d-flex'
                              style={{ color: 'rgba(49, 88, 196, 1)' }}
                            >
                              <BiRupee /> 1,500
                            </span>
                          </div>
                          <div className='d-flex justify-space-between fs-16 pb-10'>
                            <span>Insurance</span>
                            <span
                              className='d-flex'
                              style={{ color: 'rgba(49, 88, 196, 1)' }}
                            >
                              <BiRupee /> 1,500
                            </span>
                          </div>
                          <div className='d-flex justify-space-between fs-16 pb-10'>
                            <span>Sport</span>
                            <span
                              className='d-flex'
                              style={{ color: 'rgba(49, 88, 196, 1)' }}
                            >
                              <BiRupee /> 1,500
                            </span>
                          </div>
                          <div className='d-flex justify-space-between fs-16 pb-10'>
                            <span>Transport</span>
                            <span
                              className='d-flex'
                              style={{ color: 'rgba(49, 88, 196, 1)' }}
                            >
                              <BiRupee /> 1,500
                            </span>
                          </div>
                          <div className='d-flex justify-space-between fs-16 pb-10'>
                            <span>Medical</span>
                            <span
                              className='d-flex'
                              style={{ color: 'rgba(49, 88, 196, 1)' }}
                            >
                              <BiRupee /> 1,500
                            </span>
                          </div>
                          <div className='d-flex justify-space-between fs-16 pb-40'>
                            <span>Extra fees (Trip and outdoors)</span>
                            <span
                              className='d-flex'
                              style={{ color: 'rgba(49, 88, 196, 1)' }}
                            >
                              <BiRupee /> 1,500
                            </span>
                          </div>
                          <div className='d-flex fs-14 pt-20 pb-10 grey2color'>
                            DISCOUNT COUPON
                          </div>
                          <div className='d-flex justify-space-between align-items-center'>
                            <div
                              className='br-20 d-inline-flex fs-14 p-10 border-dashed-blue lightBluecolor'
                              style={{ color: 'rgba(49, 88, 196, 1)' }}
                            >
                              OLYMO1000
                            </div>
                            <Switch
                              defaultChecked
                              checked={state.checkedB}
                              onChange={handleChange}
                              name='checkedB'
                              color='default'
                              inputProps={{
                                'aria-label': 'checkbox with default color'
                              }}
                            />
                          </div>
                          <div className='font-weight-bold fs-18 d-flex pt-20 pb-10'>
                            <BiRupee /> 1,000 OFF
                          </div>
                          <div className='d-flex fs-14 pb-40 grey2color'>
                            Science Olympiad Scholarship Discount
                          </div>
                          <div className='d-flex align-items-center'>
                            <div
                              className='fs-16 font-weight-bold mr-15 lightBluecolor'
                              style={{ color: 'rgba(49, 88, 196, 1)' }}
                            >
                              Delete Permanently
                            </div>
                            <button
                              onClick={handleCanEdit}
                              className='border-0 br-20 pb-10 pl-20 pr-20 pt-10 font-weight-bold editBtn hand-cursor'
                              style={{
                                background: 'rgba(49, 88, 196, 1)',
                                color: '#FFFFFF'
                              }}
                            >
                              Edit Fee Slip
                            </button>
                          </div>
                        </div>
                      </div>
                    </span>
                  )}
                  {!canEdit && (
                    <span>
                      <div className='d-flex mb-20'>
                        <div className='d-flex flex-column'>
                          <label className='grey2color fs-14 w-100per d-flex mb-20'>
                            Enter section details
                          </label>
                          <div className='d-flex flex-wrap justify-space-between maxh-280 overflow-x-hidden overflow-y-auto w-100per mw-1070 maxw-1070'>
                            {[...Array(count)].map((a, index) => (
                              <div className='d-flex flex-column mb-30'>
                                <label className='grey2color fs-14 w-100per d-flex mb-20'>
                                  FIELD {index + 1}
                                </label>
                                <div className='d-flex'>
                                  <div className='d-flex flex-column mr-20'>
                                    <label className='fs-16 font-weight-bold mb-10'>
                                      Field Title
                                    </label>
                                    <TextField
                                      placeholder='Enter Title'
                                      className='search-input custom-white-input'
                                      style={{
                                        border: '1px solid #EBEBEB',
                                        background: '#FFFFFF'
                                      }}
                                    />
                                  </div>
                                  <div className='d-flex flex-column'>
                                    <label className='fs-16 font-weight-bold mb-10'>
                                      Amount (in INR)
                                    </label>
                                    <TextField
                                      placeholder='Enter Amount'
                                      className='search-input custom-white-input'
                                      style={{
                                        border: '1px solid #EBEBEB',
                                        background: '#FFFFFF'
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className='pb-40 checkbox-label'>
                        <FormControlLabel
                          value='+Add Discount'
                          control={
                            <Checkbox
                              value='inputchecked'
                              checked={checked}
                              onChange={handleChecked}
                              // color='default'
                              color='primary'
                              inputProps={{
                                'aria-label': 'secondary checkbox'
                              }}
                            />
                          }
                          label='+Add Discount'
                          labelPlacement='start'
                        />
                      </div>
                    </span>
                  )}
                  {checked && (
                    <span>
                      <div className='d-flex'>
                        <div className='d-flex flex-column mr-20 w-100per'>
                          <label className='fs-16 font-weight-bold mb-10'>
                            Coupon Code
                          </label>
                          <TextField
                            placeholder='Enter Code (for example:YOGSHEM50)'
                            className='search-input custom-white-input'
                            style={{
                              border: '1px solid #EBEBEB',
                              color: 'rgba(153, 153, 153, 1)',
                              background: '#F8F8F8'
                            }}
                          />
                        </div>
                        <div className='d-flex flex-column w-100per'>
                          <label className='fs-16 font-weight-bold mb-10'>
                            Amount (in INR)
                          </label>
                          <TextField
                            placeholder='Enter amount to be deducted as discount'
                            className='search-input custom-white-input'
                            style={{
                              border: '1px solid #EBEBEB',
                              color: 'rgba(153, 153, 153, 1)',
                              background: '#F8F8F8'
                            }}
                          />
                        </div>
                      </div>
                      <div className='d-flex flex-column w-100per pb-40 pt-40'>
                        <label className='fs-16 font-weight-bold mb-10'>
                          Coupon Description (optional)
                        </label>
                        <TextareaAutosize
                          rowsMin={3}
                          aria-label='maximum height'
                          className='br-20 pl-20 fs-16 grey2color'
                          placeholder='Enter Description'
                          defaultValue='Enter Description'
                          style={{
                            border: '1px solid #EBEBEB',
                            background: '#F8F8F8'
                          }}
                        />
                      </div>
                    </span>
                  )}
                  <div className='d-flex justify-space-between border-top-grey2 pt-40'>
                    <div className='font-weight-bold fs-16 d-flex flex-column'>
                      IMPORTANT NOTE:
                      <span className='redcolor mt-5'>
                        Don’t worry you can always come back and edit these
                        fields.
                      </span>
                    </div>
                    <button
                      onClick={handleClose}
                      className='border-0 br-20 pb-10 pl-20 pr-20 pt-10 addclass hand-cursor'
                    >
                      Save Details
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default SetupFees;
