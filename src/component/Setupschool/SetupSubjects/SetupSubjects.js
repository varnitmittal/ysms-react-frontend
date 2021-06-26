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
/* 
const useStyles = makeStyles(() => ({
  noBorder: {
    border: "none",
  },
}));

const TextInput = props => {
  const { onChange, type} = props;
  const classes = useStyles(); */

const SetupSubjects = () => {
  const items = [
    'Maths',
    'English',
    'Yoga',
    'Science',
    'Computers',
    'SocialScience',
    'Sanskrit',
    'Hindi',
    'French'
  ];
  const customGridItems = [
    {
      id: 1,
      col1: 'a',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col5: ['XII', 'XI', 'X', 'IX']
    },
    {
      id: 2,
      col1: 'b',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col5: ['XII', 'XI', 'X', 'IX']
    },
    {
      id: 3,
      col1: 'c',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col5: ['XII', 'XI', 'X', 'IX']
    },
    {
      id: 4,
      col1: 'd',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col5: ['XII', 'XI', 'X', 'IX']
    },
    {
      id: 5,
      col1: 'e',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col5: ['XII', 'XI', 'X', 'IX']
    },
    {
      id: 6,
      col1: 'f',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col5: ['XII', 'XI', 'X', 'IX']
    },
    {
      id: 7,
      col1: 'g',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col5: ['XII', 'XI', 'X', 'IX']
    },
    {
      id: 8,
      col1: 'h',
      col2: 'I-B',
      col3: 'Mr. aiddharth Jain',
      col4: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col5: ['XII', 'XI', 'X', 'IX']
    },
    {
      id: 9,
      col1: 'I',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col5: ['XII', 'XI', 'X', 'IX']
    },
    {
      id: 10,
      col1: 'j',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col5: ['XII', 'XI', 'X', 'IX']
    },
    {
      id: 11,
      col1: 'k',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col5: ['XII', 'XI', 'X', 'IX']
    },
    {
      id: 12,
      col1: 'l',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col5: ['XII', 'XI', 'X', 'IX']
    },
    {
      id: 13,
      col1: 'm',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col5: ['XII', 'XI', 'X', 'IX']
    },
    {
      id: 14,
      col1: 'n',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col5: ['XII', 'XI', 'X', 'IX']
    },
    {
      id: 15,
      col1: 'I',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col5: ['XII', 'XI', 'X', 'IX']
    },
    {
      id: 16,
      col1: 'z',
      col2: 'I-A',
      col3: 'Mr. Siddharth Jain',
      col4: [
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain',
        'Mr. Siddharth Jain'
      ],
      col5: ['XII', 'XI', 'X', 'IX']
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
        person.id
          .toString()
          .toLowerCase()
          .indexOf(searchTable.toString().toLowerCase()) >= 0 ||
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
<div className='p-30 d-flex align-items-center justify-space-between' >
        <div style = {{border:'1px solid #EBEBEB', borderRadius: '30px', background: '#F8F8F8'}}>
          <TextField
          id='input-with-icon-textfield'
          placeholder='Search subjects...'
          onChange={searchtableChange}
          className='search-input'
          disableUnderline={true}
          style={{
             background: 'transparent', 
             border: 'none',
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center' 
             /* zIndex: '1', 
             border: '0px !important',
             outline: 'none !important',
             background: 'transparent !important',
             alignContent: 'center',
             boxShadow: 'inset 0px 0px 0px 0px red',
             textShadow: 'none !important'
             
             border: '1px solid #EBEBEB',
            background: '#F8F8F8 !important' */
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
      {/* <div className='p-30 d-flex align-items-center justify-space-between'>
        <TextField
          id='input-with-icon-textfield'
          placeholder='Search subjects...'
          onChange={searchtableChange}
          className='search-input'
          style={{
            border: '1px solid #EBEBEB',
            background: '#F8F8F8 !important'
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            )
          }}
        /> */}
        {filterItems(customGridItems).length ? (
          <div className='d-flex align-items-center'>
            <button
              onClick={handleOpen}
              className='br-20 ml-30 fs-18 pb-10 pl-20 pr-20 pt-10 border-0 outline-none hand-cursor newSetupBtn'
            >
              Edit Subjects
            </button>
          </div>
        ) : null}
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
            + Setup Subjects
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
          style={{ background: 'rgba(248, 248, 248, 1)' }}
        >
          <form>
            <div
              className='d-flex align-items-center border-bottom-grey2 pb-20 mb-20 w-100per'
              style={{ borderBottom: 'none' }}
            >
              <h2 className='fs-20 d-flex w-100per font-weight-bold'>
                Setup Subjects
              </h2>
              <label className='fs-16 font-weight-bold mr-20 ml-50 text-nowrap'>
                Number of fields
              </label>
              <div
                className='d-flex flex1 justify-space-between w-177 fs-16 bg-white mw-287 h-42 border-grey2 br-20 p-10 align-items-center font-weight-bold'
                style={{
                  width: 'auto',
                  background: '#FFFFFF',
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
            <div className='d-flex flex-column mb-30'>
              <div className='overflow-y-auto overflow-x-hidden maxh-400'>
                <div className='d-flex flex-wrap w-700 justify-space-between'>
                  {[...Array(count)].map((a, index) => (
                    <div
                      className='d-flex flex-column'
                      style={{ width: '10vw' }}
                    >
                      <label className='grey2color fs-14 w-100per d-flex mb-20'>
                        SUBJECT {index + 1}
                      </label>
                      <label className='fs-16 font-weight-bold mb-10'>
                        Subject Name
                      </label>
                      <Select
                        IconComponent={() => <KeyboardArrowDownIcon />}
                        id='classlist'
                        className='custom-choose-select custom-white-select'
                        name='classlist'
                        displayEmpty
                        defaultValue='none'
                        value={state.values[index]}
                        onChange={handleSelectChange.bind(this, index)}
                        style={{
                          width: 'auto',
                          background: '#FFFFFF',
                          border: '1px solid #EBEBEB'
                        }}
                      >
                        <MenuItem value='none' disabled>
                          Choose Subject
                        </MenuItem>
                        {items.map((item) => (
                          <MenuItem value={item} enabled>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='d-flex justify-flex-end'>
              <button
                onClick={handleClose}
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

export default SetupSubjects;
