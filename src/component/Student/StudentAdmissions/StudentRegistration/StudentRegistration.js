import React from 'react';
import TextField from '@material-ui/core/TextField';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import upload from '../../../../assets/img/upload.svg';

const StudentRegistration = () => {
  const status = ['Accepted', 'Denied', 'All requests'];

  const [claassValue, setChooseValue] = React.useState('');
  const handleChangeChooseValue = (event) => {
    setChooseValue(event.target.value);
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const hiddenFileInput = React.useRef(null);
  const handleFile = (event) => {};
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChangeUpload = (event) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };
  return (
    <div style={{ width: '100vw', padding: '30px' }}>
      <div className='fs-16 font-weight-bold mt-5 mb-30 grey2color'>
        Admissions > Class XII A
      </div>

      <div className='d-flex align-items-center justify-space-between mb-30'>
        <div className='fs-20 font-weight-bold'>
          Complete Registration Details
        </div>
        <div className='d-flex align-items-center'>
          <button
            onClick={handleOpen}
            className='br-20 ml-30 fs-18 pb-10 pl-20 pr-20 pt-10 border-0 outline-none hand-cursor newSetupBtn'
          >
            Export data
          </button>
        </div>
      </div>
      <div className='d-flex'>
        <div className='d-flex flex-column flex2 mr-50'>
          <div className='studentRegistrationbg w-100per p-30'>
            <div className='fs-20 font-weight-bold redcolor mb-30'>
              Demographic Details
            </div>
            <div className='d-flex w-100per'>
              <div className='d-flex flex-column mb-30 mr-15 w-100per'>
                <label className='fs-16 font-weight-bold mb-10'>
                  Full Name*
                </label>
                <TextField
                  placeholder='Enter Full Name'
                  className='search-input custom-grey-input border-input-none'
                />
              </div>
              <div className='d-flex flex-column mb-30 ml-15 w-100per'>
                <label className='fs-16 font-weight-bold mb-10'>
                  Date of Birth*
                </label>
                <TextField
                  placeholder='Enter D.O.B (dd/mm/yyyy)'
                  className='search-input custom-grey-input border-input-none'
                />
              </div>
            </div>
            <div className='d-flex w-100per'>
              <div className='d-flex flex-column mb-30 mr-15 w-100per'>
                <label className='fs-16 font-weight-bold mb-10'>
                  Phone Number*
                </label>
                <TextField
                  placeholder='Enter Phone Number'
                  className='search-input custom-grey-input border-input-none'
                />
              </div>
              <div className='d-flex flex-column mb-30 ml-15 w-100per'>
                <label className='fs-16 font-weight-bold mb-10'>Gender*</label>
                <div className='d-flex justify-space-between'>
                  <div className='fs-18 grey2color d-flex border-grey2 br-20 p-15 pl-50 pr-50'>
                    Male
                  </div>
                  <div className='fs-18 grey2color d-flex border-grey2 br-20 p-15 pl-50 pr-50'>
                    Female
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex w-100per'>
              <div className='d-flex flex-column mb-30 mr-15 w-100per'>
                <label className='fs-16 font-weight-bold mb-10'>
                  Enter residential address*
                </label>
                <TextareaAutosize
                  aria-label='minimum height'
                  rowsMin={4}
                  rowsMax={4}
                  className='br-20 p-10 custom-grey-input border-input-none border-grey3 font-family-SF fs-16'
                  placeholder='Enter residential address'
                />
              </div>
              <div className='d-flex flex-column mb-30 ml-15 w-100per'>
                <label className='fs-16 font-weight-bold mb-10'>
                  Add photo*
                </label>
                <div>
                  <div
                    className='d-flex align-items-center bg-grey3 hand-cursor br-20 p-15'
                    onClick={handleClick}
                  >
                    <img src={upload} className='mr-20' alt='upload' />
                    <div>
                      <div className='fs-18 font-weight-bold'>
                        Upload a picture
                      </div>
                      <div className='mt-5 fs-16'>(.jpeg, .png, .jpg)</div>
                    </div>
                  </div>
                  <input
                    type='file'
                    ref={hiddenFileInput}
                    onChange={handleChangeUpload}
                    style={{ display: 'none' }}
                  />
                </div>
              </div>
            </div>
            <div className='d-flex w-100per'>
              <div className='d-flex flex-column mb-30 mr-15 w-100per'>
                <label className='fs-16 font-weight-bold mb-10'>
                  Email address*
                </label>
                <TextField
                  placeholder='Enter Email address'
                  className='search-input custom-grey-input border-input-none'
                />
              </div>
              <div className='d-flex flex-column mb-30 ml-15 w-100per'>
                <label className='fs-16 font-weight-bold mb-10'>
                  Choose Religion*
                </label>
                <Select
                  IconComponent={() => <KeyboardArrowDownIcon />}
                  id='classlist'
                  className='custom-choose-select custom-grey-select border-input-none mw-100per'
                  name='classlist'
                  displayEmpty
                  value={claassValue}
                  onChange={handleChangeChooseValue}
                >
                  <MenuItem value={''}>Select religion</MenuItem>
                  {status.map((statusval) => (
                    <MenuItem value={statusval}>{statusval}</MenuItem>
                  ))}
                </Select>
              </div>
            </div>
            <div className='d-flex w-100per'>
              <div className='d-flex flex-column mb-30 mr-15 w-100per'>
                <label className='fs-16 font-weight-bold mb-10'>
                  Choose Category*
                </label>
                <Select
                  IconComponent={() => <KeyboardArrowDownIcon />}
                  id='classlist'
                  className='custom-choose-select custom-grey-select border-input-none mw-100per'
                  name='classlist'
                  displayEmpty
                  value={claassValue}
                  onChange={handleChangeChooseValue}
                >
                  <MenuItem value={''}>Select catogery</MenuItem>
                  {status.map((statusval) => (
                    <MenuItem value={statusval}>{statusval}</MenuItem>
                  ))}
                </Select>
              </div>
              <div className='d-flex flex-column mb-30 ml-15 w-100per'>
                <label className='fs-16 font-weight-bold mb-10'>Height</label>
                <TextField
                  placeholder='Enter height (in cms)'
                  className='search-input custom-grey-input border-input-none'
                />
              </div>
            </div>
            <div className='d-flex w-100per'>
              <div className='d-flex flex-column mb-30 mr-15 w-100per'>
                <label className='fs-16 font-weight-bold mb-10'>
                  Choose Country*
                </label>
                <Select
                  IconComponent={() => <KeyboardArrowDownIcon />}
                  id='classlist'
                  className='custom-choose-select custom-grey-select border-input-none mw-100per'
                  name='classlist'
                  displayEmpty
                  value={claassValue}
                  onChange={handleChangeChooseValue}
                >
                  <MenuItem value={''}>Select country</MenuItem>
                  {status.map((statusval) => (
                    <MenuItem value={statusval}>{statusval}</MenuItem>
                  ))}
                </Select>
              </div>
              <div className='d-flex flex-column mb-30 ml-15 w-100per'>
                <label className='fs-16 font-weight-bold mb-10'>Weight</label>
                <TextField
                  placeholder='Enter weight (in Kgs)'
                  className='search-input custom-grey-input border-input-none'
                />
              </div>
            </div>
            <div className='d-flex w-100per'>
              <div className='d-flex flex-column mb-30 mr-15 w-100per'>
                <label className='fs-16 font-weight-bold mb-10'>
                  Choose State*
                </label>
                <Select
                  IconComponent={() => <KeyboardArrowDownIcon />}
                  id='classlist'
                  className='custom-choose-select custom-grey-select border-input-none mw-100per'
                  name='classlist'
                  displayEmpty
                  value={claassValue}
                  onChange={handleChangeChooseValue}
                >
                  <MenuItem value={''}>Select state</MenuItem>
                  {status.map((statusval) => (
                    <MenuItem value={statusval}>{statusval}</MenuItem>
                  ))}
                </Select>
              </div>
              <div className='d-flex flex-column mb-30 ml-15 w-100per'>
                <label className='fs-16 font-weight-bold mb-10'>Pincode*</label>
                <TextField
                  placeholder='Enter Pincode'
                  className='search-input custom-grey-input border-input-none'
                />
              </div>
            </div>
            <div className='d-flex w-100per'>
              <div className='d-flex flex-column mr-15 w-100per'>
                <label className='fs-16 font-weight-bold mb-10'>
                  Adhar Card Number
                </label>
                <TextField
                  placeholder='Enter Adhar Card Number'
                  className='search-input custom-grey-input border-input-none'
                />
              </div>
              <div className='d-flex flex-column ml-15 w-100per'>
                <label className='fs-16 font-weight-bold mb-10'>
                  Choose Blood Group
                </label>
                <Select
                  IconComponent={() => <KeyboardArrowDownIcon />}
                  id='classlist'
                  className='custom-choose-select custom-grey-select border-input-none mw-100per'
                  name='classlist'
                  displayEmpty
                  value={claassValue}
                  onChange={handleChangeChooseValue}
                >
                  <MenuItem value={''}>Select blood group</MenuItem>
                  {status.map((statusval) => (
                    <MenuItem value={statusval}>{statusval}</MenuItem>
                  ))}
                </Select>
              </div>
            </div>
          </div>
          <div className='studentRegistrationbg w-100per p-30 mt-50'>
            <div className='fs-20 font-weight-bold redcolor mb-30'>
              Academic Details
            </div>
            <div className='d-flex flex-column mb-30 w-100per'>
              <label className='fs-16 font-weight-bold mb-10'>
                Admission Number *
              </label>
              <TextField
                placeholder='Enter admission number (for example : DPS329920)'
                className='search-input custom-grey-input border-input-none'
              />
            </div>
            <div className='d-flex flex-column mb-30 w-100per'>
              <label className='fs-16 font-weight-bold mb-10'>
                Choose Class*
              </label>
              <Select
                IconComponent={() => <KeyboardArrowDownIcon />}
                id='classlist'
                className='custom-choose-select custom-grey-select border-input-none mw-100per'
                name='classlist'
                displayEmpty
                value={claassValue}
                onChange={handleChangeChooseValue}
              >
                <MenuItem value={''}>Select class</MenuItem>
                {status.map((statusval) => (
                  <MenuItem value={statusval}>{statusval}</MenuItem>
                ))}
              </Select>
            </div>
            <div className='d-flex flex-column w-100per'>
              <label className='fs-16 font-weight-bold mb-10'>
                Choose Section*
              </label>
              <Select
                IconComponent={() => <KeyboardArrowDownIcon />}
                id='classlist'
                className='custom-choose-select custom-grey-select border-input-none mw-100per'
                name='classlist'
                displayEmpty
                value={claassValue}
                onChange={handleChangeChooseValue}
              >
                <MenuItem value={''}>Select section</MenuItem>
                {status.map((statusval) => (
                  <MenuItem value={statusval}>{statusval}</MenuItem>
                ))}
              </Select>
            </div>
          </div>
        </div>
        <div className='flex1 studentRegistrationbg w-100per p-30'>
          <div className='fs-20 font-weight-bold redcolor mb-30'>
            Parent details
          </div>
          <div>
            <div className='fs-16 font-weight-bold redcolor mb-20'>
              Guardian 1
            </div>
            <div className='d-flex flex-column mb-30 w-100per'>
              <label className='fs-16 font-weight-bold mb-10'>
                Guardian’s Name*
              </label>
              <TextField
                placeholder='Enter Guardian’s Name'
                className='search-input custom-grey-input border-input-none'
              />
            </div>
            <div className='d-flex flex-column mb-30 w-100per'>
              <label className='fs-16 font-weight-bold mb-10'>Relation*</label>
              <Select
                IconComponent={() => <KeyboardArrowDownIcon />}
                id='classlist'
                className='custom-choose-select custom-grey-select border-input-none mw-100per'
                name='classlist'
                displayEmpty
                value={claassValue}
                onChange={handleChangeChooseValue}
              >
                <MenuItem value={''}>Select relation with student</MenuItem>
                {status.map((statusval) => (
                  <MenuItem value={statusval}>{statusval}</MenuItem>
                ))}
              </Select>
            </div>
            <div className='d-flex flex-column mb-30 w-100per'>
              <label className='fs-16 font-weight-bold mb-10'>
                Contact Number*
              </label>
              <TextField
                placeholder='Enter Contact Number'
                className='search-input custom-grey-input border-input-none'
              />
            </div>
            <div className='d-flex flex-column mb-30 w-100per'>
              <label className='fs-16 font-weight-bold mb-10'>
                Date of Birth*
              </label>
              <TextField
                placeholder='Enter D.O.B (dd/mm/yyyy)'
                className='search-input custom-grey-input border-input-none'
              />
            </div>
            <div className='d-flex flex-column mb-30 w-100per'>
              <label className='fs-16 font-weight-bold mb-10'>
                Occupation*
              </label>
              <TextField
                placeholder='Enter Occupation'
                className='search-input custom-grey-input border-input-none'
              />
            </div>
            <div className='d-flex flex-column mb-30 w-100per'>
              <label className='fs-16 font-weight-bold mb-10'>
                Annual Income*
              </label>
              <TextField
                placeholder='Enter Annual Income'
                className='search-input custom-grey-input border-input-none'
              />
            </div>
          </div>
          <div>
            <div className='fs-16 font-weight-bold redcolor mb-20'>
              Guardian 2
            </div>
            <div className='d-flex flex-column mb-30 w-100per'>
              <label className='fs-16 font-weight-bold mb-10'>
                Guardian’s Name*
              </label>
              <TextField
                placeholder='Enter Guardian’s Name'
                className='search-input custom-grey-input border-input-none'
              />
            </div>
            <div className='d-flex flex-column mb-30 w-100per'>
              <label className='fs-16 font-weight-bold mb-10'>Relation*</label>
              <Select
                IconComponent={() => <KeyboardArrowDownIcon />}
                id='classlist'
                className='custom-choose-select custom-grey-select border-input-none mw-100per'
                name='classlist'
                displayEmpty
                value={claassValue}
                onChange={handleChangeChooseValue}
              >
                <MenuItem value={''}>Select relation with student</MenuItem>
                {status.map((statusval) => (
                  <MenuItem value={statusval}>{statusval}</MenuItem>
                ))}
              </Select>
            </div>
            <div className='d-flex flex-column mb-30 w-100per'>
              <label className='fs-16 font-weight-bold mb-10'>
                Contact Number*
              </label>
              <TextField
                placeholder='Enter Contact Number'
                className='search-input custom-grey-input border-input-none'
              />
            </div>
            <div className='d-flex flex-column mb-30 w-100per'>
              <label className='fs-16 font-weight-bold mb-10'>
                Date of Birth*
              </label>
              <TextField
                placeholder='Enter D.O.B (dd/mm/yyyy)'
                className='search-input custom-grey-input border-input-none'
              />
            </div>
            <div className='d-flex flex-column mb-30 w-100per'>
              <label className='fs-16 font-weight-bold mb-10'>
                Occupation*
              </label>
              <TextField
                placeholder='Enter Occupation'
                className='search-input custom-grey-input border-input-none'
              />
            </div>
            <div className='d-flex flex-column w-100per'>
              <label className='fs-16 font-weight-bold mb-10'>
                Annual Income*
              </label>
              <TextField
                placeholder='Enter Annual Income'
                className='search-input custom-grey-input border-input-none'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='d-flex justify-space-between align-items-center studentRegistrationbg p-30 mt-50'>
        <div className='fs-16 d-flex flex-column'>
          <div className='redcolor font-weight-bold'> Confirmation</div>
          <span className=' mt-20'>
            Please fill in all the details correctly to proceed ahead with the
            admission process. <br />
            Kindly recheck all the details before clicking continue.
          </span>
        </div>
        <button className='border-0 br-20 pb-10 pl-20 pr-20 pt-10 addclass hand-cursor'>
          Continue
        </button>
      </div>
    </div>
  );
};

export default StudentRegistration;
