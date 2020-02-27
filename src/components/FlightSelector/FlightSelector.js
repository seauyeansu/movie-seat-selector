import React from 'react';

import './FlightSelector.scss';

const flightSelector = (props) => (
  <div className="FlightSelector">
    <form>
      <label for="flights">Choose Your Flight:</label>
      <select id="flights" name="flights">
        <option value="10">02.08. - 09:00 ($10)</option>
        <option value="12">02.08. - 13:00 ($12)</option>
        <option value="8">02.08. - 17:00 ($8)</option>
        <option value="9">02.08. - 21:00 ($9)</option>
      </select>
      <input type="submit" value="Submit"/>
    </form>
  </div>
);

export default flightSelector;
