import { getInitialData } from '../utils/api';
import { receiveUsers } from '../actions/users';
import { receiveQuestions } from '../actions/questions';
import { setAuthedUser } from '../actions/authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

// !!! TODO !!! no login/authentication system yet, so set a default authedUser 
// todo - set user id based on user selection
const AUTHED_ID = 'rubeun'

// ### ACTION CREATORS ###

// @ REDUX THUNK needed to allow returning of a function (middleware) @
// make API call to get initial data using promise to async dispatch users and questions when data is received
export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading());
    // API call from api.js. When promise resolved, get users & questions & set authedUser
    return getInitialData()
      .then(({users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(setAuthedUser(AUTHED_ID));
        dispatch(hideLoading());
      })
  }
}