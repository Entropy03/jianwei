import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import AddScene from '../containers/addscene';
import AddThings from './addthings';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const AddTabs = () => (
  <Tabs>
    <Tab label="情景" >
      <div>
      <AddScene />
      </div>
    </Tab>
    <Tab label="事件" >
      <div>
      <AddThings />
      </div>
    </Tab>
  </Tabs>
);

export default AddTabs;
