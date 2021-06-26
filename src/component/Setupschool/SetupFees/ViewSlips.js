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

const ViewSlips = (props) => {
  const items = [
    'Quarter 1',
    'Quarter 2',
    'Quarter 3',
    'Half-Yearly 1',
    'Half-Yearly 2',
    'Half-Yearly 3'
  ];
  let [searchTable, setSearchTable] = useState('');
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

  const setBack = () => {
    props.setViewSlip(false);
  };
  return (
    <>
      <div>
        <div
          style={{
            fontSize: 12,
            marginLeft: '5vw',
            padding: 20,
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <div
            style={{ marginRight: 25, marginLeft: '-60px', cursor: 'pointer' }}
            onClick={() => setBack()}
          >
            {'< Back'}
          </div>
          <div style={{ color: '#666666' }}>{'Fees'}</div>
          <div style={{ color: '#999999', marginLeft: 5 }}>{'>   Class 1'}</div>
        </div>
        <div
          className='p-30 d-flex align-items-center justify-space-between'
          style={{
            width: ' 80vw',
            display: ' flex',
            justifyContent: 'center',
            background: 'transparent'
          }}
        >
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
                style={{ background: 'rgba(49, 88, 196, 1)', color: '#FFFFFF' }}
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
                style={{ background: 'rgba(49, 88, 196, 1)', color: '#FFFFFF' }}
              >
                Edit Fee Slip
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewSlips;
