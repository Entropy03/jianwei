import React from 'react';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AddContent from './addcontent';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});
const style = {
  marginLeft: '50%',
};

const Home = ({sceneList = () => null,content = () => null }) => (
<div>
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <div>
      {sceneList()}
      {content()}


      <AddContent/>
    </div>

  </MuiThemeProvider>

</div>

);

export default Home;
