import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddThings from '../containers/addthings';
/**
 * Dialog content can be scrollable.
 */
export default class CreatetThings extends React.Component {
  constructor(props) {
    super(props);

  }
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    const style = {
      marginLeft: '50%',
    };
    return (
      <div>

        <FloatingActionButton mini={true}  zDepth = {2} style={style} onTouchTap={this.handleOpen} >
             <ContentAdd />
           </FloatingActionButton>

        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
        <AddThings sceneId ={this.props.sceneId}/>
        </Dialog>
      </div>
    );
  }
}
