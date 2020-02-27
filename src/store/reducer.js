const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const seatSelect = document.getElementById('seat');

// Save selected flight index and price
function setFlightData(flightsIndex, flightsPrice) {
  localStorage.setItem('selectedFlightIndex', flightsIndex);
  localStorage.setItem('selectedFlightPrice', flightsPrice);
}

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
}

function seatClick() {
  container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedFlightIndex = localStorage.getItem('selectedFlightIndex');

  if (selectedFlightIndex !== null) {
    seatSelect.selectedIndex = selectedFlightIndex;
  }
}


function reducer (state = [], action) {
  switch (action.type) {
    case 'SEAT_CLICK':
      return {
        ...state,
        results: updateSelectedCount()}
    default:
    return state;
  };
};

export default reducer;
