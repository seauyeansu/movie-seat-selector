import React from 'react';
import Firstclassavailableseat from '../seat/firstclassavailableSeat.js';
import Economyavailableseat from '../seat/economyavailableSeat.js'
import './seatControl.scss';

const Seatcontrol = () => {
  return (
<div class="container">

  <div class="fuselage">
  <div class="row">
    <div class="seatcategory"><h4><hr/>Business Class<hr/></h4></div>
  </div>
  <div class="row">
    <div class="firstclasslabel"></div>
    <div class="firstclasslabel">A</div>
    <div class="firstclasslabel">B</div>
    <div class="firstclasslabel">C</div>
    <div class="firstclasslabel">D</div>

    <div class="firstclasslabel"></div>
  </div>
  <div class="row">
    <div class="firstclasswhiteseat">1</div>
    <div class="firstclassseat"><Firstclassavailableseat /></div>
    <div class="firstclassseat"><Firstclassavailableseat /></div>
    <div class="firstclassseat"><Firstclassavailableseat /></div>
    <div class="firstclassseat"><Firstclassavailableseat /></div>
    <div class="firstclasswhiteseat">1</div>
  </div>
  <div class="row">
    <div class="firstclasswhiteseat">2</div>
    <div class="firstclassseat"><Firstclassavailableseat /></div>
    <div class="firstclassseat"><Firstclassavailableseat /></div>
    <div class="firstclassseat"><Firstclassavailableseat /></div>
    <div class="firstclassseat"><Firstclassavailableseat /></div>
    <div class="firstclasswhiteseat">2</div>
  </div>
  <div class="row">
    <div class="firstclasswhiteseat">3</div>
    <div class="firstclassseat"><Firstclassavailableseat /></div>
    <div class="firstclassseat"><Firstclassavailableseat /></div>
    <div class="firstclassseat"><Firstclassavailableseat /></div>
    <div class="firstclassseat"><Firstclassavailableseat /></div>
    <div class="firstclasswhiteseat">3</div>
  </div>
  <div class="row">
    <div class="firstclasswhiteseat">4</div>
    <div class="firstclassseat"><Firstclassavailableseat /></div>
    <div class="firstclassseat"><Firstclassavailableseat /></div>
    <div class="firstclassseat"><Firstclassavailableseat /></div>
    <div class="firstclassseat"><Firstclassavailableseat /></div>
    <div class="firstclasswhiteseat">4</div>
  </div>
  <div class="row">
    <div class="seatcategory"><h4><hr/>Economy<hr/></h4></div>
  </div>
  <div class="row">
    <div class="label"></div>
    <div class="label">A</div>
    <div class="label">B</div>
    <div class="label">C</div>
    <div class="label">D</div>
    <div class="label">E</div>
    <div class="label">F</div>

    <div class="label"></div>
  </div>
  <div class="row">
    <div class="whiteseat">1</div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>


    <div class="whiteseat">1</div>
  </div>
  <div class="row">
    <div class="whiteseat">2</div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>

    <div class="whiteseat">2</div>
  </div>
  <div class="row">
    <div class="whiteseat">3</div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
   
    <div class="whiteseat">3</div>
  </div>
  <div class="row">
    <div class="whiteseat">4</div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
   
    <div class="whiteseat">4</div>
  </div>
  <div class="row">
    <div class="whiteseat">5</div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>

    <div class="whiteseat">5</div>
  </div>
  <div class="row">
    <div class="whiteseat">6</div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>
    <div class="seat"><Economyavailableseat /></div>

    <div class="whiteseat">6</div>
  </div>
  </div>
</div>
)
}

export default Seatcontrol
