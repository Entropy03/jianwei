import React from 'react';
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


/**
 * A contrived example using a transition between steps
 */
class AddThings extends React.Component {
	constructor(props) {
    super(props);

	  this.state = {
			loading: false,
			finished: false,
			stepIndex: 0,
			value: '',
	    title:'',
	    content:'',
			sceneId:this.props.sceneId
		};
	 }


	dummyAsync = (cb) => {
		this.setState({
			loading: true
		}, () => {
			this.asyncTimer = setTimeout(cb, 500);
		});
	};

	handleNext = (type) => {
		const {stepIndex, title, content,sceneId,value} = this.state;

		if (type) {
			console.log(this.props);

		}
		if (!this.state.loading) {
			this.dummyAsync(() => this.setState({
				loading: false,
				stepIndex: stepIndex + 1,
				finished: 2
			}));
		}
	};
  handleChange = (event) => {
		const target = event.target;
    console.log(target);

		const name = target.name;
		this.setState({[name]: target.value});

	}
  changeType =(event, index, value) => this.setState({value});
	handlePrev = () => {
		const {stepIndex} = this.state;
		if (!this.state.loading) {
			this.dummyAsync(() => this.setState({
				loading: false,
				stepIndex: stepIndex - 1
			}));
		}
	};

	getStepContent(stepIndex) {
		return (
			<div>
				<TextField name="title" style={{
					marginTop: 0
				}} floatingLabelText="什么事情"/><br/>

				<SelectField  floatingLabelText="事件分类" value={this.state.value} onChange={this.changeType}>
					<MenuItem  value={1} primaryText="新想法"/>
					<MenuItem  value={2} primaryText="有问题"/>
					<MenuItem  value={3} primaryText="做事情"/>

				</SelectField><br/>
				<TextField name = "content" style={{
					marginTop: 0
				}} rows={4} rowsMax={4} floatingLabelText="具体描述"/>
			</div>
		);
	}

	renderContent() {
		const {finished, stepIndex} = this.state;
		const contentStyle = {
			margin: '0 16px',
			overflow: 'hidden'
		};

		if (finished) {
			return (
				<div style={contentStyle}>
					<p>
						建立成功 进入详情
					</p>
				</div>
			);
		}

		return (
			<div style={contentStyle}>
				<div>{this.getStepContent(stepIndex)}</div>
				<div style={{
					marginTop: 24,
					marginBottom: 12
				}}>
					<FlatButton label="Back" disabled={stepIndex === 0} onTouchTap={this.handlePrev} style={{
						marginRight: 12
					}}/>
					<RaisedButton label={stepIndex === 2
						? 'Finish'
						: 'Next'} primary={true} onTouchTap={this.handleNext}/>
				</div>
			</div>
		);
	}

	render() {
		const {loading, stepIndex} = this.state;

		return (
			<div style={{
				width: '100%',
				maxWidth: 700,
				margin: 'auto'
			}}>
				<Stepper activeStep={stepIndex}>
					<Step>
						<StepLabel>添加事情</StepLabel>
					</Step>
					<Step>
						<StepLabel>成功</StepLabel>
					</Step>

				</Stepper>
				<ExpandTransition loading={loading} open={true}>
					{this.renderContent()}
				</ExpandTransition>
			</div>
		);
	}
}

export default AddThings;
