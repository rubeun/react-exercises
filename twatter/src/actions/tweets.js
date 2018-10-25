import { saveLikeToggle } from '../utils/api';

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_TWEET = 'TOGGLE_TWEET';
// ### ACTION CREATORS ###
//
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

// Need an async API call, so use thunk (returns function)
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