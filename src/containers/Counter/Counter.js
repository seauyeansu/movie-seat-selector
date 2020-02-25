import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import SeatControl from '../../components/SeatControl/SeatControl';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <SeatControl clicked={this.props.onUpdateCount}/>
                <CounterControl clicked={this.props.onUpdateCount} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.seatselectorStates
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateCount: () => dispatch({type: 'UPDATECOUNT'}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
