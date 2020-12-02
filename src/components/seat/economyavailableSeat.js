import React, {Component} from 'react';
import './economyavailableSeat.scss';

class Economyavailableseat extends Component {

constructor(props) {
	super(props)

	this.state = {
		 blue: true
	}

	this.clickHandler = this.clickHandler.bind(this)
}

clickHandler() {
	this.setState({
		blue: !this.state.blue
	})
}
	render () {
		let btn_class = this.state.blue ? "blueButton" : "redButton";
		return (
			<button className = {btn_class}
			class = "economyavailableseat"
			onClick = {this.clickHandler}>
			</button>
			)
		
	}
}

export default Economyavailableseat