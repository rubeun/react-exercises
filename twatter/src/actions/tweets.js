import { saveLikeToggle, saveTweet } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_TWEET = 'TOGGLE_TWEET';
export const ADD_TWEET = 'ADD_TWEET';

// ### ACTION CREATORS ###
//

function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet
  }
}

// Async API call to saveTweet using thunk middleware
export function handleAddTweet(text, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveTweet({
      text,
      author: authedUser,
      replyingTo
    })
      .then((tweet) => dispatch(addTweet(tweet)))
      .then(() => dispatch(hideLoading()))
  }
}

// Async API call to receiveTweets
export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  }
}

function  toggleTweet({id, authedUser, hasLiked}) {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked
  }
}

// Need an async API call to saveLikeToggle, so use thunk middleware (returns function)
export function handleToggleTweet(info) {
  return (dispatch) => {
    // toggle on click in UI. If saveLikeToggle fails, retoggle back to initial
    dispatch(toggleTweet(info));

    return saveLikeToggle(info)
      .catch((e) => {
        // error...retoggle tweet back
        console.warn('Error in handleToggleTweet: ', e);
        dispatch(toggleTweet(info));
        alert('There was an error liking the tweet. Try again'); 
      })
  }
}