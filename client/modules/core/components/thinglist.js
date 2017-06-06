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
import Thing from './thing.js'
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';

const style = {
	height: '800',
	width: '400',
	margin: 20,
	display: 'inline-block'
};
const desStyle = {
	height: '800',
	width: '300',
	margin: 20,
	display: 'inline-block'
};
const iconButtonElement = (
	<IconButton touch={true} tooltip="more" tooltipPosition="bottom-left">
		<MoreVertIcon color={grey400}/>
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
	<div>
		<Paper style={style} zDepth={2}>
			<List>

				<Tabs>
					<Tab label="待处理的事" value={0}/>
					<Tab label="需要协同的事" value={1}/>
					<Tab label="已关注的事" value={2}/>
				</Tabs>
				<TextField hintText="搜索" style={{
        color: darkBlack
      }}/>
        {things.map((thing) => (
					<div key={thing._id}>
						<ListItem rightIconButton={rightIconMenu} primaryText={thing.owner} secondaryText={< p >
              <span style={{
							color: darkBlack
						}}>{thing.content}</span> < br /> {
							thing.content
						} < /p>} secondaryTextLines={2}/>
						<Divider inset={true}/>

					</div>

				))}

			</List>
			<List>
				<Subheader>添加一个事情</Subheader>
			</List>
		</Paper>
		<Thing/>
	</div>
);

export default ThingList;
