import React, { useEffect } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CustomGrid from './CustomGrid';
import noitem from '../../../assets/img/noitem.svg';
import Modal from '@material-ui/core/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { getCustomer } from '../../../store/actions/CustomersAction';

const ActiveUsers = () => {
  const customGridItems = useSelector(
    (state) =>
      state.CustomersState?.list?.filter((item) => item.status === 0) || []
  );
  const dispatch = useDispatch();
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
  // useEffect(() => {
  //     dispatch(fetchSetupClasses);
  //     console.log(SetupClassState)
  // }, [])
  const Subjects = [
    'English',
    'Maths',
    'Science',
    'Hindi',
    'Socials',
    'Computers',
    'Geography',
    'Sanskrit',
    'P.E',
    'Physics',
    'Chemistry',
    'Biology',
    'Civics',
    'Art',
    'Economics',
    'History'
  ];

  let [searchTable, setSearchTable] = React.useState('');
  let searchtableChange = (e) => {
    setSearchTable(e.target.value);
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        person.title
          .toString()
          .toLowerCase()
          .indexOf(searchTable.toString().toLowerCase()) >= 0 ||
        person.title
          .toString()
          .toLowerCase()
          .indexOf(searchTable.toString().toLowerCase()) >= 0 ||
        person.title
          .toString()
          .toLowerCase()
          .indexOf(searchTable.toString().toLowerCase()) >= 0 ||
        person.title.toString().toLowerCase().indexOf(searchTable) >= 0
      );
    });
  };
  const [isDisplayed, setIsDisplayed] = React.useState(false);
  const toggleShowHide = () => {
    setIsDisplayed({ isDisplayed: !isDisplayed });
  };
  const [state, setState] = React.useState({ values: [] });

  const handleSelectChange = (i, e) => {
    setState({
      values: { ...state.values, [i]: e.target.value }
    });
  };
  useEffect(() => {
    dispatch(getCustomer());
  }, [dispatch]);
  return (
    <>
      <div className='p-30 d-flex align-items-center justify-space-between'>
        <TextField
          id='input-with-icon-textfield'
          placeholder='Search School...'
          onChange={searchtableChange}
          className='search-input'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
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
            className='fs-18 br-20 mlr-auto mt-20 d-block fs-18 pb-10 pl-20 pr-20 pt-10 border-0 outline-none hand-cursor newSetupBtn'
          >
            New Customer
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
        <div className='bg-grey br-20 d-flex p-30 flex-column'>
          <h2 className='fs-20 d-flex w-100per font-weight-bold mb-30'>
            Setup New Class
          </h2>
          <form>
            <div className='d-flex align-items-center border-bottom-grey2 pb-20 mb-20 w-100per'>
              <label className='fs-16 font-weight-bold mr-20'>Class name</label>
              <TextField
                placeholder='Enter class name'
                className='search-input custom-white-input biginput'
              />
              <label className='fs-16 font-weight-bold mr-20 ml-50'>
                Number of sections
              </label>
              <div className='d-flex flex1 justify-space-between w-177 fs-16 bg-white h-42 border-grey2 br-20 p-10 align-items-center font-weight-bold'>
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
            <div className='d-flex mb-20'>
              <div className='d-flex flex-column mr-50'>
                <label className='grey2color fs-14 w-100per d-flex mb-20'>
                  Enter section details
                </label>
                <div className='overflow-y-auto overflow-x-hidden maxh-280'>
                  {[...Array(count)].map((a, index) => (
                    <div className='d-flex mb-20'>
                      <div className='d-flex flex-column mr-20'>
                        <label className='fs-16 font-weight-bold mb-10'>
                          Section Name
                        </label>
                        <TextField
                          placeholder='Enter section name'
                          className='search-input custom-white-input'
                        />
                      </div>
                      <div className='d-flex flex-column'>
                        <label className='fs-16 font-weight-bold mb-10'>
                          Class Teacher
                        </label>
                        <Select
                          IconComponent={() => <KeyboardArrowDownIcon />}
                          id='classlist'
                          className='custom-choose-select custom-white-select'
                          name={state.values[index]}
                          displayEmpty
                          value={state.values[index]}
                          onChange={handleSelectChange.bind(this, index)}
                        >
                          <MenuItem value={''}>Choose teacher</MenuItem>
                          {items.map((item) => (
                            <MenuItem value={item}>{item}</MenuItem>
                          ))}
                        </Select>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='d-flex flex-column'>
                <label className='grey2color fs-14 w-100per d-flex mb-20'>
                  Enter SUBJECT details
                </label>
                <label className='fs-16 font-weight-bold mb-10'>
                  Subjects to be taught
                </label>
                <div className='d-flex flex-wrap w-400 justify-space-between'>
                  {Subjects.map((subject, index) => (
                    <div>
                      <input
                        id={subject + index}
                        className='subject-input d-none'
                        type='checkbox'
                      />
                      <label for={subject + index} className='subject-label'>
                        <span
                          onClick={toggleShowHide}
                          className='activeSubject bg-light-blue2 bluecolor font-weight-bold br-20 align-items-center justify-center h-50 fs-14 w-90 mw-90 mb-10'
                        >
                          {subject}
                        </span>
                        <span
                          onClick={toggleShowHide}
                          className='notActiveSubject bg-white font-weight-bold br-20 align-items-center justify-center h-50 fs-14 w-90 mw-90 mb-10'
                        >
                          {subject}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='d-flex justify-space-between'>
              <div className='font-weight-bold fs-16 d-flex flex-column'>
                IMPORTANT NOTE:
                <span className='redcolor mt-5'>
                  Teacher list will be displayed after you added employees in
                  the teacher section.
                </span>
              </div>
              <button
                onClick={handleClose}
                className='fs-18 border-0 br-20 pb-10 pl-20 pr-20 pt-10 addclass hand-cursor'
              >
                Add Class and continue
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ActiveUsers;
