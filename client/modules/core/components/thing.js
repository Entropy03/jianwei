import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';

export default class ThingDes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }


  handleChange = (event, index, value) => this.setState({value});

  render() {
    const style = {
      height: '800',
      width: '50%',
      margin: 20,
      display: 'inline-block',
    };
    return (
      <Paper  style={style} zDepth={2}>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="参与讨论" />
              <MenuItem value={2} primaryText="所有文件" />
              <MenuItem value={3} primaryText="事件始末" />

            </DropDownMenu>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text="事件详情" />
            <FontIcon className="muidocs-icon-custom-sort" />
            <ToolbarSeparator />
            <RaisedButton label="创建从属事件" primary={true} />
            <IconMenu
              iconButtonElement={
                <IconButton touch={true}>
                  <NavigationExpandMoreIcon />
                </IconButton>
              }
            >
              <MenuItem primaryText="分享" />
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
      </Paper>
    );
  }
}
