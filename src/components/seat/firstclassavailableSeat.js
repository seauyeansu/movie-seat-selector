import React, {Component} from 'react';
import './firstclassavailableSeat.scss';

class Firstclassavailableseat extends Component {

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
		let btn_class1 = this.state.blue ? "blueButton" : "redButton";
		return (
			<button className = {btn_class1}
			class = "firstclassavailableseat"
			onClick = {this.clickHandler}>
			</button>
			)
		
	}
}

export default Firstclassavailableseat