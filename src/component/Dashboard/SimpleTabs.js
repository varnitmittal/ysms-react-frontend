import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import RoundChart from "./RoundChart";

const SimpleTabs = () => (
  <Tabs className="attendencetabs">
    <TabList>
      <Tab>Teachers</Tab>
      <Tab>Students</Tab>
    </TabList>

    <TabPanel>
      <RoundChart present={35} absent={65} />
    </TabPanel>
    <TabPanel>
    <RoundChart present={55} absent={45} />
    </TabPanel>
  </Tabs>
);

export default SimpleTabs