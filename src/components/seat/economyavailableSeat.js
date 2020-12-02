import React, {Component} from 'react';
import './economyavailableSeat.scss';

class Economyavailableseat extends Component {

constructor(props) {
	super(props)

	this.state = {
		 gray: true
	}

	this.clickHandler = this.clickHandler.bind(this)
}

clickHandler() {
	this.setState({
		gray: !this.state.gray
	})
}
	render () {
		let btn_class = this.state.gray ? "grayButton" : "blueButton";
		return (
			<button className = {btn_class}
			class = "economyavailableseat"
			onClick = {this.clickHandler}>
			</button>
			)
		
	}
}

export default Economyavailableseat