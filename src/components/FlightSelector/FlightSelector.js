import React from 'react';

import './flightSelector.scss';

const Flightselector = () => (
  <div className="FlightSelector">
    <form>
    <div class="container">
    <div class="row">
      <label for="flights"><p>Choose Your Flight</p></label>
      <select id="flights" name="flights">
        <option value="10">02.08. - 09:00 </option>
        <option value="12">02.08. - 13:00 </option>
        <option value="8">02.08. - 17:00 </option>
        <option value="9">02.08. - 21:00 </option>
      </select>
      <input type="submit" value="Submit"/>
    </div>
    </div> 
    </form>
  </div>
);

export default Flightselector;
