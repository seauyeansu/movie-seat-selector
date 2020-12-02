import React, {Component} from 'react';
import './firstclassavailableSeat.scss';

class Firstclassavailableseat extends Component {

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
		let btn_class1 = this.state.gray ? "grayButton" : "blueButton";
		return (
			<button className = {btn_class1}
			class = "firstclassavailableseat"
			onClick = {this.clickHandler}>
			</button>
			)
		
	}
}

export default Firstclassavailableseat