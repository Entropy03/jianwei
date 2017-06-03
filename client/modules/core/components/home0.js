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
const left ={
  float:'left',
  display: 'inline-block',
}
const right ={
  float:'left',
  display: 'inline-block',

}
const Home = ({sceneList = () => null,content = () => null ,follow=()=>null,chat=()=>null,thingDes=()=>null}) => (
<div>
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <div>
      {sceneList()}
      {content()}
      {chat()}
      {thingDes()}

     <div>  {follow()}</div>



      <AddContent/>
    </div>

  </MuiThemeProvider>

</div>

);

export default Home;
