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
//import { fetchSetupClasses } from '../../../store/actions/SetupClassAction';

const SetupClasses = () => {
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
  const teachers = [
    'Ms.Arpita Roy',
    'Ms.Rosy Arora',
    'Ms.Arpita Roy',
    'Ms.Arpita Roy',
    'Ms.Arpita Roy'
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
  const customGridItems = [
    {
      col1: 'a',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: 34,
      col5: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col6: ['L.K.G-A', 'L.K.G-B', 'L.K.G-C', 'L.K.G-D'],
      col7: [34, 32, 40, 41]
    },
    {
      col1: 'b',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: 34,
      col5: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col6: ['L.K.G-A', 'L.K.G-B', 'L.K.G-C', 'L.K.G-D'],
      col7: [34, 32, 40, 41]
    },
    {
      col1: 'c',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: 34,
      col5: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col6: ['L.K.G-A', 'L.K.G-B', 'L.K.G-C', 'L.K.G-D'],
      col7: [34, 32, 40, 41]
    },
    {
      col1: 'd',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: 34,
      col5: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col6: ['L.K.G-A', 'L.K.G-B', 'L.K.G-C', 'L.K.G-D'],
      col7: [34, 32, 40, 41]
    },
    {
      col1: 'e',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: 34,
      col5: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col6: ['L.K.G-A', 'L.K.G-B', 'L.K.G-C', 'L.K.G-D'],
      col7: [34, 32, 40, 41]
    },
    {
      col1: 'f',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: 34,
      col5: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col6: ['L.K.G-A', 'L.K.G-B', 'L.K.G-C', 'L.K.G-D'],
      col7: [34, 32, 40, 41]
    },
    {
      col1: 'g',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: 34,
      col5: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col6: ['L.K.G-A', 'L.K.G-B', 'L.K.G-C', 'L.K.G-D'],
      col7: [34, 32, 40, 41]
    },
    {
      col1: 'h',
      col2: 'I-B',
      col3: 'Mr. aiddharth Jain',
      col4: 34,
      col5: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col6: ['L.K.G-A', 'L.K.G-B', 'L.K.G-C', 'L.K.G-D'],
      col7: [34, 32, 40, 41]
    },
    {
      col1: 'I',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: 4,
      col5: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col6: ['L.K.G-A', 'L.K.G-B', 'L.K.G-C', 'L.K.G-D'],
      col7: [34, 32, 40, 41]
    },
    {
      col1: 'j',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: 34,
      col5: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col6: ['L.K.G-A', 'L.K.G-B', 'L.K.G-C', 'L.K.G-D'],
      col7: [34, 32, 40, 41]
    },
    {
      col1: 'k',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: 34,
      col5: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col6: ['L.K.G-A', 'L.K.G-B', 'L.K.G-C', 'L.K.G-D'],
      col7: [34, 32, 40, 41]
    },
    {
      col1: 'l',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: 34,
      col5: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col6: ['L.K.G-A', 'L.K.G-B', 'L.K.G-C', 'L.K.G-D'],
      col7: [34, 32, 40, 41]
    },
    {
      col1: 'm',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: 34,
      col5: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col6: ['L.K.G-A', 'L.K.G-B', 'L.K.G-C', 'L.K.G-D'],
      col7: [34, 32, 40, 41]
    },
    {
      col1: 'n',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: 34,
      col5: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col6: ['L.K.G-A', 'L.K.G-B', 'L.K.G-C', 'L.K.G-D'],
      col7: [34, 32, 40, 41]
    },
    {
      col1: 'I',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: 34,
      col5: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col6: ['L.K.G-A', 'L.K.G-B', 'L.K.G-C', 'L.K.G-D'],
      col7: [34, 32, 40, 41]
    },
    {
      col1: 'z',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: 34,
      col5: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col6: ['L.K.G-A', 'L.K.G-B', 'L.K.G-C', 'L.K.G-D'],
      col7: [34, 32, 40, 41]
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
            <MenuItem value={''}>Choose Class</MenuItem>
            {items.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
          {filterItems(customGridItems).length ? (
            <button
              onClick={handleOpen}
              className='br-20 ml-30 fs-18 pb-10 pl-20 pr-20 pt-10 border-0 outline-none hand-cursor newSetupBtn'
            >
              + Setup New Class
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
            + Setup New Class
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
            border: '1px solid',
            width: '50vw',
            height: '80vh',
            background: '#F8F8F8'
          }}
        >
          <h2 className='fs-20 d-flex w-100per font-weight-bold mb-30'>
            Setup New Class
          </h2>
          <form>
            <div
              className='d-flex align-items-center border-bottom-grey2 pb-20 mb-20 w-100per'
              style={{ borderBottom: '1px solid var(--grey)' }}
            >
              <label className='fs-16 font-weight-bold mr-20'>Class name</label>
              <Select
                IconComponent={() => <KeyboardArrowDownIcon />}
                id='classlist'
                className='custom-choose-select custom-white-select'
                name='classlist'
                displayEmpty
                defaultValue='none'
                // value={state.values[index]}
                // onChange={handleSelectChange.bind(this, index)}
                style={{
                  width: 'auto',
                  background: '#FFFFFF',
                  border: '1px solid #EBEBEB'
                }}
              >
                <MenuItem value='none' disabled>
                  Choose class
                </MenuItem>
                {items.map((item) => (
                  <MenuItem value={item} enabled>
                    {item}
                  </MenuItem>
                ))}
              </Select>
              <label className='fs-16 font-weight-bold mr-20 ml-50'>
                Number of sections
              </label>
              <div
                className='d-flex flex1 justify-space-between w-177 fs-16 bg-white h-42 border-grey2 br-20 p-10 align-items-center font-weight-bold'
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
                <div className='d-flex flex-column mb-30'>
                  <div
                    className='overflow-y-auto overflow-x-hidden maxh-400'
                    style={{
                      width: '45vw',
                      padding: '1vw',
                      height: '35vh'
                    }}
                  >
                    <div
                      className='d-flex flex-wrap w-700 justify-space-between'
                      style={{ width: '100%', marginLeft: '-18px' }}
                    >
                      {[...Array(count)].map((a, index) => (
                        <div
                          className='d-flex flex-column mb-50'
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '20vw'
                          }}
                        >
                          <div className='d-flex flex-column mr-20'>
                            <label className='fs-16 font-weight-bold mb-10'>
                              Section Name
                            </label>
                            <TextField
                              placeholder='Enter section name'
                              className='search-input custom-white-input'
                              style={{
                                width: 'auto',
                                background: '#FFFFFF',
                                border: '1px solid #EBEBEB'
                              }}
                            />
                          </div>
                          <div
                            className='d-flex flex-column'
                            style={{ width: '10vw' }}
                          >
                            <label className='fs-16 font-weight-bold mb-10'>
                              Class Teacher
                            </label>
                            <Select
                              IconComponent={() => <KeyboardArrowDownIcon />}
                              id='classlist'
                              className='custom-choose-select custom-white-select'
                              name='classlist'
                              displayEmpty
                              defaultValue='none'
                              /* value={claassValue} */
                              value={state.values[index]}
                              onChange={handleSelectChange.bind(this, index)}
                              /* onChange={handleChangeChooseValue} */
                              style={{
                                width: 'auto',
                                background: '#FFFFFF',
                                border: '1px solid #EBEBEB'
                              }}
                            >
                              <MenuItem value='none' disabled>
                                Choose teacher
                              </MenuItem>
                              {teachers.map((item) => (
                                <MenuItem value={item}>{item}</MenuItem>
                              ))}
                            </Select>
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
                  Teacher list will be displayed after you added employees in
                  the teacher section.
                </span>
              </div>
              <button
                onClick={handleClose}
                className='border-0 br-20 pb-10 pl-20 pr-20 pt-10 addclass hand-cursor'
                style={{ color: 'white' }}
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

export default SetupClasses;
