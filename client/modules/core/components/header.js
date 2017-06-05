import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Divider from 'material-ui/Divider';

import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import ActionDescription from 'material-ui/svg-icons/action/description';
import CommunicationComment from 'material-ui/svg-icons/communication/comment';
import FileFolder from 'material-ui/svg-icons/file/folder';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';



export default class Scene extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};

  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = (id) => {
    this.setState({open: false});
    FlowRouter.go("/home/"+id);

  }

  render() {

  const buttonStyle = {
      background: 'none',
      fill: 'white'
    };

    return (

      <div>
        <AppBar title="简为"  onTitleTouchTap	={this.handleToggle} iconElementRight = {          <IconButton style={buttonStyle}><CommunicationComment /></IconButton>
}>
          <IconButton style={buttonStyle}><CommunicationComment /></IconButton>
          <IconButton style={buttonStyle} ><ActionDescription /></IconButton>
          <IconButton style={buttonStyle}><FileFolder/></IconButton>
      </AppBar>


       <Drawer
         width={200}
         open={this.state.open}
         onRequestChange={(open) => this.setState({open})}
       >
        <AppBar title="情景"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          onTouchTap={this.handleToggle}/>
        {this.props.scenes.map(scene =>{
          return(
            <div  key={scene._id}>
              <MenuItem onTouchTap={()=> {this.handleClose(scene._id)}}>{scene.title}</MenuItem>
              <Divider inset={true} />
            </div>

           )
        })}



       </Drawer>
  </div>
    );
  }
}
