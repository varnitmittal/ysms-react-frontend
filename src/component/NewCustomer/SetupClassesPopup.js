import React, { useState } from 'react';
import {
  TextField,
  Paper,
  Modal,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    color: 'var(--blue)',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    width: '100%'
  }
}));

const SetupClassesPopup = ({
  open,
  closeModalHandle,
  backtonewcustomer,
  popupDataViaApi
}) => {
  const classes = useStyles();

  const [primaryChecked, setPrimaryChecked] = useState(false);
  const handlePrimaryChecked = (value) => {
    setPrimaryChecked(!value);
  };

  const [upperPrimaryChecked, setUpperPrimaryChecked] = useState(false);
  const handleUpperPrimaryChecked = (value) => {
    setUpperPrimaryChecked(!value);
  };

  const [secondaryChecked, setSecondaryChecked] = useState(false);
  const handleSecondaryChecked = (value) => {
    setSecondaryChecked(!value);
  };

  const [seniorSecChecked, setSeniorSecChecked] = useState(false);
  const handleSeniorSecChecked = (value) => {
    setSeniorSecChecked(!value);
  };

  const [customClassChecked, setCustomClassChecked] = useState(false);
  const handleCustomClassChecked = (value) => {
    setCustomClassChecked(!value);
  };
  const defaultCheckInp = {
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
    checked7: false,
    checked8: false,
    checked9: false,
    checked10: false,
    checked11: false,
    checked12: false,
    customcheck: false,
    customcheck1: false,
    customcheck2: false,
    customcheck3: false
  };
  const [checkInp, setCheckInp] = useState(defaultCheckInp);
  const {
    checked1,
    checked2,
    checked3,
    checked4,
    checked5,
    checked6,
    checked7,
    checked8,
    checked9,
    checked10,
    checked11,
    checked12,
    customcheck,
    customcheck1,
    customcheck2,
    customcheck3
  } = checkInp;
  let handleChangeCheckInp = (e) => {
    const { name, checked } = e.target;
    setCheckInp((checkInp) => ({ ...checkInp, [name]: checked }));
  };
  const defaultFormObj = {
    customSmallClass: 'Play Group',
    customSmallClass1: 'Pre Nursery',
    customSmallClass2: 'Nursery',
    customSmallClass3: 'K.G'
  };
  const [inputs, setInputs] = useState(defaultFormObj);
  const {
    customSmallClass,
    customSmallClass1,
    customSmallClass2,
    customSmallClass3
  } = inputs;
  let handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  let handleselectionlength = (clsval) => {
    if (
      popupDataViaApi?.map((item) => item.title).indexOf(clsval) !== -1 &&
      !!popupDataViaApi
    ) {
      return Number(
        popupDataViaApi
          ?.filter((item) => item.title === clsval)
          .map((item) => item.sections.length)
      );
    } else {
      return 0;
    }
  };

  const [ClassICount, setClassICount] = React.useState(
    handleselectionlength('CLASS 1') || 0
  );
  const decrementClassICount = () => {
    if (ClassICount !== 0) {
      setClassICount(ClassICount - 1);
      sectionJsonAdjustment(ClassICount, 'Class 1', false);
    }
  };

  const incrementClassICount = () => {
    if (ClassICount < 8) {
      setClassICount(ClassICount + 1);
      sectionJsonAdjustment(ClassICount, 'Class 1', true);
    }
  };
  const [ClassIICount, setClassIICount] = React.useState(
    handleselectionlength('CLASS 2') || 0
  );
  const decrementClassIICount = () => {
    if (ClassIICount !== 0) {
      setClassIICount(ClassIICount - 1);
      sectionJsonAdjustment(ClassIICount, 'Class 2', false);
    }
  };

  const incrementClassIICount = () => {
    if (ClassIICount < 8) {
      setClassIICount(ClassIICount + 1);
      sectionJsonAdjustment(ClassIICount, 'Class 2', true);
    }
  };
  const [ClassIIICount, setClassIIICount] = React.useState(
    handleselectionlength('CLASS 3') || 0
  );
  const decrementClassIIICount = () => {
    if (ClassIIICount !== 0) {
      setClassIIICount(ClassIIICount - 1);
      sectionJsonAdjustment(ClassIIICount, 'Class 3', false);
    }
  };

  const incrementClassIIICount = () => {
    if (ClassIIICount < 8) {
      setClassIIICount(ClassIIICount + 1);
      sectionJsonAdjustment(ClassIIICount, 'Class 3', true);
    }
  };
  const [ClassIVCount, setClassIVCount] = React.useState(
    handleselectionlength('CLASS 4') || 0
  );
  const decrementClassIVCount = () => {
    if (ClassIVCount !== 0) {
      setClassIVCount(ClassIVCount - 1);
      sectionJsonAdjustment(ClassIVCount, 'Class 4', false);
    }
  };

  const incrementClassIVCount = () => {
    if (ClassIVCount < 8) {
      setClassIVCount(ClassIVCount + 1);
      sectionJsonAdjustment(ClassIVCount, 'Class 4', true);
    }
  };
  const [ClassVCount, setClassVCount] = React.useState(
    handleselectionlength('CLASS 5') || 0
  );
  const decrementClassVCount = () => {
    if (ClassVCount !== 0) {
      setClassVCount(ClassVCount - 1);
      sectionJsonAdjustment(ClassVCount, 'Class 5', false);
    }
  };

  const incrementClassVCount = () => {
    if (ClassVCount < 8) {
      setClassVCount(ClassVCount + 1);
      sectionJsonAdjustment(ClassVCount, 'Class 5', true);
    }
  };
  const [ClassVICount, setClassVICount] = React.useState(
    handleselectionlength('CLASS 6') || 0
  );
  const decrementClassVICount = () => {
    if (ClassVICount !== 0) {
      setClassVICount(ClassVICount - 1);
      sectionJsonAdjustment(ClassVICount, 'Class 6', false);
    }
  };

  const incrementClassVICount = () => {
    if (ClassVICount < 8) {
      setClassVICount(ClassVICount + 1);
      sectionJsonAdjustment(ClassVICount, 'Class 6', true);
    }
  };
  const [ClassVIICount, setClassVIICount] = React.useState(
    handleselectionlength('CLASS 7') || 0
  );
  const decrementClassVIICount = () => {
    if (ClassVIICount !== 0) {
      setClassVIICount(ClassVIICount - 1);
      sectionJsonAdjustment(ClassVIICount, 'Class 7', false);
    }
  };

  const incrementClassVIICount = () => {
    if (ClassVIICount < 8) {
      setClassVIICount(ClassVIICount + 1);
      sectionJsonAdjustment(ClassVIICount, 'Class 7', true);
    }
  };
  const [ClassVIIICount, setClassVIIICount] = React.useState(
    handleselectionlength('CLASS 8') || 0
  );
  const decrementClassVIIICount = () => {
    if (ClassVIIICount !== 0) {
      setClassVIIICount(ClassVIIICount - 1);
      sectionJsonAdjustment(ClassVIIICount, 'Class 8', false);
    }
  };

  const incrementClassVIIICount = () => {
    if (ClassVIIICount < 8) {
      setClassVIIICount(ClassVIIICount + 1);
      sectionJsonAdjustment(ClassVIIICount, 'Class 8', true);
    }
  };
  const [ClassIXCount, setClassIXCount] = React.useState(
    handleselectionlength('CLASS 9') || 0
  );
  const decrementClassIXCount = () => {
    if (ClassIXCount !== 0) {
      setClassIXCount(ClassIXCount - 1);
      sectionJsonAdjustment(ClassIXCount, 'Class 9', false);
    }
  };

  const incrementClassIXCount = () => {
    if (ClassIXCount < 8) {
      setClassIXCount(ClassIXCount + 1);
      sectionJsonAdjustment(ClassIXCount, 'Class 9', true);
    }
  };
  const [ClassXCount, setClassXCount] = React.useState(
    handleselectionlength('CLASS 10') || 0
  );
  const decrementClassXCount = () => {
    if (ClassXCount !== 0) {
      setClassXCount(ClassXCount - 1);
      sectionJsonAdjustment(ClassXCount, 'Class 10', false);
    }
  };

  const incrementClassXCount = () => {
    if (ClassXCount < 8) {
      setClassXCount(ClassXCount + 1);
      sectionJsonAdjustment(ClassXCount, 'Class 10', true);
    }
  };
  const [ClassXICount, setClassXICount] = React.useState(
    handleselectionlength('CLASS 11') || 0
  );
  const decrementClassXICount = () => {
    if (ClassXICount !== 0) {
      setClassXICount(ClassXICount - 1);
      sectionJsonAdjustment(ClassXICount, 'Class 11', false);
    }
  };

  const incrementClassXICount = () => {
    if (ClassXICount < 8) {
      setClassXICount(ClassXICount + 1);
      sectionJsonAdjustment(ClassXICount, 'Class 11', true);
    }
  };
  const [ClassXIICount, setClassXIICount] = React.useState(
    handleselectionlength('CLASS 12') || 0
  );
  const decrementClassXIICount = () => {
    if (ClassXIICount !== 0) {
      setClassXIICount(ClassXIICount - 1);
      sectionJsonAdjustment(ClassXIICount, 'Class 12', false);
    }
  };

  const incrementClassXIICount = () => {
    if (ClassXIICount < 8) {
      setClassXIICount(ClassXIICount + 1);
      sectionJsonAdjustment(ClassXIICount, 'Class 12', true);
    }
  };

  const [CustomClassCount, setCustomClassCount] = React.useState(
    handleselectionlength(customSmallClass) || 0
  );
  const decrementCustomClassCount = () => {
    if (CustomClassCount !== 0) {
      setCustomClassCount(CustomClassCount - 1);
      sectionJsonAdjustment(CustomClassCount, customSmallClass, false);
    }
  };

  const incrementCustomClassCount = () => {
    if (CustomClassCount < 8) {
      setCustomClassCount(CustomClassCount + 1);
      sectionJsonAdjustment(CustomClassCount, customSmallClass, true);
    }
  };

  const [CustomClassCount1, setCustomClassCount1] = React.useState(
    handleselectionlength(customSmallClass1) || 0
  );
  const decrementCustomClassCount1 = () => {
    if (CustomClassCount1 !== 0) {
      setCustomClassCount1(CustomClassCount1 - 1);
      sectionJsonAdjustment(CustomClassCount1, customSmallClass1, false);
    }
  };

  const incrementCustomClassCount1 = () => {
    if (CustomClassCount1 < 8) {
      setCustomClassCount1(CustomClassCount1 + 1);
      sectionJsonAdjustment(CustomClassCount, customSmallClass1, true);
    }
  };

  const [CustomClassCount2, setCustomClassCount2] = React.useState(
    handleselectionlength(customSmallClass2) || 0
  );
  const decrementCustomClassCount2 = () => {
    if (CustomClassCount2 !== 0) {
      setCustomClassCount2(CustomClassCount2 - 1);
      sectionJsonAdjustment(CustomClassCount2, customSmallClass2, false);
    }
  };

  const incrementCustomClassCount2 = () => {
    if (CustomClassCount < 8) {
      setCustomClassCount2(CustomClassCount2 + 1);
      sectionJsonAdjustment(CustomClassCount2, customSmallClass2, true);
    }
  };

  const [CustomClassCount3, setCustomClassCount3] = React.useState(
    handleselectionlength(customSmallClass3) || 0
  );
  const decrementCustomClassCount3 = () => {
    if (CustomClassCount3 !== 0) {
      setCustomClassCount3(CustomClassCount3 - 1);
      sectionJsonAdjustment(CustomClassCount3, customSmallClass3, false);
    }
  };

  const incrementCustomClassCount3 = () => {
    if (CustomClassCount3 < 8) {
      setCustomClassCount3(CustomClassCount3 + 1);
      sectionJsonAdjustment(CustomClassCount3, customSmallClass3, true);
    }
  };
  let allData = [];
  let sections = [];
  const secnameA = {
    section_name: 'A'
  };
  const secnameB = {
    section_name: 'B'
  };
  const secnameC = {
    section_name: 'C'
  };
  const secnameD = {
    section_name: 'D'
  };
  const secnameE = {
    section_name: 'E'
  };
  const secnameF = {
    section_name: 'F'
  };
  const secnameG = {
    section_name: 'G'
  };
  const [ClassIDetail, setClassIDetail] = React.useState();
  const [ClassIIDetail, setClassIIDetail] = React.useState();
  const [ClassIIIDetail, setClassIIIDetail] = React.useState();
  const [ClassIVDetail, setClassIVDetail] = React.useState();
  const [ClassVDetail, setClassVDetail] = React.useState();
  const [ClassVIDetail, setClassVIDetail] = React.useState();
  const [ClassVIIDetail, setClassVIIDetail] = React.useState();
  const [ClassVIIIDetail, setClassVIIIDetail] = React.useState();
  const [ClassIXDetail, setClassIXDetail] = React.useState();
  const [ClassXDetail, setClassXDetail] = React.useState();
  const [ClassXIDetail, setClassXIDetail] = React.useState();
  const [ClassXIIDetail, setClassXIIDetail] = React.useState();
  const [CustomClassDetail1, setCustomClassDetail1] = React.useState();
  const [CustomClassDetail2, setCustomClassDetail2] = React.useState();
  const [CustomClassDetail3, setCustomClassDetail3] = React.useState();
  const [CustomClassDetail, setCustomClassDetail] = React.useState();

  const sectionJsonAdjustment = (count, classTitle, incdecbit) => {
    count = incdecbit ? count + 1 : count - 1;
    sections = [];
    if (count === 1) {
      sections.push(secnameA);
    } else if (count === 2) {
      sections.push(secnameA);
      sections.push(secnameB);
    } else if (count === 3) {
      sections.push(secnameA);
      sections.push(secnameB);
      sections.push(secnameC);
    } else if (count === 4) {
      sections.push(secnameA);
      sections.push(secnameB);
      sections.push(secnameC);
      sections.push(secnameD);
    } else if (count === 5) {
      sections.push(secnameA);
      sections.push(secnameB);
      sections.push(secnameC);
      sections.push(secnameD);
      sections.push(secnameE);
    } else if (count === 6) {
      sections.push(secnameA);
      sections.push(secnameB);
      sections.push(secnameC);
      sections.push(secnameD);
      sections.push(secnameE);
      sections.push(secnameF);
    } else if (count === 7) {
      sections.push(secnameA);
      sections.push(secnameB);
      sections.push(secnameC);
      sections.push(secnameD);
      sections.push(secnameE);
      sections.push(secnameF);
      sections.push(secnameG);
    }

    if (classTitle === 'Class I' && sections.length > 0) {
      setClassIDetail({
        title: classTitle,
        sections: sections
      });
    } else if (classTitle === 'Class I' && sections.length === 0) {
      setClassIDetail();
    }
    if (classTitle === 'Class II' && sections.length > 0) {
      setClassIIDetail({
        title: classTitle,
        sections: sections
      });
    } else if (classTitle === 'Class II' && sections.length === 0) {
      setClassIIDetail();
    }
    if (classTitle === 'Class III' && sections.length > 0) {
      setClassIIIDetail({
        title: classTitle,
        sections: sections
      });
    } else if (classTitle === 'Class III' && sections.length === 0) {
      setClassIIIDetail();
    }
    if (classTitle === 'Class IV' && sections.length > 0) {
      setClassIVDetail({
        title: classTitle,
        sections: sections
      });
    } else if (classTitle === 'Class IV' && sections.length === 0) {
      setClassIVDetail();
    }
    if (classTitle === 'Class V' && sections.length > 0) {
      setClassVDetail({
        title: classTitle,
        sections: sections
      });
    } else if (classTitle === 'Class V' && sections.length === 0) {
      setClassVDetail();
    }
    if (classTitle === 'Class VI' && sections.length > 0) {
      setClassVIDetail({
        title: classTitle,
        sections: sections
      });
    } else if (classTitle === 'Class VI' && sections.length === 0) {
      setClassVIDetail();
    }
    if (classTitle === 'Class VII' && sections.length > 0) {
      setClassVIIDetail({
        title: classTitle,
        sections: sections
      });
    } else if (classTitle === 'Class VII' && sections.length === 0) {
      setClassVIIDetail();
    }
    if (classTitle === 'Class VIII' && sections.length > 0) {
      setClassVIIIDetail({
        title: classTitle,
        sections: sections
      });
    } else if (classTitle === 'Class VIII' && sections.length === 0) {
      setClassVIIIDetail();
    }
    if (classTitle === 'Class IX' && sections.length > 0) {
      setClassIXDetail({
        title: classTitle,
        sections: sections
      });
    } else if (classTitle === 'Class IX' && sections.length === 0) {
      setClassIXDetail();
    }
    if (classTitle === 'Class X' && sections.length > 0) {
      setClassXDetail({
        title: classTitle,
        sections: sections
      });
    } else if (classTitle === 'Class X' && sections.length === 0) {
      setClassXDetail();
    }
    if (classTitle === 'Class XI' && sections.length > 0) {
      setClassXIDetail({
        title: classTitle,
        sections: sections
      });
    } else if (classTitle === 'Class XI' && sections.length === 0) {
      setClassXIDetail();
    }
    if (classTitle === 'Class XII' && sections.length > 0) {
      setClassXIIDetail({
        title: classTitle,
        sections: sections
      });
    } else if (classTitle === 'Class XII' && sections.length === 0) {
      setClassXIIDetail();
    }
    if (classTitle === customSmallClass && sections.length > 0) {
      setCustomClassDetail({
        title: classTitle,
        sections: sections
      });
    } else if (classTitle === customSmallClass && sections.length === 0) {
      setCustomClassDetail();
    }
    if (classTitle === customSmallClass && sections.length > 0) {
      setCustomClassDetail({
        title: classTitle,
        sections: sections
      });
    } else if (classTitle == customSmallClass1 && sections.length == 0) {
      setCustomClassDetail1();
    }
    if (classTitle == customSmallClass2 && sections.length > 0) {
      setCustomClassDetail2({
        title: classTitle,
        sections: sections
      });
    } else if (classTitle == customSmallClass2 && sections.length == 0) {
      setCustomClassDetail2();
    }
    if (classTitle == customSmallClass3 && sections.length > 0) {
      setCustomClassDetail3({
        title: classTitle,
        sections: sections
      });
    } else if (classTitle == customSmallClass3 && sections.length == 0) {
      setCustomClassDetail3();
    }
  };
  const SetupclassContinue = (e) => {
    e.preventDefault();
    let prevAllData = [];
    prevAllData.push(
      ClassIDetail,
      ClassIIDetail,
      ClassIIIDetail,
      ClassIVDetail,
      ClassVDetail,
      ClassVIDetail,
      ClassVIIDetail,
      ClassVIIIDetail,
      ClassIXDetail,
      ClassXDetail,
      ClassXIDetail,
      ClassXIIDetail,
      CustomClassDetail,
      CustomClassDetail1,
      CustomClassDetail2,
      CustomClassDetail3
    );
    allData = prevAllData.filter(function (el) {
      return el != null;
    });
    backtonewcustomer(allData);
    closeModalHandle();
  };
  return (
    <>
      <Modal
        open={open}
        onClose={closeModalHandle}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        className='d-flex align-items-center justify-center'
      >
        <div className='bg-grey br-20 d-flex p-30 flex-column mw-1070 setupclasspopup'>
          <h2 className='fs-20 d-flex w-100per font-weight-bold mb-30'>
            {' '}
            Setup Classes
          </h2>
          <form>
            <div className='d-flex justify-space-between'>
              <Paper className={classes.paper}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={primaryChecked}
                      onClick={() => handlePrimaryChecked(primaryChecked)}
                      color='primary'
                    />
                  }
                  label='PRIMARY'
                  className='bluecolor'
                />
                <FormGroup
                  column
                  style={{
                    padding: '10px 0px',
                    borderBottom: '1px solid #ececec'
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={primaryChecked || checked1}
                        name='checked1'
                        onChange={handleChangeCheckInp}
                        color='primary'
                      />
                    }
                    label='Class I'
                  />
                  <div
                    className={`${
                      !(primaryChecked || checked1) ? 'unChecked' : ''
                    } d-flex flex1 justify-space-between fs-16 bg-white h-42 border-grey2 br-20 p-10 align-items-center font-weight-bold`}
                  >
                    <div
                      onClick={decrementClassICount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        -
                      </span>
                    </div>
                    {ClassICount < 10 && ClassICount > 0
                      ? '0' + ClassICount
                      : ClassICount}
                    <div
                      onClick={incrementClassICount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        +
                      </span>
                    </div>
                  </div>
                </FormGroup>
                <FormGroup
                  column
                  style={{
                    padding: '10px 0px',
                    borderBottom: '1px solid #ececec'
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={primaryChecked || checked2}
                        name='checked2'
                        onChange={handleChangeCheckInp}
                        color='primary'
                      />
                    }
                    label='Class II'
                  />
                  <div
                    className={`${
                      !(primaryChecked || checked2) ? 'unChecked' : ''
                    } d-flex flex1 justify-space-between fs-16 bg-white h-42 border-grey2 br-20 p-10 align-items-center font-weight-bold`}
                  >
                    <div
                      onClick={decrementClassIICount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        -
                      </span>
                    </div>
                    {ClassIICount < 10 && ClassIICount > 0
                      ? '0' + ClassIICount
                      : ClassIICount}
                    <div
                      onClick={incrementClassIICount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        +
                      </span>
                    </div>
                  </div>
                </FormGroup>
                <FormGroup
                  column
                  style={{
                    padding: '10px 0px',
                    borderBottom: '1px solid #ececec'
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={primaryChecked || checked3}
                        name='checked3'
                        onChange={handleChangeCheckInp}
                        color='primary'
                      />
                    }
                    label='Class III'
                  />
                  <div
                    className={`${
                      !(primaryChecked || checked3) ? 'unChecked' : ''
                    } d-flex flex1 justify-space-between fs-16 bg-white h-42 border-grey2 br-20 p-10 align-items-center font-weight-bold`}
                  >
                    <div
                      onClick={decrementClassIIICount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        -
                      </span>
                    </div>
                    {ClassIIICount < 10 && ClassIIICount > 0
                      ? '0' + ClassIIICount
                      : ClassIIICount}
                    <div
                      onClick={incrementClassIIICount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        +
                      </span>
                    </div>
                  </div>
                </FormGroup>
                <FormGroup
                  column
                  style={{
                    padding: '10px 0px',
                    borderBottom: '1px solid #ececec'
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={primaryChecked || checked4}
                        name='checked4'
                        onChange={handleChangeCheckInp}
                        color='primary'
                      />
                    }
                    label='Class IV'
                  />
                  <div
                    className={`${
                      !(primaryChecked || checked4) ? 'unChecked' : ''
                    } d-flex flex1 justify-space-between fs-16 bg-white h-42 border-grey2 br-20 p-10 align-items-center font-weight-bold`}
                  >
                    <div
                      onClick={decrementClassIVCount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        -
                      </span>
                    </div>
                    {ClassIVCount < 10 && ClassIVCount > 0
                      ? '0' + ClassIVCount
                      : ClassIVCount}
                    <div
                      onClick={incrementClassIVCount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        +
                      </span>
                    </div>
                  </div>
                </FormGroup>
                <FormGroup
                  column
                  style={{
                    padding: '10px 0px',
                    borderBottom: '1px solid #ececec'
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={primaryChecked || checked5}
                        name='checked5'
                        onChange={handleChangeCheckInp}
                        color='primary'
                      />
                    }
                    label='Class V'
                  />
                  <div
                    className={`${
                      !(primaryChecked || checked5) ? 'unChecked' : ''
                    } d-flex flex1 justify-space-between fs-16 bg-white h-42 border-grey2 br-20 p-10 align-items-center font-weight-bold`}
                  >
                    <div
                      onClick={decrementClassVCount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        -
                      </span>
                    </div>
                    {ClassVCount < 10 && ClassVCount > 0
                      ? '0' + ClassVCount
                      : ClassVCount}
                    <div
                      onClick={incrementClassVCount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        +
                      </span>
                    </div>
                  </div>
                </FormGroup>
              </Paper>
              <Paper className={classes.paper}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={upperPrimaryChecked}
                      onClick={() =>
                        handleUpperPrimaryChecked(upperPrimaryChecked)
                      }
                      color='primary'
                    />
                  }
                  label='UPPER PRIMARY'
                  className='bluecolor'
                />
                <FormGroup
                  column
                  style={{
                    padding: '10px 0px',
                    borderBottom: '1px solid #ececec'
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={upperPrimaryChecked || checked6}
                        name='checked6'
                        onChange={handleChangeCheckInp}
                        color='primary'
                      />
                    }
                    label='Class VI'
                  />
                  <div
                    className={`${
                      !(upperPrimaryChecked || checked6) ? 'unChecked' : ''
                    } d-flex flex1 justify-space-between fs-16 bg-white h-42 border-grey2 br-20 p-10 align-items-center font-weight-bold`}
                  >
                    <div
                      onClick={decrementClassVICount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        -
                      </span>
                    </div>
                    {ClassVICount < 10 && ClassVICount > 0
                      ? '0' + ClassVICount
                      : ClassVICount}
                    <div
                      onClick={incrementClassVICount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        +
                      </span>
                    </div>
                  </div>
                </FormGroup>
                <FormGroup
                  column
                  style={{
                    padding: '10px 0px',
                    borderBottom: '1px solid #ececec'
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={upperPrimaryChecked || checked7}
                        name='checked7'
                        onChange={handleChangeCheckInp}
                        color='primary'
                      />
                    }
                    label='Class VII'
                  />
                  <div
                    className={`${
                      !(upperPrimaryChecked || checked7) ? 'unChecked' : ''
                    } d-flex flex1 justify-space-between fs-16 bg-white h-42 border-grey2 br-20 p-10 align-items-center font-weight-bold`}
                  >
                    <div
                      onClick={decrementClassVIICount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        -
                      </span>
                    </div>
                    {ClassVIICount < 10 && ClassVIICount > 0
                      ? '0' + ClassVIICount
                      : ClassVIICount}
                    <div
                      onClick={incrementClassVIICount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        +
                      </span>
                    </div>
                  </div>
                </FormGroup>
                <FormGroup
                  column
                  style={{
                    padding: '10px 0px',
                    borderBottom: '1px solid #ececec'
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={upperPrimaryChecked || checked8}
                        name='checked8'
                        onChange={handleChangeCheckInp}
                        color='primary'
                      />
                    }
                    label='Class VIII'
                  />
                  <div
                    className={`${
                      !(upperPrimaryChecked || checked8) ? 'unChecked' : ''
                    } d-flex flex1 justify-space-between fs-16 bg-white h-42 border-grey2 br-20 p-10 align-items-center font-weight-bold`}
                  >
                    <div
                      onClick={decrementClassVIIICount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        -
                      </span>
                    </div>
                    {ClassVIIICount < 10 && ClassVIIICount > 0
                      ? '0' + ClassVIIICount
                      : ClassVIIICount}
                    <div
                      onClick={incrementClassVIIICount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        +
                      </span>
                    </div>
                  </div>
                </FormGroup>
              </Paper>
              <Paper className={classes.paper}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={secondaryChecked}
                      onClick={() => handleSecondaryChecked(secondaryChecked)}
                      color='primary'
                    />
                  }
                  label='SECONDARY'
                  className='bluecolor'
                />
                <FormGroup
                  column
                  style={{
                    padding: '10px 0px',
                    borderBottom: '1px solid #ececec'
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={secondaryChecked || checked9}
                        name='checked9'
                        onChange={handleChangeCheckInp}
                        color='primary'
                      />
                    }
                    label='Class IX'
                  />
                  <div
                    className={`${
                      !(secondaryChecked || checked9) ? 'unChecked' : ''
                    } d-flex flex1 justify-space-between fs-16 bg-white h-42 border-grey2 br-20 p-10 align-items-center font-weight-bold`}
                  >
                    <div
                      onClick={decrementClassIXCount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        -
                      </span>
                    </div>
                    {ClassIXCount < 10 && ClassIXCount > 0
                      ? '0' + ClassIXCount
                      : ClassIXCount}
                    <div
                      onClick={incrementClassIXCount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        +
                      </span>
                    </div>
                  </div>
                </FormGroup>
                <FormGroup
                  column
                  style={{
                    padding: '10px 0px',
                    borderBottom: '1px solid #ececec'
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={secondaryChecked || checked10}
                        name='checked10'
                        onChange={handleChangeCheckInp}
                        color='primary'
                      />
                    }
                    label='Class X'
                  />
                  <div
                    className={`${
                      !(secondaryChecked || checked10) ? 'unChecked' : ''
                    } d-flex flex1 justify-space-between fs-16 bg-white h-42 border-grey2 br-20 p-10 align-items-center font-weight-bold`}
                  >
                    <div
                      onClick={decrementClassXCount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        -
                      </span>
                    </div>
                    {ClassXCount < 10 && ClassXCount > 0
                      ? '0' + ClassXCount
                      : ClassXCount}
                    <div
                      onClick={incrementClassXCount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        +
                      </span>
                    </div>
                  </div>
                </FormGroup>
              </Paper>
              <Paper className={classes.paper}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={seniorSecChecked}
                      onClick={() => handleSeniorSecChecked(seniorSecChecked)}
                      color='primary'
                    />
                  }
                  label='SENIOR SEC.'
                  className='bluecolor'
                />
                <FormGroup
                  column
                  style={{
                    padding: '10px 0px',
                    borderBottom: '1px solid #ececec'
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={seniorSecChecked || checked11}
                        name='checked11'
                        onChange={handleChangeCheckInp}
                        color='primary'
                      />
                    }
                    label='Class XI'
                  />
                  <div
                    className={`${
                      !(seniorSecChecked || checked11) ? 'unChecked' : ''
                    } d-flex flex1 justify-space-between fs-16 bg-white h-42 border-grey2 br-20 p-10 align-items-center font-weight-bold`}
                  >
                    <div
                      onClick={decrementClassXICount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        -
                      </span>
                    </div>
                    {ClassXICount < 10 && ClassXICount > 0
                      ? '0' + ClassXICount
                      : ClassXICount}
                    <div
                      onClick={incrementClassXICount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        +
                      </span>
                    </div>
                  </div>
                </FormGroup>
                <FormGroup
                  column
                  style={{
                    padding: '10px 0px',
                    borderBottom: '1px solid #ececec'
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={seniorSecChecked || checked12}
                        name='checked12'
                        onChange={handleChangeCheckInp}
                        color='primary'
                      />
                    }
                    label='Class XII'
                  />
                  <div
                    className={`${
                      !(seniorSecChecked || checked12) ? 'unChecked' : ''
                    } d-flex flex1 justify-space-between fs-16 bg-white h-42 border-grey2 br-20 p-10 align-items-center font-weight-bold`}
                  >
                    <div
                      onClick={decrementClassXIICount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        -
                      </span>
                    </div>
                    {ClassXIICount < 10 && ClassXIICount > 0
                      ? '0' + ClassXIICount
                      : ClassXIICount}
                    <div
                      onClick={incrementClassXIICount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        +
                      </span>
                    </div>
                  </div>
                </FormGroup>
              </Paper>
              <Paper className={classes.paper}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={customClassChecked}
                      onClick={() =>
                        handleCustomClassChecked(customClassChecked)
                      }
                      color='primary'
                    />
                  }
                  label='CUSTOM CLASS'
                  className='bluecolor'
                />
                <FormGroup
                  column
                  style={{
                    padding: '10px 0px',
                    borderBottom: '1px solid #ececec'
                  }}
                >
                  <div className='d-flex'>
                    <Checkbox
                      checked={customClassChecked || customcheck}
                      name='customcheck'
                      onChange={handleChangeCheckInp}
                      color='primary'
                    />
                    <TextField
                      name='customSmallClass'
                      value={customSmallClass}
                      onChange={handleChange}
                      className='search-input custom-grey-input border-input-none'
                      style={{ margin: '5px 0px' }}
                    />
                  </div>
                  <div
                    className={`${
                      !(customClassChecked || customcheck) ? 'unChecked' : ''
                    } d-flex flex1 justify-space-between fs-16 bg-white h-42 border-grey2 br-20 p-10 align-items-center font-weight-bold`}
                  >
                    <div
                      onClick={decrementCustomClassCount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        -
                      </span>
                    </div>
                    {CustomClassCount < 10 && CustomClassCount > 0
                      ? '0' + CustomClassCount
                      : CustomClassCount}
                    <div
                      onClick={incrementCustomClassCount}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        +
                      </span>
                    </div>
                  </div>
                </FormGroup>

                <FormGroup
                  column
                  style={{
                    padding: '10px 0px',
                    borderBottom: '1px solid #ececec'
                  }}
                >
                  <div className='d-flex'>
                    <Checkbox
                      checked={customClassChecked || customcheck1}
                      name='customcheck1'
                      onChange={handleChangeCheckInp}
                      color='primary'
                    />
                    <TextField
                      name='customSmallClass1'
                      value={customSmallClass1}
                      onChange={handleChange}
                      className='search-input custom-grey-input border-input-none'
                      style={{ margin: '5px 0px' }}
                    />
                  </div>
                  <div
                    className={`${
                      !(customClassChecked || customcheck1) ? 'unChecked' : ''
                    } d-flex flex1 justify-space-between fs-16 bg-white h-42 border-grey2 br-20 p-10 align-items-center font-weight-bold`}
                  >
                    <div
                      onClick={decrementCustomClassCount1}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        -
                      </span>
                    </div>
                    {CustomClassCount1 < 10 && CustomClassCount1 > 0
                      ? '0' + CustomClassCount1
                      : CustomClassCount1}
                    <div
                      onClick={incrementCustomClassCount1}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        +
                      </span>
                    </div>
                  </div>
                </FormGroup>
                <FormGroup
                  column
                  style={{
                    padding: '10px 0px',
                    borderBottom: '1px solid #ececec'
                  }}
                >
                  <div className='d-flex'>
                    <Checkbox
                      checked={customClassChecked || customcheck2}
                      name='customcheck2'
                      onChange={handleChangeCheckInp}
                      color='primary'
                    />
                    <TextField
                      name='customSmallClass2'
                      value={customSmallClass2}
                      onChange={handleChange}
                      className='search-input custom-grey-input border-input-none'
                      style={{ margin: '5px 0px' }}
                    />
                  </div>
                  <div
                    className={`${
                      !(customClassChecked || customcheck2) ? 'unChecked' : ''
                    } d-flex flex1 justify-space-between fs-16 bg-white h-42 border-grey2 br-20 p-10 align-items-center font-weight-bold`}
                  >
                    <div
                      onClick={decrementCustomClassCount2}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        -
                      </span>
                    </div>
                    {CustomClassCount2 < 10 && CustomClassCount2 > 0
                      ? '0' + CustomClassCount2
                      : CustomClassCount2}
                    <div
                      onClick={incrementCustomClassCount2}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        +
                      </span>
                    </div>
                  </div>
                </FormGroup>
                <FormGroup
                  column
                  style={{
                    padding: '10px 0px',
                    borderBottom: '1px solid #ececec'
                  }}
                >
                  <div className='d-flex'>
                    <Checkbox
                      checked={customClassChecked || customcheck3}
                      name='customcheck3'
                      onChange={handleChangeCheckInp}
                      color='primary'
                    />
                    <TextField
                      name='customSmallClass3'
                      value={customSmallClass3}
                      onChange={handleChange}
                      className='search-input custom-grey-input border-input-none'
                      style={{ margin: '5px 0px' }}
                    />
                  </div>
                  <div
                    className={`${
                      !(customClassChecked || customcheck3) ? 'unChecked' : ''
                    } d-flex flex1 justify-space-between fs-16 bg-white h-42 border-grey2 br-20 p-10 align-items-center font-weight-bold`}
                  >
                    <div
                      onClick={decrementCustomClassCount3}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        -
                      </span>
                    </div>
                    {CustomClassCount3 < 10 && CustomClassCount3 > 0
                      ? '0' + CustomClassCount3
                      : CustomClassCount3}
                    <div
                      onClick={incrementCustomClassCount3}
                      className='hand-cursor outline-none'
                    >
                      <span className='d-flex align-items-center justify-center fs-18 font-weight-bold br-50per border-black-double h-20 w-20'>
                        +
                      </span>
                    </div>
                  </div>
                </FormGroup>
              </Paper>
            </div>
            <div className='d-flex justify-space-between'>
              <div className='font-weight-bold fs-16 d-flex flex-column'>
                IMPORTANT NOTE:
                <span className='redcolor mt-5'>
                  You have to setup every class details later in the Setup
                  section of your dashboard.
                </span>
              </div>
              <button
                onClick={SetupclassContinue}
                className='border-0 br-20 pb-10 pl-20 pr-20 pt-10 addclass hand-cursor'
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

export default SetupClassesPopup;
