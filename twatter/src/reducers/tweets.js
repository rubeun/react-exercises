import { RECEIVE_TWEETS } from '../actions/tweets';

// ### TWEETS REDUCERS ###
// perform action on state and return a new updated state or orginal state if no action
export default function tweets(state = {}, action) {
  switch(action.type) {
    case RECEIVE_TWEETS :
      return {
        ...state,
        ...action.tweets
      }
    default :
      return state;
  }
}