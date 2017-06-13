import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import AddScene from '../containers/addscene';

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
    <Tab label="新建情景" >
      <div>
      <AddScene />
      </div>
    </Tab>
    <Tab label="添加已有情景" >
      <div>
      </div>
    </Tab>
  </Tabs>
);

export default AddTabs;
