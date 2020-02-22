import React from 'react';

import './CounterOutput.css';

const counterOutput = (props) => (
  <div className="CounterOutput and FlightSelection">
    <div className="FlightSelection">
      <form>
        <label for="flights">Choose Your Flight:</label>
        <select id="flights" name="flights">
          <option value="morning">02.08. - 09:00</option>
          <option value="afternoon">02.08. - 13:00</option>
          <option value="evening">02.08. - 17:00</option>
          <option value="night">02.08. - 21:00</option>
        </select>
        <input type="submit" value="Submit"/>
      </form>
    </div>

  <div className="CounterOutput">
  <p class="text">You have selected {props.value} seats for a price of EUR {props.value}.

  You have selected <span id="count">0</span> seats for a price of $<span
    id="total">0</span>
  </p>
  </div>
  </div>
);

export default counterOutput;
