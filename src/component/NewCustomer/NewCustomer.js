import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Select, MenuItem } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SetupClassesPopup from './SetupClassesPopup';
import upload from '../../assets/img/upload.svg';
import {
  addPostCustomer,
  UpdateCustomer,
  getCustomrById
} from '../../store/actions/CustomersAction';
import csc from 'country-state-city';
import { ICountry, IState, ICity } from 'country-state-city';

(() => {
  if (window.location.pathname === '/newcustomer') {
    import('../../indexdashboard.css');
  }
})();

const NewCustomer = () => {
  const { customerId } = useParams();
  const dispatch = useDispatch();
  const [setupClassModal, openSetupClassModal] = useState(false);
  const [fileUpload, setFileUpload] = useState('');
  const [popupData, setPopupData] = useState([]);
  const closeSetupClassedModal = () => {
    openSetupClassModal(false);
  };
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChangeUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      var FR = new FileReader();

      FR.addEventListener('load', function (e) {
        setFileUpload(e.target.result);
      });

      FR.readAsDataURL(event.target.files[0]);
    }
  };
  const singleCustomerData = useSelector(
    (state) => state?.CustomersState?.singleCustomer?.school || {}
  );
  let defaultFormObj = {
    schoolName: singleCustomerData?.title,
    schoolCode: singleCustomerData?.code,
    schoolType: singleCustomerData?.school_type,
    schoolMedium: singleCustomerData?.school_medium,
    establishmentYear: singleCustomerData?.establishment_year,
    affiliated: singleCustomerData?.affliated_to,
    educationType: singleCustomerData?.education_type,
    schoolAddress: singleCustomerData?.address,
    country: singleCustomerData?.country,
    state: singleCustomerData?.state,
    city: singleCustomerData?.city,
    pincode: singleCustomerData?.pincode,
    areaType: singleCustomerData?.area_type,
    principalName: singleCustomerData?.principle_name,
    contactNumber: singleCustomerData?.principle_contact_number,
    emailId: singleCustomerData?.principle_email,
    schoolAdminName: singleCustomerData?.schools_admin_name,
    otherContactNumber: singleCustomerData?.schools_contact_number,
    schoolEmailId: singleCustomerData?.schools_email
  };
  let popupDataViaApi = singleCustomerData?.class;
  popupDataViaApi = popupDataViaApi?.map((item) => {
    delete item._id;
    delete item.class_type;
    delete item.is_deleted;
    delete item.school_id;
    delete item.status;
    delete item.subjects;
    item.sections.map((a) => {
      delete a.is_section_deleted;
      delete a.subjects;
      delete a._id;
      delete a.term;
      return a;
    });
    return item;
  });
  const [inputs, setInputs] = useState(defaultFormObj);
  const {
    schoolName,
    schoolCode,
    schoolType,
    schoolMedium,
    establishmentYear,
    affiliated,
    educationType,
    schoolAddress,
    country,
    state,
    city,
    pincode,
    areaType,
    principalName,
    contactNumber,
    emailId,
    schoolAdminName,
    otherContactNumber,
    schoolEmailId
  } = inputs;

  let handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const backtonewcustomer = (returnPopupData) => {
    setPopupData(returnPopupData);
  };

  const customerData = {
    title: schoolName,
    code: schoolCode,
    school_type: parseInt(schoolType),
    school_medium: parseInt(schoolMedium),
    establishment_year: establishmentYear,
    affliated_to: affiliated,
    education_type: parseInt(educationType),
    address: schoolAddress,
    country: country,
    city: city,
    state: state,
    pincode: pincode,
    area_type: areaType,
    principle_name: principalName,
    principle_contact_number: contactNumber,
    principle_email: emailId,
    schools_admin_name: schoolAdminName,
    schools_contact_number: otherContactNumber,
    schools_email: schoolEmailId,
    school_logo: [
      {
        url: fileUpload || singleCustomerData?.school_logo?.url
      }
    ],

    classes: customerId ? popupDataViaApi : popupData
  };
  const addCustomer = () => {
    if (customerId) {
      dispatch(UpdateCustomer(customerData, customerId));
    } else {
      customerData['status'] = 0;
      dispatch(addPostCustomer(customerData));
    }
  };
  useEffect(() => {
    // eslint-disable-next-line
    if (customerId) {
      dispatch(getCustomrById(customerId));
    }
    // eslint-disable-next-line
  }, [customerId]);

  useEffect(() => {
    // eslint-disable-next-line
    if (typeof defaultFormObj?.schoolName !== undefined) {
      setInputs(defaultFormObj);
    }
    // eslint-disable-next-line
  }, [defaultFormObj?.schoolName]);
  return (
    <>
      <div className='App d-flex'>
        <div className='d-flex flex-column w-100per bs-border-box'>
          <div className='p-20 main-scroll-height overflow-y-auto overflow-x-hidden'>
            <SetupClassesPopup
              open={setupClassModal}
              backtonewcustomer={backtonewcustomer}
              popupDataViaApi={popupDataViaApi}
              closeModalHandle={closeSetupClassedModal}
            />
            <div className='fs-20 font-weight-bold mb-20'>New Customer</div>
            <div className='d-flex'>
              <div className='bg-white br-20 d-flex p-30 flex-column new-customer flex2 mr-50'>
                <h2 className='fs-20 d-flex w-100per font-weight-bold mb-30 redcolor'>
                  Basic Details
                </h2>
                <form>
                  <div className='d-flex flex-wrap maxw-1070'>
                    <div className='d-flex flex-column mb-50 mw-240 mr-15 flex1'>
                      <label className='fs-16 font-weight-bold mb-10'>
                        School Name*
                      </label>
                      <TextField
                        placeholder='Enter School Name'
                        name='schoolName'
                        value={schoolName}
                        onChange={handleChange}
                        className='search-input custom-grey-input border-input-none'
                        required
                      />
                    </div>
                    <div className='d-flex flex-column mb-50 mw-240 ml-15 flex1'>
                      <label className='fs-16 font-weight-bold mb-10'>
                        Enter School Code*
                      </label>
                      <TextField
                        placeholder='Enter School Code'
                        name='schoolCode'
                        value={schoolCode}
                        onChange={handleChange}
                        className='search-input custom-grey-input border-input-none'
                        required
                      />
                    </div>
                    <div className='d-flex flex-column mb-50 mw-240 mr-15 flex1'>
                      <label className='fs-16 font-weight-bold mb-10'>
                        Choose School Type*
                      </label>
                      <Select
                        IconComponent={() => <KeyboardArrowDownIcon />}
                        className='custom-choose-select custom-grey-select border-input-none mw-100per'
                        name='schoolType'
                        value={schoolType}
                        onChange={handleChange}
                      >
                        <MenuItem value='1'>PRIVATE</MenuItem>
                        <MenuItem value='2'>GOVERMENT</MenuItem>
                      </Select>
                    </div>
                    <div className='d-flex flex-column mb-50 mw-240 ml-15 flex1'>
                      <label className='fs-16 font-weight-bold mb-10'>
                        Choose School Medium*
                      </label>
                      <Select
                        IconComponent={() => <KeyboardArrowDownIcon />}
                        className='custom-choose-select custom-grey-select border-input-none mw-100per'
                        name='schoolMedium'
                        value={schoolMedium}
                        onChange={handleChange}
                      >
                        <MenuItem value='1'>HINDI</MenuItem>
                        <MenuItem value='2'>ENGLISH</MenuItem>
                      </Select>
                    </div>
                    <div className='d-flex flex-column mb-50 mw-240 mr-15 flex1'>
                      <label className='fs-16 font-weight-bold mb-10'>
                        Establishment Year*
                      </label>
                      <TextField
                        placeholder='Enter Establishment Year'
                        name='establishmentYear'
                        value={establishmentYear}
                        onChange={handleChange}
                        className='search-input custom-grey-input border-input-none'
                      />
                    </div>
                    <div className='d-flex flex-column mb-50 mw-240 ml-15 flex1'>
                      <label className='fs-16 font-weight-bold mb-10'>
                        Affiliated To*
                      </label>
                      <Select
                        IconComponent={() => <KeyboardArrowDownIcon />}
                        className='custom-choose-select custom-grey-select border-input-none mw-100per'
                        name='affiliated'
                        value={affiliated}
                        onChange={handleChange}
                      >
                        <MenuItem value='CBSE'>CBSE</MenuItem>
                      </Select>
                    </div>
                    <div className='d-flex flex-column mb-50 mw-240 mr-15 flex1'>
                      <label className='fs-16 font-weight-bold mb-10'>
                        Education Type
                      </label>
                      <Select
                        IconComponent={() => <KeyboardArrowDownIcon />}
                        className='custom-choose-select custom-grey-select border-input-none mw-100per '
                        name='educationType'
                        value={educationType}
                        onChange={handleChange}
                      >
                        <MenuItem value='1'>GIRLS</MenuItem>
                        <MenuItem value='2'>BOYS</MenuItem>
                        <MenuItem value='3'>Co-Ed</MenuItem>
                      </Select>
                    </div>
                    <div className='d-flex flex-column mb-50 mw-240 ml-15 flex1'>
                      <label className='fs-16 font-weight-bold mb-10'>
                        Setup Classes*
                      </label>
                      <div
                        onClick={() => {
                          openSetupClassModal(true);
                        }}
                        className='hand-cursor d-flex br-20 p-15 bluecolor bg-grey3 justify-space-between w-100per border-input-none border-grey3 font-family-SF fs-16'
                      >
                        {popupData.length > 0 || popupDataViaApi?.length > 0 ? (
                          <div className='fs-16 bluecolor d-flex justify-space-between w-100per font-weight-bold'>
                            <div>Class setup done</div>
                            <div>EDIT</div>
                          </div>
                        ) : (
                          <>
                            <div className='fs-16'>Setup Classes</div>
                            <KeyboardArrowRightIcon className='fs-16' />
                          </>
                        )}
                      </div>
                    </div>
                    <div className='d-flex flex-column mb-50 w-100per'>
                      <label className='fs-16 font-weight-bold mb-10'>
                        Enter School Address*
                      </label>
                      <TextareaAutosize
                        rowsMin={4}
                        rowsMax={4}
                        name='schoolAddress'
                        value={schoolAddress}
                        onChange={handleChange}
                        className='br-20 p-10 custom-grey-input border-input-none border-grey3 font-family-SF fs-16'
                        placeholder='Enter Complete Address'
                      />
                    </div>
                    <div className='d-flex flex-column mb-50 mw-240 mr-15 flex1'>
                      <label className='fs-16 font-weight-bold mb-10'>
                        Choose Country*
                      </label>
                      <Select
                        IconComponent={() => <KeyboardArrowDownIcon />}
                        defaultValue={country}
                        className='custom-choose-select custom-grey-select border-input-none mw-100per '
                        name='country'
                        value={country}
                        onChange={handleChange}
                      >
                        {csc.getAllCountries().map((item) => (
                          <MenuItem key={item.name} value={item.isoCode}>
                            {item.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </div>
                    <div className='d-flex flex-column mb-50 mw-240 ml-15 flex1'>
                      <label className='fs-16 font-weight-bold mb-10'>
                        Choose State*
                      </label>
                      <Select
                        IconComponent={() => <KeyboardArrowDownIcon />}
                        className='custom-choose-select custom-grey-select border-input-none mw-100per '
                        name='state'
                        value={state}
                        onChange={handleChange}
                      >
                        {csc
                          .getAllStates()
                          .filter((a) => a.countryCode === country)
                          .map((item) => (
                            <MenuItem key={item.name} value={item.isoCode}>
                              {item.name}
                            </MenuItem>
                          ))}
                      </Select>
                    </div>
                    <div className='d-flex flex-column mb-50 mw-240 mr-15 flex1'>
                      <label className='fs-16 font-weight-bold mb-10'>
                        Choose City*
                      </label>
                      <Select
                        IconComponent={() => <KeyboardArrowDownIcon />}
                        className='custom-choose-select custom-grey-select border-input-none mw-100per '
                        name='city'
                        value={city}
                        onChange={handleChange}
                      >
                        {csc
                          .getAllCities()
                          .filter(
                            (a) =>
                              a.countryCode === country && a.stateCode === state
                          )
                          .map((item) => (
                            <MenuItem key={item.name} value={item.name}>
                              {item.name}
                            </MenuItem>
                          ))}
                      </Select>
                    </div>
                    <div className='d-flex flex-column mb-50 mw-240 ml-15 flex1'>
                      <label className='fs-16 font-weight-bold mb-10'>
                        Pin Code*
                      </label>
                      <TextField
                        placeholder='Enter Pincode'
                        name='pincode'
                        value={pincode}
                        onChange={handleChange}
                        className='search-input custom-grey-input border-input-none'
                      />
                    </div>
                    <div className='d-flex flex-column mb-20 mw-240 mr-15 flex1'>
                      <label className='fs-16 font-weight-bold mb-10'>
                        Area Type
                      </label>
                      <Select
                        IconComponent={() => <KeyboardArrowDownIcon />}
                        className='custom-choose-select custom-grey-select border-input-none mw-100per '
                        name='areaType'
                        value={areaType}
                        onChange={handleChange}
                      >
                        <MenuItem value={'city'}>City</MenuItem>
                        <MenuItem value={'village'}>Village</MenuItem>
                        <MenuItem value={'Town'}>Town</MenuItem>
                      </Select>
                    </div>
                  </div>
                </form>
              </div>
              <div className='bg-white flex1 br-20 d-flex p-30 flex-column'>
                <h2 className='fs-20 d-flex w-100per font-weight-bold mb-30 redcolor'>
                  Other Details
                </h2>
                <form>
                  <div className='d-flex flex-wrap maxw-1070'>
                    <div className='d-flex flex-column mb-50 w-100per'>
                      <label className='fs-16 font-weight-bold mb-10'>
                        Principal Name*
                      </label>
                      <TextField
                        placeholder='Enter Principal Name'
                        name='principalName'
                        value={principalName}
                        onChange={handleChange}
                        className='search-input custom-grey-input border-input-none'
                        required
                      />
                    </div>
                    <div className='d-flex flex-column mb-50 w-100per'>
                      <label className='fs-16 font-weight-bold mb-10'>
                        Contact Number*
                      </label>
                      <TextField
                        placeholder='Enter Contact Number'
                        name='contactNumber'
                        value={contactNumber}
                        onChange={handleChange}
                        className='search-input custom-grey-input border-input-none'
                        required
                      />
                    </div>
                    <div className='d-flex flex-column mb-50 w-100per'>
                      <label className='fs-16 font-weight-bold mb-10'>
                        School Email Id
                      </label>
                      <TextField
                        placeholder='Enter Email Id'
                        name='emailId'
                        value={emailId}
                        onChange={handleChange}
                        className='search-input custom-grey-input border-input-none'
                        required
                      />
                    </div>
                    <div className='d-flex flex-column mb-50 w-100per'>
                      <label className='fs-16 font-weight-bold mb-10'>
                        School Admin Name*
                      </label>
                      <TextField
                        placeholder='Enter School Admin Name'
                        name='schoolAdminName'
                        value={schoolAdminName}
                        onChange={handleChange}
                        className='search-input custom-grey-input border-input-none'
                        required
                      />
                    </div>
                    <div className='d-flex flex-column mb-50 w-100per'>
                      <label className='fs-16 font-weight-bold mb-10'>
                        Contact Number*
                      </label>
                      <TextField
                        placeholder='Enter Contact Number'
                        name='otherContactNumber'
                        value={otherContactNumber}
                        onChange={handleChange}
                        className='search-input custom-grey-input border-input-none'
                        required
                      />
                    </div>
                    <div className='d-flex flex-column mb-50 w-100per'>
                      <label className='fs-16 font-weight-bold mb-10'>
                        Admin Email Id
                      </label>
                      <TextField
                        placeholder='Enter Email Id'
                        name='schoolEmailId'
                        value={schoolEmailId}
                        onChange={handleChange}
                        className='search-input custom-grey-input border-input-none'
                        required
                      />
                    </div>
                    <div className='d-flex flex-column w-100per'>
                      <label className='fs-16 font-weight-bold mb-10'>
                        Add School Logo*
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
                            <div className='mt-5 fs-16'>
                              (.jpeg, .png, .jpg)
                            </div>
                          </div>
                        </div>
                        <input
                          type='file'
                          ref={hiddenFileInput}
                          onChange={handleChangeUpload}
                          id='uploadImage'
                          accept='image/*'
                          style={{ display: 'none' }}
                        />
                      </div>

                      {singleCustomerData?.school_logo?.url && !fileUpload ? (
                        <img
                          src={`${process.env.REACT_APP_API_DEV_URL}/public/${singleCustomerData?.school_logo?.url}`}
                          alt={`${process.env.REACT_APP_API_DEV_URL}/public/${singleCustomerData?.school_logo?.url}`}
                          className='fileuploadimage'
                        />
                      ) : (
                        <img
                          src={fileUpload}
                          alt={fileUpload}
                          className='fileuploadimage'
                        />
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className='d-flex justify-space-between align-items-center studentRegistrationbg p-30 mt-50'>
              <div className='fs-16 d-flex flex-column'>
                <div className='redcolor font-weight-bold'> Confirmation</div>
                <span className=' mt-20'>
                  Before proceeding to the payment screen, <br />
                  kindly recheck all the details.
                </span>
              </div>
              <button
                onClick={addCustomer}
                className='border-0 br-20 pb-10 pl-20 pr-20 pt-10 addclass hand-cursor'
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCustomer;
