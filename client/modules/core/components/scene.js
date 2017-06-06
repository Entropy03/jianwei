import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import { FlowRouter } from 'meteor/kadira:flow-router';

import AppBar from 'material-ui/AppBar';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {List, ListItem} from 'material-ui/List';
import IconMenu from 'material-ui/IconMenu';

import Paper from 'material-ui/Paper';
import AddContent from './addcontent';

const style = {
	height: 800,
	width: 500,
	margin: 20,
	textAlign: 'center',
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
export default class Scene extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false
		};

	}
	handleTouchTap = (id) => {
		FlowRouter.go("/home/"+id);

	};
	handleToggle = () => this.setState({
		open: !this.state.open
	});
	handleClose = () => this.setState({open: false});
	render() {

		const buttonStyle = {
			background: 'none',
			fill: 'white'
		};

		return (

			<div>
				<Paper style={style} zDepth={3}>
					<List>
						<AppBar title="选择一个情景"/> {this.props.scenes.map(scene => {
							return (
								<div key={scene._id}>
									<ListItem onTouchTap={ ()=> {this.handleTouchTap(scene._id)}} rightIconButton={rightIconMenu} primaryText={scene.title} secondaryText={scene.content} secondaryTextLines={2}/>
									<Divider inset={true}/>
								</div>
							)
						})}
					</List>
					<List>
						<Subheader>添加一个情景</Subheader>
						<AddContent/>
					</List>

				</Paper>
			</div>
		);
	}
}
