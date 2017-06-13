import React from 'react';
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';

/**
 * A contrived example using a transition between steps
 */
class AddScene extends React.Component {

	state = {
		loading: false,
		finished: false,
		stepIndex: 0,
		title: "",
		content: "",
		code: ""
	};

	dummyAsync = (cb) => {
		this.setState({
			loading: true
		}, () => {
			this.asyncTimer = setTimeout(cb, 500);
		});
	};

	handleChange = (event) => {
		const target = event.target;
		const name = target.name;
		this.setState({[name]: target.value});

	}
	handleNext = (type) => {
		const {stepIndex, title, content} = this.state;
		console.log(this.props);

		if (type) {
      const {create} = this.props;
      let id = create(title, content);
      this.setState({"code":id});


		}
		if (!this.state.loading) {
			this.dummyAsync(() => this.setState({
				loading: false,
				stepIndex: stepIndex + 1,
				finished: 2
			}));
		}
	};

	getStepContent(stepIndex) {
		const {error} = this.props;

		return (
			<div>
				<TextField style={{
					marginTop: 0
				}} name="title" errorText={error} onChange={this.handleChange} floatingLabelText="请输入情景名称"/>
				<br/>
				<br/>
				<TextField style={{
					marginTop: 0
				}} name="content" errorText={error} onChange={this.handleChange} rows={4} rowsMax={4} floatingLabelText="情景描述"/><br/>
				<p>
					建立一个情景 你可以在此情景下做事情
				</p>
			</div>
		);
	}

	renderContent() {
		const {finished, stepIndex, code} = this.state;
		const contentStyle = {
			margin: '0 16px',
			overflow: 'hidden'
		};
		if (finished) {
			return (
				<div style={contentStyle}>
					<p>
						邀请码为：{code}
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
					<RaisedButton label={stepIndex === 1
						? '完成'
						: '下一步'} primary={true} onTouchTap={() => this.handleNext(true)}/>
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
						<StepLabel>创建一个情景</StepLabel>
					</Step>
					<Step>
						<StepLabel>生成邀请码
						</StepLabel>
					</Step>
				</Stepper>
				<ExpandTransition loading={loading} open={true}>
					{this.renderContent()}
				</ExpandTransition>
			</div>
		);
	}
}

export default AddScene;
