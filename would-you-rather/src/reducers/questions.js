import { RECEIVE_QUESTIONS } from '../actions/questions';

// ### TWEETS REDUCERS ###
// perform action on state and return a new updated state or orginal state if no action
export default function tweets(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state, // include original state
        ...action.questions // add tweets to state
      }
    default :
      return state;
  }
}