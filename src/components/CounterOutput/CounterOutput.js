import React from 'react';

import './CounterOutput.scss';

const counterOutput = (props) => (
  <div className="CounterOutput">
  <p class="text">You have selected {props.value} seats for a price of EUR {props.value}.

  You have selected <span id="count">0</span> seats for a price of $<span
    id="total">0</span>
  </p>
  </div>
);

export default counterOutput;
