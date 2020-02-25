import React from 'react';

import './SeatControl.css';

const seatControl = (props) => (
<div class="container">
    <div className="cockpit">
        <h1>Please select a seat</h1>
    </div>

  <div class="fuselage">
  <div class="row">
    <div class="label">A</div>
    <div class="label">B</div>
    <div class="label">C</div>
    <div class="label">D</div>
    <div class="label">E</div>
    <div class="label">F</div>
    <div class="label">G</div>
    <div class="label">H</div>
    <div class="label">I</div>
    <div class="label">J</div>
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
    <div class="seat"></div>
    <div class="seat"></div>
  </div>
  </div>
</div>
);

export default seatControl;
