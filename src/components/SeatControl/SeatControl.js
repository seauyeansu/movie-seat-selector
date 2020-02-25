import React from 'react';

import './SeatControl.css';

const seatControl = (props) => (
<div class="container">
    <div className="cockpit">
        <h1>Please select a seat</h1>
    </div>

  <div class="row">
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
  </div>
  <div class="row">
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat occupied"></div>
    <div class="seat occupied"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
  </div>
  <div class="row">
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat occupied"></div>
    <div class="seat occupied"></div>
  </div>
  <div class="row">
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
  </div>
  <div class="row">
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat occupied"></div>
    <div class="seat occupied"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
  </div>
  <div class="row">
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat"></div>
    <div class="seat occupied"></div>
    <div class="seat occupied"></div>
    <div class="seat occupied"></div>
    <div class="seat"></div>
  </div>
</div>
);

export default seatControl;
