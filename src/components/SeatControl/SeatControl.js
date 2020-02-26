import React from 'react';

import './SeatControl.scss';

const seatControl = (props) => (
<div class="container">
    <div className="cockpit">
        <h1>Please select a seat</h1>
    </div>

  <div class="fuselage">
  <div class="row">
    <div class="seatcategory"><p><hr/>First Class<hr/></p></div>
  </div>
  <div class="row">
    <div class="firstclasslabel"></div>
    <div class="firstclasslabel">A</div>
    <div class="firstclasslabel">B</div>
    <div class="firstclasslabel">C</div>
    <div class="firstclasslabel">D</div>
    <div class="firstclasslabel">E</div>
    <div class="firstclasslabel">F</div>
    <div class="firstclasslabel"></div>
  </div>
  <div class="row">
    <div class="firstclasswhiteseat">1</div>
    <div class="firstclassseat"></div>
    <div class="firstclassseat"></div>
    <div class="firstclassseat"></div>
    <div class="firstclassseat"></div>
    <div class="firstclassseat"></div>
    <div class="firstclassseat"></div>
    <div class="firstclasswhiteseat">1</div>
  </div>
  <div class="row">
    <div class="firstclasswhiteseat">2</div>
    <div class="firstclassseat"></div>
    <div class="firstclassseat"></div>
    <div class="firstclassseat"></div>
    <div class="firstclassseat"></div>
    <div class="firstclassseat"></div>
    <div class="firstclassseat"></div>
    <div class="firstclasswhiteseat">2</div>
  </div>
  <div class="row">
    <div class="firstclasswhiteseat">3</div>
    <div class="firstclassseat"></div>
    <div class="firstclassseat"></div>
    <div class="firstclassseat"></div>
    <div class="firstclassseat"></div>
    <div class="firstclassseat"></div>
    <div class="firstclassseat"></div>
    <div class="firstclasswhiteseat">3</div>
  </div>
  <div class="row">
    <div class="firstclasswhiteseat">4</div>
    <div class="firstclassseat"></div>
    <div class="firstclassseat"></div>
    <div class="firstclassseat"></div>
    <div class="firstclassseat"></div>
    <div class="firstclassseat"></div>
    <div class="firstclassseat"></div>
    <div class="firstclasswhiteseat">4</div>
  </div>
  <div class="row">
    <div class="seatcategory"><p><hr/>Economy<hr/></p></div>
  </div>
  <div class="row">
    <div class="label"></div>
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
    <div class="label"></div>
  </div>
  <div class="row">
    <div class="whiteseat">1</div>
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
    <div class="whiteseat">1</div>
  </div>
  <div class="row">
    <div class="whiteseat">2</div>
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
    <div class="whiteseat">2</div>
  </div>
  <div class="row">
    <div class="whiteseat">3</div>
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
    <div class="whiteseat">3</div>
  </div>
  <div class="row">
    <div class="whiteseat">4</div>
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
    <div class="whiteseat">4</div>
  </div>
  <div class="row">
    <div class="whiteseat">5</div>
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
    <div class="whiteseat">5</div>
  </div>
  <div class="row">
    <div class="whiteseat">6</div>
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
    <div class="whiteseat">6</div>
  </div>
  </div>
</div>
);

export default seatControl;
