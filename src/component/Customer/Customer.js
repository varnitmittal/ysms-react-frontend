import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ActiveUsers from './ActiveUsers/ActiveUsers';
import UnsubscribedUsers from './UnsubscribedUsers/UnsubscribedUsers';

const Customer = () => {
  return (
    <>
      <div className='App d-flex'>
        <div className='d-flex flex-column w-100per bs-border-box'>
          <div className='p-20 main-scroll-height overflow-y-auto overflow-x-hidden'>
            <div className='fs-20 font-weight-bold'>All Customers</div>
            <Tabs className='setupSchoolTabs'>
              <TabList>
                <Tab>Active users</Tab>
                <Tab>Unsubscribed users</Tab>
              </TabList>
              <TabPanel>
                <ActiveUsers />
              </TabPanel>
              <TabPanel>
                <UnsubscribedUsers />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
