import React, { useState } from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import { Style } from '../../LandingPage/pricingModel/Styles';
import { makeStyles } from '@material-ui/core';
import { Modal } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Select } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';

const useSortableData = (customGridItems, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...customGridItems];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [customGridItems, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { customGridItems: sortedItems, requestSort, sortConfig };
};

const CustomGrid = (props) => {
  const { customGridItems, requestSort } = useSortableData(
    props.customGridItems
  );

  const items = ['1', '2', '3', '1', '2', '3'];

  const [pricingToggle, setPricingToggle] = useState(false);
  const handleToggle = () => {
    if (pricingToggle === false) {
      setPricingToggle(true);
    } else if (pricingToggle === true) {
      setPricingToggle(false);
    }
  };

  const [deletePopupOpenBit, setDeletePopupOpenBit] = useState(false);
  const [newCategoryPopupOpenBit, setNewCategoryPopupOpenBit] = useState(false);
  const [claassValue, setChooseValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const newCategoryOpen = () => {
    setNewCategoryPopupOpenBit(true);
  };

  const newCategoryClose = () => {
    setNewCategoryPopupOpenBit(false);
  };

  const deletePopupOpen = () => {
    setDeletePopupOpenBit(true);
  };

  const deletePopupClose = () => {
    setDeletePopupOpenBit(false);
  };

  const handleChangeChooseValue = (event) => {
    setChooseValue(event.target.value);
  };
  const handleChangeChooseCategoryValue = (event) => {
    setCategoryValue(event.target.value);
  };

  const classes = makeStyles(Style())();

  const array1 = ['Date of Birth', 'Birth', 'Gender', 'Phone Number'];
  const array2 = ['Address', 'Height', 'Blood Group', 'Weight'];
  const array4 = ['Email', 'Category', 'Country', 'State', 'Aadhar Card'];
  const array3 = [
    'Attendance',
    'About Students',
    'Homework',
    'Fees Record',
    'Notice Board'
  ];

  return (
    <div>
      <div
        className='table-responsive'
        style={{
          height: '60vh',
          width: '83vw',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            width: '80vw',
            height: '10vh',
            display: 'flex',
            flexDirection: 'row',
            fontSize: 25,
            marginTop: '2vh'
          }}
        >
          <div
            style={{
              width: '50vw',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center'
            }}
          >
            <p
              style={{
                fontSize: '16px',
                color: 'grey',
                letterSpacing: '5px',
                width: '25vw',
                marginBottom: 15
              }}
            >
              PAYMENT
            </p>
            <div
              style={{
                width: '25vw'
              }}
            >
              Who will pay for subscriptions?
            </div>
          </div>
          <div
            style={{
              width: '50vw',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignContent: 'center',
              alignItems: 'center',
              padding: 30
            }}
          >
            <div
              className={
                pricingToggle
                  ? `${classes.schoolPays1} ml-5  text-lg`
                  : `${classes.schoolPays2} ml-5  text-lg font-bold`
              }
              style={{
                fontSize: 18
              }}
            >
              School pays
            </div>
            <label
              htmlFor='toggle'
              className={`flex items-center cursor-pointer ml-5`}
              style={{
                fontSize: 25
              }}
            >
              <div className='relative'>
                <input
                  type='checkbox'
                  id='toggle'
                  className={`${classes.srOnly}`}
                  onClick={() => handleToggle()}
                />
                <div className={`${classes.srOnly1} block rounded-full`}></div>
                {pricingToggle ? (
                  <div
                    className={`${classes.srOnly2} absolute bg-white rounded-full transition`}
                  ></div>
                ) : (
                  <div
                    className={`${classes.srOnly0} absolute bg-white rounded-full transition`}
                  ></div>
                )}
              </div>
            </label>
            <div
              className={
                pricingToggle
                  ? `${classes.studentPays1} ml-5 font-bold text-lg capitalize`
                  : `${classes.studentPays2} ml-5 text-lg capitalize`
              }
              style={{
                fontSize: 18
              }}
            >
              Student pays
            </div>
          </div>
        </div>
        <div
          style={{
            width: '80vw',
            height: '15vh',
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <div
            style={{
              width: '50vw',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              fontSize: 25
            }}
          >
            <p
              style={{
                fontSize: '16px',
                color: 'grey',
                letterSpacing: '5px',
                width: '25vw',
                marginBottom: 15
              }}
            >
              CHAT
            </p>
            <div
              style={{
                width: '25vw'
              }}
            >
              Chat duration for parents
            </div>
          </div>
          <div
            style={{
              width: '50vw',
              display: 'flex',
              justifyContent: 'flex-end',
              alignContent: 'center',
              alignItems: 'center',
              padding: 30
            }}
          >
            <div
              style={{
                fontSize: 16,
                padding: 20,
                borderRadius: 30,
                border: 'none',
                backgroundColor: '#F3F4F6',
                color: 'gray',
                marginRight: 30
              }}
            >
              Starting time
            </div>
            <div
              style={{
                fontSize: 16,
                padding: 20,
                borderRadius: 30,
                border: 'none',
                backgroundColor: '#F3F4F6',
                color: 'gray'
              }}
            >
              Ending time
            </div>
          </div>
        </div>
        <div
          style={{
            width: '80vw',
            height: '15vh',
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <div
            style={{
              width: '50vw',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              fontSize: 25
            }}
          >
            <p
              style={{
                fontSize: '16px',
                color: 'grey',
                letterSpacing: '5px',
                width: '25vw',
                marginBottom: 15
              }}
            >
              ACCESS
            </p>
            <div
              style={{
                width: '25vw',
                marginBottom: 15
              }}
            >
              Student Details
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '25vw'
              }}
            >
              <div
                style={{
                  borderRadius: 20,
                  padding: 15,
                  fontSize: 16,
                  color: 'gray',
                  backgroundColor: '#F3F4F6'
                }}
              >
                {'Complete Details >'}
              </div>
              <div
                style={{
                  borderRadius: 20,
                  padding: 15,
                  fontSize: 16,
                  color: 'gray',
                  backgroundColor: '#F3F4F6',
                  marginLeft: 30
                }}
              >
                {'Partial Details >'}
              </div>
            </div>
          </div>
          <div
            style={{
              width: '50vw',
              display: 'flex',
              justifyContent: 'flex-end',
              alignContent: 'center',
              alignItems: 'center'
            }}
          >
            <div style={{ fontSize: 25 }}>
              <button
                onClick={newCategoryOpen}
                style={{
                  padding: 12,
                  borderRadius: 20,
                  color: 'white',
                  backgroundColor: 'blue',
                  width: '10vw',
                  marginRight: 40,
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 15
                }}
              >
                {'+ New Category'}
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            width: '80vw',
            height: '15vh',
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <div
            style={{
              width: '50vw',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              fontSize: 25
            }}
          >
            <p
              style={{
                fontSize: '16px',
                color: 'grey',
                letterSpacing: '5px',
                width: '25vw',
                marginBottom: 15
              }}
            >
              ROLES
            </p>
            <div
              style={{
                width: '25vw',
                marginBottom: 15
              }}
            >
              Staff Features
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '25vw'
              }}
            >
              <div
                style={{
                  borderRadius: 20,
                  padding: 15,
                  fontSize: 16,
                  color: 'gray',
                  backgroundColor: '#F3F4F6'
                }}
              >
                {' Class Teacher >'}
              </div>
              <div
                style={{
                  borderRadius: 20,
                  padding: 15,
                  fontSize: 16,
                  color: 'gray',
                  backgroundColor: '#F3F4F6',
                  marginLeft: 20
                }}
              >
                {'Subject Teacher >'}
              </div>
            </div>
          </div>
          <div
            style={{
              width: '50vw',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignContent: 'center',
              alignItems: 'center'
            }}
          >
            <div style={{ fontSize: 25, marginRight: 40 }}>
              <button
                onClick={deletePopupOpen}
                style={{
                  padding: 12,
                  borderRadius: 20,
                  color: 'white',
                  backgroundColor: 'blue',
                  width: '10vw',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 15
                }}
              >
                {'+ New role'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={newCategoryPopupOpenBit}
        onClose={newCategoryClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        className='d-flex align-items-center justify-center'
      >
        <div
          className='bg-grey br-20 d-flex flex-column p-30 w-400'
          style={{ width: '35vw', background: 'rgba(248, 248, 248, 1)' }}
        >
          <h2 className='fs-20 d-flex w-100per font-weight-bold'>
            New Category
          </h2>
          <div className='fs-18 pb-40 pt-40'>
            <h3>Title</h3>
            <TextField
              placeholder='Enter Title'
              className='search-input custom-white-input '
              style={{
                border: 'none',
                width: '20vw',
                marginTop: 10,
                marginBottom: 15
              }}
            />
            <h3 style={{ marginBottom: 20 }}>Choose details user can view</h3>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {array1.map((item) => (
                  <div
                    style={{
                      border: '1px solid',
                      padding: '10px',
                      borderRadius: '20px',
                      border: 'none',
                      backgroundColor: 'white',
                      color: 'grey',
                      marginBottom: 10
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div>
                {array2.map((item) => (
                  <div
                    style={{
                      border: '1px solid',
                      padding: '10px',
                      borderRadius: '20px',
                      border: 'none',
                      backgroundColor: 'white',
                      color: 'grey',
                      marginBottom: 10
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div>
                {array4.map((item) => (
                  <div
                    style={{
                      border: '1px solid',
                      padding: '10px',
                      borderRadius: '20px',
                      border: 'none',
                      backgroundColor: 'white',
                      color: 'grey',
                      marginBottom: 10
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='d-flex justify-flex-end'>
            <button
              onClick={newCategoryClose}
              style={{
                color: 'blue',
                border: 'none',
                marginRight: 15,
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
            <button
              onClick={newCategoryClose}
              className='mr-20 border-0 br-20 pb-10 pl-20 pr-20 pt-10 bg-blue whitecolor hand-cursor'
            >
              Save Details
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        open={deletePopupOpenBit}
        onClose={deletePopupClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        className='d-flex align-items-center justify-center'
      >
        <div
          className='bg-grey br-20 d-flex flex-column p-30 w-400'
          style={{ width: '25vw', background: 'rgba(248, 248, 248, 1)' }}
        >
          <h2 className='fs-20 d-flex w-100per font-weight-bold'>New Role</h2>
          <div className='fs-18 pb-40 pt-40'>
            <h3>Title</h3>
            <TextField
              placeholder='Enter Teacher type'
              className='search-input custom-white-input'
              style={{
                border: 'none',
                marginTop: 10,
                marginBottom: 10,
                width: '20vw'
              }}
            />
            <h3>Choose One</h3>
            <Select
              IconComponent={() => <KeyboardArrowDownIcon />}
              id='classlist'
              className='custom-choose-select custom-white-select mw-240'
              name='classlist'
              displayEmpty
              value={claassValue}
              onChange={handleChangeChooseValue}
              style={{
                border: 'none',
                marginTop: 10,
                marginBottom: 10,
                width: '20vw'
              }}
            >
              <MenuItem value={''}>App Features</MenuItem>
              {items.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
            <h3>Choose features user can access</h3>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
                height: '30vh',
                display: 'flex',
                flexDirection: 'column',
                marginBottom: 30
              }}
            >
              {array3.map((item) => (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Checkbox color='primary' size='medium' />
                  <div style={{ width: '15vw' }}>{item}</div>
                  <div
                    style={{
                      marginLeft: 20,
                      width: '10vw',
                      border: '1px solid gray',
                      borderRadius: 20,
                      padding: 5,
                      display: 'flex',
                      justifyContent: 'center',
                      color: 'blue',
                      fontSize: 15,
                      alignContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    can view
                    <ExpandMoreIcon fontSize='large' />
                  </div>
                </div>
              ))}
            </div>
            <h3>Choose category</h3>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20
              }}
            >
              <div
                style={{
                  border: 'none',
                  color: 'gray',
                  backgroundColor: 'white',
                  padding: 20,
                  borderRadius: 25,
                  fontSize: 18
                }}
              >
                Complete Details
              </div>
              <div
                style={{
                  border: 'none',
                  color: 'gray',
                  backgroundColor: 'white',
                  padding: 20,
                  borderRadius: 25,
                  fontSize: 18
                }}
              >
                Partial Details
              </div>
            </div>
          </div>
          <div className='d-flex justify-flex-end'>
            <button
              onClick={deletePopupClose}
              style={{
                color: 'blue',
                border: 'none',
                marginRight: 15,
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
            <button
              onClick={deletePopupClose}
              className='mr-20 border-0 br-20 pb-10 pl-20 pr-20 pt-10 bg-blue whitecolor hand-cursor'
            >
              Save Details
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CustomGrid;
