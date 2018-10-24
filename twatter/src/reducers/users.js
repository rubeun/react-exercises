import { RECEIVE_USERS } from '../actions/users';

// ### USERS REDUCERS ###
// perform action on state and return a new updated state or orginal state if no action
export default function users(state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    default :
      return state;
  }
}