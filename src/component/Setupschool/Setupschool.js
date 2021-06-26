import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SetupClasses from './SetupClasses/SetupClasses';
import SetupSubjects from './SetupSubjects/SetupSubjects';
import SetupFees from './SetupFees/SetupFees';
import SetupExamination from './SetupExamination/SetupExamination';
import SetupSettings from './SetupSettings/SetupSettings';
import SetupGrades from './SetupGrades/SetupGrades'; 

const Setupschool = () => {
  //const SetupClassState = useSelector(state => state.SetupClassState)
  // useEffect(() => {
  //     dispatch(SetupClassAction());
  // },[dispatch]);

  return (
    <>
      <div className='App d-flex'>
        <div className='d-flex flex-column w-100per bs-border-box'>
          <div className='p-20 main-scroll-height overflow-y-auto overflow-x-hidden'>
            {/* {SetupClassState.list.map(abc =>(
            <li>{abc.id}</li>
        ))} */}
            <div className='fs-20 font-weight-bold'>Setup School</div>
            <Tabs className='setupSchoolTabs'>
              <TabList>
                <Tab>Subjects</Tab>
                <Tab>Classes</Tab>
                <Tab>Fees</Tab>
                <Tab>Examination</Tab>
                <Tab>Grades</Tab>
                <Tab>Settings</Tab>
              </TabList>
              <TabPanel>
                <SetupSubjects />
              </TabPanel>
              <TabPanel>
                <SetupClasses />
              </TabPanel>
              <TabPanel>
                <SetupFees />
              </TabPanel>
              <TabPanel>
                <SetupExamination />
              </TabPanel>
              <TabPanel><SetupGrades/></TabPanel>
              <TabPanel><SetupSettings/></TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setupschool;
