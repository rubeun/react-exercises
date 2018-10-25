import { RECEIVE_TWEETS, TOGGLE_TWEET } from '../actions/tweets';

// ### TWEETS REDUCERS ###
// perform action on state and return a new updated state or orginal state if no action
export default function tweets(state = {}, action) {
  switch(action.type) {
    case RECEIVE_TWEETS :
      return {
        ...state, // include original state
        ...action.tweets // add tweets to state
      }
    case TOGGLE_TWEET :
      return {
        ...state,
        [action.id]: { // for current tweet id
          ...state[action.id], // include the original state of that tweet
          likes: action.hasLiked === true // if tweet has been liked 
            ? state[action.id].likes.filter((uid) => uid !== action.authedUser) // remove user from likes array 
            : state[action.id].likes.concat([action.authedUser]) // add user to likes array
        }
      }
    default :
      return state;
  }
}