import React from 'react';
import ReactDOM from 'react-dom';
import Seatcontrol from './components/seatControl/seatControl.js';
import Flightselector from './components/flightSelector/flightSelector.js';
import Legend from './components/legend/legend.js';
import './index.scss';

class App extends React.Component {
  render() {
    return (
      <div>	
    	 <div>
    	  	<Flightselector />
    	 </div>
    	 <div>
    	 	<Legend />
    	 </div>	
    	 <div>
     		<Seatcontrol />
     	 </div>	
      </div>
    );
  }
}

ReactDOM.render((
	<App />
	),
	document.getElementById('app')
	)
