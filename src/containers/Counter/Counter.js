import React, { Component } from 'react';
import { connect } from 'react-redux';

import FlightSelector from '../../components/FlightSelector/FlightSelector';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import SeatControl from '../../components/SeatControl/SeatControl';

class Counter extends Component {
    render () {
        return (
            <div>
                <FlightSelector/>
                <SeatControl clicked={this.props.onUpdateCount}/>
                <CounterOutput value={this.props.ctr} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateCount: () => dispatch({type: 'SEAT_CLICK'}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
