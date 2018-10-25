import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from '../actions/tweets';

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
    case ADD_TWEET :
      const { tweet } = action;

      // if tweet is replying to another tweet, add the new tweet id to other tweet's replies array
      let replyingTo = {};
      if (tweet.replyingTo !== null) {
        replyingTo = {
          [tweet.replyingTo]: {
            ...state[tweet.replyingTo],
            replies: state[tweet.replyingTo].replies.concat([tweet.id])
          }
        }
      }

      return {
        ...state,
        [action.tweet.id]: action.tweet, // adding new tweet to state
        ...replyingTo  // if tweet is replying to another tweet, update other tweet's replies array
      }
    default :
      return state;
  }
}