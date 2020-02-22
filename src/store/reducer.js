const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

function updateCount(state, action) {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
}

function reducer(seatselectorState = [], action) {
  switch (action.type) {
    case 'UPDATECOUNT':
      return updateCount(seatselectorState, action)
    default:
    return seatselectorState;
  }
};

export default reducer;
