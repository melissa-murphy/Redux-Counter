import { INCREMENT, DECREMENT } from '../actions';


// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?

// instead of a sep const for default state
// added to reducer to export as a whole.
// But is this something that won't work so well in larger scale prods?

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      // Fill in the body of this case
      return state + 1;
    case DECREMENT:
      // Fill in the body of this case
      return state - 1;
    default:
      return state;
  }
};
