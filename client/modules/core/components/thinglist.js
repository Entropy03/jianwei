import React from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const style = {
  height: '100%',
  width: '18%',
  margin: 20,
  display: 'inline-block',
};
const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

const ThingList = ({things}) => (
  <Paper style={style} zDepth={2}>
    <List>
      <Subheader>待处理</Subheader>
      {things.map((thing)=>(
          <div key={thing._id}>
            <ListItem
              rightIconButton={rightIconMenu}
              primaryText={thing.owner}
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>{thing.title}?</span><br />
                  {thing.title}
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />

          </div>


      ))}

    </List>



  </Paper>

);

export default ThingList;
